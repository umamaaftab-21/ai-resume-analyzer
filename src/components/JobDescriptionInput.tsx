import React from 'react';
import { Sparkles } from 'lucide-react';
import { SAMPLE_JOB_DESCRIPTION } from '../data/demoData';

interface JobDescriptionInputProps {
  jobDescription: string;
  setJobDescription: (desc: string) => void;
}

export const JobDescriptionInput: React.FC<JobDescriptionInputProps> = ({
  jobDescription,
  setJobDescription,
}) => {
  const handleLoadSampleJD = () => {
    setJobDescription(SAMPLE_JOB_DESCRIPTION);
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-xs font-semibold text-[var(--ink-secondary)] uppercase tracking-wider">
          BENCHMARK CONTEXT (JOB DESCRIPTION) <span className="text-[var(--accent)]">*</span>
        </label>
        <button
          onClick={handleLoadSampleJD}
          className="text-xs font-semibold text-[var(--accent)] hover:text-purple-300 flex items-center gap-1 bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.3)] px-3 py-1 rounded-lg transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" /> Sample Job Description
        </button>
      </div>

      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        rows={6}
        placeholder="Paste target job requirements here for gap analysis..."
        className="w-full bg-[#161B22] border border-[var(--border)] rounded-xl p-4 text-xs text-[var(--ink)] focus:outline-none focus:border-[var(--accent)] resize-none leading-relaxed"
      />
    </div>
  );
};
