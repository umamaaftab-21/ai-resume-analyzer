import React from 'react';
import { ResumeAnalysisResult } from '../types';
import { Sparkles, FileText, CheckCircle, Tag, Layout } from 'lucide-react';

interface ResumeImprovementProps {
  data: ResumeAnalysisResult;
}

export const ResumeImprovement: React.FC<ResumeImprovementProps> = ({ data }) => {
  const imp = data.resumeImprovements || {
    professionalSummary: '',
    skillsSection: '',
    projectDescriptions: '',
    bulletPoints: '',
    keywords: [],
    atsFormatting: '',
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          <h3 className="text-base font-bold text-slate-900">Actionable Resume Improvements</h3>
        </div>
        <p className="text-xs text-slate-500">
          Tailored recommendations to upgrade your resume sections for maximum ATS parsing and recruiter impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Professional Summary */}
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs">
            <FileText className="w-4 h-4 text-indigo-600" />
            Professional Summary Suggestion
          </div>
          <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-slate-200/80 italic">
            "{imp.professionalSummary}"
          </p>
        </div>

        {/* Skills Section */}
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            Skills Section Formatting
          </div>
          <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-slate-200/80">
            {imp.skillsSection}
          </p>
        </div>

        {/* Project Descriptions */}
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs">
            <Layout className="w-4 h-4 text-indigo-600" />
            Project Descriptions & Impact
          </div>
          <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-slate-200/80">
            {imp.projectDescriptions}
          </p>
        </div>

        {/* Bullet Points */}
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs">
            <CheckCircle className="w-4 h-4 text-amber-600" />
            Bullet Point Best Practices
          </div>
          <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-slate-200/80">
            {imp.bulletPoints}
          </p>
        </div>
      </div>

      {/* Keywords */}
      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
        <div className="flex items-center gap-2 font-semibold text-slate-900 text-xs">
          <Tag className="w-4 h-4 text-indigo-600" />
          Recommended Keywords to Incorporate
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {imp.keywords && imp.keywords.length > 0 ? (
            imp.keywords.map((kw, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-md text-xs font-medium"
              >
                {kw}
              </span>
            ))
          ) : (
            <span className="text-xs text-slate-400 italic">No specific keywords missing</span>
          )}
        </div>
      </div>

      {/* ATS Formatting */}
      <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/30 space-y-1.5">
        <h4 className="font-semibold text-indigo-900 text-xs">ATS-Friendly Formatting Guidelines</h4>
        <p className="text-xs text-slate-700 leading-relaxed">{imp.atsFormatting}</p>
      </div>
    </div>
  );
};
