import React from 'react';
import { ResumeAnalysisResult } from '../types';
import { Award, CheckCircle2, AlertTriangle, FileCheck, TrendingUp } from 'lucide-react';

interface MatchDashboardProps {
  data: ResumeAnalysisResult;
}

export const MatchDashboard: React.FC<MatchDashboardProps> = ({ data }) => {
  const scoreColor =
    data.matchScore >= 80
      ? 'text-emerald-600 bg-emerald-50 border-emerald-200'
      : data.matchScore >= 60
      ? 'text-amber-600 bg-amber-50 border-amber-200'
      : 'text-rose-600 bg-rose-50 border-rose-200';

  const ringColor =
    data.matchScore >= 80
      ? 'stroke-emerald-600'
      : data.matchScore >= 60
      ? 'stroke-amber-500'
      : 'stroke-rose-600';

  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (data.matchScore / 100) * circumference;

  return (
    <div className="space-y-6">
      {/* Top Banner / Match Score Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="flex flex-col items-center justify-center p-4 bg-slate-50/80 rounded-xl border border-slate-100">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                className="stroke-slate-200"
                strokeWidth="10"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                className={`${ringColor} transition-all duration-1000 ease-out`}
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-extrabold text-slate-900">{data.matchScore}%</span>
              <span className="text-xs font-semibold text-slate-500">Match Score</span>
            </div>
          </div>
          <span className="mt-2 text-[11px] text-slate-400 font-medium text-center">
            *AI-generated estimate based on resume vs job description
          </span>
        </div>

        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Resume Match Summary</h3>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">{data.scoreExplanation}</p>

          <div className="pt-2 flex flex-wrap gap-2">
            <div className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium border border-indigo-100">
              {data.matchingSkills.length} Matching Skills Found
            </div>
            <div className="px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-xs font-medium border border-amber-100">
              {data.missingSkills.length} Skill Gaps Identified
            </div>
          </div>
        </div>
      </div>

      {/* Grid for Strengths, Areas for Improvement, ATS Suggestions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Strengths */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm">Resume Strengths</h4>
          </div>
          <ul className="space-y-2.5 flex-1">
            {data.resumeStrengths.map((item, idx) => (
              <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas for Improvement */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm">Areas for Improvement</h4>
          </div>
          <ul className="space-y-2.5 flex-1">
            {data.areasForImprovement.map((item, idx) => (
              <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ATS Optimization */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <FileCheck className="w-4 h-4" />
            </div>
            <h4 className="font-semibold text-slate-900 text-sm">ATS Optimization</h4>
          </div>
          <ul className="space-y-2.5 flex-1">
            {data.atsOptimizationSuggestions.map((item, idx) => (
              <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Experience & Education Relevance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
            <h4 className="font-semibold text-slate-900 text-sm">Experience Analysis</h4>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">{data.experienceAnalysis}</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold text-slate-900 text-sm">Education Relevance</h4>
            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-md">
              {data.educationRelevance.score}% Match
            </span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">{data.educationRelevance.notes}</p>
          <div className="mt-3 w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${data.educationRelevance.score}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
