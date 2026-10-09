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

interface FocusGroup { label: string; students: InterviewedStudent[]; color: string; }

function filmFocusDistribution(students: InterviewedStudent[], questionId: number): FocusGroup[] {
  const rules: Record<number, Array<{ label: string; color: string; matches: (answer: string) => boolean }>> = {
    3: [
      { label: 'Campus green areas', color: '#059669', matches: answer => /green area|green space|garden|grass|lawn/i.test(answer) },
      { label: 'Other campus choices', color: '#64748b', matches: () => true },
    ],
    6: [
      { label: 'Protect Hugos’ habitat and green spaces', color: '#059669', matches: answer => /take care|protect|habitat|green|water|clean|food|respect|safe|peaceful/i.test(answer) },
      { label: 'Have not encountered Hugos', color: '#64748b', matches: answer => /haven.t\s+(?:seen|encounter)|have not\s+(?:seen|encounter)|not\s+(?:seen|encounter)|never\s+seen/i.test(answer) },
      { label: 'Other care responses', color: '#f59e0b', matches: () => true },
    ],
    7: [
      { label: 'USA / Hollywood', color: '#2563eb', matches: answer => /united states|\busa\b|u\.s\.a|hollywood/i.test(answer) },
      { label: 'Mexico', color: '#059669', matches: answer => /mexico/i.test(answer) },
      { label: 'Remain in Colombia', color: '#f59e0b', matches: answer => /colombia|bog[oó]ta|stay|remain|prefer.{0,20}(?:here|local)/i.test(answer) },
      { label: 'No / undecided', color: '#7c3aed', matches: answer => /\bno\b|not for now|undecided/i.test(answer) },
      { label: 'Other / undecided', color: '#64748b', matches: () => true },
    ],
  };
  const categories = rules[questionId] || [];
  const grouped = categories.map(category => ({ label: category.label, color: category.color, students: [] as InterviewedStudent[] }));
  for (const student of students) {
    const answer = student.answers[questionId]?.trim();
    if (!answer) continue;
    const index = categories.findIndex(category => category.matches(answer));
    if (index >= 0) grouped[index].students.push(student);
  }
  return grouped.filter(group => group.students.length > 0);
}

const FocusQuestionChart: React.FC<{ question: Question; groups: FocusGroup[]; onSelectStudent?: (id: string) => void }> = ({ question, groups, onSelectStudent }) => {
  const total = groups.reduce((sum, group) => sum + group.students.length, 0);
  const unanimous = groups.length === 1 && total > 0;
  return <article className={`rounded-xl border p-4 ${unanimous ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
    <div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-amber-300">{question.code}</span><span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{question.category}</span></div>
    <h4 className="mt-3 text-sm font-bold leading-snug text-slate-900">{question.title}</h4>
    <p className="mb-4 mt-1 text-[10px] text-slate-500">{total} answered · percentage of responses to this question</p>
    {unanimous && <div className="mb-4 flex items-center gap-3 rounded-lg border border-emerald-200 bg-white/80 p-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-emerald-600 text-sm font-extrabold text-white">100%</span><div><p className="text-[10px] font-bold uppercase tracking-wide text-emerald-800">Unanimous finding</p><p className="text-xs font-semibold text-emerald-950">All {total} participants selected {groups[0].label.toLowerCase()}.</p></div></div>}
    {!total ? <p className="rounded-lg bg-slate-50 p-3 text-xs text-slate-500">No responses recorded for this question.</p> : <div className="space-y-3">{groups.map(group => {
      const percent = total ? group.students.length / total * 100 : 0;
      return <div key={group.label}>
        <div className="mb-1.5 flex items-start justify-between gap-3 text-xs"><span className="font-semibold leading-snug text-slate-800">{group.label}</span><span className="shrink-0 tabular-nums text-slate-600">{group.students.length} · {percent.toFixed(0)}%</span></div>
        <div className="h-2.5 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full transition-all" style={{ width: `${percent}%`, backgroundColor: group.color }}/></div>
        <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">{group.students.map(student => <button key={student.id} onClick={() => onSelectStudent?.(student.id)} className="text-[10px] text-amber-800 hover:underline">{student.name}</button>)}</div>
      </div>;
    })}</div>}
  </article>;
};

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
  const filmCareer = careers.find(career => shortCareer(career).toLowerCase().includes('film and television'));
  const filmCohort = filmCareer ? students.filter(student => student.career === filmCareer) : [];
  const filmQuestions = filmCareer ? questionsFor(filmCareer, questions) : [];
  const focusQuestions = [3, 7, 6].map(id => ({
    question: filmQuestions.find(question => question.id === id),
    groups: filmFocusDistribution(filmCohort, id),
  })).filter((item): item is { question: Question; groups: FocusGroup[] } => Boolean(item.question));
  const campusGroup = focusQuestions.find(item => item.question.id === 3)?.groups.find(group => group.label === 'Campus green areas');
  const careGroup = focusQuestions.find(item => item.question.id === 6)?.groups.find(group => group.label.startsWith('Protect Hugos'));
  const abroadIds = new Set(focusQuestions.find(item => item.question.id === 7)?.groups.filter(group => !['Remain in Colombia', 'Other / undecided'].includes(group.label)).flatMap(group => group.students.map(student => student.id)) || []);
  const crossQuestionStudents = (campusGroup?.students || []).filter(student => careGroup?.students.some(carer => carer.id === student.id) && abroadIds.has(student.id));

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

    {filmCareer && <section className="space-y-4 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-emerald-50/50 p-4 sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-amber-800">Featured cross-question analysis · {shortCareer(filmCareer)}</p><h3 className="mt-1 text-xl font-bold text-slate-950">Campus connection, mascot care &amp; exchange</h3><p className="mt-1 text-xs text-slate-600">Categories are derived from each participant’s recorded Q3, Q6 and Q7 answer. Click a name to open that participant’s profile.</p></div><span className="rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-slate-600 ring-1 ring-amber-200">{filmCohort.length} participants · updates from current records</span></div>
      {focusQuestions.length > 0 && <>
        {focusQuestions.filter(item => item.question.id === 3).map(item => <FocusQuestionChart key={item.question.id} question={item.question} groups={item.groups} onSelectStudent={onSelectStudent}/>)}
        <div className="grid gap-4 lg:grid-cols-2">{focusQuestions.filter(item => item.question.id !== 3).map(item => <FocusQuestionChart key={item.question.id} question={item.question} groups={item.groups} onSelectStudent={onSelectStudent}/>)}</div>
        <div className="flex flex-col gap-3 rounded-xl border border-indigo-200 bg-indigo-50 p-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[10px] font-bold uppercase tracking-wide text-indigo-800">Cross-question overlap · Q3 + Q6 + Q7</p><p className="mt-1 text-sm font-bold text-slate-900">Campus preference, mascot care and exchange interest</p><p className="mt-1 text-xs leading-relaxed text-slate-600">{crossQuestionStudents.length} of {campusGroup?.students.length || 0} students who named campus green areas also described protecting Hugos’ habitat and chose an international exchange destination.</p></div><div className="flex flex-wrap gap-2 sm:max-w-[45%]">{crossQuestionStudents.map(student => <button key={student.id} onClick={() => onSelectStudent?.(student.id)} className="rounded-full border border-indigo-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-indigo-900 hover:bg-indigo-100">{student.name}</button>)}</div></div>
      </>}
    </section>}

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
