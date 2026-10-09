import React from 'react';
import { ArrowRight, BarChart3, CalendarDays, ClipboardList, Film, GraduationCap, MapPin, Play, Sparkles, Users } from 'lucide-react';
import type { ProjectMetadata, Question, InterviewedStudent, Interviewer } from '../types';
import { analyticalInsights, careerProgramsRegistry } from '../data/initialData';
import { careerNames, metrics, questionsFor } from '../data/research';
import { EnglishChart } from './ResearchCharts';

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

const shortCareer = (career: string) => career.split(' (')[0];

export const SummaryView: React.FC<SummaryViewProps> = ({ metadata, questions, students, interviewers, onSelectStudent, onSelectQuestion, onSelectCareer, onGoToAnalytics, onGoToCareers }) => {
  const careers = careerNames(students);
  const activeCareers = careers.filter(career => students.some(student => student.career === career));
  const totals = metrics(students, questions);
  const questionCounts = activeCareers.map(career => questionsFor(career, questions).length);
  const minQuestions = questionCounts.length ? Math.min(...questionCounts) : 0;
  const maxQuestions = Math.max(...questionCounts, 0);
  const leads = interviewers.filter(member => /project coordinator|lead student researcher/i.test(member.role)).slice(0, 2);
  const videos = activeCareers.filter(career => careerProgramsRegistry[career]?.video && !careerProgramsRegistry[career]?.video?.isPlaceholder);

  return <div className="space-y-6 pb-12">
    <section className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900 p-6 text-white shadow-sm sm:p-8">
      <div aria-hidden="true" className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="relative max-w-4xl">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-amber-300"><span>{metadata.university}</span><span className="text-slate-500">·</span><span>{metadata.program}</span><span className="text-slate-500">·</span><span className="flex items-center gap-1"><MapPin size={12}/>{metadata.city}</span><span className="text-slate-500">·</span><span>{metadata.term}</span></div>
        <p className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-amber-400"><GraduationCap size={16}/> Summary &amp; Insights</p>
        <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">{metadata.title}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">{metadata.generalObjective}</p>
        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 sm:grid-cols-4">
          {[
            { value: totals.participants, label: 'Participants in records', color: 'text-amber-400' },
            { value: totals.careers, label: 'Programs represented', color: 'text-amber-400' },
            { value: `${totals.answers.toLocaleString()} / ${totals.expected.toLocaleString()}`, label: 'Recorded answers', color: 'text-amber-400' },
            { value: `${totals.completion}%`, label: 'Questionnaire completion', color: 'text-emerald-400' },
          ].map(item => <div key={item.label}><p className={`text-2xl font-extrabold tabular-nums ${item.color}`}>{item.value}</p><p className="mt-1 text-[11px] text-slate-300">{item.label}</p></div>)}
        </div>
      </div>
    </section>

    <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
      <div className="flex items-start gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-950 text-amber-400"><BarChart3 size={20}/></span><div><p className="text-[10px] font-bold uppercase tracking-wider text-amber-800">Visual analytics hub <span className="mx-1 text-slate-400">·</span>{questionCounts.reduce((sum, count) => sum + count, 0)} question charts available</p><h3 className="mt-1 text-sm font-bold text-slate-900">Explore interactive charts and every response</h3><p className="mt-1 text-xs leading-relaxed text-slate-600">Filter by program, participant group or question; switch between coded fieldwork results and live responses where both are available.</p></div></div>
      <button onClick={onGoToAnalytics} className="shrink-0 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-amber-300">Open Infographics Dashboard <ArrowRight size={15} className="ml-1 inline"/></button>
    </section>

    <section className="flex flex-col gap-4 rounded-2xl bg-slate-950 p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="flex items-start gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-400 text-slate-950"><Film size={20}/></span><div><p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Program presentation videos <span className="mx-1 text-slate-500">·</span>{videos.length} available</p><h3 className="mt-1 text-sm font-bold">Meet the degree programs and their fieldwork</h3><p className="mt-1 text-xs leading-relaxed text-slate-300">{videos.length ? videos.map(shortCareer).join(' · ') : 'Program videos are not available yet.'}</p></div></div>
      <button onClick={onGoToCareers} className="shrink-0 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-amber-300"><Play size={14} className="mr-1 inline"/>Explore programs</button>
    </section>

    <section className="grid gap-4 xl:grid-cols-[1.35fr_.85fr]">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4"><div><p className="text-[10px] font-bold uppercase tracking-wider text-amber-800">Methodology and scope</p><h3 className="mt-1 text-lg font-bold">Fieldwork research technical sheet</h3><p className="mt-1 text-xs text-slate-500">Academic scope and instrument summary</p></div><span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] text-slate-600"><CalendarDays size={13}/>{metadata.city} · {metadata.term}</span></div>
        <div className="grid gap-x-7 gap-y-5 pt-4 sm:grid-cols-2">
          <div><p className="text-[11px] font-bold text-slate-900">Lead research team</p><p className="mt-1 text-xs leading-relaxed text-slate-600">{leads.length ? leads.map(member => member.name).join(' · ') : `${interviewers.length} project researchers`}</p><p className="mt-1 text-[11px] text-slate-500">{interviewers.length} team members · Foreign Languages Degree</p></div>
          <div><p className="text-[11px] font-bold text-slate-900">Research approach and instrument</p><p className="mt-1 text-xs leading-relaxed text-slate-600">{metadata.methodologyType} The program-specific questionnaires contain {minQuestions}–{maxQuestions} questions.</p></div>
          <div><p className="text-[11px] font-bold text-slate-900">Participant sample in current records</p><p className="mt-1 text-xs leading-relaxed text-slate-600">{totals.students} students and {totals.teachers} faculty across {totals.careers} programs. Campus recorded for participants: Tagaste Campus.</p></div>
          <div><p className="text-[11px] font-bold text-slate-900">Investigated dimensions</p><p className="mt-1 text-xs leading-relaxed text-slate-600">{metadata.generalObjective}</p></div>
        </div>
      </div>
      <div className="min-w-0"><EnglishChart students={students}/></div>
    </section>

    <aside className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-950">
      <span className="font-bold">Data provenance:</span> individual answers and English levels for 26 participants in Marketing, Social Communication and Foreign Languages were completed during development; the supplied documents do not verify those fields per participant. Curated fieldwork findings below reflect the program syntheses stored in the project. Live counts recalculate from current records.
    </aside>

    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-wider text-amber-800">Cross-program synthesis</p><h3 className="mt-1 text-xl font-bold text-slate-900">Major research findings &amp; patterns</h3><p className="mt-1 text-xs text-slate-500">Curated program-level findings from the source dataset. Each comparison retains its program and question context.</p></div><span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-200">{analyticalInsights.length} findings</span></div>
      <div className="grid gap-4 md:grid-cols-2">
        {analyticalInsights.map((finding, index) => <article key={finding.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between gap-3"><p className="text-[10px] font-bold uppercase tracking-wide text-orange-700">{finding.tag}</p><span className="shrink-0 text-[10px] font-medium text-slate-400">Finding #{index + 1}</span></div>
          <h4 className="mt-2 text-sm font-bold leading-snug text-slate-900">{finding.title.replace(/^\d+\.\s*/, '')}</h4>
          <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-600">{finding.description}</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3"><span className="inline-flex items-center gap-1 text-[11px] text-slate-500"><ClipboardList size={13}/>Recorded evidence</span><span className="rounded-md bg-slate-100 px-2.5 py-1.5 text-[10px] font-bold text-slate-800">{finding.metric}</span></div>
        </article>)}
      </div>
    </section>

    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-wider text-amber-800">Sample structure</p><h3 className="mt-1 text-xl font-bold">Program comparison</h3><p className="mt-1 text-xs text-slate-500">Question numbers and completion are calculated against each program’s own questionnaire.</p></div><span className="text-xs text-slate-500">{activeCareers.length} programs · {totals.participants} participants</span></div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{activeCareers.map(career => {
        const cohort = students.filter(student => student.career === career);
        const data = metrics(cohort, questions);
        const share = totals.participants ? cohort.length / totals.participants * 100 : 0;
        const count = questionsFor(career, questions).length;
        return <button key={career} onClick={() => onSelectCareer(career)} className="rounded-xl border border-slate-200 p-4 text-left transition-colors hover:border-amber-400 hover:bg-amber-50/40 focus:outline-2 focus:outline-amber-500">
          <div className="flex items-start justify-between gap-2"><span className="text-sm font-bold text-slate-900">{shortCareer(career)}</span><ArrowRight size={15} className="shrink-0 text-slate-400"/></div>
          <p className="mt-2 text-xs text-slate-500">{cohort.length} participants · {count} questions · {data.completion}% completion</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-400" style={{width: `${share}%`}}/></div>
          <p className="mt-1.5 text-[10px] text-slate-400">{share.toFixed(1)}% of the sample · {data.students} students{data.teachers ? ` · ${data.teachers} faculty` : ''}</p>
        </button>;
      })}</div>
    </section>

    <section className="space-y-3">
      <div><p className="text-[10px] font-bold uppercase tracking-wider text-amber-800">Question directory</p><h3 className="mt-1 text-xl font-bold text-slate-900">Research questions by program</h3><p className="mt-1 text-xs text-slate-500">Choose a question to review its responses and participant records.</p></div>
      {activeCareers.map(career => {
        const cohort = students.filter(student => student.career === career);
        const careerQuestions = questionsFor(career, questions);
        return <details key={career} className="group rounded-2xl border border-slate-200 bg-white shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 [&::-webkit-details-marker]:hidden"><span><span className="block text-sm font-bold text-slate-900">{shortCareer(career)}</span><span className="mt-1 block text-[11px] text-slate-500">{careerQuestions.length} questions · {cohort.length} participants</span></span><ArrowRight size={16} className="rotate-90 text-slate-400 transition-transform group-open:-rotate-90"/></summary>
          <div className="grid gap-2 border-t border-slate-100 p-3 sm:grid-cols-2 sm:p-4">{careerQuestions.map(question => {
            const answered = cohort.filter(student => student.answers[question.id]?.trim()).length;
            return <button key={question.id} onClick={() => onSelectQuestion(question.id, career)} className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition-colors hover:border-amber-400 hover:bg-amber-50/40">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-900 text-xs font-bold text-amber-400">{question.code}</span>
              <span className="min-w-0 flex-1"><span className="block truncate text-[10px] text-slate-500">{question.category} · {answered}/{cohort.length} responses</span><span className="mt-1 block text-xs font-semibold text-slate-900">{question.title}</span></span><ArrowRight size={15} className="shrink-0 text-slate-400"/>
            </button>;
          })}</div>
        </details>;
      })}
    </section>

    <details className="rounded-xl border border-slate-200 bg-white">
      <summary className="flex cursor-pointer items-center gap-2 p-4 text-sm font-semibold text-slate-700"><Users size={16}/> Open participant roster</summary>
      <div className="space-y-3 border-t border-slate-100 p-4">{activeCareers.map(career => <details key={career} className="rounded-lg border border-slate-200 p-3"><summary className="cursor-pointer text-xs font-semibold">{shortCareer(career)} · {students.filter(student => student.career === career).length} participants</summary><div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{students.filter(student => student.career === career).map(student => <button key={student.id} onClick={() => onSelectStudent(student.id)} className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-left hover:border-amber-400"><span className="block text-xs font-bold">{student.name}</span><span className="mt-1 block font-mono text-[10px] text-slate-500">ID: {student.studentCode}</span></button>)}</div></details>)}</div>
    </details>
  </div>;
};
