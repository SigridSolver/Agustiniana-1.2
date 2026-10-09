import React, { useMemo, useState } from 'react';
import { BarChart3, ChevronDown, Filter, MessageSquareText, Sparkles, Users } from 'lucide-react';
import type { InterviewedStudent, Question } from '../types';
import { careerNames, metrics, questionsFor, answerDistribution, surveyBreakdownFor } from '../data/research';
import { EnglishChart, ResearchMetrics } from './ResearchCharts';

interface AnalyticsViewProps {
  students: InterviewedStudent[];
  questions: Question[];
  onSelectCareer?: (career: string) => void;
  onSelectStudent?: (id: string) => void;
}

const shortCareer = (career: string) => career.split(' (')[0];

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({ students, questions, onSelectCareer, onSelectStudent }) => {
  const [selectedCareer, setSelectedCareer] = useState('all');
  const [participantType, setParticipantType] = useState('all');
  const [selectedQuestion, setSelectedQuestion] = useState('all');
  const [chartModes, setChartModes] = useState<Record<string, 'source' | 'live'>>({});
  const careers = careerNames(students);
  const filtered = students.filter(s => (selectedCareer === 'all' || s.career === selectedCareer) && (participantType === 'all' || (participantType === 'faculty' ? s.isTeacher : !s.isTeacher)));
  const questionOptions = useMemo(() => careers.flatMap(career => questionsFor(career, questions).map(q => ({ key: `${career}::${q.id}`, career, question: q }))), [careers, questions]);
  const shownQuestions = questionOptions.filter(item => (selectedCareer === 'all' || item.career === selectedCareer) && (selectedQuestion === 'all' || item.key === selectedQuestion));
  const chartCareers = selectedCareer === 'all' ? careers : [selectedCareer];
  const totals = metrics(filtered, questions);

  return <div className="space-y-7 pb-12">
    <section className="relative overflow-hidden rounded-2xl bg-slate-950 text-white p-6 sm:p-8">
      <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full bg-amber-400/10 blur-2xl" />
      <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-amber-400 flex items-center gap-2"><BarChart3 size={16}/> Research dashboard</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">Infographics &amp; Charts</h2>
          <p className="text-sm text-slate-300 mt-3">Explore participant profiles, response coverage and every program-specific question. Use the filters and participant links to inspect the people behind each result.</p></div>
        <div className="grid grid-cols-2 gap-3 min-w-56">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4"><Users size={17} className="text-amber-400"/><p className="text-2xl font-bold mt-2">{totals.participants}</p><p className="text-xs text-slate-400">participants</p></div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4"><MessageSquareText size={17} className="text-emerald-400"/><p className="text-2xl font-bold mt-2">{shownQuestions.length}</p><p className="text-xs text-slate-400">questions in view</p></div>
        </div>
      </div>
    </section>

    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4"><Filter size={16} className="text-amber-600"/><h3 className="font-bold">Explore the data</h3></div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <label className="text-xs font-semibold text-slate-600">Degree program<select value={selectedCareer} onChange={e => { setSelectedCareer(e.target.value); setSelectedQuestion('all'); }} className="block w-full mt-1.5 p-2.5 border border-slate-300 rounded-lg bg-white text-sm text-slate-900"><option value="all">All degree programs</option>{careers.map(c => <option key={c} value={c}>{shortCareer(c)}</option>)}</select></label>
        <label className="text-xs font-semibold text-slate-600">Participant group<select value={participantType} onChange={e => setParticipantType(e.target.value)} className="block w-full mt-1.5 p-2.5 border border-slate-300 rounded-lg bg-white text-sm text-slate-900"><option value="all">Students and faculty</option><option value="students">Students only</option><option value="faculty">Faculty only</option></select></label>
        <label className="text-xs font-semibold text-slate-600 sm:col-span-2 xl:col-span-1">Question<select value={selectedQuestion} onChange={e => setSelectedQuestion(e.target.value)} className="block w-full mt-1.5 p-2.5 border border-slate-300 rounded-lg bg-white text-sm text-slate-900"><option value="all">All questions ({questionOptions.length})</option>{questionOptions.filter(item => selectedCareer === 'all' || item.career === selectedCareer).map(item => <option key={item.key} value={item.key}>{shortCareer(item.career)} · {item.question.code} — {item.question.title}</option>)}</select></label>
      </div>
    </section>

    <ResearchMetrics students={filtered} questions={questions} />
    <EnglishChart students={filtered} />

    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-5"><div><p className="text-xs font-bold uppercase tracking-wider text-amber-700">Cohort composition</p><h3 className="text-xl font-bold mt-1">Participants by degree program</h3></div><p className="text-xs text-slate-500">Select a program name to open its records</p></div>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">{chartCareers.map(career => {
        const cohort = filtered.filter(s => s.career === career);
        const data = metrics(cohort, questions);
        const pct = filtered.length ? cohort.length / filtered.length * 100 : 0;
        return <div key={career} className="min-w-0">
          <div className="flex justify-between gap-3 text-xs mb-2"><button onClick={() => onSelectCareer?.(career)} className="font-semibold text-left text-slate-800 hover:text-amber-700 hover:underline truncate">{shortCareer(career)}</button><span className="font-bold tabular-nums">{cohort.length} <span className="font-normal text-slate-500">· {pct.toFixed(1)}%</span></span></div>
          <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-400 transition-all" style={{ width: `${pct}%` }}/></div>
          <p className="text-[11px] text-slate-500 mt-1.5">{data.students} students · {data.teachers} faculty · {data.completion}% questionnaire completion</p>
        </div>;
      })}</div>
    </section>

    <section className="space-y-4" id="question-explorer">
      <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Question explorer</p><h3 className="text-xl font-bold mt-1">Every question, visualized</h3>
        <p className="text-sm text-slate-300 mt-2">Response bars show exact matching answers within each program. Since these are open-ended interviews, distinct answers remain visible as individual responses instead of being combined into unsupported themes.</p>
      </div>
      {chartCareers.map(career => {
        const cohort = filtered.filter(s => s.career === career);
        const careerQuestions = shownQuestions.filter(item => item.career === career);
        if (!careerQuestions.length) return null;
        return <details key={career} open={selectedCareer !== 'all' || selectedQuestion !== 'all'} className="group rounded-2xl border border-slate-200 bg-white shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden"><span><span className="block text-base font-bold">{shortCareer(career)}</span><span className="block text-xs text-slate-500 mt-1">{careerQuestions.length} questions · {cohort.length} matching participants</span></span><ChevronDown size={18} className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"/></summary>
          <div className="grid lg:grid-cols-2 gap-4 border-t border-slate-100 p-4 sm:p-5">{careerQuestions.map(({ question: q }) => {
            const groups = answerDistribution(cohort, q.id);
            const answered = groups.reduce((sum, g) => sum + g.students.length, 0);
            const missing = cohort.length - answered;
            const visibleGroups = groups.slice(0, 5);
            const otherCount = groups.slice(5).reduce((sum, group) => sum + group.students.length, 0);
            const sourceBreakdown = surveyBreakdownFor(career).find(item => item.number === q.id);
            const consensus = sourceBreakdown?.options.find(option => option.votes === sourceBreakdown.totalVotes);
            const cardKey = `${career}::${q.id}`;
            const chartMode = chartModes[cardKey] || (sourceBreakdown ? 'source' : 'live');
            const hasCodedInsight = /\d+(?:\.\d+)?\s*%|\d+\s+(?:students?|votes?|mentions?)/i.test(q.summaryInsight);
            const questionLabel = `${shortCareer(career)} ${q.code}`;
            return <article key={`${career}-${q.id}`} className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="flex flex-wrap gap-2 items-center"><span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-amber-900">{q.code}</span><span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{q.category}</span></div>
              <h4 className="font-semibold text-sm text-slate-900 mt-3 leading-snug">{q.title}</h4>
              <div className="flex gap-4 text-[11px] text-slate-500 mt-2 mb-4"><span>{answered} answered</span><span>{missing} missing</span><span>{groups.length} distinct answers</span></div>
              {sourceBreakdown && <div className="mb-4 inline-flex rounded-lg border border-slate-200 bg-white p-1" role="group" aria-label={`${q.code} chart source`}>
                <button onClick={() => setChartModes(current => ({ ...current, [cardKey]: 'source' }))} aria-pressed={chartMode === 'source'} className={`rounded-md px-2.5 py-1.5 text-[10px] font-semibold ${chartMode === 'source' ? 'bg-slate-900 text-amber-300' : 'text-slate-600 hover:bg-slate-100'}`}>Coded fieldwork results</button>
                <button onClick={() => setChartModes(current => ({ ...current, [cardKey]: 'live' }))} aria-pressed={chartMode === 'live'} className={`rounded-md px-2.5 py-1.5 text-[10px] font-semibold ${chartMode === 'live' ? 'bg-slate-900 text-amber-300' : 'text-slate-600 hover:bg-slate-100'}`}>Live responses</button>
              </div>}
              {chartMode === 'source' && sourceBreakdown ? <div className="space-y-3">
                <p className="text-[10px] text-slate-500">Original coded survey · {sourceBreakdown.totalVotes} participants · unaffected by the live filters above</p>
                {consensus && <div className="flex items-center gap-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-600 text-sm font-extrabold text-white">100%</span><div><p className="text-[10px] font-bold uppercase tracking-wide text-emerald-800">Unanimous finding</p><p className="mt-0.5 text-sm font-bold">{consensus.label}</p><p className="mt-1 text-[11px] text-emerald-800">All {sourceBreakdown.totalVotes} participants selected this response.</p></div></div>}
                {sourceBreakdown.options.map((option, index) => <div key={option.label} className="rounded-lg border border-slate-200 bg-white p-3">
                  <div className="flex items-start justify-between gap-3 text-xs mb-2"><span className="font-semibold text-slate-800 leading-snug">{option.label}</span><span className="shrink-0 text-slate-600 tabular-nums">{option.votes} · {option.pct}</span></div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full" style={{ width: `${sourceBreakdown.totalVotes ? option.votes / sourceBreakdown.totalVotes * 100 : 0}%`, backgroundColor: ['#f59e0b', '#4f46e5', '#059669', '#0891b2', '#d946ef', '#64748b'][index % 6] }}/></div>
                </div>)}
              </div> : !answered ? <p className="rounded-lg bg-white p-3 text-xs text-slate-500">No responses in this participant selection.</p> : <div className="space-y-3">{visibleGroups.map(group => {
                const pct = answered ? group.students.length / answered * 100 : 0;
                return <div key={group.answer}>
                  <div className="flex items-start justify-between gap-3 text-xs mb-1.5"><span className="text-slate-700 leading-snug">{group.answer}</span><span className="shrink-0 font-semibold tabular-nums text-slate-700">{group.students.length} · {pct.toFixed(0)}%</span></div>
                  <div className="h-2 rounded-full bg-slate-200 overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-400" style={{ width: `${pct}%` }}/></div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5">{group.students.map(s => <button key={s.id} onClick={() => onSelectStudent?.(s.id)} className="text-[10px] text-amber-800 hover:underline text-left">{s.name}</button>)}</div>
                </div>;
              })}</div>}
              {hasCodedInsight && <details className="mt-4 rounded-lg border border-amber-200 bg-amber-50/80"><summary className="flex cursor-pointer list-none items-center gap-2 px-3 py-2.5 text-[11px] font-semibold text-amber-950 [&::-webkit-details-marker]:hidden"><Sparkles size={13} className="shrink-0 text-amber-700"/>Original program synthesis</summary><p className="border-t border-amber-200 px-3 py-2.5 text-xs leading-relaxed text-amber-950">{q.summaryInsight}</p></details>}
              {groups.length > 5 && <details className="mt-4 rounded-lg border border-slate-200 bg-white"><summary className="cursor-pointer px-3 py-2.5 text-xs font-semibold text-slate-700">Show {groups.length - 5} more distinct answers ({otherCount} responses)</summary><div className="space-y-3 border-t border-slate-100 p-3">{groups.slice(5).map(group => <div key={group.answer} className="text-xs"><div className="flex justify-between gap-3"><span>{group.answer}</span><b>{group.students.length} · {(group.students.length / answered * 100).toFixed(0)}%</b></div><div className="flex flex-wrap gap-2 mt-1">{group.students.map(s => <button key={s.id} onClick={() => onSelectStudent?.(s.id)} className="text-[10px] text-amber-800 hover:underline">{s.name}</button>)}</div></div>)}</div></details>}
              <p className="mt-3 border-t border-slate-200 pt-2 text-[10px] text-slate-400">{questionLabel} · share of answered responses</p>
            </article>;
          })}</div>
        </details>;
      })}
      {!shownQuestions.length && <p className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500">No questions match these filters.</p>}
    </section>
  </div>;
};
