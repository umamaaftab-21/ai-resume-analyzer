import React, { useState } from 'react';
import { ResumeAnalysisResult } from '../types';
import { HelpCircle, ChevronDown, ChevronUp, Code, MessageSquare, Lightbulb } from 'lucide-react';

interface InterviewPrepProps {
  data: ResumeAnalysisResult;
}

export const InterviewPrep: React.FC<InterviewPrepProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'tech' | 'hr'>('tech');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const techQs = data.interviewPrep?.technicalQuestions || [];
  const hrQs = data.interviewPrep?.behavioralQuestions || [];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <HelpCircle className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold text-slate-900">Tailored Interview Preparation</h3>
          </div>
          <p className="text-xs text-slate-500">
            Practice questions and expert guidance generated for this target role and your resume.
          </p>
        </div>

        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button
            onClick={() => {
              setActiveTab('tech');
              setOpenIndex(0);
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'tech'
                ? 'bg-white text-indigo-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Code className="w-3.5 h-3.5" /> Technical ({techQs.length})
          </button>
          <button
            onClick={() => {
              setActiveTab('hr');
              setOpenIndex(0);
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'hr'
                ? 'bg-white text-indigo-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" /> HR & Behavioral ({hrQs.length})
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {activeTab === 'tech' &&
          techQs.map((q, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/40 transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 text-left flex justify-between items-center gap-3 cursor-pointer hover:bg-slate-100/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      T{idx + 1}
                    </span>
                    <span className="font-semibold text-slate-900 text-sm leading-snug">{q.question}</span>
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-200/60 bg-white space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-700 pt-2">
                      <Lightbulb className="w-3.5 h-3.5" /> Answering Guidance:
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed bg-indigo-50/30 p-3 rounded-lg border border-indigo-100">
                      {q.guidance}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

        {activeTab === 'hr' &&
          hrQs.map((q, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/40 transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 text-left flex justify-between items-center gap-3 cursor-pointer hover:bg-slate-100/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      B{idx + 1}
                    </span>
                    <span className="font-semibold text-slate-900 text-sm leading-snug">{q.question}</span>
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-200/60 bg-white space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 pt-2">
                      <Lightbulb className="w-3.5 h-3.5" /> STAR Method Guidance:
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed bg-emerald-50/30 p-3 rounded-lg border border-emerald-100">
                      {q.guidance}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
