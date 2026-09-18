import React from 'react';
import { LayoutDashboard, Award, Layers, Lightbulb, HelpCircle, FileText, Play } from 'lucide-react';
import { ActiveTab } from '../types';

interface SidebarProps {
  activeTab: ActiveTab | 'home';
  setActiveTab: (tab: ActiveTab | 'home') => void;
  onTryDemo: () => void;
  isLoading: boolean;
  hasAnalysis: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  onTryDemo,
  isLoading,
  hasAnalysis,
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: LayoutDashboard },
    { id: 'match', label: 'Analytics', icon: Award, disabled: !hasAnalysis },
    { id: 'skills_gap', label: 'Skill Gaps', icon: Layers, disabled: !hasAnalysis },
    { id: 'projects', label: 'Projects', icon: Lightbulb, disabled: !hasAnalysis },
    { id: 'interview', label: 'Interview Prep', icon: HelpCircle, disabled: !hasAnalysis },
    { id: 'improvements', label: 'Tuning', icon: FileText, disabled: !hasAnalysis },
  ];

  return (
    <aside className="w-[280px] border-r border-[var(--ink-faint)] flex flex-col bg-[rgba(9,13,22,0.8)] backdrop-blur-xl z-10 shrink-0 select-none">
      <div className="p-8 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent)] to-[var(--violet)] rounded-lg flex items-center justify-center text-white shadow-[0_0_20px_var(--accent-glow)] shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
        </div>
        <div>
          <h1 className="font-['Syne'] text-[1rem] font-bold tracking-tight text-[var(--ink)] leading-none">ASTRA AI</h1>
          <p className="text-[0.65rem] text-[var(--ink-dim)] uppercase tracking-[0.1em] mt-1">Career Intelligence</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-2 space-y-1">
        <div className="font-['Geist_Mono'] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--ink-dim)] px-4 py-2">
          Core Suite
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const isDisabled = item.disabled;

          return (
            <button
              key={item.id}
              onClick={() => !isDisabled && setActiveTab(item.id as any)}
              disabled={isDisabled}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[0.85rem] transition-all text-left cursor-pointer ${
                isActive
                  ? 'bg-[rgba(255,255,255,0.05)] text-[var(--ink)] border border-[var(--ink-faint)] shadow-[0_4px_12px_rgba(0,0,0,0.2)] font-semibold'
                  : isDisabled
                  ? 'text-[var(--ink-dim)] opacity-30 cursor-not-allowed'
                  : 'text-[var(--ink-dim)] hover:text-[var(--ink)] hover:bg-[rgba(255,255,255,0.03)]'
              }`}
            >
              <Icon className="w-[18px] h-[18px] shrink-0" />
              <span>{item.label}</span>
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-6">
        <button
          onClick={onTryDemo}
          disabled={isLoading}
          className="w-full bg-[var(--ink)] text-[var(--bg)] border-none py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:translate-y-[-1px] transition-all cursor-pointer disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5 fill-[var(--bg)]" />
          Quick Demo
        </button>
      </div>
    </aside>
  );
};
