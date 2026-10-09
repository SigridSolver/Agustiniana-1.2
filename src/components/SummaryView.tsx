import React from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import type { ProjectMetadata, Question, InterviewedStudent, Interviewer } from '../types';
import { careerNames, metrics, questionsFor } from '../data/research';
import { ResearchMetrics, EnglishChart } from './ResearchCharts';

interface SummaryViewProps {
  metadata: ProjectMetadata;
  questions: Question[];
  students: InterviewedStudent[];
  interviewers: Interviewer[];
  onSelectStudent: (id: string) => void;
  onSelectQuestion: (id: number, career?: string) => void;
  onSelectCareer: (career: string) => void;
  onGoToAnalytics?: () => void;
  onGoToCareers?: () => void;
}

export const SummaryView: React.FC<SummaryViewProps> = ({ metadata, questions, students, interviewers, onSelectStudent, onSelectQuestion, onSelectCareer, onGoToAnalytics, onGoToCareers }) => {
  const careers = careerNames(students);
  const totals = metrics(students, questions);
  return <div className="space-y-6 pb-12">
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6 sm:p-8 border border-slate-700">
      <p className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2"><GraduationCap className="w-4 h-4" /> Summary & Insights</p>
      <h2 className="text-2xl sm:text-3xl font-bold mt-3">{metadata.title}</h2>
      <p className="text-sm text-slate-300 mt-3">{metadata.generalObjective}</p>
      <div className="flex flex-wrap gap-3 mt-5">
        <button onClick={onGoToAnalytics} className="bg-amber-400 text-slate-950 rounded-lg px-4 py-2 text-sm font-semibold">Explore Infographics & Charts</button>
        <button onClick={onGoToCareers} className="bg-slate-700 rounded-lg px-4 py-2 text-sm font-semibold">Browse Degree Programs</button>
      </div>
    </section>
    <ResearchMetrics students={students} questions={questions} />
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-950">
      Source names and IDs are preserved. All totals below use the current participant records and each program’s own questionnaire; faculty members are counted separately from students.
    </div>
    <EnglishChart students={students} />
    <section className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
      <h3 className="text-lg font-bold">Cross-Program Overview</h3>
      <p className="text-xs text-slate-500 mt-1">{careers.length} program tabs · {totals.careers} with participants. Select a program to inspect its source records.</p>
      <div className="overflow-x-auto mt-4"><table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-xs text-slate-500"><tr>{['Degree program', 'Students', 'Faculty', 'Questions', 'Responses', 'Missing'].map(label => <th key={label} className="p-3">{label}</th>)}</tr></thead>
        <tbody>{careers.map(career => {
          const cohort = students.filter(s => s.career === career);
          const data = metrics(cohort, questions);
          return <tr key={career} className="border-t border-slate-100">
            <td className="p-3"><button onClick={() => onSelectCareer(career)} className="font-semibold text-amber-800 hover:underline text-left">{career.split(' (')[0]}</button></td>
            <td className="p-3">{data.students}</td><td className="p-3">{data.teachers}</td><td className="p-3">{cohort.length ? questionsFor(career, questions).length : '—'}</td>
            <td className="p-3">{data.answers}</td><td className="p-3">{data.missing}</td>
          </tr>;
        })}</tbody>
        <tfoot className="bg-slate-50 font-bold"><tr><td className="p-3">Total</td><td className="p-3">{totals.students}</td><td className="p-3">{totals.teachers}</td><td className="p-3">Per program</td><td className="p-3">{totals.answers}</td><td className="p-3">{totals.missing}</td></tr></tfoot>
      </table></div>
    </section>
    <section className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
      <h3 className="text-lg font-bold">Research Team · {interviewers.length} Members</h3>
      <p className="text-sm text-slate-600">{interviewers.map(member => member.name).join(' · ')}</p>
      <p className="text-xs text-amber-800">Foreign Languages Degree · 1st Semester</p>
    </section>
    <section className="space-y-3">
      <h3 className="text-lg font-bold">Participants & Questionnaires</h3>
      {careers.filter(c => students.some(s => s.career === c)).map(career => <details key={career} className="bg-white rounded-xl border border-slate-200 p-5">
        <summary className="font-semibold cursor-pointer">{career.split(' (')[0]} · {students.filter(s => s.career === career).length} participants</summary>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">{students.filter(s => s.career === career).map(student => <button key={student.id} onClick={() => onSelectStudent(student.id)} className="text-left p-3 bg-slate-50 border border-slate-200 rounded-lg hover:border-amber-400">
          <span className="block text-sm font-bold">{student.name}</span><span className="block text-xs font-mono mt-1">ID: {student.studentCode}</span>
          <span className="block text-xs text-slate-600 mt-1">{student.perceivedEnglishLevel}</span>
        </button>)}</div>
        <div className="flex flex-wrap gap-2 mt-4">{questionsFor(career, questions).map(q => <button key={q.id} onClick={() => onSelectQuestion(q.id, career)} title={q.title} className="text-xs px-3 py-2 bg-slate-900 text-amber-400 rounded-lg flex items-center gap-1">{q.code}<ArrowRight className="w-3 h-3" /></button>)}</div>
      </details>)}
    </section>
  </div>;
};
