import React from 'react';
import { X, FileText, CheckCircle } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NetflixResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#111413] rounded-2xl max-w-lg w-full border border-[#1f2723] shadow-2xl overflow-hidden z-10 p-6 sm:p-8 space-y-6 text-white animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#141816] text-[#A7ADA9] hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-950/60 text-amber-400 flex items-center justify-center border border-amber-700/50">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="font-editorial text-2xl font-bold tracking-wide">
            Resume Status: Pending Upload
          </h3>
          <p className="text-xs sm:text-sm text-[#A7ADA9] leading-relaxed">
            In compliance with verified profile integrity, the resume download remains securely inactive until your official resume document is linked.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#080909] border border-[#1f2723] text-xs text-[#A7ADA9] space-y-2">
          <div className="font-bold text-white flex items-center space-x-1.5 font-mono">
            <CheckCircle className="w-4 h-4 text-[#00C982]" />
            <span>How to activate direct download:</span>
          </div>
          <ol className="list-decimal pl-4 space-y-1 text-[#A7ADA9]/80 font-mono text-[11px]">
            <li>Add your verified PDF resume to <code className="bg-[#111413] px-1 py-0.5 rounded text-white border border-[#1f2723]">public/resume.pdf</code>.</li>
            <li>Link the path in <code className="bg-[#111413] px-1 py-0.5 rounded text-white border border-[#1f2723]">src/data/portfolioData.ts</code>.</li>
            <li>The button will immediately switch to active direct download.</li>
          </ol>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#00C982] hover:bg-[#78FFB4] text-black text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
