import React, { useState } from 'react';
import { ResumeAnalysisResult } from '../types';
import { SkillsAnalysis } from './SkillsAnalysis';
import { SkillGapView } from './SkillGapView';
import { Cpu, Layers } from 'lucide-react';

interface SkillsAndGapViewProps {
  data: ResumeAnalysisResult;
}

export const SkillsAndGapView: React.FC<SkillsAndGapViewProps> = ({ data }) => {
  const [subTab, setSubTab] = useState<'breakdown' | 'matrix'>('breakdown');

  return (
    <div className="space-y-6">
      {/* Sub-navigation for Skills & Gap */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-1.5 flex gap-2 shadow-xs">
        <button
          onClick={() => setSubTab('breakdown')}
          className={`flex-1 px-4 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            subTab === 'breakdown'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          <Cpu className="w-4 h-4" /> Technical Skills Breakdown & Matching
        </button>
        <button
          onClick={() => setSubTab('matrix')}
          className={`flex-1 px-4 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            subTab === 'matrix'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          <Layers className="w-4 h-4" /> Comprehensive Skill Gap Matrix
        </button>
      </div>

      {subTab === 'breakdown' ? (
        <SkillsAnalysis data={data} />
      ) : (
        <SkillGapView data={data} />
      )}
    </div>
  );
};
