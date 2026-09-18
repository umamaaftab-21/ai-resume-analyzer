import React from 'react';
import { ActiveTab } from '../types';

interface TopNavbarProps {
  activeTab: ActiveTab | 'home';
  fileName: string;
  targetRole: string;
  hasAnalysis: boolean;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  activeTab,
  targetRole,
}) => {
  const getTabName = () => {
    switch (activeTab) {
      case 'home': return 'Home';
      case 'match': return 'Analytics';
      case 'skills_gap': return 'Skill Gaps';
      case 'projects': return 'Projects';
      case 'interview': return 'Interview Prep';
      case 'improvements': return 'Tuning';
    }
  };

  return (
    <header className="px-10 py-6 flex justify-between items-center border-b border-[var(--ink-faint)] bg-[rgba(9,13,22,0.8)] backdrop-blur-md sticky top-0 z-20">
      <div className="flex items-center gap-2 text-xs text-[var(--ink-dim)] font-['Geist_Mono']">
        <span>Astra Studio</span> / <span>Workflow</span> / <span className="text-[var(--ink)] font-semibold">{targetRole || getTabName()}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.2)] rounded-full text-[0.7rem] font-semibold text-[var(--accent)] uppercase tracking-wider">
          <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full shadow-[0_0_10px_var(--accent)]"></div>
          Astra 6.0 Active
        </div>

        <div className="w-9 h-9 rounded-full bg-[#1e293b] border border-[var(--ink-faint)] flex items-center justify-center text-[var(--ink)] font-bold text-xs shadow-xs">
          AI
        </div>
      </div>
    </header>
  );
};
