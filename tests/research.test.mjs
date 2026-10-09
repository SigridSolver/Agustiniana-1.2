import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { initialStudents, initialQuestions, initialInterviewers, careerProgramsRegistry } from '../src/data/initialData.ts';
import { additionalStudents } from '../src/data/additionalPrograms.ts';
import { metrics, englishLevels, answerDistribution, migrateStudents, normalizeParticipants, normalizeTeam, questionsFor, careerNames, readSaved } from '../src/data/research.ts';

test('totals reconcile across every program and distinguish faculty and example answers', () => {
  const total = metrics(initialStudents, initialQuestions);
  assert.deepEqual(total, { participants: 85, students: 84, teachers: 1, careers: 10, answers: 826, expected: 826, exampleAnswers: 286, recordedAnswers: 540, missing: 0, completion: 100 });
  const cohorts = careerNames(initialStudents).map(c => metrics(initialStudents.filter(s => s.career === c), initialQuestions));
  for (const key of ['participants', 'students', 'teachers', 'answers', 'expected', 'exampleAnswers', 'recordedAnswers', 'missing']) {
    assert.equal(cohorts.reduce((sum, data) => sum + data[key], 0), total[key], key);
  }
  assert.equal(englishLevels(initialStudents).reduce((sum, level) => sum + level.count, 0), 85);
  assert.equal(englishLevels(initialStudents).reduce((sum, level) => sum + level.example, 0), 26);
});

test('all imported names, IDs, questions and original summaries match the supplied documents', () => {
  for (const [prefix, filename, count] of [['marketing', 'Mercadeo.txt', 8], ['communication', 'Comunicacion social.txt', 11], ['languages', 'Licenciatura en lenguas extranjeras.md', 7]]) {
    const source = readFileSync(new URL(`../${filename}`, import.meta.url), 'utf8');
    const cohort = additionalStudents.filter(s => s.id.startsWith(prefix));
    assert.equal(cohort.length, count);
    for (const student of cohort) {
      assert.ok(source.includes(student.name)); assert.ok(source.includes(student.studentCode));
      assert.equal(student.exampleAnswerIds.length, 11);
      assert.equal(student.englishLevelSource, 'example');
      assert.equal(Object.keys(student.answers).length, 11);
      assert.ok(Object.values(student.answers).every(a => a.trim().length > 20));
    }
    const program = careerProgramsRegistry[cohort[0].career];
    for (const question of program.questions) {
      assert.ok(source.includes(question.title));
      assert.ok(source.includes(program.sharedAnswers[question.id]));
    }
  }
  assert.equal(new Set(additionalStudents.map(s => s.studentCode)).size, 26);
  assert.equal(careerProgramsRegistry['Marketing (Mercadeo)'].video.isPlaceholder, true);
});

test('question IDs stay within their own program and include the eleventh response', () => {
  const student = additionalStudents[0];
  assert.equal(questionsFor(student.career, initialQuestions).length, 11);
  assert.notEqual(questionsFor(student.career, initialQuestions)[5].title, initialQuestions[5].title);
  const groups = answerDistribution(additionalStudents.filter(s => s.career === student.career), 11);
  assert.equal(groups.reduce((sum, group) => sum + group.students.length, 0), 8);
  assert.equal(groups.reduce((sum, group) => sum + group.example, 0), 8);
});

test('editing and missing answers update counts and denominators immediately', () => {
  const student = structuredClone(additionalStudents[0]);
  student.answers[1] = ''; student.answers[2] = '  ';
  student.answers[999] = 'An unrelated answer must not inflate completion.';
  assert.equal(metrics([student], initialQuestions).answers, 9);
  assert.equal(metrics([student], initialQuestions).missing, 2);
  assert.equal(answerDistribution([student], 1).length, 0);
  assert.equal(metrics([], initialQuestions).completion, 0);
  assert.ok(englishLevels([]).every(level => level.percent === 0));
});

test('migration preserves local answers and identity, fills missing fields, and is idempotent', () => {
  const previous = { ...additionalStudents[0], name: 'Locally edited name', answers: { 1: 'My own recorded answer.' }, exampleAnswerIds: [], perceivedEnglishLevel: 'Not assessed', englishLevelSource: undefined, highlightQuote: 'Individual response not provided.' };
  const first = migrateStudents([previous]);
  const updated = first.find(s => s.id === previous.id);
  assert.equal(updated.name, previous.name);
  assert.equal(updated.answers[1], previous.answers[1]);
  assert.ok(!updated.exampleAnswerIds.includes(1));
  assert.equal(updated.exampleAnswerIds.length, 10);
  assert.equal(updated.englishLevelSource, 'example');
  assert.deepEqual(migrateStudents(first), first);
  assert.equal(first.length, 26);
});

test('research team removes the requested members, includes all new authors, and uses first semester', () => {
  const team = normalizeTeam([...initialInterviewers, { id: 'int-3', name: 'Paula Natalia Torres', semester: '5th Semester' }]);
  assert.equal(team.length, 19);
  assert.ok(team.every(member => member.semester === '1st Semester'));
  for (const name of ['Paula Natalia Torres', 'Andrés Felipe Calderón', 'Laura Sofía Gómez']) assert.ok(!team.some(member => member.name === name));
  for (const name of ['Juan Manuel Rueda', 'Nancy Lourdes', 'Sarha Rojas', 'Nicol Medina', 'Gabriela Erazo']) assert.ok(team.some(member => member.name === name));
  assert.deepEqual(normalizeTeam(team), team);
});

test('invalid saved JSON falls back safely', () => {
  globalThis.localStorage = { getItem: () => '{broken' };
  assert.deepEqual(readSaved('test', []), []);
  delete globalThis.localStorage;
});

test('campus and semester updates apply to defaults and existing browser records', () => {
  assert.ok(initialStudents.every(s => s.campus === 'Tagaste Campus'));
  assert.ok(Object.values(careerProgramsRegistry).every(p => p.campus === 'Tagaste Campus'));
  assert.ok(normalizeTeam().every(member => member.campus === 'Tagaste Campus'));
  assert.ok(additionalStudents.every(s => /^(1st|2nd|3rd|4th|5th) Semester$/.test(s.semester)));
  const old = { ...additionalStudents[0], campus: 'Not provided', semester: 'Not provided', exampleAnswerIds: undefined, simulatedAnswerIds: [1, 2], englishLevelSource: 'simulated' };
  const [updated] = normalizeParticipants([old]);
  assert.equal(updated.campus, 'Tagaste Campus');
  assert.equal(updated.semester, '1st Semester');
  assert.deepEqual(updated.exampleAnswerIds, [1, 2]);
  assert.equal(updated.englishLevelSource, 'example');
  assert.ok(!('simulatedAnswerIds' in updated));
  assert.deepEqual(normalizeParticipants([updated]), [updated]);
  assert.ok(!careerNames([...initialStudents, { ...old, career: 'Business Administration (Administración de Empresas)' }]).some(c => c.startsWith('Business Administration')));
  assert.equal(careerNames(initialStudents).length, 10);
});
