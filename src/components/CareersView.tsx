import React, { useState } from 'react';
import { InterviewedStudent, Question } from '../types';
import { 
  GraduationCap, 
  Users, 
  Award, 
  MapPin, 
  Plus, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  Sparkles,
  BookOpen,
  ChevronRight,
  Hash,
  Clapperboard,
  Compass,
  Cpu,
  Code2,
  Camera,
  Tv,
  Film,
  Play,
  ExternalLink,
  Palmtree,
  Hotel,
  UtensilsCrossed,
  ChefHat,
  Scale,
  Globe2,
  ChevronDown,
  ChevronUp,
  BarChart3
} from 'lucide-react';
import { universityCareersList, careerProgramsRegistry } from '../data/initialData';
import { metrics, questionsFor, answerDistribution, careerNames } from '../data/research';

interface CareersViewProps {
  students: InterviewedStudent[];
  questions: Question[];
  selectedCareer?: string;
  onSelectStudent: (studentId: string) => void;
  onSelectQuestion: (questionId: number, career?: string) => void;
  onAddNewStudentToCareer: (career: string) => void;
}

export const CareersView: React.FC<CareersViewProps> = ({
  students,
  questions,
  selectedCareer: initialSelectedCareer,
  onSelectStudent,
  onSelectQuestion,
  onAddNewStudentToCareer
}) => {
  // Use all university careers
  const sortedCareers = careerNames(students);

  const [activeCareer, setActiveCareer] = useState<string>(
    initialSelectedCareer && sortedCareers.includes(initialSelectedCareer)
      ? initialSelectedCareer
      : sortedCareers[0] || 'Film and Television (Cine y Televisión)'
  );

  const [activeStudentId, setActiveStudentId] = useState<string>('');
  const [isSurveyExpanded, setIsSurveyExpanded] = useState<boolean>(true);

  // Lookup program configuration
  const programData = careerProgramsRegistry[activeCareer];
  const careerQuestions = questionsFor(activeCareer, questions);
  const careerVideo = programData?.video || null;

  const isCine = activeCareer.includes('Cine');
  const isArch = activeCareer.includes('Arquitectura');
  const isEng = activeCareer.includes('Ingenier');
  const isTour = activeCareer.includes('Hotelería') || activeCareer.includes('Hospitality');
  const isGastro = activeCareer.includes('Gastronom');
  const isLaw = activeCareer.includes('Derecho') || activeCareer.includes('Law');
  const isIB = activeCareer.includes('Negocios') || activeCareer.includes('Business');

  // Filter students belonging to active career
  const careerStudents = students.filter((s) => s.career === activeCareer);
  const currentStudent = careerStudents.find((s) => s.id === activeStudentId) || careerStudents[0];
  const totals = metrics(careerStudents, questions);
  const careerHighlights = { title: 'Current Cohort Overview', cards: [
    { label: 'Participants', primary: String(totals.participants), secondary: `${totals.students} students · ${totals.teachers} faculty`, highlightColor: '' },
    { label: 'Responses', primary: String(totals.answers), secondary: `${totals.expected} applicable questions`, highlightColor: '' },
    { label: 'Questions', primary: String(careerQuestions.length), secondary: 'Program questionnaire', highlightColor: '' },
    { label: 'Completion', primary: `${totals.completion}%`, secondary: `${totals.missing} answers missing`, highlightColor: '' },
  ] };
  const surveyBreakdown = careerQuestions.map(q => {
    const groups = answerDistribution(careerStudents, q.id);
    const totalVotes = groups.reduce((sum, group) => sum + group.students.length, 0);
    return { number: q.id, question: q.title, category: q.category, totalVotes, options: groups.map(group => ({
      label: group.answer, votes: group.students.length,
      pct: `${totalVotes ? (group.students.length / totalVotes * 100).toFixed(1) : 0}%`, color: 'bg-emerald-600',
    })) };
  });

  // Calculate Interviewer-Assessed English Level distribution for this major
  const levelCounts: Record<string, number> = {
    'A1': 0,
    'A2': 0,
    'B1': 0,
    'B2': 0
  };

  careerStudents.forEach((s) => {
    if (s.perceivedEnglishLevel.startsWith('A1')) levelCounts['A1']++;
    else if (s.perceivedEnglishLevel.startsWith('A2')) levelCounts['A2']++;
    else if (s.perceivedEnglishLevel.startsWith('B1')) levelCounts['B1']++;
    else if (s.perceivedEnglishLevel.startsWith('B2')) levelCounts['B2']++;
  });

  const maxCohort = Math.max(careerStudents.length, 8);
  const canAddMore = careerStudents.length < 12;

  return (
    <div className="space-y-6 pb-12">
      {/* Career Selector Tabs (Dedicated tab for each career) */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2 px-1">
          <span className="font-semibold text-slate-700">
            University Degree Programs ({sortedCareers.length} Careers):
          </span>
          <span className="text-[11px] text-amber-700 font-medium">
            Select a career tab to explore its participants and fieldwork
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {sortedCareers.map((career) => {
            const isSelected = career === activeCareer;
            const count = students.filter((s) => s.career === career).length;
            const shortName = career.split(' (')[0];
            const program = careerProgramsRegistry[career];
            const hasVideo = !!program?.video;
            const careerIsCine = career.includes('Cine');
            const careerIsArch = career.includes('Arquitectura');
            const careerIsEng = career.includes('Ingenier');
            const careerIsTour = career.includes('Hotelería') || career.includes('Hospitality');
            const careerIsGastro = career.includes('Gastronom');
            const careerIsLaw = career.includes('Derecho') || career.includes('Law');

            return (
              <button
                key={career}
                onClick={() => {
                  setActiveCareer(career);
                  setActiveStudentId('');
                }}
                className={`px-3 py-2 text-xs font-semibold rounded-lg shrink-0 transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-xs ring-2 ring-amber-400'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border-slate-200/70'
                }`}
              >
                {careerIsCine && <Clapperboard className="w-3.5 h-3.5 text-amber-400" />}
                {careerIsArch && <Compass className="w-3.5 h-3.5 text-amber-400" />}
                {careerIsEng && <Cpu className="w-3.5 h-3.5 text-amber-400" />}
                {careerIsTour && <Palmtree className="w-3.5 h-3.5 text-amber-400" />}
                {careerIsGastro && <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />}
                {careerIsLaw && <Scale className="w-3.5 h-3.5 text-amber-400" />}
                {!careerIsCine && !careerIsArch && !careerIsEng && !careerIsTour && !careerIsGastro && !careerIsLaw && <GraduationCap className="w-3.5 h-3.5 text-slate-400" />}
                <span>{shortName}</span>
                {hasVideo && (
                  <span className="text-[9px] bg-red-600 text-white font-extrabold px-1.5 py-0.5 rounded flex items-center gap-0.5 tracking-wider uppercase">
                    <Play className="w-2.5 h-2.5 fill-current" /> Video
                  </span>
                )}
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-amber-400 text-slate-950' : count > 0 ? 'bg-slate-200 text-slate-800' : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Career Header Banner */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold uppercase tracking-wider mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>UniAgustiniana Academic Major</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-500 font-normal">
                {programData?.faculty || careerStudents[0]?.faculty || 'Faculty of Economic and Administrative Sciences'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              {isCine && <Clapperboard className="w-6 h-6 text-amber-600" />}
              {isArch && <Compass className="w-6 h-6 text-amber-600" />}
              {isEng && <Cpu className="w-6 h-6 text-amber-600" />}
              {isTour && <Palmtree className="w-6 h-6 text-amber-600" />}
              {isGastro && <UtensilsCrossed className="w-6 h-6 text-amber-600" />}
              {isLaw && <Scale className="w-6 h-6 text-amber-600" />}
              {isIB && <Globe2 className="w-6 h-6 text-amber-600" />}
              {!isCine && !isArch && !isEng && !isTour && !isGastro && !isLaw && !isIB && <GraduationCap className="w-6 h-6 text-amber-600" />}
              <span>{activeCareer}</span>
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
              <span className="flex items-center gap-1 font-medium text-slate-700">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                {totals.students} students · {totals.teachers} faculty
              </span>
              <span className="text-slate-400">·</span>
              <span>{programData?.campus || careerStudents[0]?.campus || 'Tagaste Campus'}</span>
              <span className="text-slate-400">·</span>
              <span className="font-semibold text-emerald-700">Academic Period 2026</span>
              {totals.missing === 0 && totals.participants > 0 && (
                <span className="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded text-[11px] border border-emerald-300">
                  {totals.answers} responses complete
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {canAddMore ? (
              <button
                onClick={() => onAddNewStudentToCareer(activeCareer)}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors"
                title="Add a new interviewed student to this major"
              >
                <Plus className="w-4 h-4" />
                <span>Add Participant</span>
              </button>
            ) : (
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                Cohort complete ({careerStudents.length} participants)
              </span>
            )}
          </div>
        </div>

        {/* English Level & Quick Stats for this Career with Visual Infographics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          {/* Cohort Quota Slot Meter */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Cohort Capacity Meter
                </span>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {careerStudents.length} / {maxCohort} Max
                </span>
              </div>
              <div className="flex items-center gap-1.5 my-2.5">
                {Array.from({ length: maxCohort }, (_, i) => i + 1).map((slot) => {
                  const isFilled = slot <= careerStudents.length;
                  return (
                    <div
                      key={slot}
                      className={`flex-1 h-3 rounded-full transition-all ${
                        isFilled
                          ? 'bg-amber-500 shadow-2xs'
                          : 'bg-slate-200 border border-slate-300/60'
                      }`}
                      title={isFilled ? `Interviewed Student #${slot}` : `Available Slot #${slot} (up to ${maxCohort} max)`}
                    />
                  );
                })}
              </div>
            </div>
            <p className="text-[11px] text-slate-500">
              {careerStudents.length >= maxCohort 
                ? 'Full sample capacity reached for this degree program.' 
                : `${maxCohort - careerStudents.length} slot(s) remaining for interview recording.`}
            </p>
          </div>

          {/* CEFR Level Breakdown */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                English Level (CEFR)
              </span>
              <Award className="w-3.5 h-3.5 text-amber-600" />
            </div>

            <div className="grid grid-cols-4 gap-1.5 text-center">
              {[
                { label: 'B2', count: levelCounts['B2'], color: 'text-emerald-700 bg-emerald-100 border-emerald-300' },
                { label: 'B1', count: levelCounts['B1'], color: 'text-blue-700 bg-blue-100 border-blue-300' },
                { label: 'A2', count: levelCounts['A2'], color: 'text-amber-700 bg-amber-100 border-amber-300' },
                { label: 'A1', count: levelCounts['A1'], color: 'text-rose-700 bg-rose-100 border-rose-300' }
              ].map((lvl) => (
                <div key={lvl.label} className={`p-1.5 rounded-lg border ${lvl.color}`}>
                  <span className="block text-[10px] font-bold">{lvl.label}</span>
                  <span className="text-xs font-black">{lvl.count}</span>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-slate-500 mt-2">
              {careerStudents.filter(s => s.perceivedEnglishLevel === 'Not assessed').length} not assessed
            </p>
          </div>

          {/* Campus Location Card */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                University Campus
              </span>
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
            </div>

            <div className="my-1">
              <span className="text-sm font-bold text-slate-900 block">
                {programData?.campus || careerStudents[0]?.campus || 'Tagaste Campus'}
              </span>
              <span className="text-[11px] text-slate-500">UniAgustiniana · Bogotá D.C.</span>
            </div>

            <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
              Questions applied: <strong>{careerQuestions.length} Items</strong>
            </div>
          </div>
        </div>

        {/* Survey Highlights Banner (Configured for Film & TV, Architecture, and active programs) */}
        {careerHighlights && (
          <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2">
              {isCine && <Camera className="w-4 h-4 text-amber-700" />}
              {isArch && <Compass className="w-4 h-4 text-amber-700" />}
              {isEng && <Code2 className="w-4 h-4 text-amber-700" />}
              {isTour && <Palmtree className="w-4 h-4 text-amber-700" />}
              {isGastro && <UtensilsCrossed className="w-4 h-4 text-amber-700" />}
              {isLaw && <Scale className="w-4 h-4 text-amber-700" />}
              {isIB && <Globe2 className="w-4 h-4 text-amber-700" />}
              {!isCine && !isArch && !isEng && !isTour && !isGastro && !isLaw && !isIB && <Sparkles className="w-4 h-4 text-amber-700" />}
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                {careerHighlights.title}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {careerHighlights.cards.map((card, idx) => (
                <div key={idx} className="bg-white p-2.5 rounded-lg border border-amber-200/60">
                  <span className="text-slate-500 text-[11px] block">{card.label}</span>
                  <span className={`font-bold ${card.highlightColor || 'text-slate-900'}`}>{card.primary}</span>
                  <span className="text-slate-500 text-[11px] block">{card.secondary}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {programData?.sourceNote && (
        <div className="bg-white rounded-xl border border-slate-200 p-4 text-xs text-slate-600 space-y-2">
          <p><strong>Research Team:</strong> {programData.researchTeam}</p>
          <p>{programData.sourceNote}</p>
          {programData.sharedAnswers && <details className="pt-2">
            <summary className="cursor-pointer font-semibold">Original program-level source responses</summary>
            <div className="space-y-3 mt-3">{careerQuestions.map(q => <div key={q.id}><p className="font-semibold">{q.code} · {q.title}</p><p>{programData.sharedAnswers?.[q.id]}</p></div>)}</div>
          </details>}
        </div>
      )}

      {/* Empty State if career has 0 students */}
      {careerStudents.length === 0 && (
        <div className="bg-white rounded-xl border border-dashed border-slate-300 p-8 text-center space-y-3">
          <GraduationCap className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            No Interviewed Students Recorded Yet for {activeCareer}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            No participant records are available for this degree program yet. Register a participant to begin adding responses.
          </p>
          <button
            onClick={() => onAddNewStudentToCareer(activeCareer)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Register First Student for {activeCareer.split(' ')[0]}</span>
          </button>
        </div>
      )}

      {/* Cohort Students Cards within this Career */}
      {careerStudents.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span className="font-semibold text-slate-800">
              Interviewed Students in {activeCareer} ({careerStudents.length}):
            </span>
            <span>Click a student card to load their verbatim answers below</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {careerStudents.map((st) => {
              const isCurrent = currentStudent?.id === st.id;
              const isTeacher = st.isTeacher || st.studentCode === 'DOCENTE';

              return (
                <div
                  key={st.id}
                  onClick={() => setActiveStudentId(st.id)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all shadow-xs flex flex-col justify-between relative overflow-hidden ${
                    isCurrent
                      ? 'bg-slate-900 text-white border-slate-900 ring-2 ring-amber-400'
                      : isTeacher
                      ? 'bg-gradient-to-br from-amber-50/80 to-amber-100/50 text-slate-900 border-amber-300 ring-1 ring-amber-400/40 hover:border-amber-400 shadow-amber-100'
                      : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {isTeacher && (
                    <div className="absolute top-2 right-2">
                      <span className="bg-amber-500 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-xs border border-amber-600/30">
                        <ChefHat className="w-2.5 h-2.5" /> DOCENTE
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-9 h-9 rounded-lg ${st.avatarColor} text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs`}
                        >
                          {st.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                        </div>
                        <div className="pr-14">
                          <h4 className={`text-xs font-bold leading-tight ${isCurrent ? 'text-white' : 'text-slate-900'}`}>
                            {st.name}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-bold ${
                              isTeacher
                                ? 'bg-amber-400 text-slate-950 border border-amber-500'
                                : isCurrent 
                                ? 'bg-slate-800 text-amber-300' 
                                : 'bg-amber-50 text-amber-900 border border-amber-200'
                            }`}>
                              {isTeacher ? 'DOCENTE' : `ID: ${st.studentCode}`}
                            </span>
                            <span className={`text-[11px] ${isCurrent ? 'text-slate-300' : isTeacher ? 'text-amber-900 font-semibold' : 'text-slate-500'}`}>
                              {st.semester}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className={`text-[11px] italic line-clamp-2 mt-2 ${isCurrent ? 'text-slate-300' : isTeacher ? 'text-slate-800' : 'text-slate-600'}`}>
                      "{st.highlightQuote}"
                    </p>
                  </div>

                  <div className="pt-2 mt-3 border-t border-slate-200/50 flex items-center justify-between text-xs">
                    <span className={`text-[11px] ${isCurrent ? 'text-amber-300' : isTeacher ? 'text-amber-800 font-semibold' : 'text-slate-500'}`}>
                      Level: <strong>{st.perceivedEnglishLevel.split(' - ')[0]}</strong>
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectStudent(st.id);
                      }}
                      className={`font-semibold flex items-center gap-1 ${
                        isCurrent ? 'text-amber-400 hover:underline' : 'text-amber-700 hover:underline'
                      }`}
                    >
                      <span>Full dossier</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Selected Student Answers Dossier for this Career */}
      {currentStudent && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold mb-0.5">
                <span>Participant Responses</span>
                <span className="text-slate-400">·</span>
                <span>{currentStudent.name}</span>
                <span className="text-slate-400">·</span>
                {currentStudent.isTeacher ? (
                  <span className="font-sans bg-amber-400 px-2 py-0.5 rounded text-slate-950 border border-amber-500 font-black text-[10px] uppercase tracking-wider flex items-center gap-1">
                    <ChefHat className="w-3 h-3" /> DOCENTE DE GASTRONOMÍA
                  </span>
                ) : (
                  <span className="font-mono bg-amber-50 px-2 py-0.5 rounded text-amber-900 border border-amber-200 font-bold">
                    Student ID: {currentStudent.studentCode}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>All {careerQuestions.length} Responses for {currentStudent.name}</span>
                {currentStudent.isTeacher && (
                  <span className="text-xs bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-md border border-amber-300">
                    Faculty Professor Perspective
                  </span>
                )}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">
                English Level (CEFR):
              </span>
              <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 px-2.5 py-0.5 rounded font-bold text-xs">
                {currentStudent.perceivedEnglishLevel}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {careerQuestions.map((q) => {
              const answer = currentStudent.answers[q.id] || 'Answer not recorded.';
              return (
                <div
                  key={q.id}
                  className="bg-slate-50/70 p-4 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {q.code}
                      </span>
                      <div>
                        <span className="text-[11px] font-medium text-slate-500 block">
                          {q.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                          {q.title}
                        </h4>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectQuestion(q.id, activeCareer)}
                      className="text-amber-700 hover:text-amber-900 text-[11px] font-medium flex items-center gap-1 hover:underline self-end sm:self-start"
                    >
                      <span>Analyze question</span>
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
      )}

      {/* Survey Results Quantitative Breakdown (Standardized for degrees with verified survey data) */}
      {careerStudents.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 sm:p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                {isLaw ? <Scale className="w-4 h-4 text-amber-600" /> : isIB ? <Globe2 className="w-4 h-4 text-amber-600" /> : <BarChart3 className="w-4 h-4 text-amber-600" />}
                <span>Survey Results: {activeCareer.split(' (')[0]} Degree</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500 font-normal">Current Participant Responses</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>Quantitative Distribution across {surveyBreakdown.length} Research Questions</span>
                <span className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-0.5 rounded-full border border-amber-300">
                  {careerStudents.length} Participants
                </span>
              </h3>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
                Participant Responses
              </span>
              <button
                onClick={() => setIsSurveyExpanded(!isSurveyExpanded)}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-amber-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-300 transition-colors shadow-2xs"
                title={isSurveyExpanded ? "Collapse survey statistics" : "Expand survey statistics"}
              >
                <span>{isSurveyExpanded ? 'Collapse Questions' : 'Expand Questions'}</span>
                {isSurveyExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Questions Cards Grid */}
          {isSurveyExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {surveyBreakdown.map((sq) => (
                <div
                  key={sq.number}
                  className="bg-slate-50/70 rounded-xl p-4 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 transition-all space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-start gap-2.5">
                        <span className="w-6 h-6 rounded-md bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          Q{sq.number}
                        </span>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 block">
                            {sq.category}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                            {sq.question}
                          </h4>
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectQuestion(sq.number, activeCareer)}
                        className="text-amber-700 hover:text-amber-900 text-[10px] font-semibold flex items-center gap-0.5 hover:underline shrink-0"
                        title="Analyze this question in the full comparative matrix"
                      >
                        <span>Analyze</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Vote bars */}
                    <div className="space-y-2 pt-1">
                      {sq.options.map((opt, oIdx) => (
                        <div key={oIdx} className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-700 font-medium truncate pr-2 text-[11px]">
                              {opt.label}
                            </span>
                            <span className="font-bold text-slate-900 shrink-0 font-mono text-[11px]">
                              {opt.votes} {opt.votes === 1 ? 'vote' : 'votes'}{' '}
                              <span className="text-slate-500 font-semibold">({opt.pct})</span>
                            </span>
                          </div>
                          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${opt.color || 'bg-amber-500'}`}
                              style={{ width: opt.pct }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500">
                    <span>Sample: {sq.totalVotes} responses</span>
                    <span className="font-semibold text-slate-700">UniAgustiniana · 2026</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {programData?.sourceNote && !careerVideo && (
        <div className="pt-2">
          <div className="bg-slate-900 text-white rounded-xl border border-slate-800 shadow-md overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 bg-slate-950/70">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">UniAgustiniana Audiovisual Record</span>
              <h4 className="text-sm font-bold">{programData.shortName} · Fieldwork Presentation Video</h4>
            </div>
            <div className="p-5 space-y-4">
              <div className="max-w-2xl mx-auto aspect-video rounded-xl bg-slate-950/40 border border-slate-800 flex items-center justify-center text-sm text-slate-400">Video link not provided.</div>
              <p className="text-xs text-slate-300 border-t border-slate-800 pt-3">Research Team: <span className="text-amber-400">{programData.researchTeam}</span></p>
            </div>
          </div>
        </div>
      )}
      {/* Audiovisual & Fieldwork Evidence Section (Standardized for Film & TV, Architecture & future careers) */}
      {careerVideo && (
        <div className="pt-2">
          <div className="bg-slate-900 text-white rounded-xl border border-slate-800 shadow-md overflow-hidden">
            {/* Header Bar */}
            <div className="px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-950/70">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                  {isCine ? (
                    <Film className="w-4 h-4 text-slate-950" />
                  ) : isArch ? (
                    <Compass className="w-4 h-4 text-slate-950" />
                  ) : isEng ? (
                    <Cpu className="w-4 h-4 text-slate-950" />
                  ) : isTour ? (
                    <Hotel className="w-4 h-4 text-slate-950" />
                  ) : isGastro ? (
                    <UtensilsCrossed className="w-4 h-4 text-slate-950" />
                  ) : isLaw ? (
                    <Scale className="w-4 h-4 text-slate-950" />
                  ) : isIB ? (
                    <Globe2 className="w-4 h-4 text-slate-950" />
                  ) : (
                    <Play className="w-4 h-4 text-slate-950 fill-slate-950" />
                  )}
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block leading-tight">
                    UniAgustiniana Audiovisual Record
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                    {careerVideo.title}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={careerVideo.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors shrink-0 group shadow-2xs"
                  title="Open video on YouTube in a new tab"
                >
                  <Play className="w-3 h-3 text-red-500 fill-red-500" />
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Content Body: Video Player */}
            <div className="p-4 sm:p-5 bg-slate-950/40 space-y-4">
              <div className="max-w-2xl mx-auto bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-3 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <Play className="w-3.5 h-3.5 text-amber-400" />
                    <span>Program Presentation Video</span>
                  </span>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                    YouTube · UniAgustiniana
                  </span>
                </div>

                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-inner border border-slate-800 ring-1 ring-white/5">
                  {careerVideo.isPlaceholder ? <a href={careerVideo.externalUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex flex-col items-center justify-center text-sm text-amber-300 p-6 text-center"><span>Marketing Video</span><span className="text-xs text-slate-400 mt-2">Video pending</span></a> : <iframe
                    className="absolute inset-0 w-full h-full"
                    src={careerVideo.embedUrl}
                    title={careerVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />}
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed text-center sm:text-left">
                  {careerVideo.description}
                </p>
              </div>

              {/* Section Subtitle / Attribution Credits */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-400 gap-2 pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Tagaste Campus · Agustiniana University (UniAgustiniana)</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-500">Research Team: </span>
                  <span className="text-amber-400 font-medium">{careerVideo.researchTeam}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
