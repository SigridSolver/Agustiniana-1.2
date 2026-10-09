import React from 'react';
import { ProjectMetadata, ViewTab } from '../types';
import { GraduationCap, Printer, Sparkles, MapPin } from 'lucide-react';

interface HeaderProps {
  metadata: ProjectMetadata;
  activeTab: ViewTab;
  onTabChange: (tab: ViewTab) => void;
  onPrintReport: () => void;
  onOpenEditor: () => void;
  questionsCount: number;
  studentsCount: number;
  careersCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  metadata,
  activeTab,
  onTabChange,
  onPrintReport,
  onOpenEditor,
  questionsCount,
  studentsCount,
  careersCount
}) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-sm print:hidden">
      {/* Institutional Top Bar */}
      <div className="bg-slate-950/80 px-4 py-1.5 text-xs text-slate-300 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-amber-400 tracking-wide uppercase">
              {metadata.university}
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline">
              {metadata.program}
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {metadata.city}
            </span>
            <span className="text-slate-600">·</span>
            <span>{metadata.term}</span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 sm:py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-bold shrink-0 shadow-md">
              <GraduationCap className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-medium text-amber-400">
                  Classroom Fieldwork Research
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400">
                  {careersCount} Majors · {studentsCount} Students · {questionsCount} Questions
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                {metadata.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5 line-clamp-1">
                {metadata.subtitle}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 self-start md:self-center shrink-0">
            <button
              onClick={onPrintReport}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-md border border-slate-700 transition-colors"
              title="View printable formal academic report"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Academic Report (PDF)</span>
            </button>
            <button
              onClick={onOpenEditor}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-300 bg-amber-950/60 hover:bg-amber-900/80 rounded-md border border-amber-700/60 transition-colors"
              title="Customize questions, answers, or names with your real interview data"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Edit Data</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
