import React, { useState } from 'react';
import { Question, InterviewedStudent } from '../types';
import { 
  Table2, 
  Search, 
  Maximize2, 
  X, 
  FileSpreadsheet, 
  ExternalLink,
  Hash,
  Clapperboard,
  Compass,
  Cpu,
  Layers,
  Scale,
  UtensilsCrossed,
  Palmtree
} from 'lucide-react';
import { careerProgramsRegistry } from '../data/initialData';

interface FullMatrixViewProps {
  questions: Question[];
  students: InterviewedStudent[];
  onSelectStudent: (studentId: string) => void;
  onSelectQuestion: (questionId: number) => void;
}

export const FullMatrixView: React.FC<FullMatrixViewProps> = ({
  questions,
  students,
  onSelectStudent,
  onSelectQuestion
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCareerMatrix, setSelectedCareerMatrix] = useState<string>('all');
  const [activeCell, setActiveCell] = useState<{
    question: Question;
    student: InterviewedStudent;
    answer: string;
  } | null>(null);

  const filteredStudents = selectedCareerMatrix === 'all'
    ? students
    : students.filter((s) => s.career === selectedCareerMatrix);

  const displayQuestions = (selectedCareerMatrix !== 'all' && careerProgramsRegistry[selectedCareerMatrix]?.questions)
    ? careerProgramsRegistry[selectedCareerMatrix].questions
    : questions;

  // Export to CSV function including student code
  const handleExportCSV = () => {
    const headers = ['Code', 'Question', 'Category', ...filteredStudents.map((s) => `"${s.name} (Code: ${s.studentCode} - ${s.career})"` )];
    const rows = displayQuestions.map((q) => {
      const answers = filteredStudents.map((s) => `"${(s.answers[q.id] || '').replace(/"/g, '""')}"`);
      return [`"${q.code}"`, `"${q.title.replace(/"/g, '""')}"`, `"${q.category}"`, ...answers].join(',');
    });

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `UniAgustiniana_Fieldwork_Research_Matrix.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Matrix Controls & Search */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Table2 className="w-5 h-5 text-amber-600" />
            <span>Cross-Data Matrix: {displayQuestions.length} Questions × {filteredStudents.length} Students</span>
          </h2>
          <p className="text-xs text-slate-500">
            Panoramic spreadsheet of all {displayQuestions.length * filteredStudents.length} recorded fieldwork answers with student codes
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts or words..."
              className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-slate-400 focus:bg-white w-48 sm:w-64"
            />
          </div>

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            title="Download matrix as Excel (.csv)"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Program Cohort Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
        <span className="text-xs font-semibold text-slate-700 px-1">Cohort Matrix View:</span>
        <button
          onClick={() => setSelectedCareerMatrix('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
            selectedCareerMatrix === 'all'
              ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>All Programs ({students.length})</span>
        </button>
        <button
          onClick={() => setSelectedCareerMatrix('Film and Television (Cine y Televisión)')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
            selectedCareerMatrix === 'Film and Television (Cine y Televisión)'
              ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Clapperboard className="w-3.5 h-3.5" />
          <span>Film &amp; Television (8)</span>
        </button>
        <button
          onClick={() => setSelectedCareerMatrix('Architecture (Arquitectura)')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
            selectedCareerMatrix === 'Architecture (Arquitectura)'
              ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Architecture (8)</span>
        </button>
        <button
          onClick={() => setSelectedCareerMatrix('Engineering (Ingenierías)')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
            selectedCareerMatrix === 'Engineering (Ingenierías)'
              ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Engineering (8)</span>
        </button>
        <button
          onClick={() => setSelectedCareerMatrix('Hospitality and Tourism (Hotelería y Turismo)')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
            selectedCareerMatrix === 'Hospitality and Tourism (Hotelería y Turismo)'
              ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Palmtree className="w-3.5 h-3.5" />
          <span>Tourism (8)</span>
        </button>
        <button
          onClick={() => setSelectedCareerMatrix('Gastronomy (Gastronomía)')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
            selectedCareerMatrix === 'Gastronomy (Gastronomía)'
              ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>Gastronomy (10)</span>
        </button>
        <button
          onClick={() => setSelectedCareerMatrix('Law (Derecho)')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
            selectedCareerMatrix === 'Law (Derecho)'
              ? 'bg-slate-900 text-amber-400 shadow-xs ring-1 ring-amber-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Scale className="w-3.5 h-3.5" />
          <span>Law (9)</span>
        </button>
      </div>

      {/* Cross Table Container */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto max-h-[750px] no-scrollbar">
          <table className="w-full text-left border-collapse text-xs">
            <thead className="bg-slate-900 text-white sticky top-0 z-20 shadow-xs">
              <tr>
                <th className="p-3.5 font-bold uppercase tracking-wider text-[11px] w-64 min-w-[240px] border-r border-slate-800">
                  Research Question
                </th>
                {filteredStudents.map((student) => (
                  <th
                    key={student.id}
                    className="p-3 font-semibold text-[11px] min-w-[220px] border-r border-slate-800 last:border-r-0 hover:bg-slate-800 transition-colors cursor-pointer"
                    onClick={() => onSelectStudent(student.id)}
                    title={`View profile of ${student.name}`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className={`w-5 h-5 rounded ${student.avatarColor} text-white font-bold text-[10px] flex items-center justify-center shrink-0`}>
                          {student.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                        </div>
                        <span className="font-bold text-white truncate">{student.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-amber-300 font-bold bg-slate-800/80 px-1.5 py-0.5 rounded w-fit mb-0.5">
                      <Hash className="w-2.5 h-2.5" />
                      <span>{student.studentCode}</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-normal truncate">
                      {student.career.split(' (')[0]} · {student.semester}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {displayQuestions.map((question, qIdx) => {
                const isEven = qIdx % 2 === 0;
                return (
                  <tr
                    key={question.id}
                    className={`${isEven ? 'bg-white' : 'bg-slate-50/50'} hover:bg-amber-50/30 transition-colors`}
                  >
                    {/* Question Column */}
                    <td className="p-3.5 align-top border-r border-slate-200 bg-inherit sticky left-0 z-10 shadow-xs">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => onSelectQuestion(question.id)}
                            className="w-5 h-5 rounded bg-slate-900 text-amber-400 font-bold text-[10px] flex items-center justify-center hover:bg-amber-600 hover:text-slate-950 transition-colors"
                            title="Compare this question"
                          >
                            {question.code}
                          </button>
                          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                            {question.category}
                          </span>
                        </div>
                        <p
                          onClick={() => onSelectQuestion(question.id)}
                          className="font-medium text-slate-900 hover:text-amber-800 cursor-pointer line-clamp-2"
                        >
                          {question.title}
                        </p>
                      </div>
                    </td>

                    {/* Answers for each student */}
                    {filteredStudents.map((student) => {
                      const answer = student.answers[question.id] || 'No answer recorded.';
                      const isHighlighted =
                        searchQuery.trim().length > 1 &&
                        answer.toLowerCase().includes(searchQuery.toLowerCase());

                      return (
                        <td
                          key={student.id}
                          className={`p-3 align-top border-r border-slate-200 last:border-r-0 hover:bg-amber-100/40 cursor-pointer transition-colors relative group ${
                            isHighlighted ? 'bg-amber-100 font-semibold text-slate-950 ring-2 ring-amber-400' : ''
                          }`}
                          onClick={() =>
                            setActiveCell({
                              question,
                              student,
                              answer
                            })
                          }
                          title="Click to expand response"
                        >
                          <p className="line-clamp-4 leading-relaxed text-[11px] text-slate-600 group-hover:text-slate-900">
                            {answer}
                          </p>

                          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-1 right-1 bg-slate-900/80 text-white rounded p-1 text-[9px] flex items-center gap-1">
                            <Maximize2 className="w-2.5 h-2.5" />
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expanded Modal */}
      {activeCell && (
        <div className="fixed inset-0 bg-slate-950/60 z-50 flex items-center justify-center p-4 backdrop-blur-2xs">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold mb-1">
                  <span>{activeCell.question.code}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeCell.question.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono bg-amber-50 text-amber-900 px-1.5 py-0.2 rounded border border-amber-200">
                    ID: {activeCell.student.studentCode}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  {activeCell.question.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCell(null)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-500">
                <div className={`w-6 h-6 rounded ${activeCell.student.avatarColor} text-white font-bold text-[10px] flex items-center justify-center`}>
                  {activeCell.student.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <span className="font-bold text-slate-900">{activeCell.student.name}</span>
                <span aria-hidden="true">·</span>
                <span>{activeCell.student.career}</span>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 text-xs text-slate-800 leading-relaxed border border-slate-200/70">
                "{activeCell.answer}"
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  onSelectStudent(activeCell.student.id);
                  setActiveCell(null);
                }}
                className="text-xs text-amber-700 font-semibold hover:underline flex items-center gap-1"
              >
                <span>View full student dossier</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setActiveCell(null)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
