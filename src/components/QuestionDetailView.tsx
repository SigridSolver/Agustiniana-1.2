import { answerDistribution } from '../data/research';
import React, { useState } from 'react';
import { Question, InterviewedStudent } from '../types';
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  SplitSquareVertical, 
  Sparkles, 
  GraduationCap, 
  Quote
} from 'lucide-react';

interface QuestionDetailViewProps {
  questions: Question[];
  students: InterviewedStudent[];
  selectedQuestionId: number;
  onSelectQuestionId: (id: number) => void;
  onSelectStudent: (studentId: string) => void;
}

export const QuestionDetailView: React.FC<QuestionDetailViewProps> = ({
  questions,
  students,
  selectedQuestionId,
  onSelectQuestionId,
  onSelectStudent
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCampus, setSelectedCampus] = useState<'all' | 'Tagaste Campus'>('all');
  const [compareMode, setCompareMode] = useState(false);
  const [compareStudentA, setCompareStudentA] = useState<string>(students[0]?.id || '');
  const [compareStudentB, setCompareStudentB] = useState<string>(students[1]?.id || '');

  const currentQuestion = questions.find((q) => q.id === selectedQuestionId) || questions[0];
  const currentIndex = questions.findIndex((q) => q.id === selectedQuestionId);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectQuestionId(questions[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      onSelectQuestionId(questions[currentIndex + 1].id);
    }
  };

  // Filter students based on search and campus
  const filteredStudents = students.filter((student) => {
    const answer = student.answers[currentQuestion.id] || '';
    const matchesSearch = 
      searchQuery === '' ||
      answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.career.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCampus = 
      selectedCampus === 'all' || student.campus === selectedCampus;

    return matchesSearch && matchesCampus;
  });

  const studentA = students.find((s) => s.id === compareStudentA) || students[0];
  const studentB = students.find((s) => s.id === compareStudentB) || students[1];

  return (
    <div className="space-y-6 pb-12">
      {/* 11 Questions Quick Selector Tabs */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2 px-1">
          <span className="font-semibold text-slate-700">Questions Directory (1 to {questions.length}):</span>
          <span>Question {currentIndex + 1} of {questions.length}</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {questions.map((q) => {
            const isSelected = q.id === selectedQuestionId;
            return (
              <button
                key={q.id}
                onClick={() => onSelectQuestionId(q.id)}
                className={`px-3 py-2 text-xs font-medium rounded-lg shrink-0 transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-slate-900 text-amber-400 font-bold shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60'
                }`}
              >
                <span>{q.code}</span>
                <span className="hidden md:inline font-normal text-[11px] truncate max-w-[130px]">
                  {q.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Question Header Card */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {currentQuestion.code}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-slate-700">{currentQuestion.category}</span>
              <span aria-hidden="true">·</span>
              <span>{students.length} participants</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              {currentQuestion.title}
            </h2>

            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200/70 text-xs text-slate-700 space-y-1">
              <span className="font-semibold text-slate-900 block">
                Pedagogical & Research Objective:
              </span>
              <p className="text-slate-600 leading-relaxed">
                {currentQuestion.academicObjective}
              </p>
            </div>
          </div>

          {/* Navigation Prev/Next controls */}
          <div className="flex items-center gap-2 shrink-0 self-start">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Previous question"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === questions.length - 1}
              className="p-2 rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Next question"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Synthesis / Pattern Insight */}
        <div className="mt-4 pt-4 flex items-start gap-3 text-xs bg-amber-50/60 rounded-lg p-3.5 border border-amber-200/60">
          <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-900 block mb-0.5">
              Original Program Source Summary:
            </span>
            <p className="text-amber-950 leading-relaxed">
              {currentQuestion.summaryInsight}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
          <h3 className="text-sm font-bold">Current Response Distribution</h3>
          <p className="text-xs text-slate-500">Grouped by identical answer text for the selected program and filters.</p>
          {answerDistribution(filteredStudents, currentQuestion.id).map(group => {
            const denominator = filteredStudents.filter(s => s.answers[currentQuestion.id]?.trim()).length;
            const pct = denominator ? group.students.length / denominator * 100 : 0;
            return <div key={group.answer} className="text-xs space-y-1">
              <p>{group.answer}</p>
              <div className="flex justify-between text-slate-500"><span>{group.students.length} / {denominator} ({pct.toFixed(1)}%)</span></div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-amber-500" style={{ width: `${pct}%` }} /></div>
            </div>;
          })}
        </div>
      </div>

      {/* Control Bar: Search, Campus Filter, Comparison Mode */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts or words in student answers..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-slate-400 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Campus Selector */}
          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-xs">
            <button
              onClick={() => setSelectedCampus('all')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                selectedCampus === 'all'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Campuses
            </button>
            <button
              onClick={() => setSelectedCampus('Tagaste Campus')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                selectedCampus === 'Tagaste Campus'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tagaste
            </button>

          </div>

          {/* Toggle Direct Comparison Mode */}
          <button
            onClick={() => setCompareMode(!compareMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              compareMode
                ? 'bg-amber-600 text-white border-amber-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <SplitSquareVertical className="w-3.5 h-3.5" />
            <span>{compareMode ? 'View All Majors' : 'Compare 2 Majors'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {compareMode ? (
        /* Direct 2-Major Side-by-Side Comparison Mode */
        <div className="space-y-4">
          <div className="bg-amber-50/70 border border-amber-200 p-3 rounded-lg text-xs text-amber-900 flex items-center justify-between">
            <span>
              Side-by-Side Mode: Compare how two different disciplines answered this exact question.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column A */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Select Major A:
                </label>
                <select
                  value={compareStudentA}
                  onChange={(e) => setCompareStudentA(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-800 focus:outline-hidden focus:border-slate-400 font-medium"
                >
                  {students.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.career} — {s.name} ({s.semester})
                    </option>
                  ))}
                </select>
              </div>

              {studentA && (
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg ${studentA.avatarColor} text-white font-bold flex items-center justify-center text-xs shrink-0`}>
                      {studentA.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-slate-900">{studentA.name}</h4>
                        <span className="font-mono text-[10px] text-amber-900 bg-amber-50 px-1 rounded border border-amber-200 font-bold">
                          ID: {studentA.studentCode}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">{studentA.career} · {studentA.campus}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4 text-xs text-slate-800 leading-relaxed border border-slate-200/80">
                    <span className="font-semibold text-slate-900 block mb-1.5">Direct Answer:</span>

                    "{studentA.answers[currentQuestion.id] || 'No recorded answer.'}"
                  </div>

                  <div className="text-[11px] text-slate-500 italic bg-amber-50/40 p-2.5 rounded border border-amber-200/50">
                    Representative Quote: "{studentA.highlightQuote}"
                  </div>

                  <button
                    onClick={() => onSelectStudent(studentA.id)}
                    className="text-xs text-amber-700 font-semibold hover:underline"
                  >
                    View full profile of {studentA.name} →
                  </button>
                </div>
              )}
            </div>

            {/* Column B */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Select Major B:
                </label>
                <select
                  value={compareStudentB}
                  onChange={(e) => setCompareStudentB(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-800 focus:outline-hidden focus:border-slate-400 font-medium"
                >
                  {students.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.career} — {s.name} ({s.semester})
                    </option>
                  ))}
                </select>
              </div>

              {studentB && (
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg ${studentB.avatarColor} text-white font-bold flex items-center justify-center text-xs shrink-0`}>
                      {studentB.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-slate-900">{studentB.name}</h4>
                        <span className="font-mono text-[10px] text-amber-900 bg-amber-50 px-1 rounded border border-amber-200 font-bold">
                          ID: {studentB.studentCode}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">{studentB.career} · {studentB.campus}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4 text-xs text-slate-800 leading-relaxed border border-slate-200/80">
                    <span className="font-semibold text-slate-900 block mb-1.5">Direct Answer:</span>

                    "{studentB.answers[currentQuestion.id] || 'No recorded answer.'}"
                  </div>

                  <div className="text-[11px] text-slate-500 italic bg-amber-50/40 p-2.5 rounded border border-amber-200/50">
                    Representative Quote: "{studentB.highlightQuote}"
                  </div>

                  <button
                    onClick={() => onSelectStudent(studentB.id)}
                    className="text-xs text-amber-700 font-semibold hover:underline"
                  >
                    View full profile of {studentB.name} →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* All 9 Majors Grid View */
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>Showing {filteredStudents.length} of {students.length} participants</span>
            {searchQuery && (
              <span className="text-amber-700 font-medium">
                Active search: "{searchQuery}"
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStudents.map((student) => {
              const answer = student.answers[currentQuestion.id] || 'No answer recorded.';
              return (
                <div
                  key={student.id}
                  className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Student Identification */}
                    <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg ${student.avatarColor} text-white font-bold flex items-center justify-center text-xs shrink-0`}
                        >
                          {student.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900">
                            {student.name}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="font-mono text-[10px] text-amber-900 bg-amber-50 px-1 py-0.2 rounded border border-amber-200 font-bold">
                              ID: {student.studentCode}
                            </span>
                            <span className="text-[11px] font-medium text-slate-600 truncate max-w-[120px]">
                              {student.career.split(' (')[0]}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-700 block">{student.semester}</span>
                        <span>{student.campus.replace(' Campus', '')}</span>
                      </div>
                    </div>

                    {/* The Actual Response */}
                    <div className="text-xs text-slate-700 leading-relaxed bg-slate-50/70 p-3.5 rounded-lg border border-slate-100">
                      "{answer}"
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">
                      {student.age === null ? 'Age not provided' : `${student.age} yrs`} · {student.campus}
                    </span>

                    <button
                      onClick={() => onSelectStudent(student.id)}
                      className="text-amber-700 font-medium hover:text-amber-900 transition-colors text-xs flex items-center gap-1"
                    >
                      <span>All {questions.length} answers</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredStudents.length === 0 && (
            <div className="bg-white rounded-xl p-8 text-center text-xs text-slate-500 border border-slate-200">
              No student answers match the search query "{searchQuery}".
            </div>
          )}
        </div>
      )}
    </div>
  );
};
