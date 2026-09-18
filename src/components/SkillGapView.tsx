import React from 'react';
import { ResumeAnalysisResult } from '../types';
import { Layers, CheckCircle, AlertCircle } from 'lucide-react';

interface SkillGapViewProps {
  data: ResumeAnalysisResult;
}

export const SkillGapView: React.FC<SkillGapViewProps> = ({ data }) => {
  const categories = data.skillGapCategories || [];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-5">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Layers className="w-5 h-5 text-indigo-600" />
          <h3 className="text-base font-bold text-slate-900">Comprehensive Skill Gap Analysis</h3>
        </div>
        <p className="text-xs text-slate-500">
          Detailed breakdown of required skills vs. your resume across key technical domains.
        </p>
      </div>

      <div className="space-y-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-slate-50/40 space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                {cat.categoryName}
              </h4>
              <span className="text-xs font-medium text-slate-500">
                {cat.candidateSkills.length} / {cat.requiredSkills.length} acquired
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {/* Candidate Skills */}
              <div className="p-3 bg-emerald-50/60 border border-emerald-100 rounded-lg space-y-1.5">
                <div className="flex items-center gap-1 font-semibold text-emerald-800">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Candidate Has ({cat.candidateSkills.length})
                </div>
                <div className="flex flex-wrap gap-1">
                  {cat.candidateSkills.length > 0 ? (
                    cat.candidateSkills.map((s, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 bg-white border border-emerald-200 text-emerald-900 rounded">
                        {s}
                      </span>
                    ))
                  ) : (
                    <span className="text-slate-400 italic">None found</span>
                  )}
                </div>
              </div>

              {/* Required Skills */}
              <div className="p-3 bg-slate-100/80 border border-slate-200 rounded-lg space-y-1.5">
                <div className="flex items-center gap-1 font-semibold text-slate-700">
                  Required by Job ({cat.requiredSkills.length})
                </div>
                <div className="flex flex-wrap gap-1">
                  {cat.requiredSkills.map((s, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 bg-white border border-slate-300 text-slate-800 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Missing Skills */}
              <div className="p-3 bg-rose-50/60 border border-rose-100 rounded-lg space-y-1.5">
                <div className="flex items-center gap-1 font-semibold text-rose-800">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                  Missing Skills ({cat.missingSkills.length})
                </div>
                <div className="flex flex-wrap gap-1">
                  {cat.missingSkills.length > 0 ? (
                    cat.missingSkills.map((s, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 bg-white border border-rose-200 text-rose-900 rounded font-medium">
                        {s}
                      </span>
                    ))
                  ) : (
                    <span className="text-emerald-600 font-medium">None! All covered 🎉</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
