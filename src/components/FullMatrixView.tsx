import React, { useState } from 'react';
import { Table2, FileSpreadsheet } from 'lucide-react';
import type { Question, InterviewedStudent } from '../types';
import { careerNames, questionsFor } from '../data/research';

interface FullMatrixViewProps {
  questions: Question[];
  students: InterviewedStudent[];
  onSelectStudent: (id: string) => void;
  onSelectQuestion: (id: number, career?: string) => void;
}

export const FullMatrixView: React.FC<FullMatrixViewProps> = ({ questions, students, onSelectStudent, onSelectQuestion }) => {
  const [career, setCareer] = useState('all');
  const [search, setSearch] = useState('');
  const rows = students.filter(s => career === 'all' || s.career === career).flatMap(student => questionsFor(student.career, questions).map(question => ({
    student, question, answer: student.answers[question.id] || '',
    source: student.answers[question.id]?.trim() ? student.simulatedAnswerIds?.includes(question.id) ? 'Simulated' : 'Recorded' : 'Missing',
  }))).filter(row => [row.student.name, row.student.studentCode, row.student.career, row.question.title, row.answer].join(' ').toLowerCase().includes(search.toLowerCase()));
  const exportCSV = () => {
    const escape = (value: string) => `"${value.replace(/"/g, '""')}"`;
    const lines = [['Student ID', 'Name', 'Program', 'Question code', 'Question', 'Answer', 'Answer source', 'English level', 'English level source'], ...rows.map(({ student, question, answer, source }) => [student.studentCode, student.name, student.career, question.code, question.title, answer, source, student.perceivedEnglishLevel, student.englishLevelSource || (student.perceivedEnglishLevel === 'Not assessed' ? 'Not assessed' : 'Recorded')])];
    const url = URL.createObjectURL(new Blob(['\uFEFF' + lines.map(row => row.map(escape).join(',')).join('\r\n')], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = 'UniAgustiniana_Fieldwork_Matrix.csv'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return <div className="space-y-5 pb-12">
    <section className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
      <h2 className="font-bold text-xl flex items-center gap-2"><Table2 className="text-amber-600" /> Cross-Data Matrix</h2>
      <p className="text-xs text-slate-500">{rows.filter(r => r.answer.trim()).length} responses present · {rows.length} participant-question rows. Questions are matched to each participant’s degree program.</p>
      <div className="flex flex-wrap gap-3">
        <select aria-label="Degree program" value={career} onChange={e => setCareer(e.target.value)} className="border border-slate-300 rounded-lg p-2 text-sm max-w-full"><option value="all">All degree programs</option>{careerNames(students).map(c => <option key={c} value={c}>{c.split(' (')[0]}</option>)}</select>
        <input aria-label="Search matrix" placeholder="Search name, ID, question or answer" value={search} onChange={e => setSearch(e.target.value)} className="border border-slate-300 rounded-lg p-2 text-sm flex-1 min-w-48" />
        <button onClick={exportCSV} className="bg-slate-900 text-white rounded-lg px-3 py-2 text-sm flex items-center gap-2"><FileSpreadsheet className="w-4 h-4" /> Export CSV</button>
      </div>
    </section>
    <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto max-h-[70vh]">
      <table className="w-full text-xs text-left"><thead className="bg-slate-100 sticky top-0"><tr>{['Participant / ID', 'Program', 'Question', 'Response', 'Source / English level'].map(label => <th key={label} className="p-3">{label}</th>)}</tr></thead>
        <tbody>{rows.map(({ student, question, answer, source }) => <tr key={`${student.id}-${question.id}`} className="border-t border-slate-100 align-top">
          <td className="p-3 min-w-40"><button onClick={() => onSelectStudent(student.id)} className="font-semibold text-amber-800 text-left hover:underline">{student.name}</button><span className="block font-mono mt-1">{student.studentCode}</span></td>
          <td className="p-3">{student.career.split(' (')[0]}</td>
          <td className="p-3 min-w-48"><button onClick={() => onSelectQuestion(question.id, student.career)} className="text-left hover:underline"><strong>{question.code}</strong> · {question.title}</button></td>
          <td className="p-3 min-w-64">{answer || 'Answer not recorded.'}</td>
          <td className="p-3 min-w-36"><span className={source === 'Simulated' ? 'text-violet-700 font-semibold' : 'text-slate-600'}>{source}</span><span className="block mt-1">{student.perceivedEnglishLevel}{student.englishLevelSource === 'simulated' ? ' (Simulated)' : ''}</span></td>
        </tr>)}</tbody>
      </table>
      {!rows.length && <p className="p-6 text-sm text-slate-500">No matching records.</p>}
    </div>
  </div>;
};
