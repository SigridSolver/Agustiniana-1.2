import React, { useState } from 'react';
import { 
  initialMetadata, 
  initialQuestions, 
  initialStudents, 
  initialInterviewers,
  analyticalInsights,
  universityCareersList
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
  // Load data from localStorage (v12 key ensures fresh verified dataset with International Business, Law Survey Results, and 59 real student participants)
  const [metadata, setMetadata] = useState<ProjectMetadata>(() => {
    const saved = localStorage.getItem('uniagustiniana_meta_v12');
    return saved ? JSON.parse(saved) : initialMetadata;
  });

  const [questions, setQuestions] = useState<Question[]>(() => {
    const saved = localStorage.getItem('uniagustiniana_questions_v12');
    return saved ? JSON.parse(saved) : initialQuestions;
  });

  const [students, setStudents] = useState<InterviewedStudent[]>(() => {
    const saved = localStorage.getItem('uniagustiniana_students_v12');
    return saved ? JSON.parse(saved) : initialStudents;
  });

  const [interviewers, setInterviewers] = useState<Interviewer[]>(() => {
    const saved = localStorage.getItem('uniagustiniana_interviewers_v12');
    return saved ? JSON.parse(saved) : initialInterviewers;
  });

  const [activeTab, setActiveTab] = useState<ViewTab>('summary');
  const [selectedQuestionId, setSelectedQuestionId] = useState<number>(1);
  const [selectedStudentId, setSelectedStudentId] = useState<string>(students[0]?.id || 'cin-1');
  const [selectedCareer, setSelectedCareer] = useState<string>('Film and Television (Cine y Televisión)');
  const [isPrintMode, setIsPrintMode] = useState<boolean>(false);

  // Persistence handler
  const handleSaveData = (
    newMetadata: ProjectMetadata,
    newQuestions: Question[],
    newStudents: InterviewedStudent[],
    newInterviewers: Interviewer[]
  ) => {
    setMetadata(newMetadata);
    setQuestions(newQuestions);
    setStudents(newStudents);
    setInterviewers(newInterviewers);

    localStorage.setItem('uniagustiniana_meta_v12', JSON.stringify(newMetadata));
    localStorage.setItem('uniagustiniana_questions_v12', JSON.stringify(newQuestions));
    localStorage.setItem('uniagustiniana_students_v12', JSON.stringify(newStudents));
    localStorage.setItem('uniagustiniana_interviewers_v12', JSON.stringify(newInterviewers));
  };

  const handleResetData = () => {
    if (window.confirm('Do you want to reset all research data to the default original dataset? Any manual modifications will be overwritten.')) {
      setMetadata(initialMetadata);
      setQuestions(initialQuestions);
      setStudents(initialStudents);
      setInterviewers(initialInterviewers);

      localStorage.removeItem('uniagustiniana_meta_v12');
      localStorage.removeItem('uniagustiniana_questions_v12');
      localStorage.removeItem('uniagustiniana_students_v12');
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
    questions.forEach((q) => {
      defaultAnswers[q.id] = `Student response for ${q.code} regarding ${q.category.toLowerCase()}.`;
    });

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
      campus: targetCareer.includes('Gastronomía') ? 'Suba Campus' : 'Tagaste Campus',
      age: 20 + (currentCount % 4),
      highlightQuote: 'Communicating effectively in English allows us to share Colombian research and creative insights with global academia.',
      perceivedEnglishLevel: currentCount % 2 === 0 ? 'B1 - Intermediate' : 'B2 - Upper Intermediate',
      answers: defaultAnswers,
      avatarColor: sampleColors[currentCount % sampleColors.length]
    };

    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('uniagustiniana_students_v5', JSON.stringify(updatedStudents));
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

  const handleSelectQuestion = (questionId: number) => {
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
        questionsCount={questions.length}
        studentsCount={students.length}
        careersCount={universityCareersList.length}
      />

      {/* Navigation Bar */}
      <Navigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        questionsCount={questions.length}
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
            insights={analyticalInsights}
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
          <QuestionDetailView
            questions={questions}
            students={students}
            selectedQuestionId={selectedQuestionId}
            onSelectQuestionId={setSelectedQuestionId}
            onSelectStudent={handleSelectStudent}
          />
        )}

        {activeTab === 'students' && (
          <StudentProfileView
            students={students}
            questions={questions}
            selectedStudentId={selectedStudentId}
            onSelectStudentId={setSelectedStudentId}
            onSelectQuestion={handleSelectQuestion}
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
            <span>{students.length} Verified Interviewees (Film, Arch &amp; Eng)</span>
            <span aria-hidden="true">·</span>
            <span>{questions.length} Structured Questions</span>
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
