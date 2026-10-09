import type { InterviewedStudent, Interviewer, Question } from '../types/index.ts';
import { careerProgramsRegistry, universityCareersList, initialInterviewers } from './initialData.ts';
import { additionalStudents } from './additionalPrograms.ts';

export function questionsFor(career: string, fallback: Question[]) {
  // The shared editable questionnaire belongs to Film & Television.
  return career === universityCareersList[0] ? fallback : careerProgramsRegistry[career]?.questions || fallback;
}

export function surveyBreakdownFor(career: string) {
  return careerProgramsRegistry[career]?.surveyBreakdown || [];
}

export function careerNames(students: InterviewedStudent[]) {
  return [...new Set([...universityCareersList, ...students.map(s => s.career)])].filter(career => !career.startsWith('Business Administration ('));
}

export function metrics(students: InterviewedStudent[], questions: Question[]) {
  let answers = 0, expected = 0, exampleAnswers = 0;
  for (const student of students) {
    const applicable = questionsFor(student.career, questions);
    expected += applicable.length;
    for (const question of applicable) {
      if (student.answers[question.id]?.trim()) {
        answers++;
        if (student.exampleAnswerIds?.includes(question.id)) exampleAnswers++;
      }
    }
  }
  return {
    participants: students.length,
    students: students.filter(s => !s.isTeacher).length,
    teachers: students.filter(s => s.isTeacher).length,
    careers: new Set(students.map(s => s.career)).size,
    answers, expected, exampleAnswers,
    recordedAnswers: answers - exampleAnswers,
    missing: expected - answers,
    completion: expected ? Math.round(answers / expected * 100) : 0,
  };
}

export function englishLevels(students: InterviewedStudent[]) {
  return ['A1', 'A2', 'B1', 'B2', 'Not assessed'].map(label => {
    const group = students.filter(s => (s.perceivedEnglishLevel.split(' - ')[0] || 'Not assessed') === label);
    return { label, count: group.length, example: group.filter(s => s.englishLevelSource === 'example').length,
      percent: students.length ? group.length / students.length * 100 : 0 };
  });
}

export function answerDistribution(students: InterviewedStudent[], questionId: number) {
  const groups = new Map<string, { answer: string; students: InterviewedStudent[]; example: number }>();
  for (const student of students) {
    const answer = student.answers[questionId]?.trim();
    if (!answer) continue;
    const key = answer.toLocaleLowerCase().replace(/\s+/g, ' ');
    const group: { answer: string; students: InterviewedStudent[]; example: number } = groups.get(key) || { answer, students: [], example: 0 };
    group.students.push(student);
    if (student.exampleAnswerIds?.includes(questionId)) group.example++;
    groups.set(key, group);
  }
  return [...groups.values()].sort((a, b) => b.students.length - a.students.length);
}

const excludedTeamIds = new Set(['int-3', 'int-4', 'int-5']);
const excludedTeamNames = new Set(['Paula Natalia Torres', 'Andrés Felipe Calderón', 'Laura Sofía Gómez']);
const newResearchers: Interviewer[] = Object.entries(careerProgramsRegistry)
  .filter(([, program]) => program.sourceNote && program.researchTeam)
  .flatMap(([career, program]) => program.researchTeam!.split(',').map((name, index) => ({
    id: `research-${career.split(' ')[0].toLowerCase()}-${index + 1}`,
    name: name.trim(), role: `${program.shortName} Fieldwork Researcher`,
    program: 'Foreign Languages Degree', semester: '1st Semester', campus: 'Tagaste Campus',
    email: '', reflection: 'Individual reflection not provided.',
  })));

export function normalizeTeam(saved: Interviewer[] = initialInterviewers) {
  const kept = saved.filter(member => !excludedTeamIds.has(member.id) && !excludedTeamNames.has(member.name));
  return [...kept, ...newResearchers.filter(member => !kept.some(existing => existing.id === member.id || existing.name === member.name))]
    .map(member => ({ ...member, semester: '1st Semester', campus: 'Tagaste Campus' }));
}

export function normalizeParticipants(saved: InterviewedStudent[]): InterviewedStudent[] {
  return saved.map(student => {
    const legacy = student as InterviewedStudent & { simulatedAnswerIds?: number[] };
    const { simulatedAnswerIds: legacyAnswerIds, ...current } = legacy;
    const template = additionalStudents.find(s => s.id === student.id || s.studentCode === student.studentCode);
    const validSemester = /^(1st|2nd|3rd|4th|5th) Semester$/.test(student.semester);
    return { ...current, campus: 'Tagaste Campus',
      semester: template && !validSemester ? template.semester : student.semester,
      exampleAnswerIds: student.exampleAnswerIds || legacyAnswerIds,
      englishLevelSource: String(student.englishLevelSource) === 'simulated' ? 'example' : student.englishLevelSource,
    };
  });
}

// Fill only the missing fields from the previous import; keep local edits.
export function migrateStudents(saved: InterviewedStudent[]) {
  const result = normalizeParticipants(saved).map(student => {
    const template = additionalStudents.find(item => item.id === student.id || item.studentCode === student.studentCode);
    if (!template) return student;
    const answers = { ...student.answers };
    const example = new Set(student.exampleAnswerIds || []);
    for (const [key, answer] of Object.entries(template.answers)) {
      const id = Number(key);
      if (!answers[id]?.trim()) { answers[id] = answer; example.add(id); }
    }
    const missingLevel = !student.perceivedEnglishLevel || student.perceivedEnglishLevel === 'Not assessed';
    return { ...student, answers, exampleAnswerIds: [...example],
      highlightQuote: student.highlightQuote === 'Individual response not provided.' ? template.highlightQuote : student.highlightQuote,
      perceivedEnglishLevel: missingLevel ? template.perceivedEnglishLevel : student.perceivedEnglishLevel,
      englishLevelSource: missingLevel ? template.englishLevelSource : student.englishLevelSource,
    };
  });
  return [...result, ...additionalStudents.filter(item => !result.some(s => s.id === item.id || s.studentCode === item.studentCode))];
}

export function readSaved<T>(key: string, fallback: T): T {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
  catch { return fallback; }
}
