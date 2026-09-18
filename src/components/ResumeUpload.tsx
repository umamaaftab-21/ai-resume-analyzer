import React, { useState, useRef } from 'react';
import { Upload, FileText, X, AlertCircle, Eye, CheckCircle2 } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';

// Configure pdfjs worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

interface ResumeUploadProps {
  resumeText: string;
  setResumeText: (text: string) => void;
  fileName: string;
  setFileName: (name: string) => void;
}

export const ResumeUpload: React.FC<ResumeUploadProps> = ({
  resumeText,
  setResumeText,
  fileName,
  setFileName,
}) => {
  const [isParsing, setIsParsing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
      setError('Please upload a valid PDF resume file.');
      return;
    }

    setError(null);
    setIsParsing(true);
    setFileName(file.name);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdfDoc = await loadingTask.promise;
      let fullText = '';

      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(' ');
        fullText += pageText + '\n\n';
      }

      if (!fullText.trim()) {
        throw new Error('No readable text found in this PDF. Please paste your resume text manually if needed.');
      }

      setResumeText(fullText.trim());
      setShowPreview(true);
    } catch (err: any) {
      console.error('PDF parsing error:', err);
      setError(err.message || 'Failed to parse PDF resume.');
    } finally {
      setIsParsing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = () => {
    setResumeText('');
    setFileName('');
    setError(null);
    setShowPreview(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-xs font-semibold text-[var(--ink-secondary)] uppercase tracking-wider">
          SOURCE RESUME (PDF) <span className="text-[var(--accent)]">*</span>
        </label>
        {fileName && (
          <button
            onClick={handleRemove}
            className="text-xs font-medium text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" /> Remove
          </button>
        )}
      </div>

      {!fileName ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="file-drop border border-[var(--border)] bg-[#161B22] rounded-2xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[var(--accent)] hover:bg-[rgba(139,92,246,0.05)] transition-all"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".pdf,application/pdf"
            className="hidden"
          />
          {isParsing ? (
            <div className="flex items-center gap-2 text-xs text-[var(--ink)]">
              <div className="w-4 h-4 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
              <span>Extracting resume vector data...</span>
            </div>
          ) : (
            <>
              <div className="w-10 h-10 rounded-xl bg-[rgba(139,92,246,0.1)] text-[var(--accent)] flex items-center justify-center">
                <Upload className="w-5 h-5" />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-[var(--ink)]">Drag & drop your resume here</p>
                <p className="text-[11px] text-[var(--ink-secondary)] mt-0.5">or click to browse PDF files (Max 10MB)</p>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="bg-[#161B22] border border-[var(--border)] rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[var(--ink)] flex items-center gap-1.5">
                {fileName}
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <p className="text-[11px] text-[var(--ink-secondary)]">
                {resumeText.length} characters parsed successfully
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.05)] text-[var(--ink)] text-xs font-medium hover:bg-[rgba(255,255,255,0.1)] flex items-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[var(--accent)]" />
            {showPreview ? 'Hide Text' : 'Preview'}
          </button>
        </div>
      )}

      {showPreview && (
        <div className="p-4 bg-[#161B22] border border-[var(--border)] rounded-xl max-h-48 overflow-y-auto text-[11px] font-mono text-[var(--ink-secondary)] leading-relaxed">
          {resumeText}
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-300 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
