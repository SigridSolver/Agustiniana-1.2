import React, { useState, useEffect } from 'react';
import { migrateStudents, normalizeParticipants, normalizeTeam, readSaved, metrics, questionsFor, careerNames } from './data/research';
import { 
  initialMetadata, 
  initialQuestions, 
  initialStudents, 
  initialInterviewers,
  universityCareersList,
  careerProgramsRegistry
} from './data/initialData';
import { ProjectMetadata, Question, InterviewedStudent, Interviewer, ViewTab } from './types';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { SummaryView } from './components/SummaryView';
import { AnalyticsView } from './components/AnalyticsView';
import { CareersView } from './components/CareersView';
import { QuestionDetailView } from './components/QuestionDetailView';
import { StudentProfileView } from './components/StudentProfileView';
import { FullMatrixView } from './components/FullMatrixView';
import { TeamView } from './components/TeamView';
import { GuideView } from './components/GuideView';
import { DataManagementView } from './components/DataManagementView';
import { PrintReportView } from './components/PrintReportView';

export default function App() {
  // Migrate existing browser data without discarding participant edits.
  const [metadata, setMetadata] = useState<ProjectMetadata>(() => {
    const previous = readSaved('uniagustiniana_meta_v12', initialMetadata);
    const saved = { ...previous, sampleDescription: initialMetadata.sampleDescription };
    return saved.title === 'Academic Life, Aspirations and Campus Perceptions in Film & Television' ? { ...saved, title: initialMetadata.title, subtitle: initialMetadata.subtitle, sampleDescription: initialMetadata.sampleDescription } : saved;
  });

  const [questions, setQuestions] = useState<Question[]>(() => {
    return readSaved('uniagustiniana_questions_v12', initialQuestions);
  });

  const [students, setStudents] = useState<InterviewedStudent[]>(() => {
    return normalizeParticipants(readSaved('uniagustiniana_students_v13', migrateStudents(readSaved('uniagustiniana_students_v12', initialStudents))));
  });

  const [interviewers, setInterviewers] = useState<Interviewer[]>(() => {
    return normalizeTeam(readSaved('uniagustiniana_interviewers_v13', readSaved('uniagustiniana_interviewers_v12', initialInterviewers)));
  });

  const [activeTab, setActiveTab] = useState<ViewTab>('summary');
  const [selectedQuestionId, setSelectedQuestionId] = useState<number>(1);
  const [questionCareer, setQuestionCareer] = useState<string | null>(null);
  const [selectedStudentId, setSelectedStudentId] = useState<string>(students[0]?.id || 'cin-1');
  const [selectedCareer, setSelectedCareer] = useState<string>('Film and Television (Cine y Televisión)');
  const [isPrintMode, setIsPrintMode] = useState<boolean>(false);
  const totals = metrics(students, questions);
  const programs = careerNames(students);
  const questionnaireCount = programs.filter(career => students.some(s => s.career === career)).reduce((sum, career) => sum + questionsFor(career, questions).length, 0);

  useEffect(() => {
    localStorage.setItem('uniagustiniana_students_v13', JSON.stringify(students));
    localStorage.setItem('uniagustiniana_interviewers_v13', JSON.stringify(interviewers));
  }, [students, interviewers]);

  // Persistence handler
  const handleSaveData = (
    newMetadata: ProjectMetadata,
    newQuestions: Question[],
    newStudents: InterviewedStudent[],
    newInterviewers: Interviewer[]
  ) => {
    setMetadata(newMetadata);
    setQuestions(newQuestions);
    setStudents(normalizeParticipants(newStudents));
    setInterviewers(normalizeTeam(newInterviewers));

    localStorage.setItem('uniagustiniana_meta_v12', JSON.stringify(newMetadata));
    localStorage.setItem('uniagustiniana_questions_v12', JSON.stringify(newQuestions));
    localStorage.setItem('uniagustiniana_students_v13', JSON.stringify(newStudents));
    localStorage.setItem('uniagustiniana_interviewers_v13', JSON.stringify(newInterviewers));
  };

  const handleResetData = () => {
    if (window.confirm('Do you want to reset all research data to the default original dataset? Any manual modifications will be overwritten.')) {
      setMetadata(initialMetadata);
      setQuestions(initialQuestions);
      setStudents(initialStudents);
      setInterviewers(normalizeTeam(initialInterviewers));

      localStorage.removeItem('uniagustiniana_meta_v12');
      localStorage.removeItem('uniagustiniana_questions_v12');
      localStorage.removeItem('uniagustiniana_students_v13');
      localStorage.removeItem('uniagustiniana_students_v12');
      localStorage.removeItem('uniagustiniana_interviewers_v13');
      localStorage.removeItem('uniagustiniana_interviewers_v12');
    }
  };

  // Add new student to specific career
  const handleAddNewStudentToCareer = (targetCareer: string) => {
    const currentCount = students.filter((s) => s.career === targetCareer).length;
    if (currentCount >= 12) {
      alert(`The program "${targetCareer}" has reached the maximum quota of interviewed participants.`);
      return;
    }

    const newStudentId = `st-${Date.now()}`;
    const defaultAnswers: { [key: number]: string } = {};
    questionsFor(targetCareer, questions).forEach((q) => { defaultAnswers[q.id] = ''; });

    const sampleColors = [
      'bg-blue-600',
      'bg-indigo-600',
      'bg-emerald-600',
      'bg-amber-600',
      'bg-rose-600',
      'bg-violet-600',
      'bg-teal-600',
      'bg-orange-600'
    ];

    const matchedFaculty = students.find((s) => s.career === targetCareer)?.faculty || 'UniAgustiniana Faculty';

    const newStudent: InterviewedStudent = {
      id: newStudentId,
      name: `Student ${currentCount + 1} (${targetCareer.split(' ')[0]})`,
      studentCode: `7202610${(currentCount + 10).toString().padStart(2, '0')}`,
      career: targetCareer,
      faculty: matchedFaculty,
      semester: `${Math.min(currentCount + 3, 8)}th Semester`,
      campus: 'Tagaste Campus',
      age: 20 + (currentCount % 4),
      highlightQuote: 'Individual response not provided.',
      perceivedEnglishLevel: 'Not assessed',
      answers: defaultAnswers,
      avatarColor: sampleColors[currentCount % sampleColors.length]
    };

    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('uniagustiniana_students_v13', JSON.stringify(updatedStudents));
    setSelectedStudentId(newStudentId);
    setSelectedCareer(targetCareer);
  };

  // Navigation handlers between views
  const handleSelectStudent = (studentId: string) => {
    const found = students.find((s) => s.id === studentId);
    if (found) {
      setSelectedCareer(found.career);
    }
    setSelectedStudentId(studentId);
    setActiveTab('students');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectQuestion = (questionId: number, career?: string) => {
    setQuestionCareer(career || selectedCareer);
    setSelectedQuestionId(questionId);
    setActiveTab('questions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isPrintMode) {
    return (
      <PrintReportView
        metadata={metadata}
        questions={questions}
        students={students}
        interviewers={interviewers}
        onBack={() => setIsPrintMode(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans">
      {/* Top Header */}
      <Header
        metadata={metadata}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onPrintReport={() => setIsPrintMode(true)}
        onOpenEditor={() => setActiveTab('editor')}
        questionsCount={questionnaireCount}
        studentsCount={students.length}
        careersCount={universityCareersList.length}
      />

      {/* Navigation Bar */}
      <Navigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        questionsCount={questionnaireCount}
        answersCount={totals.answers}
        studentsCount={students.length}
        careersCount={universityCareersList.length}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 pt-6 sm:pt-8">
        {activeTab === 'summary' && (
          <SummaryView
            metadata={metadata}
            questions={questions}
            students={students}
            interviewers={interviewers}
            onSelectCareer={(career) => { setSelectedCareer(career); setActiveTab('careers'); }}
            onSelectStudent={handleSelectStudent}
            onSelectQuestion={handleSelectQuestion}
            onGoToAnalytics={() => setActiveTab('analytics')}
            onGoToCareers={() => setActiveTab('careers')}
          />
        )}

        {activeTab === 'analytics' && (
          <AnalyticsView
            students={students}
            questions={questions}
            onSelectCareer={(career) => {
              setSelectedCareer(career);
              setActiveTab('careers');
            }}
            onSelectStudent={handleSelectStudent}
          />
        )}

        {activeTab === 'careers' && (
          <CareersView
            students={students}
            questions={questions}
            selectedCareer={selectedCareer}
            onSelectStudent={handleSelectStudent}
            onSelectQuestion={handleSelectQuestion}
            onAddNewStudentToCareer={handleAddNewStudentToCareer}
          />
        )}

        {activeTab === 'questions' && (
          <>
          <label className="block bg-white rounded-xl border border-slate-200 p-4 mb-4 text-sm font-semibold">Degree program
            <select className="block w-full border border-slate-300 rounded-lg p-2 mt-2" value={questionCareer || selectedCareer} onChange={e => { setQuestionCareer(e.target.value); setSelectedQuestionId(questionsFor(e.target.value, questions)[0]?.id || 1); }}>
              {programs.map(career => <option key={career} value={career}>{career}</option>)}
            </select>
          </label>
          {questionCareer && careerProgramsRegistry[questionCareer]?.sharedAnswers && (
            <div className="bg-white rounded-xl border border-slate-200 p-5 mb-6 space-y-2">
              <h2 className="font-bold">{questionCareer} · Original Program-Level Response</h2>
              <p className="text-sm">{careerProgramsRegistry[questionCareer].sharedAnswers?.[selectedQuestionId]}</p>
              <p className="text-xs text-slate-500">{careerProgramsRegistry[questionCareer].sourceNote}</p>
            </div>
          )}
          <QuestionDetailView
            key={questionCareer || selectedCareer}
            questions={questionsFor(questionCareer || selectedCareer, questions)}
            students={students.filter((student) => student.career === (questionCareer || selectedCareer))}
            selectedQuestionId={selectedQuestionId}
            onSelectQuestionId={setSelectedQuestionId}
            onSelectStudent={handleSelectStudent}
          />
          </>
        )}

        {activeTab === 'students' && (
          <StudentProfileView
            students={students}
            questions={questions}
            selectedStudentId={selectedStudentId}
            onSelectStudentId={setSelectedStudentId}
            onSelectQuestion={(id) => handleSelectQuestion(id, students.find((student) => student.id === selectedStudentId)?.career)}
          />
        )}

        {activeTab === 'matrix' && (
          <FullMatrixView
            questions={questions}
            students={students}
            onSelectStudent={handleSelectStudent}
            onSelectQuestion={handleSelectQuestion}
          />
        )}

        {activeTab === 'team' && (
          <TeamView
            interviewers={interviewers}
            metadata={metadata}
          />
        )}

        {activeTab === 'guide' && (
          <GuideView
            onGoToSummary={() => setActiveTab('summary')}
            onGoToQuestions={() => setActiveTab('questions')}
            onGoToStudents={() => setActiveTab('students')}
          />
        )}

        {activeTab === 'editor' && (
          <DataManagementView
            metadata={metadata}
            questions={questions}
            students={students}
            interviewers={interviewers}
            onSaveData={handleSaveData}
            onResetData={handleResetData}
          />
        )}
      </main>

      {/* Academic Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-8 px-4 text-xs mt-auto print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p className="font-semibold text-white">
              {metadata.university} · Bogotá D.C., Colombia
            </p>
            <p className="text-slate-400">
              {metadata.program} · {metadata.subject} · {metadata.term}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <span>{universityCareersList.length} University Majors</span>
            <span aria-hidden="true">·</span>
            <span>{totals.students} Students · {totals.teachers} Faculty</span>
            <span aria-hidden="true">·</span>
            <span>{totals.answers} Responses</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsPrintMode(true)}
              className="text-amber-400 hover:underline"
            >
              Generate PDF Academic Report
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
