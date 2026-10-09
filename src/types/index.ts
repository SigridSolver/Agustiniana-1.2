export interface Interviewer {
  id: string;
  name: string;
  role: string;
  program: string;
  semester: string;
  email: string;
  campus: string;
  avatarUrl?: string;
  reflection: string;
}

export interface Question {
  id: number;
  code: string; // e.g. "Q1", "Q2", etc.
  title: string;
  academicObjective: string;
  category: string;
  summaryInsight: string;
}

export interface InterviewedStudent {
  id: string;
  name: string;
  studentCode: string;
  career: string;
  faculty: string;
  semester: string;
  campus: 'Tagaste Campus' | 'Suba Campus';
  age: number;
  highlightQuote: string;
  perceivedEnglishLevel: 'A1 - Beginner' | 'A2 - Elementary' | 'B1 - Intermediate' | 'B2 - Upper Intermediate';
  answers: { [questionId: number]: string };
  audioTime?: string;
  avatarColor: string;
  isTeacher?: boolean;
  role?: string;
}

export interface ProjectMetadata {
  university: string;
  faculty: string;
  program: string;
  subject: string;
  city: string;
  term: string;
  title: string;
  subtitle: string;
  generalObjective: string;
  methodologyType: string;
  sampleDescription: string;
}

export type ViewTab = 'summary' | 'analytics' | 'careers' | 'questions' | 'students' | 'matrix' | 'team' | 'guide' | 'editor';
