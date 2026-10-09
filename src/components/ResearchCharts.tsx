import React from 'react';
import type { InterviewedStudent, Question } from '../types';
import { englishLevels, metrics } from '../data/research';

export function ResearchMetrics({ students, questions }: { students: InterviewedStudent[]; questions: Question[] }) {
  const data = metrics(students, questions);
  const cards = [
    ['Participants', data.participants, `${data.students} students · ${data.teachers} faculty members`],
    ['Programs with participants', data.careers, 'Calculated from current participant records'],
    ['Responses present', data.answers, `${data.recordedAnswers} recorded · ${data.simulatedAnswers} simulated`],
    ['Questionnaire completion', `${data.completion}%`, `${data.missing} missing of ${data.expected} applicable responses`],
  ];
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{cards.map(([label, value, note]) => (
    <div key={label} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="text-3xl font-bold text-slate-900 my-2">{value}</p>
      <p className="text-xs text-slate-500">{note}</p>
    </div>
  ))}</div>;
}

export function EnglishChart({ students }: { students: InterviewedStudent[] }) {
  const levels = englishLevels(students);
  const colors = ['#f59e0b', '#38bdf8', '#6366f1', '#10b981', '#94a3b8'];
  let offset = 0;
  return <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
    <h3 className="font-bold text-lg">English Proficiency (CEFR)</h3>
    <p className="text-xs text-slate-500 mt-1">Distribution among {students.length} selected participants. Simulated levels are illustrative, not assessments.</p>
    <div className="flex flex-col sm:flex-row items-center gap-6 mt-5">
      <svg viewBox="0 0 120 120" className="w-44 h-44 shrink-0" role="img" aria-label={`English levels: ${levels.map(l => `${l.label}: ${l.count}`).join(', ')}`}>
        <circle cx="60" cy="60" r="45" fill="none" stroke="#e2e8f0" strokeWidth="15" />
        {levels.map((level, i) => {
          const start = offset; offset += level.percent;
          return <circle key={level.label} cx="60" cy="60" r="45" pathLength="100" fill="none" stroke={colors[i]} strokeWidth="15" strokeDasharray={`${level.percent} ${100 - level.percent}`} strokeDashoffset={-start} transform="rotate(-90 60 60)" />;
        })}
        <text x="60" y="60" textAnchor="middle" className="fill-slate-900 text-lg font-bold">{students.length}</text>
        <text x="60" y="73" textAnchor="middle" className="fill-slate-500 text-[7px]">participants</text>
      </svg>
      <div className="w-full space-y-3">{levels.map((level, i) => <div key={level.label}>
        <div className="flex justify-between gap-3 text-xs mb-1"><span className="font-semibold">{level.label}</span><span>{level.count} · {level.percent.toFixed(1)}% · {level.simulated} simulated</span></div>
        <div className="h-2 rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full" style={{ width: `${level.percent}%`, backgroundColor: colors[i] }} /></div>
      </div>)}</div>
    </div>
  </section>;
}
