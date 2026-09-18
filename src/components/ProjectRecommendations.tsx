import React from 'react';
import { ResumeAnalysisResult } from '../types';
import { Lightbulb, Code, BarChart, ShieldCheck } from 'lucide-react';

interface ProjectRecommendationsProps {
  data: ResumeAnalysisResult;
}

export const ProjectRecommendations: React.FC<ProjectRecommendationsProps> = ({ data }) => {
  const projects = data.projectRecommendations || [];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Lightbulb className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold text-slate-900">Recommended Portfolio Projects</h3>
          </div>
          <p className="text-xs text-slate-500">
            Tailored projects designed specifically to bridge your missing skills for this target role.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((proj, idx) => {
          const diffColor =
            proj.difficulty === 'Beginner'
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : proj.difficulty === 'Intermediate'
              ? 'bg-amber-50 text-amber-700 border-amber-200'
              : 'bg-rose-50 text-rose-700 border-rose-200';

          return (
            <div key={idx} className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${diffColor}`}>
                    {proj.difficulty}
                  </span>
                </div>

                <h4 className="font-bold text-slate-900 text-sm leading-snug">{proj.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{proj.description}</p>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <Code className="w-3 h-3 text-indigo-600" /> Skills Developed
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {proj.skillsDeveloped.map((s, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] text-slate-700 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80 space-y-1">
                <span className="text-[11px] font-semibold text-indigo-700 uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" /> Why It Helps Your Portfolio
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">{proj.whyItImprovesPortfolio}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
