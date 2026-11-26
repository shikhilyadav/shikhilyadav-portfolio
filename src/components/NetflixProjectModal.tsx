import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Check, Database, Cpu, Activity, AlertCircle } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { NetflixProjectThumbnail } from './NetflixProjectThumbnail';

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export const NetflixProjectModal: React.FC<ModalProps> = ({ project, onClose }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Dimmed Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Netflix Modal Card */}
      <div className="relative bg-[#181818] rounded-xl max-w-4xl w-full border border-[#333333] shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col text-white animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-[#181818]/80 hover:bg-[#333333] text-white flex items-center justify-center border border-white/20 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative w-full h-56 sm:h-72 md:h-80 flex-shrink-0 overflow-hidden">
          <NetflixProjectThumbnail
            artType={project.backdropArt}
            category={project.category}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent" />

          {/* Title on Banner */}
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-[#123D2B] border border-[#00C982]/40 text-[#78FFB4] text-[10px] font-bold tracking-wider uppercase">
              <span>{project.cardBadge}</span>
              <span>•</span>
              <span>{project.category}</span>
            </div>
            <h2 className="font-cinematic text-3xl sm:text-5xl text-white tracking-wider uppercase font-bold drop-shadow-md">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-sm text-[#CCCCCC]">
          
          {/* Key Specs Row */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-bold text-emerald-400">{project.matchScore}</span>
            <span className="text-[#8C8C8C]">{project.releaseYear}</span>
            <span className="px-1.5 py-0.5 rounded border border-[#555555] text-white font-mono text-[10px]">
              {project.rating}
            </span>
            <span className="text-[#8C8C8C]">{project.durationLabel}</span>
            <span className="px-2 py-0.5 rounded bg-[#252525] text-white text-[11px] font-semibold">
              Status: {project.status}
            </span>
          </div>

          {/* Overview / Summary */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-base">Project Synopsis</h4>
            <p className="text-[#B3B3B3] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Dataset Info */}
          <div className="p-4 rounded-lg bg-[#252525] border border-[#333333] space-y-1">
            <div className="flex items-center space-x-2 text-white font-semibold text-xs">
              <Database className="w-4 h-4 text-[#E50914]" />
              <span>Dataset &amp; Ingestion Context</span>
            </div>
            <p className="text-xs text-[#B3B3B3]">
              {project.datasetInfo}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-white font-bold text-sm">
              <Cpu className="w-4 h-4 text-[#E50914]" />
              <span>Key Features &amp; Engineering Work</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2 p-2.5 rounded bg-[#202020] border border-[#2D2D2D]">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-[#CCCCCC]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-white font-bold text-sm">
              <Activity className="w-4 h-4 text-[#E50914]" />
              <span>Methodology &amp; Workflow Pipeline</span>
            </div>
            <ol className="space-y-2 text-xs">
              {project.methodology.map((step, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-[#B3B3B3]">
                  <span className="w-5 h-5 rounded-full bg-[#E50914] text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Verified Metrics / Benchmark Status Placeholder */}
          <div className="p-4 rounded-lg bg-[#241c10] border border-amber-500/40 space-y-1.5">
            <div className="flex items-center space-x-2 text-amber-300 font-semibold text-xs">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>Benchmark / Model Result Status</span>
            </div>
            <p className="text-xs font-mono text-amber-200 bg-black/40 p-2 rounded border border-amber-500/20">
              {project.metricsPlaceholder}
            </p>
            <p className="text-[10px] text-amber-400/80">
              * Verified Results: In accordance with project integrity, benchmarks remain transparently labeled as placeholders until your official evaluation log is provided.
            </p>
          </div>

          {/* Technology Tags */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-[#252525] border border-[#3A3A3A] text-xs font-mono text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer: Action Links */}
        <div className="p-4 sm:p-6 bg-[#141414] border-t border-[#252525] flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="text-xs text-[#808080] font-mono">
            Source repository &amp; live demo placeholders
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                alert(`Repository URL Placeholder:\n${project.githubUrl}\n\nUpdate this in src/data/portfolioData.ts with your real link.`);
              }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded bg-[#252525] hover:bg-[#333333] border border-[#444444] text-white text-xs font-semibold"
            >
              <Github className="w-3.5 h-3.5 text-[#B3B3B3]" />
              <span>{project.githubUrl}</span>
            </button>

            <button
              onClick={() => {
                alert(`Live Demo URL Placeholder:\n${project.demoUrl}\n\nUpdate this in src/data/portfolioData.ts once hosted.`);
              }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded bg-[#E50914] hover:bg-[#b80710] text-white text-xs font-semibold shadow-md"
            >
              <span>{project.demoUrl}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
