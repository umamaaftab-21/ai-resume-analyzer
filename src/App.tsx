import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNavbar } from './components/TopNavbar';
import { ResumeUpload } from './components/ResumeUpload';
import { TargetRoleSelector } from './components/TargetRoleSelector';
import { JobDescriptionInput } from './components/JobDescriptionInput';
import { MatchDashboard } from './components/MatchDashboard';
import { SkillsAndGapView } from './components/SkillsAndGapView';
import { ProjectRecommendations } from './components/ProjectRecommendations';
import { InterviewPrep } from './components/InterviewPrep';
import { ResumeImprovement } from './components/ResumeImprovement';
import { ActiveTab, ResumeAnalysisResult } from './types';
import { SAMPLE_RESUME_TEXT, SAMPLE_JOB_DESCRIPTION, DEMO_ANALYSIS_RESULT } from './data/demoData';
import { AlertCircle, Play } from 'lucide-react';

export default function App() {
  const [resumeText, setResumeText] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [targetRole, setTargetRole] = useState<string>('Data Science Intern');
  const [jobDescription, setJobDescription] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisData, setAnalysisData] = useState<ResumeAnalysisResult | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab | 'home'>('home');

  const handleTryDemo = () => {
    setResumeText(SAMPLE_RESUME_TEXT);
    setFileName('Alex_Chen_Resume_2026.pdf');
    setTargetRole('Data Science Intern');
    setJobDescription(SAMPLE_JOB_DESCRIPTION);
    setAnalysisData(DEMO_ANALYSIS_RESULT);
    setActiveTab('match');
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!resumeText.trim()) {
      setError('Please upload or enter your resume content before analyzing.');
      return;
    }
    if (!targetRole.trim()) {
      setError('Please select or enter a target role.');
      return;
    }
    if (!jobDescription.trim()) {
      setError('Please paste a target job or internship description.');
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/analyze-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resumeText,
          targetRole,
          jobDescription,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze resume.');
      }

      setAnalysisData(data);
      setActiveTab('match');
    } catch (err: any) {
      console.error('Analysis error:', err);
      setError(err.message || 'An error occurred while communicating with Gemini AI.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] flex font-['Geist',sans-serif] overflow-hidden select-none">
      {/* Astra Glowing Background Orbs */}
      <div className="astra-bg">
        <div className="orb-1"></div>
        <div className="orb-2"></div>
      </div>

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onTryDemo={handleTryDemo}
        isLoading={isLoading}
        hasAnalysis={!!analysisData}
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden relative z-10">
        <TopNavbar
          activeTab={activeTab}
          fileName={fileName}
          targetRole={targetRole}
          hasAnalysis={!!analysisData}
        />

        <div className="flex-1 overflow-y-auto p-10">
          {activeTab === 'home' && (
            <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
              {/* Hero Bento Card */}
              <div className="lg:col-span-2 bg-[var(--surface)] border border-[rgba(139,92,246,0.2)] backdrop-blur-2xl rounded-[var(--card-radius)] p-10 relative overflow-hidden flex flex-col md:flex-row justify-between items-center bg-gradient-to-br from-[rgba(139,92,246,0.1)] to-[rgba(6,182,212,0.05)] shadow-2xl">
                <div className="max-w-xl space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.2)] rounded-full text-[0.7rem] font-semibold text-[var(--accent)] uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full shadow-[0_0_10px_var(--accent)]"></div>
                    Next-Gen Analysis
                  </div>
                  <h2 className="font-['Syne'] text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                    Accelerate your career trajectory.
                  </h2>
                  <p className="text-[var(--ink-dim)] text-sm leading-relaxed">
                    Leverage the Astra Gemini 2.5 engine to bridge the gap between your current skills and your target roles with hyper-precision.
                  </p>
                  <div className="pt-2 flex gap-4">
                    <button
                      onClick={handleTryDemo}
                      disabled={isLoading}
                      className="px-6 py-3.5 rounded-xl bg-[var(--ink)] text-[var(--bg)] font-bold text-xs uppercase tracking-wider shadow-lg hover:translate-y-[-2px] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Play className="w-4 h-4 fill-[var(--bg)]" />
                      Try Sample Demo
                    </button>
                    {analysisData && (
                      <button
                        onClick={() => setActiveTab('match')}
                        className="px-6 py-3.5 rounded-xl bg-[rgba(255,255,255,0.05)] text-[var(--ink)] border border-[var(--ink-faint)] font-bold text-xs uppercase tracking-wider hover:bg-[rgba(255,255,255,0.1)] transition-all cursor-pointer"
                      >
                        View Analysis Report
                      </button>
                    )}
                  </div>
                </div>

                <div className="hidden md:block shrink-0">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                    <circle cx="100" cy="100" r="80" stroke="url(#paint0_linear)" strokeWidth="1" strokeDasharray="10 5" />
                    <circle cx="100" cy="100" r="60" stroke="url(#paint1_linear)" strokeWidth="2" />
                    <defs>
                      <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06B6D4" />
                        <stop offset="1" stopColor="#8B5CF6" />
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="100" y1="40" x2="100" y2="160" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06B6D4" />
                        <stop offset="1" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Configuration Workflow Card */}
              <div className="bg-[var(--surface)] border border-[var(--ink-faint)] backdrop-blur-xl rounded-[var(--card-radius)] p-8 space-y-6">
                <div className="flex justify-between items-end border-b border-[var(--ink-faint)] pb-4">
                  <div>
                    <h3 className="font-['Syne'] text-xl font-bold tracking-tight">Workflow Configuration</h3>
                    <p className="text-[var(--ink-dim)] text-xs mt-1">Initialize your profile for deep engine synthesis.</p>
                  </div>
                  <span className="font-['Geist_Mono'] text-[0.65rem] text-[var(--accent)] border border-[var(--accent)] px-2.5 py-1 rounded-md bg-[rgba(6,182,212,0.05)]">
                    SYSTEM_READY
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--ink-faint)] rounded-2xl p-6 transition-all hover:border-[var(--accent)]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="font-['Geist_Mono'] text-xs w-6 h-6 rounded-full border border-[var(--ink-dim)] flex items-center justify-center text-[var(--ink-dim)]">01</div>
                      <div className="text-sm font-semibold">Source Material <span className="text-rose-400">*</span></div>
                    </div>
                    <ResumeUpload
                      resumeText={resumeText}
                      setResumeText={setResumeText}
                      fileName={fileName}
                      setFileName={setFileName}
                    />
                  </div>

                  <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--ink-faint)] rounded-2xl p-6 transition-all hover:border-[var(--accent)]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="font-['Geist_Mono'] text-xs w-6 h-6 rounded-full border border-[var(--ink-dim)] flex items-center justify-center text-[var(--ink-dim)]">02</div>
                      <div className="text-sm font-semibold">Trajectory Target <span className="text-rose-400">*</span></div>
                    </div>
                    <TargetRoleSelector targetRole={targetRole} setTargetRole={setTargetRole} />
                  </div>

                  <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--ink-faint)] rounded-2xl p-6 transition-all hover:border-[var(--accent)]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="font-['Geist_Mono'] text-xs w-6 h-6 rounded-full border border-[var(--ink-dim)] flex items-center justify-center text-[var(--ink-dim)]">03</div>
                        <div className="text-sm font-semibold">Role Specifications <span className="text-rose-400">*</span></div>
                      </div>
                    </div>
                    <JobDescriptionInput
                      jobDescription={jobDescription}
                      setJobDescription={setJobDescription}
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    onClick={handleAnalyze}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[var(--accent)] to-[var(--violet)] text-white border-none py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_10px_25px_rgba(6,182,212,0.2)] hover:translate-y-[-1px] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>SYNTHESIZING ANALYSIS REPORT...</span>
                      </>
                    ) : (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                        Synthesize Analysis Report
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Side Stats & Feature Panels */}
              <div className="space-y-6">
                <div className="bg-[var(--surface)] border border-[var(--ink-faint)] backdrop-blur-xl rounded-[var(--card-radius)] p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">Synthesis Score</h4>
                    <p className="text-xs text-[var(--ink-dim)] leading-relaxed">Real-time estimation of resume-to-role compatibility based on modern ATS logic.</p>
                  </div>
                </div>

                <div className="bg-[var(--surface)] border border-[var(--ink-faint)] backdrop-blur-xl rounded-[var(--card-radius)] p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(16,185,129,0.1)] flex items-center justify-center text-emerald-400 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">Skill Delta Matrix</h4>
                    <p className="text-xs text-[var(--ink-dim)] leading-relaxed">Automated identification of acquired versus required technical proficiencies.</p>
                  </div>
                </div>

                <div className="bg-[var(--surface)] border border-[var(--ink-faint)] backdrop-blur-xl rounded-[var(--card-radius)] p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(245,158,11,0.1)] flex items-center justify-center text-amber-400 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">Astra Recommendations</h4>
                    <p className="text-xs text-[var(--ink-dim)] leading-relaxed">Hyper-targeted project suggestions to rapidly fill gaps and behavioral STAR prep.</p>
                  </div>
                </div>

                <div className="bg-[var(--surface)] border border-dashed border-[var(--ink-faint)] backdrop-blur-xl rounded-[var(--card-radius)] p-8 flex flex-col justify-center items-center text-center opacity-60">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--ink-dim)] mb-2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  <p className="text-xs text-[var(--ink-dim)] font-['Geist_Mono']">Add Custom Module</p>
                </div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && activeTab === 'home' && (
            <div className="bg-[var(--surface)] border border-[var(--ink-faint)] rounded-[var(--card-radius)] p-20 text-center space-y-6 max-w-[1300px] mx-auto">
              <div className="w-16 h-16 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin mx-auto"></div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[var(--ink)]">Astra AI Engine is synthesizing your report...</h3>
                <p className="text-xs text-[var(--ink-dim)] max-w-md mx-auto">
                  Analyzing vector embeddings against target job graph, extracting skill deltas, and formulating recommendations.
                </p>
              </div>
            </div>
          )}

          {/* Results Views */}
          {analysisData && activeTab !== 'home' && (
            <div className="max-w-[1300px] mx-auto space-y-6">
              {activeTab === 'match' && <MatchDashboard data={analysisData} />}
              {activeTab === 'skills_gap' && <SkillsAndGapView data={analysisData} />}
              {activeTab === 'projects' && <ProjectRecommendations data={analysisData} />}
              {activeTab === 'interview' && <InterviewPrep data={analysisData} />}
              {activeTab === 'improvements' && <ResumeImprovement data={analysisData} />}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
