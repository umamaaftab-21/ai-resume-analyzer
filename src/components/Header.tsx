import React from 'react';
import { Sparkles, FileText, Play } from 'lucide-react';

interface HeaderProps {
  onTryDemo: () => void;
  isLoading: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onTryDemo, isLoading }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                AI Resume & Internship Analyzer
              </h1>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                <Sparkles className="w-3 h-3 mr-1" />
                Gemini 2.5
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Analyze your resume. Find your skill gaps. Prepare for your next opportunity.
            </p>
          </div>
        </div>

        <button
          onClick={onTryDemo}
          disabled={isLoading}
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium text-sm rounded-lg transition-colors border border-indigo-200 cursor-pointer disabled:opacity-50"
        >
          <Play className="w-4 h-4 fill-indigo-700" />
          Try Demo Mode
        </button>
      </div>
    </header>
  );
};
