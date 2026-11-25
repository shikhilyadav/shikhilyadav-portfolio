import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye, AlertCircle } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Machine Learning', 'Data Analysis', 'NLP'];

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-t border-[#E3DFD5] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-forest-50 text-forest-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section 03 — Featured Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-forest-900 tracking-tight">
              Selected Machine Learning &amp; Analytics Works
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/80 rounded-2xl border border-[#E3DFD5]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === category
                    ? 'bg-forest-700 text-ivory shadow-xs'
                    : 'text-[#52605B] hover:text-forest-800 hover:bg-forest-50/70'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3DFD5] hover:border-forest-600/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Card Top Line */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-forest-700 px-2.5 py-1 rounded-lg bg-forest-50 border border-forest-200/50">
                    Project 0{index + 1} • {project.category}
                  </span>
                  <span className="text-[11px] font-sans font-medium text-[#77827E]">
                    {project.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-forest-900 group-hover:text-forest-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-sans text-forest-600 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-sm text-[#52605B] leading-relaxed">
                  {project.summary}
                </p>

                {/* Metric Placeholder Banner */}
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-start space-x-2 text-xs">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-amber-900">Benchmark: </span>
                    <span className="font-mono text-amber-800">{project.metricsPlaceholder}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-[#F7F5F0] border border-[#E5E1D7] text-[11px] font-medium text-[#404E4A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer / Action Button */}
              <div className="pt-6 mt-6 border-t border-[#EFECE3] flex items-center justify-between">
                <span className="text-xs font-mono text-[#77827E]">
                  Verified OIBSIP Task
                </span>

                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-forest-50 hover:bg-forest-700 text-forest-800 hover:text-ivory text-xs font-semibold tracking-wide transition-all shadow-xs group/btn"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Deep Dive &amp; Methodology</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
