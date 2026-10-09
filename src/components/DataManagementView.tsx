import React, { useState } from 'react';
import { ProjectMetadata, Question, InterviewedStudent, Interviewer } from '../types';
import { 
  Settings2, 
  Save, 
  RotateCcw, 
  Download, 
  Check
} from 'lucide-react';

interface DataManagementViewProps {
  metadata: ProjectMetadata;
  questions: Question[];
  students: InterviewedStudent[];
  interviewers: Interviewer[];
  onSaveData: (
    newMetadata: ProjectMetadata,
    newQuestions: Question[],
    newStudents: InterviewedStudent[],
    newInterviewers: Interviewer[]
  ) => void;
  onResetData: () => void;
}

export const DataManagementView: React.FC<DataManagementViewProps> = ({
  metadata,
  questions,
  students,
  interviewers,
  onSaveData,
  onResetData
}) => {
  const [activeSection, setActiveSection] = useState<'students' | 'questions' | 'team' | 'metadata'>('students');
  const [currentStudents, setCurrentStudents] = useState<InterviewedStudent[]>(students);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>(questions);
  const [currentInterviewers, setCurrentInterviewers] = useState<Interviewer[]>(interviewers);
  const [currentMetadata, setCurrentMetadata] = useState<ProjectMetadata>(metadata);

  const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleSave = () => {
    onSaveData(currentMetadata, currentQuestions, currentStudents, currentInterviewers);
    setSaveStatus('Changes saved successfully to browser storage!');
    setTimeout(() => setSaveStatus(null), 3500);
  };

  const handleStudentAnswerChange = (questionId: number, newAnswer: string) => {
    const updated = [...currentStudents];
    updated[selectedStudentIndex].answers[questionId] = newAnswer;
    setCurrentStudents(updated);
  };

  const handleStudentFieldChange = (field: keyof InterviewedStudent, val: any) => {
    const updated = [...currentStudents];
    (updated[selectedStudentIndex] as any)[field] = val;
    setCurrentStudents(updated);
  };

  const handleQuestionFieldChange = (field: keyof Question, val: any) => {
    const updated = [...currentQuestions];
    (updated[selectedQuestionIndex] as any)[field] = val;
    setCurrentQuestions(updated);
  };

  // Export full backup JSON
  const handleExportJSON = () => {
    const backupData = {
      metadata: currentMetadata,
      questions: currentQuestions,
      students: currentStudents,
      interviewers: currentInterviewers
    };
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(backupData, null, 2))}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `UniAgustiniana_Fieldwork_Research_Data.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner with Actions */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
            <Settings2 className="w-4 h-4" />
            <span>Data Customization & Management Center</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Edit Questions, Answers, Names & Majors
          </h2>
          <p className="text-xs text-slate-500">
            All edits are stored locally in your browser so you can present your exact real-life fieldwork responses.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save All Changes</span>
          </button>
          <button
            onClick={handleExportJSON}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            title="Download full JSON backup"
          >
            <Download className="w-3.5 h-3.5" />
            <span>JSON Backup</span>
          </button>
          <button
            onClick={onResetData}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-rose-700 hover:bg-rose-50 rounded-lg transition-colors border border-rose-200"
            title="Reset to default authentic dataset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Data</span>
          </button>
        </div>
      </div>

      {saveStatus && (
        <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-3 rounded-lg text-xs flex items-center gap-2 animate-in fade-in">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-semibold">{saveStatus}</span>
        </div>
      )}

      {/* Section Switcher Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveSection('students')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
            activeSection === 'students'
              ? 'bg-slate-900 text-white'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Edit Students & Answers ({currentStudents.length} Majors)
        </button>
        <button
          onClick={() => setActiveSection('questions')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
            activeSection === 'questions'
              ? 'bg-slate-900 text-white'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Edit {currentQuestions.length} Questions
        </button>
        <button
          onClick={() => setActiveSection('team')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
            activeSection === 'team'
              ? 'bg-slate-900 text-white'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Edit Research Team
        </button>
        <button
          onClick={() => setActiveSection('metadata')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
            activeSection === 'metadata'
              ? 'bg-slate-900 text-white'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Institutional Metadata
        </button>
      </div>

      {/* Section: Edit Students & Answers */}
      {activeSection === 'students' && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left list of students */}
          <div className="md:col-span-1 bg-white rounded-xl p-3 border border-slate-200 shadow-xs space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase px-2 block mb-1">
              Select major / student:
            </span>
            {currentStudents.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => setSelectedStudentIndex(idx)}
                className={`w-full text-left p-2 rounded-lg text-xs transition-colors flex items-center gap-2 ${
                  selectedStudentIndex === idx
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className="w-5 h-5 rounded bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div className="truncate">
                  <span className="block truncate font-medium">{st.name}</span>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="font-mono text-amber-800 font-bold">{st.studentCode}</span>
                    <span className="text-slate-400">·</span>
                    <span className={`truncate ${selectedStudentIndex === idx ? 'text-slate-300' : 'text-slate-500'}`}>
                      {st.career.split(' (')[0]}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right edit form */}
          <div className="md:col-span-3 bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-5">
            <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-bold text-slate-900 text-base">
                Student #{selectedStudentIndex + 1}: {currentStudents[selectedStudentIndex].name}
              </h3>
              <span className="font-mono bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded text-xs font-bold">
                ID: {currentStudents[selectedStudentIndex].studentCode}
              </span>
            </div>

            {/* General profile fields */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name:
                </label>
                <input
                  type="text"
                  value={currentStudents[selectedStudentIndex].name}
                  onChange={(e) => handleStudentFieldChange('name', e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:border-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Student Code / ID:
                </label>
                <input
                  type="text"
                  value={currentStudents[selectedStudentIndex].studentCode || ''}
                  onChange={(e) => handleStudentFieldChange('studentCode', e.target.value)}
                  placeholder="e.g. 720261009"
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:border-slate-400 font-mono font-bold text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Degree / Major:
                </label>
                <input
                  type="text"
                  value={currentStudents[selectedStudentIndex].career}
                  onChange={(e) => handleStudentFieldChange('career', e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:border-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Semester:
                </label>
                <input
                  type="text"
                  value={currentStudents[selectedStudentIndex].semester}
                  onChange={(e) => handleStudentFieldChange('semester', e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:border-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Campus:
                </label>
                <select
                  value={currentStudents[selectedStudentIndex].campus}
                  onChange={(e) => handleStudentFieldChange('campus', e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:border-slate-400 font-medium"
                >
                  <option value="Tagaste Campus">Tagaste Campus</option>
                  <option value="Suba Campus">Suba Campus</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Faculty:
                </label>
                <input
                  type="text"
                  value={currentStudents[selectedStudentIndex].faculty}
                  onChange={(e) => handleStudentFieldChange('faculty', e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:border-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Highlight Quote:
                </label>
                <input
                  type="text"
                  value={currentStudents[selectedStudentIndex].highlightQuote}
                  onChange={(e) => handleStudentFieldChange('highlightQuote', e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:border-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Interviewer-Assessed English Level (CEFR):
                </label>
                <select
                  value={currentStudents[selectedStudentIndex].perceivedEnglishLevel}
                  onChange={(e) => handleStudentFieldChange('perceivedEnglishLevel', e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:border-slate-400 font-medium"
                >
                  <option value="A1 - Beginner">A1 - Beginner</option>
                  <option value="A2 - Elementary">A2 - Elementary</option>
                  <option value="B1 - Intermediate">B1 - Intermediate</option>
                  <option value="B2 - Upper Intermediate">B2 - Upper Intermediate</option>
                </select>
              </div>
            </div>

            {/* Individual Responses inputs */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h4 className="font-bold text-xs uppercase tracking-wider text-amber-800">
                Edit the {currentQuestions.length} Individual Answers from this Student:
              </h4>

              {currentQuestions.map((q) => (
                <div key={q.id} className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-800">
                    <span className="text-amber-700 font-bold mr-1">[{q.code}]</span>
                    {q.title}
                  </label>
                  <textarea
                    rows={2}
                    value={currentStudents[selectedStudentIndex].answers[q.id] || ''}
                    onChange={(e) => handleStudentAnswerChange(q.id, e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:border-slate-400 text-slate-800 leading-relaxed"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Section: Edit Questions */}
      {activeSection === 'questions' && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 bg-white rounded-xl p-3 border border-slate-200 shadow-xs space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase px-2 block mb-1">
              Select question:
            </span>
            {currentQuestions.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => setSelectedQuestionIndex(idx)}
                className={`w-full text-left p-2 rounded-lg text-xs transition-colors flex items-center gap-2 ${
                  selectedQuestionIndex === idx
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className="w-5 h-5 rounded bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shrink-0">
                  {q.code}
                </span>
                <span className="truncate">{q.category}</span>
              </button>
            ))}
          </div>

          <div className="md:col-span-3 bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-3">
              Edit Question {currentQuestions[selectedQuestionIndex].code}
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Question Text:
              </label>
              <textarea
                rows={2}
                value={currentQuestions[selectedQuestionIndex].title}
                onChange={(e) => handleQuestionFieldChange('title', e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:border-slate-400 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Category / Thematic Axis:
              </label>
              <input
                type="text"
                value={currentQuestions[selectedQuestionIndex].category}
                onChange={(e) => handleQuestionFieldChange('category', e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:border-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Academic & Pedagogical Objective:
              </label>
              <textarea
                rows={2}
                value={currentQuestions[selectedQuestionIndex].academicObjective}
                onChange={(e) => handleQuestionFieldChange('academicObjective', e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:border-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Summary Pattern Across Responses:
              </label>
              <textarea
                rows={2}
                value={currentQuestions[selectedQuestionIndex].summaryInsight}
                onChange={(e) => handleQuestionFieldChange('summaryInsight', e.target.value)}
                className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:border-slate-400"
              />
            </div>
          </div>
        </div>
      )}

      {/* Section: Edit Team */}
      {activeSection === 'team' && (
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-6">
          <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-3">
            Edit Student Interviewer Team
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {currentInterviewers.map((inv, idx) => (
              <div key={inv.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <span className="font-bold text-xs text-amber-800 block">
                  Researcher #{idx + 1}
                </span>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Name:</label>
                  <input
                    type="text"
                    value={inv.name}
                    onChange={(e) => {
                      const updated = [...currentInterviewers];
                      updated[idx].name = e.target.value;
                      setCurrentInterviewers(updated);
                    }}
                    className="w-full text-xs p-1.5 bg-white border border-slate-200 rounded"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Role:</label>
                  <input
                    type="text"
                    value={inv.role}
                    onChange={(e) => {
                      const updated = [...currentInterviewers];
                      updated[idx].role = e.target.value;
                      setCurrentInterviewers(updated);
                    }}
                    className="w-full text-xs p-1.5 bg-white border border-slate-200 rounded"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Institutional Email:</label>
                  <input
                    type="text"
                    value={inv.email}
                    onChange={(e) => {
                      const updated = [...currentInterviewers];
                      updated[idx].email = e.target.value;
                      setCurrentInterviewers(updated);
                    }}
                    className="w-full text-xs p-1.5 bg-white border border-slate-200 rounded"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Fieldwork Reflection:</label>
                  <textarea
                    rows={3}
                    value={inv.reflection}
                    onChange={(e) => {
                      const updated = [...currentInterviewers];
                      updated[idx].reflection = e.target.value;
                      setCurrentInterviewers(updated);
                    }}
                    className="w-full text-xs p-1.5 bg-white border border-slate-200 rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section: Metadata */}
      {activeSection === 'metadata' && (
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4 max-w-3xl">
          <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-3">
            Institutional Project Metadata
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">University:</label>
              <input
                type="text"
                value={currentMetadata.university}
                onChange={(e) => setCurrentMetadata({ ...currentMetadata, university: e.target.value })}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Degree Program:</label>
              <input
                type="text"
                value={currentMetadata.program}
                onChange={(e) => setCurrentMetadata({ ...currentMetadata, program: e.target.value })}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Course / Academic Subject:</label>
              <input
                type="text"
                value={currentMetadata.subject}
                onChange={(e) => setCurrentMetadata({ ...currentMetadata, subject: e.target.value })}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">City & Academic Term:</label>
              <input
                type="text"
                value={currentMetadata.city}
                onChange={(e) => setCurrentMetadata({ ...currentMetadata, city: e.target.value })}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-semibold text-slate-700 mb-1">Project Title:</label>
              <input
                type="text"
                value={currentMetadata.title}
                onChange={(e) => setCurrentMetadata({ ...currentMetadata, title: e.target.value })}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg font-bold"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-semibold text-slate-700 mb-1">General Objective:</label>
              <textarea
                rows={2}
                value={currentMetadata.generalObjective}
                onChange={(e) => setCurrentMetadata({ ...currentMetadata, generalObjective: e.target.value })}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
