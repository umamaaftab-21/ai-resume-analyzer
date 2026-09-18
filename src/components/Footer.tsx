import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>
            AI-generated analysis is intended for educational and career-planning purposes and should be reviewed by the user.
          </span>
        </div>
        <div className="text-xs text-slate-400">
          AI Resume & Internship Analyzer • Powered by Gemini AI
        </div>
      </div>
    </footer>
  );
};
