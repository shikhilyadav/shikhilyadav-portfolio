import React from 'react';
import { X, FileText, CheckCircle } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl max-w-lg w-full border border-[#E3DFD5] shadow-2xl overflow-hidden z-10 p-6 sm:p-8 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-forest-50 text-forest-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-forest-900">
            Resume Status: Pending Upload
          </h3>
          <p className="text-sm text-[#52605B] leading-relaxed">
            In compliance with verified documentation rules, the resume download button remains safely inactive until your official resume document is added.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-forest-50/70 border border-forest-100 text-xs text-[#404E4A] space-y-2">
          <div className="font-semibold text-forest-900 flex items-center space-x-1.5">
            <CheckCircle className="w-4 h-4 text-forest-600" />
            <span>How to activate your resume download:</span>
          </div>
          <ol className="list-decimal pl-4 space-y-1 text-[#52605B]">
            <li>Place your verified PDF resume inside the <code className="bg-white px-1 py-0.5 rounded border border-[#DFDAD0] text-forest-800">public/</code> folder (e.g. <code className="bg-white px-1 py-0.5 rounded border border-[#DFDAD0] text-forest-800">public/resume.pdf</code>).</li>
            <li>Link the file path in <code className="bg-white px-1 py-0.5 rounded border border-[#DFDAD0] text-forest-800">src/data/portfolioData.ts</code>.</li>
            <li>The button will automatically switch from placeholder to active direct download.</li>
          </ol>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-forest-700 hover:bg-forest-800 text-ivory text-xs font-semibold tracking-wide transition-all"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
