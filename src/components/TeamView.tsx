import React from 'react';
import { Interviewer, ProjectMetadata } from '../types';
import { 
  GraduationCap, 
  Mail, 
  MapPin, 
  BookOpen, 
  ShieldCheck, 
  Quote,
  Star,
  Award
} from 'lucide-react';

interface TeamViewProps {
  interviewers: Interviewer[];
  metadata: ProjectMetadata;
}

export const TeamView: React.FC<TeamViewProps> = ({
  interviewers,
  metadata
}) => {
  return (
    <div className="space-y-8 pb-12">
      {/* Team Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Pre-Service Language Educator Research Team</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Student Researchers & Authors of the Study
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Fieldwork investigation conducted by student researchers across academic faculties: Film &amp; Television cohort led by <strong>Alejandra Cruz</strong> &amp; <strong>Melany Casas</strong>, Architecture cohort led by <strong>María Fernanda Rodríguez</strong> &amp; <strong>Helen Sofía Molina</strong>, Engineering cohort led by <strong>Jorge Bustos</strong> &amp; <strong>Andres Parra</strong>, Hospitality &amp; Tourism cohort led by <strong>Valerin Sophia Conde Hernández</strong> &amp; <strong>Tania Sarah Candela Ruiz</strong>, Gastronomy cohort led by <strong>Ana Paula Manrique</strong> &amp; <strong>Carol Tatiana Caro</strong>, Law cohort led by <strong>Anamaria Rocha</strong> &amp; <strong>Sandra Lorena Salazar</strong>, and International Business cohort led by <strong>Isaac Pinilla</strong> &amp; <strong>Carlos Marin</strong> as part of the <strong>{metadata.program}</strong> at <strong>{metadata.university}</strong> (Bogotá, Colombia). This exploratory study connects pedagogical training with authentic academic realities.
          </p>
        </div>
      </div>

      {/* Team Members Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {interviewers.map((member) => {
          const isLead = 
            member.name.includes('Alejandra Cruz') || 
            member.name.includes('Melany Casas') ||
            member.name.includes('María Fernanda Rodríguez') ||
            member.name.includes('Helen Sofía Molina') ||
            member.name.includes('Jorge Bustos') ||
            member.name.includes('Andres Parra') ||
            member.name.includes('Valerin Sophia Conde') ||
            member.name.includes('Tania Sarah Candela') ||
            member.name.includes('Ana Paula Manrique') ||
            member.name.includes('Carol Tatiana Caro') ||
            member.name.includes('Anamaria Rocha') ||
            member.name.includes('Sandra Lorena Salazar') ||
            member.name.includes('Isaac Pinilla') ||
            member.name.includes('Carlos Marin');

          return (
            <div
              key={member.id}
              className={`bg-white rounded-xl p-5 border shadow-xs flex flex-col justify-between transition-all ${
                isLead
                  ? 'border-amber-400 ring-2 ring-amber-400/30'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 font-bold text-base flex items-center justify-center shrink-0 shadow-xs">
                      {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        {member.name}
                      </h3>
                      <span className="text-xs font-medium text-amber-700 block">
                        {member.role}
                      </span>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{member.campus}</span>
                        <span aria-hidden="true">·</span>
                        <span>{member.semester}</span>
                      </div>
                    </div>
                  </div>

                  {isLead && (
                    <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-300 shrink-0 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>Lead Author</span>
                    </span>
                  )}
                </div>

                {/* Reflection */}
                <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200/80 text-xs text-slate-700 space-y-1">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-900">
                    <Quote className="w-3 h-3 text-amber-600" />
                    <span>Pedagogical & Fieldwork Reflection:</span>
                  </div>
                  <p className="italic text-slate-600 leading-relaxed text-[11px]">
                    "{member.reflection}"
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center gap-1 text-xs text-slate-500">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">{member.email}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fieldwork Protocol & Methodology */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Methodological Design */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <h3 className="font-bold text-slate-900 text-sm">
              Fieldwork Research Protocol
            </h3>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">1. Research Instrument Design:</span>
              <p className="text-slate-600 leading-relaxed">
                8 standardized questions designed to explore vocational motivation, course satisfaction, spatial attachment, internship realities (RCN/Caracol), mascot care, and internationalization.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">2. Fieldwork Execution:</span>
              <p className="text-slate-600 leading-relaxed">
                Interviews conducted on Campus Tagaste, UniAgustiniana, with student consent, verbatim transcription, and qualitative assessment of communicative English proficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Supervision & Ethical Safeguards */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-sm">
              Academic Supervision & Data Ethics
            </h3>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">Academic Integrity:</span>
              <p className="text-slate-600 leading-relaxed">
                Conducted within the curricular framework of the Bachelor’s Degree in Foreign Languages at Universitaria Agustiniana. All responses represent authentic, unedited student testimonies.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-slate-900 block">Student Codes & Institutional Archiving:</span>
              <p className="text-slate-600 leading-relaxed">
                Participant records include verified institutional IDs for academic reproducibility and defense before the evaluation committee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
