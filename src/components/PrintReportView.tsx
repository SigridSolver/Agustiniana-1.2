import React from 'react';
import { ProjectMetadata, Question, InterviewedStudent, Interviewer } from '../types';
import { Printer, ArrowLeft } from 'lucide-react';

interface PrintReportViewProps {
  metadata: ProjectMetadata;
  questions: Question[];
  students: InterviewedStudent[];
  interviewers: Interviewer[];
  onBack: () => void;
}

export const PrintReportView: React.FC<PrintReportViewProps> = ({
  metadata,
  questions,
  students,
  interviewers,
  onBack
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-100 min-h-screen py-6 px-4 print:p-0 print:bg-white text-slate-900">
      {/* Top action bar (hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-lg border border-slate-300 shadow-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Interactive Portal</span>
        </button>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors"
        >
          <Printer className="w-4 h-4 text-amber-400" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Formal Academic Paper Layout */}
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-md border border-slate-200 print:border-none print:shadow-none print:p-0 space-y-8 font-serif">
        {/* Institutional Formal Header */}
        <div className="text-center border-b-2 border-slate-900 pb-6 space-y-1">
          <div className="uppercase tracking-widest text-xs font-sans font-bold text-amber-800">
            {metadata.university}
          </div>
          <div className="uppercase text-xs font-sans tracking-wide text-slate-600 font-semibold">
            {metadata.faculty}
          </div>
          <div className="uppercase text-sm font-sans tracking-wide text-slate-900 font-bold">
            {metadata.program}
          </div>
          <div className="text-xs font-sans text-slate-500 pt-1">
            {metadata.subject} · {metadata.city} · {metadata.term}
          </div>
        </div>

        {/* Title & Metadata */}
        <div className="text-center space-y-3 pt-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
            {metadata.title}
          </h1>
          <p className="text-sm font-sans italic text-slate-600 max-w-2xl mx-auto">
            {metadata.subtitle}
          </p>
        </div>

        {/* Authors / Interviewers Box */}
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs font-sans space-y-2">
          <div className="font-bold text-slate-900 uppercase tracking-wide text-[11px]">
            Student Research & Fieldwork Interview Team:
          </div>
          <div className="grid sm:grid-cols-3 gap-2 text-slate-700">
            {interviewers.map((inv) => (
              <div key={inv.id} className="p-1.5 rounded bg-white border border-slate-200">
                <span className="font-bold block text-slate-900">{inv.name}</span>
                <span className="text-amber-800 text-[11px] font-semibold block">{inv.role}</span>
                <span className="text-slate-500 text-[10px] block">{inv.email}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Sheet */}
        <div className="space-y-3">
          <h2 className="text-base font-bold font-sans uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            1. Fieldwork Technical Sheet & Sample
          </h2>
          <div className="text-xs font-sans text-slate-700 leading-relaxed space-y-2">
            <p>
              <strong>General Objective:</strong> {metadata.generalObjective}
            </p>
            <p>
              <strong>Methodology & Instrument:</strong> {metadata.methodologyType} (standardized question protocols applied to {students.length} students across Film &amp; Television, Architecture, Engineering, Hospitality &amp; Tourism, Gastronomy, Law, and International Business).
            </p>
            <p>
              <strong>Research Teams:</strong> Alejandra Cruz &amp; Melany Casas (Film &amp; TV) · María Fernanda Rodríguez &amp; Helen Sofía Molina (Architecture) · Jorge Bustos &amp; Andres Parra (Engineering) · Valerin Sophia Conde &amp; Tania Sarah Candela (Hospitality &amp; Tourism) · Ana Paula Manrique &amp; Carol Tatiana Caro (Gastronomy) · Anamaria Rocha &amp; Sandra Lorena Salazar (Law) · Isaac Pinilla &amp; Carlos Marin (International Business) — Foreign Languages Degree.
            </p>
          </div>

          {/* Table of Interviewees */}
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left border-collapse text-xs font-sans border border-slate-300">
              <thead className="bg-slate-100 text-slate-900">
                <tr>
                  <th className="p-2 border border-slate-300">#</th>
                  <th className="p-2 border border-slate-300">Student Code</th>
                  <th className="p-2 border border-slate-300">Interviewed Student</th>
                  <th className="p-2 border border-slate-300">Degree Program / Major</th>
                  <th className="p-2 border border-slate-300">Semester</th>
                  <th className="p-2 border border-slate-300">Interviewer-Assessed Level (CEFR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {students.map((st, i) => (
                  <tr key={st.id} className="hover:bg-slate-50">
                    <td className="p-2 border border-slate-300 font-bold">{i + 1}</td>
                    <td className="p-2 border border-slate-300 font-mono font-bold text-amber-900">{st.studentCode}</td>
                    <td className="p-2 border border-slate-300 font-medium">{st.name}</td>
                    <td className="p-2 border border-slate-300">{st.career}</td>
                    <td className="p-2 border border-slate-300">{st.semester}</td>
                    <td className="p-2 border border-slate-300 font-semibold">{st.perceivedEnglishLevel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Results by Question */}
        <div className="space-y-6 pt-4">
          <h2 className="text-base font-bold font-sans uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            2. Qualitative Fieldwork Results by Question ({questions.length} Items)
          </h2>

          <div className="space-y-6">
            {questions.map((q) => (
              <div key={q.id} className="space-y-2 border-b border-slate-200 pb-4">
                <div className="flex items-start gap-2">
                  <span className="font-sans font-bold text-xs bg-slate-900 text-white px-2 py-0.5 rounded shrink-0">
                    {q.code}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold font-sans text-slate-900 leading-snug">
                      {q.title}
                    </h3>
                    <p className="text-[11px] font-sans text-slate-500 italic">
                      Category: {q.category} · Objective: {q.academicObjective}
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50/50 p-2.5 rounded border border-amber-200 text-xs font-sans text-amber-950">
                  <strong>Pattern synthesis:</strong> {q.summaryInsight}
                </div>

                {/* Answers Table */}
                <table className="w-full text-left border-collapse text-xs font-sans border border-slate-200 mt-2">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th className="p-2 border border-slate-200 w-1/3">Student & Code</th>
                      <th className="p-2 border border-slate-200">Verbatim Recorded Answer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {students.map((st) => (
                      <tr key={st.id}>
                        <td className="p-2 border border-slate-200 align-top font-semibold text-slate-900">
                          <div>{st.name}</div>
                          <div className="text-[10px] text-amber-900 font-mono font-bold">
                            Code: {st.studentCode}
                          </div>
                          <div className="text-[10px] text-slate-500 font-normal">
                            {st.career.split(' (')[0]} · {st.semester}
                          </div>
                        </td>
                        <td className="p-2 border border-slate-200 text-slate-700 italic leading-relaxed">
                          "{st.answers[q.id] || 'Answer not recorded.'}"
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>

        {/* Formal Conclusions & Academic Defense */}
        <div className="space-y-3 pt-4">
          <h2 className="text-base font-bold font-sans uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            3. Didactic Conclusions & Research Defense
          </h2>
          <div className="text-xs font-sans text-slate-700 space-y-2 leading-relaxed">
            <p>
              1. <strong>Disciplinary Motivation:</strong> Photography (63%) and specialized equipment spaces (37%) represent the primary vocation driver for Film and Television undergraduates at UniAgustiniana.
            </p>
            <p>
              2. <strong>Institutional Attachment:</strong> Unanimous 100% agreement on Campus Tagaste’s green areas demonstrates strong spatial well-being and outdoor learning affinity.
            </p>
            <p>
              3. <strong>Industry Linkage:</strong> 100% student targeting of major national television networks (RCN and Caracol TV) underscores the necessity of workplace-grounded professional English registers.
            </p>
            <p>
              4. <strong>Global Vision:</strong> 75% international mobility desire toward the USA, Hollywood, and Mexico confirms students' aspiration for high-level international production pipelines.
            </p>
          </div>
        </div>

        {/* Academic Signatures Box */}
        <div className="pt-12 border-t-2 border-slate-300 grid grid-cols-2 gap-8 text-center text-xs font-sans">
          <div className="space-y-1">
            <div className="w-48 border-b border-slate-400 mx-auto mb-2" />
            <p className="font-bold text-slate-900">Alejandra Cruz & Melany Casas</p>
            <p className="text-slate-500">Lead Student Researchers</p>
            <p className="text-slate-400 text-[10px]">Foreign Languages Degree · UniAgustiniana</p>
          </div>
          <div className="space-y-1">
            <div className="w-48 border-b border-slate-400 mx-auto mb-2" />
            <p className="font-bold text-slate-900">Academic Research Committee</p>
            <p className="text-slate-500">Supervising Professor / Evaluator</p>
            <p className="text-slate-400 text-[10px]">Faculty of Humanities, Social Sciences & Education</p>
          </div>
        </div>
      </div>
    </div>
  );
};
