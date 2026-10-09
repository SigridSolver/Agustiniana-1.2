import React, { useState } from 'react';
import { InterviewedStudent, Question } from '../types';
import { careerProgramsRegistry } from '../data/initialData';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Volume2, 
  Play, 
  Pause, 
  Quote, 
  ArrowRight,
  Sparkles,
  Hash,
  Award,
  ChefHat,
  GraduationCap
} from 'lucide-react';

interface StudentProfileViewProps {
  students: InterviewedStudent[];
  questions: Question[];
  selectedStudentId: string;
  onSelectStudentId: (id: string) => void;
  onSelectQuestion: (questionId: number) => void;
}

export const StudentProfileView: React.FC<StudentProfileViewProps> = ({
  students,
  questions,
  selectedStudentId,
  onSelectStudentId,
  onSelectQuestion
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [careerFilter, setCareerFilter] = useState<'all' | 'film' | 'architecture' | 'engineering' | 'tourism' | 'gastronomy' | 'law'>('all');

  const currentStudent = students.find((s) => s.id === selectedStudentId) || students[0];
  const currentIndex = students.findIndex((s) => s.id === selectedStudentId);

  const displayStudents = students.filter((s) => {
    if (careerFilter === 'film') return s.career.includes('Cine');
    if (careerFilter === 'architecture') return s.career.includes('Arquitectura');
    if (careerFilter === 'engineering') return s.career.includes('Ingenier');
    if (careerFilter === 'tourism') return s.career.includes('Hotelería') || s.career.includes('Hospitality');
    if (careerFilter === 'gastronomy') return s.career.includes('Gastronom');
    if (careerFilter === 'law') return s.career.includes('Derecho') || s.career.includes('Law');
    return true;
  });

  const programData = currentStudent ? careerProgramsRegistry[currentStudent.career] : null;
  const studentQuestions = programData?.questions || questions;

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectStudentId(students[currentIndex - 1].id);
      setIsPlayingAudio(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < students.length - 1) {
      onSelectStudentId(students[currentIndex + 1].id);
      setIsPlayingAudio(false);
    }
  };

  if (!currentStudent) {
    return (
      <div className="bg-white rounded-xl p-8 border border-slate-200 text-center text-sm text-slate-500">
        No student profile selected.
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Students Horizontal Selector Bar */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs space-y-2.5">
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 px-1 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Interviewed Students ({students.length} Total):</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCareerFilter('all')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  careerFilter === 'all'
                    ? 'bg-slate-900 text-amber-400 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All ({students.length})
              </button>
              <button
                onClick={() => setCareerFilter('film')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  careerFilter === 'film'
                    ? 'bg-slate-900 text-amber-400 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Film &amp; TV (8)
              </button>
              <button
                onClick={() => setCareerFilter('architecture')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  careerFilter === 'architecture'
                    ? 'bg-slate-900 text-amber-400 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Architecture (8)
              </button>
              <button
                onClick={() => setCareerFilter('engineering')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  careerFilter === 'engineering'
                    ? 'bg-slate-900 text-amber-400 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Engineering (8)
              </button>
              <button
                onClick={() => setCareerFilter('tourism')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  careerFilter === 'tourism'
                    ? 'bg-slate-900 text-amber-400 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Tourism (8)
              </button>
              <button
                onClick={() => setCareerFilter('gastronomy')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors flex items-center gap-1 ${
                  careerFilter === 'gastronomy'
                    ? 'bg-slate-900 text-amber-400 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>Gastronomy (10)</span>
              </button>
              <button
                onClick={() => setCareerFilter('law')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors flex items-center gap-1 ${
                  careerFilter === 'law'
                    ? 'bg-slate-900 text-amber-400 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>Law (9)</span>
              </button>
            </div>
          </div>
          <span>Student {currentIndex + 1} of {students.length}</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {displayStudents.map((student) => {
            const isSelected = student.id === selectedStudentId;
            const isTeacher = student.isTeacher || student.studentCode === 'DOCENTE';

            return (
              <button
                key={student.id}
                onClick={() => {
                  onSelectStudentId(student.id);
                  setIsPlayingAudio(false);
                }}
                className={`p-2.5 rounded-lg text-left transition-all flex flex-col justify-between border relative ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs ring-2 ring-amber-400'
                    : isTeacher
                    ? 'bg-amber-50 hover:bg-amber-100/80 text-slate-900 border-amber-300 ring-1 ring-amber-400/40'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/60'
                }`}
              >
                <div className="flex items-center justify-between gap-1.5 mb-1.5">
                  <div
                    className={`w-6 h-6 rounded-md ${student.avatarColor} text-white font-bold text-[10px] flex items-center justify-center shrink-0`}
                  >
                    {student.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${
                    isTeacher
                      ? 'bg-amber-400 text-slate-950 px-1 py-0.2 rounded font-black'
                      : isSelected ? 'text-amber-300' : 'text-slate-600'
                  }`}>
                    {isTeacher ? 'DOCENTE' : student.studentCode}
                  </span>
                </div>
                <div className="min-w-0">
                  <span className={`block text-xs font-bold truncate leading-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {student.name}
                  </span>
                  <span className={`block text-[10px] truncate ${isSelected ? 'text-slate-300' : isTeacher ? 'text-amber-800 font-semibold' : 'text-slate-500'}`}>
                    {isTeacher ? 'Docente' : `${student.perceivedEnglishLevel.split(' - ')[0]} · ${student.semester}`}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Student Profile Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 sm:p-7 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4">
              <div
                className={`w-16 h-16 rounded-xl ${currentStudent.avatarColor} text-white font-bold text-xl flex items-center justify-center shadow-md border-2 border-white/20 shrink-0`}
              >
                {currentStudent.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>

              <div className="space-y-1.5">
                {currentStudent.isTeacher && (
                  <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded-md shadow-sm uppercase tracking-wider">
                    <ChefHat className="w-3.5 h-3.5" />
                    <span>DOCENTE DESTACADA · PERSPECTIVA PROFESORAL</span>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2 text-xs text-amber-300">
                  <span className="font-semibold">{currentStudent.faculty}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {currentStudent.campus}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {currentStudent.name}
                  </h2>
                  <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-mono text-xs px-2.5 py-1 rounded-md font-bold shadow-xs">
                    {currentStudent.isTeacher ? (
                      <>
                        <ChefHat className="w-3.5 h-3.5" />
                        <span className="font-sans font-black">ROL: DOCENTE TITULAR</span>
                      </>
                    ) : (
                      <>
                        <Hash className="w-3.5 h-3.5" />
                        <span>Student ID: {currentStudent.studentCode}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  <span className="text-amber-400 font-semibold text-sm">
                    {currentStudent.career}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{currentStudent.semester}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentStudent.age === null ? 'Age not provided' : `${currentStudent.age} years old`}</span>
                </div>
              </div>
            </div>

            {/* Prev/Next buttons */}
            <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-2 rounded-md bg-slate-800/80 hover:bg-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Previous student"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === students.length - 1}
                className="p-2 rounded-md bg-slate-800/80 hover:bg-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Next student"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Meta Row */}
          <div className="mt-6 pt-4 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Target Major:</span>
                <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded font-semibold">
                  {currentStudent.career}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Interviewer-Assessed Level:</span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 px-2.5 py-0.5 rounded font-bold">
                  {currentStudent.perceivedEnglishLevel}
                </span>
              </div>
            </div>

            {/* Simulated Audio Player */}
            <div className="flex items-center gap-3 bg-slate-800/90 px-3 py-1.5 rounded-lg border border-slate-700">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-6 h-6 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center transition-colors shadow-xs"
                title="Simulate interview audio playback"
              >
                {isPlayingAudio ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5 ml-0.5" />
                )}
              </button>
              <div className="flex items-center gap-2 text-[11px] text-slate-300">
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {isPlayingAudio ? 'Playing interview audio snippet...' : 'Interview audio track:'}
                </span>
                <span className="font-mono text-amber-400">{currentStudent.audioTime || '03:45 min'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Highlight Quote Banner */}
        <div className="bg-amber-50/70 border-b border-amber-200/80 p-4 sm:p-5 flex items-start gap-3">
          <Quote className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-800 block mb-0.5">
              {currentStudent.isTeacher ? 'Perspectiva Pedagógica & Reflexión Docente:' : 'Highlight Quote from Fieldwork Interview:'}
            </span>
            <p className="text-sm font-medium text-slate-800 italic leading-relaxed">
              "{currentStudent.highlightQuote}"
            </p>
          </div>
        </div>

        {/* Responses Dossier */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {programData?.sharedAnswers ? 'Program-Level Fieldwork Responses' : 'Complete Fieldwork Interview Dossier'} ({studentQuestions.length} Questions)
              </h3>
              <p className="text-xs text-slate-500">
                {programData?.sourceNote || `Faithful transcription and categorization of answers provided by ${currentStudent.name} (ID: ${currentStudent.studentCode})`}
              </p>
            </div>
            <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1 rounded">
              {programData?.sharedAnswers ? `${studentQuestions.length} program-level responses` : `${Object.keys(currentStudent.answers).length} of ${studentQuestions.length} questions completed`}
            </span>
          </div>

          <div className="space-y-4">
            {studentQuestions.map((question) => {
              const answer = programData?.sharedAnswers?.[question.id] || currentStudent.answers[question.id] || 'Answer not recorded.';
              return (
                <div
                  key={question.id}
                  className="bg-slate-50/70 rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:border-slate-300 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {question.code}
                      </span>
                      <div>
                        <span className="text-[11px] font-medium text-slate-500 block">
                          {question.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                          {question.title}
                        </h4>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectQuestion(question.id)}
                      className="text-amber-700 hover:text-amber-900 text-[11px] font-medium self-end sm:self-start shrink-0 flex items-center gap-1 hover:underline"
                    >
                      <span>Compare question</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="mt-3 pl-8 text-xs text-slate-700 leading-relaxed border-l-2 border-slate-300">
                    "{answer}"
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
