import React, { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import type { InterviewedStudent, Question } from '../types';
import { careerNames, metrics, questionsFor, answerDistribution } from '../data/research';
import { EnglishChart, ResearchMetrics } from './ResearchCharts';

interface AnalyticsViewProps {
  students: InterviewedStudent[];
  questions: Question[];
  onSelectCareer?: (career: string) => void;
  onSelectStudent?: (id: string) => void;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({ students, questions, onSelectCareer, onSelectStudent }) => {
  const [selectedCareer, setSelectedCareer] = useState('all');
  const [participantType, setParticipantType] = useState('all');
  const [answerSource, setAnswerSource] = useState('all');
  const careers = careerNames(students);
  const filtered = students.filter(s => (selectedCareer === 'all' || s.career === selectedCareer) && (participantType === 'all' || (participantType === 'faculty' ? s.isTeacher : !s.isTeacher)));
  const chartCareers = selectedCareer === 'all' ? careers : [selectedCareer];
  return <div className="space-y-6 pb-12">
    <section className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
      <h2 className="text-2xl font-bold flex items-center gap-2"><BarChart3 className="text-amber-600" /> Infographics & Charts</h2>
      <p className="text-sm text-slate-600">Live calculations from the same participant records used by Summary, career tabs and profiles. Question numbers are interpreted within their own degree program.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="text-xs font-semibold">Degree program<select value={selectedCareer} onChange={e => setSelectedCareer(e.target.value)} className="block w-full mt-1 p-2 border border-slate-300 rounded-lg"><option value="all">All degree programs</option>{careers.map(c => <option key={c} value={c}>{c.split(' (')[0]}</option>)}</select></label>
        <label className="text-xs font-semibold">Participant type<select value={participantType} onChange={e => setParticipantType(e.target.value)} className="block w-full mt-1 p-2 border border-slate-300 rounded-lg"><option value="all">Students and faculty</option><option value="students">Students only</option><option value="faculty">Faculty only</option></select></label>
      </div>
    </section>
    <ResearchMetrics students={filtered} questions={questions} />
    <EnglishChart students={filtered} />
    <section className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
      <h3 className="text-lg font-bold">Participants by Degree Program</h3>
      {chartCareers.map(career => {
        const cohort = filtered.filter(s => s.career === career);
        const data = metrics(cohort, questions);
        const pct = filtered.length ? cohort.length / filtered.length * 100 : 0;
        return <div key={career}>
          <div className="flex justify-between gap-3 text-xs mb-1"><button onClick={() => onSelectCareer?.(career)} className="font-semibold text-left hover:underline">{career.split(' (')[0]}</button><span>{cohort.length} · {pct.toFixed(1)}%</span></div>
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden"><div className="bg-amber-500 h-full rounded-full" style={{ width: `${pct}%` }} /></div>
          <p className="text-[11px] text-slate-500 mt-1">{data.students} students · {data.teachers} faculty · {data.answers}/{data.expected} responses · {data.simulatedAnswers} simulated</p>
        </div>;
      })}
    </section>
    <section className="space-y-4">
      <div className="bg-slate-900 text-white p-5 rounded-xl space-y-3">
        <h3 className="text-lg font-bold">Response Distributions by Program & Question</h3>
        <p className="text-xs text-slate-300">Identical response text is grouped together. Each bar uses the number of non-empty responses shown for that question as its denominator. Simulated answers are labeled and can be excluded.</p>
        <label className="text-xs font-semibold">Response source<select value={answerSource} onChange={e => setAnswerSource(e.target.value)} className="block mt-1 p-2 bg-white text-slate-900 rounded-lg"><option value="all">All responses (recorded + simulated)</option><option value="recorded">Recorded responses only</option><option value="simulated">Simulated responses only</option></select></label>
      </div>
      {chartCareers.map(career => {
        const cohort = filtered.filter(s => s.career === career);
        return <details key={career} open={selectedCareer !== 'all' ? true : undefined} className="bg-white rounded-xl border border-slate-200 p-5">
          <summary className="cursor-pointer font-bold">{career.split(' (')[0]} · {cohort.length} participants</summary>
          {!cohort.length ? <p className="text-sm text-slate-500 mt-4">No participants match this selection.</p> : <div className="grid lg:grid-cols-2 gap-4 mt-5">{questionsFor(career, questions).map(q => {
            const eligible = cohort.filter(s => answerSource === 'all' || (answerSource === 'simulated' ? s.simulatedAnswerIds?.includes(q.id) : !s.simulatedAnswerIds?.includes(q.id)));
            const groups = answerDistribution(eligible, q.id);
            const answered = groups.reduce((sum, g) => sum + g.students.length, 0);
            const missing = cohort.filter(s => !s.answers[q.id]?.trim()).length;
            return <article key={q.id} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
              <p className="text-xs text-amber-800 font-semibold">{q.code} · {q.category}</p><h4 className="font-semibold text-sm">{q.title}</h4>
              <p className="text-xs text-slate-500">{answered} responses shown · {missing} missing in this cohort</p>
              {!groups.length && <p className="text-sm text-slate-500">No responses for this source selection.</p>}
              {groups.map(group => {
                const pct = answered ? group.students.length / answered * 100 : 0;
                return <div key={group.answer} className="space-y-1 border-t border-slate-200 pt-3">
                  <p className="text-xs text-slate-700">{group.answer}</p>
                  <div className="flex justify-between text-[11px] text-slate-500"><span>{group.simulated} simulated</span><span>{group.students.length} · {pct.toFixed(1)}%</span></div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden"><div className={`h-full rounded-full ${group.simulated ? 'bg-violet-500' : 'bg-emerald-500'}`} style={{ width: `${pct}%` }} /></div>
                  <div className="flex flex-wrap gap-2">{group.students.map(s => <button key={s.id} onClick={() => onSelectStudent?.(s.id)} className="text-[10px] text-amber-800 hover:underline text-left">{s.name} · ID: {s.studentCode}</button>)}</div>
                </div>;
              })}
            </article>;
          })}</div>}
        </details>;
      })}
    </section>
  </div>;
};
