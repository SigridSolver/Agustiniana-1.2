import React from 'react';
import { ProjectMetadata, Question, InterviewedStudent } from '../types';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  Globe2, 
  Quote, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Dog, 
  Award,
  BarChart3,
  PieChart,
  Hash,
  Clapperboard,
  Film,
  Play
} from 'lucide-react';
import { universityCareersList } from '../data/initialData';

interface SummaryViewProps {
  metadata: ProjectMetadata;
  questions: Question[];
  students: InterviewedStudent[];
  insights: Array<{ title: string; description: string; metric: string; tag: string }>;
  onSelectStudent: (studentId: string) => void;
  onSelectQuestion: (questionId: number) => void;
  onGoToAnalytics?: () => void;
  onGoToCareers?: () => void;
}

export const SummaryView: React.FC<SummaryViewProps> = ({
  metadata,
  questions,
  students,
  insights,
  onSelectStudent,
  onSelectQuestion,
  onGoToAnalytics,
  onGoToCareers
}) => {
  const totalAnswers = questions.length * students.length;

  // Calculate English level distribution
  const levelCounts: Record<string, number> = {
    'B2': 0,
    'B1': 0,
    'A2': 0,
    'A1': 0
  };

  students.forEach((s) => {
    if (s.perceivedEnglishLevel?.startsWith('B2')) levelCounts['B2']++;
    else if (s.perceivedEnglishLevel?.startsWith('B1')) levelCounts['B1']++;
    else if (s.perceivedEnglishLevel?.startsWith('A2')) levelCounts['A2']++;
    else if (s.perceivedEnglishLevel?.startsWith('A1')) levelCounts['A1']++;
  });

  const b2Pct = Math.round((levelCounts['B2'] / students.length) * 100) || 0;
  const b1Pct = Math.round((levelCounts['B1'] / students.length) * 100) || 0;
  const a2Pct = Math.round((levelCounts['A2'] / students.length) * 100) || 0;
  const a1Pct = Math.round((levelCounts['A1'] / students.length) * 100) || 0;

  return (
    <div className="space-y-8 pb-12">
      {/* Institutional Hero Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-700/60 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 text-xs text-amber-300 font-medium mb-3">
            <span>{metadata.university}</span>
            <span aria-hidden="true">·</span>
            <span>{metadata.program}</span>
            <span aria-hidden="true">·</span>
            <span>{metadata.city}</span>
            <span aria-hidden="true">·</span>
            <span className="font-bold text-amber-400">{metadata.term}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 leading-snug">
            {metadata.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-3xl">
            {metadata.generalObjective}
          </p>

          {/* Quick Technical Sheet */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-700/80">
            <div>
              <span className="block text-2xl font-bold text-amber-400">8</span>
              <span className="text-xs text-slate-300">Structured Questions</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-amber-400">{students.length}</span>
              <span className="text-xs text-slate-300">Verified Interviewees</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-amber-400">{totalAnswers}</span>
              <span className="text-xs text-slate-300">Recorded Answers</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-emerald-400">{b1Pct + b2Pct}%</span>
              <span className="text-xs text-slate-300">Intermediate CEFR (B1/B2)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Infographics Callout Banner */}
      <section className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
            <PieChart className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Visual Analytics Hub
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-xs text-slate-600 font-medium">8 Question Infographics Ready</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900 mt-0.5">
              Explore Dynamic Charts & Infographics
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
              Interactive Donut charts, photography vs spaces distribution, campus green area unanimity, RCN/Caracol internship reach, and international exchange maps.
            </p>
          </div>
        </div>

        {onGoToAnalytics && (
          <button
            onClick={onGoToAnalytics}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors shrink-0"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Open Infographics Dashboard</span>
          </button>
        )}
      </section>

      {/* Multi-Program Video & Cohort Showcase Banner */}
      {onGoToCareers && (
        <section className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs font-bold">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/30">
                  Program Presentation Videos Available
                </span>
                <span className="text-slate-400 text-[11px]">· Film &amp; TV · Architecture · Engineering · Hospitality &amp; Tourism</span>
              </div>
              <h4 className="text-sm font-bold text-white mt-0.5">
                Film &amp; Television, Architecture, Engineering &amp; Tourism Programs — UniAgustiniana
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                Institutional presentation videos embedded inside their respective career tabs, accompanied by verified 8-student fieldwork cohorts and research team credits (Valerin Sophia Conde Hernández &amp; Tania Sarah Candela Ruiz for Hospitality &amp; Tourism).
              </p>
            </div>
          </div>

          <button
            onClick={onGoToCareers}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors shrink-0"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Explore Programs in Careers Tab</span>
          </button>
        </section>
      )}

      {/* Two-Column Context: Methodological Sheet & CEFR Level Distribution */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Methodological Context */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-semibold text-slate-900 text-base">
                Fieldwork Research Technical Sheet
              </h3>
              <p className="text-xs text-slate-500">
                Methodology and academic scope by Lead Researchers Alejandra Cruz & Melany Casas
              </p>
            </div>
            <span className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded font-medium">
              Bogotá · {metadata.term}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-700">
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">Lead Research Team:</span>
              <p className="text-slate-600 leading-relaxed">
                <strong>Alejandra Cruz</strong> (Project Coordinator) & <strong>Melany Casas</strong> (Fieldwork & Data Analyst) — Foreign Languages Degree, UniAgustiniana.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">Research Approach & Instrument:</span>
              <p className="text-slate-600 leading-relaxed">
                {metadata.methodologyType} (8 standardized interview questions).
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">Surveyed Cohort:</span>
              <p className="text-slate-600 leading-relaxed">
                {metadata.sampleDescription}
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">Investigated Dimensions:</span>
              <p className="text-slate-600 leading-relaxed">
                Program appeal, favorite subjects, campus spaces, internships (RCN/Caracol), professional improvement, mascot Hugos care, exchange destinations (USA/Mexico), and Netflix/media practice.
              </p>
            </div>
          </div>
        </div>

        {/* English Level Card */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-3">
              <h3 className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Interviewer-Assessed Level</span>
              </h3>
              <span className="text-[11px] text-slate-500">CEFR Perception</span>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Assessed communicative proficiency of the 8 Film and Television students during fieldwork interviews:
            </p>

            {/* Level Bars */}
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-slate-700">B2 - Upper Intermediate</span>
                  <span className="font-bold text-slate-900">{levelCounts['B2']} std. ({b2Pct}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: `${b2Pct}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-slate-700">B1 - Intermediate</span>
                  <span className="font-bold text-slate-900">{levelCounts['B1']} std. ({b1Pct}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${b1Pct}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-slate-700">A2 - Elementary</span>
                  <span className="font-bold text-slate-900">{levelCounts['A2']} std. ({a2Pct}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${a2Pct}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-slate-700">A1 - Beginner</span>
                  <span className="font-bold text-slate-900">{levelCounts['A1']} std. ({a1Pct}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-rose-500 h-2 rounded-full" style={{ width: `${a1Pct}%` }} />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] text-slate-500 italic">
            Observed during English interview discourse.
          </div>
        </div>
      </section>

      {/* Special Campus Mascot Hugos Spotlight */}
      <section className="bg-amber-50/80 rounded-xl p-5 border border-amber-200/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
            <Dog className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold text-amber-800 tracking-wider">
                Question 6 Focus
              </span>
              <span className="text-amber-400">·</span>
              <span className="text-xs font-semibold text-slate-800">Campus Identity & Mascot Care</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900 mt-0.5">
              Caring for Hugos (UniAgustiniana's Campus Pet)
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed mt-1">
              63% (5 students) pledged to protect his habitat and green spaces, keeping water fresh and clean, while 37% (3 students) noted they haven't encountered him yet on their classroom routes.
            </p>
          </div>
        </div>
        <div className="shrink-0 self-start md:self-center">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Campus Mascot Protocol</span>
          </span>
        </div>
      </section>

      {/* Analytical Insights */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Major Research Findings & Patterns
            </h3>
            <p className="text-xs text-slate-500">
              Key findings from the 8 questions administered to the Film and Television cohort
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-amber-700 tracking-wide">
                    {insight.tag}
                  </span>
                  <span className="text-slate-400">Finding #{index + 1}</span>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm mb-2">
                  {insight.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {insight.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-800">
                  Recorded Evidence:
                </span>
                <span className="font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                  {insight.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Surveyed Students Roster */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Verified Surveyed Cohorts ({students.length} Real Students)
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Official cohorts with student codes and transcribed responses across degree programs
            </p>
          </div>
          {onGoToCareers && (
            <button
              onClick={onGoToCareers}
              className="text-xs text-amber-700 hover:underline font-semibold flex items-center gap-1"
            >
              <span>Explore career tabs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {students.map((st) => (
            <div
              key={st.id}
              onClick={() => onSelectStudent(st.id)}
              className="bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-400 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg ${st.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                      {st.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight line-clamp-1">
                        {st.name}
                      </h4>
                      <span className="font-mono text-[10px] text-amber-900 font-bold bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200 block mt-0.5">
                        ID: {st.studentCode}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 italic line-clamp-2 mt-2">
                  "{st.highlightQuote}"
                </p>
              </div>

              <div className="pt-2 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500">
                  Level: <strong className="text-emerald-700">{st.perceivedEnglishLevel.split(' - ')[0]}</strong>
                </span>
                <span className="text-amber-700 font-semibold hover:underline text-xs">
                  View Dossier →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 8 Questions Quick Directory */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              The {questions.length} Research Questions Applied
            </h3>
            <p className="text-xs text-slate-500">
              Select any question to see how the 8 students answered and examine their pattern synthesis
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {questions.map((q) => (
            <button
              key={q.id}
              onClick={() => onSelectQuestion(q.id)}
              className="text-left bg-white rounded-lg p-4 border border-slate-200 hover:border-slate-400 hover:bg-slate-50/50 transition-all flex items-start gap-3 group"
            >
              <span className="w-7 h-7 rounded-md bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-slate-950 transition-colors">
                {q.code}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-1">
                  <span className="font-medium text-slate-700">{q.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{students.length} answers available</span>
                </div>
                <h4 className="text-xs font-semibold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
                  {q.title}
                </h4>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-800 shrink-0 self-center" />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
