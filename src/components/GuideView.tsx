import React from 'react';
import { 
  BookOpenCheck, 
  Lightbulb, 
  CheckCircle2
} from 'lucide-react';

interface GuideViewProps {
  onGoToSummary: () => void;
  onGoToQuestions: () => void;
  onGoToStudents: () => void;
}

export const GuideView: React.FC<GuideViewProps> = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
            <BookOpenCheck className="w-4 h-4" />
            <span>Pedagogical & Defense Orientation</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            How to Structure and Defend this Research Project
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            As a student of the <strong>Bachelor’s Degree in Foreign Languages at Universidad Agustiniana (Bogotá)</strong>, presenting this fieldwork study requires methodological rigor, thematic categorization, and clear educational implications. Here is the recommended step-by-step presentation structure.
          </p>
        </div>
      </div>

      {/* Recommended 6-Step Structure */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
          1. Recommended Structure for Academic Presentation & Defense
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 font-bold text-sm flex items-center justify-center">
              01
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              Institutional Context & Rationale
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explain why Foreign Language pre-service teachers need to understand the voices and daily realities of students across UniAgustiniana. Language learning cannot occur in a vacuum.
            </p>
            <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
              💡 <em>In this app:</em> Present the <strong>Summary & Insights</strong> overview.
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 font-bold text-sm flex items-center justify-center">
              02
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              Sample Diversity (9 University Majors)
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Highlight the balanced representation: Architecture, Social Communication, Business, Languages, Gastronomy, Law, Film, Engineering, and Marketing across Tagaste and Suba campuses.
            </p>
            <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
              💡 <em>In this app:</em> Show the <strong>By Student</strong> profile dossiers.
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 font-bold text-sm flex items-center justify-center">
              03
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              The 11 Formulated Research Questions
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Showcase how the 11 questions explore vocational passions, spatial campus attachments, student fatigue, practicums, teaching inclinations, and caring for campus mascot Ugus.
            </p>
            <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
              💡 <em>In this app:</em> Browse through the <strong>By Question</strong> section.
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 font-bold text-sm flex items-center justify-center">
              04
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              Cross-Disciplinary Comparative Analysis
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Contrast answers: examine how engineers approach problems compared to culinary chefs or lawyers, and how they all share global exchange dreams to Europe and the Americas.
            </p>
            <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
              💡 <em>In this app:</em> Use the <strong>Compare 2 Majors Mode</strong> and <strong>Full Matrix</strong>.
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 font-bold text-sm flex items-center justify-center">
              05
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              Didactic Implications for Language Teachers
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              The heart of your degree: how will you apply this in your classroom? Promote English for Specific Purposes (ESP), project-based tasks, and communicative student engagement.
            </p>
            <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
              💡 <em>In this app:</em> Cite the <strong>Research Team Reflections</strong>.
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 font-bold text-sm flex items-center justify-center">
              06
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              Formal Academic Dossier Delivery
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your professor will appreciate that the complete qualitative dataset is systematized in professional printable format with technical sheet, interview tables, and signatures.
            </p>
            <div className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
              💡 <em>In this app:</em> Click <strong>Academic Report (PDF)</strong> at the top right.
            </div>
          </div>
        </div>
      </div>

      {/* Practical Defense Tips */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Lightbulb className="w-5 h-5 text-amber-600" />
          <h3 className="font-bold text-slate-900 text-sm">
            Practical Tips for Your Oral Classroom Presentation
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-700">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Project this interactive platform live:</strong>
              Navigate dynamically between "By Question" and "By Student" when the professor asks to see a specific interview or student quotation.
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Quote the students' authentic voices:</strong>
              Reading direct qualitative quotes (such as the Gastronomy student on ancestral cuisine, or the Law student on constitutional justice) demonstrates genuine fieldwork.
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Highlight the Ugus Mascot inquiry (Q8):</strong>
              Emphasize how Question 8 engaged all respondents in discussing institutional belonging, animal welfare, and responsible community values on campus.
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Customize with your real data if needed:</strong>
              Use the <strong>"Manage & Edit"</strong> tab to adjust any student name, question text, or answer, with automatic browser saving.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
