import type { InterviewedStudent, Interviewer, Question } from '../types/index.ts';
import { careerProgramsRegistry, universityCareersList, initialInterviewers } from './initialData.ts';
import { additionalStudents } from './additionalPrograms.ts';

export function questionsFor(career: string, fallback: Question[]) {
  // The shared editable questionnaire belongs to Film & Television.
  return career === universityCareersList[0] ? fallback : careerProgramsRegistry[career]?.questions || fallback;
}

export function careerNames(students: InterviewedStudent[]) {
  return [...new Set([...universityCareersList, ...students.map(s => s.career)])];
}

export function metrics(students: InterviewedStudent[], questions: Question[]) {
  let answers = 0, expected = 0, simulatedAnswers = 0;
  for (const student of students) {
    const applicable = questionsFor(student.career, questions);
    expected += applicable.length;
    for (const question of applicable) {
      if (student.answers[question.id]?.trim()) {
        answers++;
        if (student.simulatedAnswerIds?.includes(question.id)) simulatedAnswers++;
      }
    }
  }
  return {
    participants: students.length,
    students: students.filter(s => !s.isTeacher).length,
    teachers: students.filter(s => s.isTeacher).length,
    careers: new Set(students.map(s => s.career)).size,
    answers, expected, simulatedAnswers,
    recordedAnswers: answers - simulatedAnswers,
    missing: expected - answers,
    completion: expected ? Math.round(answers / expected * 100) : 0,
  };
}

export function englishLevels(students: InterviewedStudent[]) {
  return ['A1', 'A2', 'B1', 'B2', 'Not assessed'].map(label => {
    const group = students.filter(s => (s.perceivedEnglishLevel.split(' - ')[0] || 'Not assessed') === label);
    return { label, count: group.length, simulated: group.filter(s => s.englishLevelSource === 'simulated').length,
      percent: students.length ? group.length / students.length * 100 : 0 };
  });
}

export function answerDistribution(students: InterviewedStudent[], questionId: number) {
  const groups = new Map<string, { answer: string; students: InterviewedStudent[]; simulated: number }>();
  for (const student of students) {
    const answer = student.answers[questionId]?.trim();
    if (!answer) continue;
    const key = answer.toLocaleLowerCase().replace(/\s+/g, ' ');
    const group: { answer: string; students: InterviewedStudent[]; simulated: number } = groups.get(key) || { answer, students: [], simulated: 0 };
    group.students.push(student);
    if (student.simulatedAnswerIds?.includes(questionId)) group.simulated++;
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
    program: 'Foreign Languages Degree', semester: '1st Semester', campus: 'Not provided',
    email: '', reflection: 'Individual reflection not provided.',
  })));

export function normalizeTeam(saved: Interviewer[] = initialInterviewers) {
  const kept = saved.filter(member => !excludedTeamIds.has(member.id) && !excludedTeamNames.has(member.name));
  return [...kept, ...newResearchers.filter(member => !kept.some(existing => existing.id === member.id || existing.name === member.name))]
    .map(member => ({ ...member, semester: '1st Semester' }));
}

// Fill only the missing fields from the previous import; keep local edits.
export function migrateStudents(saved: InterviewedStudent[]) {
  const result = saved.map(student => {
    const template = additionalStudents.find(item => item.id === student.id || item.studentCode === student.studentCode);
    if (!template) return student;
    const answers = { ...student.answers };
    const simulated = new Set(student.simulatedAnswerIds || []);
    for (const [key, answer] of Object.entries(template.answers)) {
      const id = Number(key);
      if (!answers[id]?.trim()) { answers[id] = answer; simulated.add(id); }
    }
    const missingLevel = !student.perceivedEnglishLevel || student.perceivedEnglishLevel === 'Not assessed';
    return { ...student, answers, simulatedAnswerIds: [...simulated],
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
