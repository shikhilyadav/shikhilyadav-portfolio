import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Check, Database, Cpu, Activity, AlertCircle } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Dialog Window */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full border border-[#E3DFD5] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-forest-900 text-ivory relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-ivory transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 pr-10">
            <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-forest-700 text-forest-100 text-xs font-semibold tracking-wide">
              <span>{project.category}</span>
              <span>•</span>
              <span>Status: {project.status}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-sans text-forest-100">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-charcoal text-sm">
          
          {/* Summary */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-forest-900 text-base">Project Overview</h4>
            <p className="text-[#52605B] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Dataset Info */}
          <div className="p-4 rounded-2xl bg-forest-50/70 border border-forest-100 space-y-1">
            <div className="flex items-center space-x-2 text-forest-800 font-semibold text-xs">
              <Database className="w-4 h-4 text-forest-700" />
              <span>Dataset &amp; Ingestion Context</span>
            </div>
            <p className="text-xs text-[#52605B]">
              {project.datasetInfo}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-forest-900 font-serif font-bold text-base">
              <Cpu className="w-4 h-4 text-forest-700" />
              <span>Key Features &amp; Engineering Work</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#404E4A]">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2 p-2.5 rounded-xl bg-ivory border border-[#E8E4DA]">
                  <Check className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-forest-900 font-serif font-bold text-base">
              <Activity className="w-4 h-4 text-forest-700" />
              <span>Methodology &amp; Workflow Steps</span>
            </div>
            <ol className="space-y-2 text-xs text-[#52605B]">
              {project.methodology.map((step, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="w-5 h-5 rounded-full bg-forest-100 text-forest-800 font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Verified Metrics / Benchmark (Explicit Placeholder) */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-1.5">
            <div className="flex items-center space-x-2 text-amber-900 font-semibold text-xs">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>Performance Metric / Benchmark Status</span>
            </div>
            <p className="text-xs font-mono text-amber-900 bg-white/80 p-2 rounded border border-amber-200">
              {project.metricsPlaceholder}
            </p>
            <p className="text-[11px] text-amber-800/80">
              * Note: In accordance with academic honesty, benchmark metrics are displayed as placeholders until verified test results are configured.
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-forest-900 text-sm">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-forest-50 border border-forest-200/60 text-xs font-medium text-forest-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / Action Links */}
        <div className="p-6 bg-ivory border-t border-[#E3DFD5] flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="text-xs text-[#6A7873] font-mono">
            Placeholder links — connect your repository below
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert(`Repository URL Placeholder:\n${project.githubUrl}\n\nPlease update this in src/data/portfolioData.ts with your real repository link.`);
              }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl border border-forest-700/30 bg-white text-forest-800 hover:bg-forest-50 text-xs font-semibold shadow-xs"
            >
              <Github className="w-3.5 h-3.5 text-forest-700" />
              <span>{project.githubUrl}</span>
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert(`Live Demo URL Placeholder:\n${project.demoUrl}\n\nPlease update this in src/data/portfolioData.ts when deployed.`);
              }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-forest-700 hover:bg-forest-800 text-ivory text-xs font-semibold shadow-xs"
            >
              <span>{project.demoUrl}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
