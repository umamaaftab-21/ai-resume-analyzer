import React from 'react';
import { ResumeAnalysisResult } from '../types';
import { Check, X, Cpu, Layers } from 'lucide-react';

interface SkillsAnalysisProps {
  data: ResumeAnalysisResult;
}

export const SkillsAnalysis: React.FC<SkillsAnalysisProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* Matching & Missing Skills Tags */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Check className="w-3.5 h-3.5" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm">Matching Skills ({data.matchingSkills.length})</h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {data.matchingSkills.map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"
              >
                <Check className="w-3 h-3 text-emerald-600" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-rose-50 text-rose-600 flex items-center justify-center">
              <X className="w-3.5 h-3.5" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm">Missing Skills ({data.missingSkills.length})</h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {data.missingSkills.map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-rose-50 text-rose-700 border border-rose-100"
              >
                <X className="w-3 h-3 text-rose-600" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Skills Category Analysis */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="w-4 h-4 text-indigo-600" />
          <h4 className="font-semibold text-slate-900 text-sm">Technical Skills Breakdown</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.technicalSkillsAnalysis.map((cat, idx) => {
            const badgeColor =
              cat.matchLevel === 'High'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : cat.matchLevel === 'Medium'
                ? 'bg-amber-50 text-amber-700 border-amber-200'
                : 'bg-rose-50 text-rose-700 border-rose-200';

            return (
              <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-900 text-xs flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-600" />
                    {cat.category}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${badgeColor}`}>
                    {cat.matchLevel} Match
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {cat.skills && cat.skills.length > 0 ? (
                    cat.skills.map((s, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-xs text-slate-700">
                        {s}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-400 italic">None mentioned in resume</span>
                  )}
                </div>

                <p className="text-xs text-slate-600 pt-1 leading-relaxed border-t border-slate-200/60 mt-2">
                  {cat.comment}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
