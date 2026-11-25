import React from 'react';
import { Sparkles, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 border-t border-[#E3DFD5] bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-forest-50 text-forest-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section 06 — Internship Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-forest-900 tracking-tight">
              Practical Industry Experience
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#52605B] font-sans">
            Hands-on technical implementation through verified internship milestones and reproducible deliverables.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E3DFD5] shadow-xs space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-forest-50 text-forest-800 text-xs font-semibold">
                    <Briefcase className="w-3.5 h-3.5 text-forest-700" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-900">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-forest-700">
                    {exp.organization}
                  </div>
                </div>

                <div className="text-xs font-mono text-[#6A7873] space-y-1 sm:text-right">
                  <div className="flex items-center sm:justify-end space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-forest-600" />
                    <span>Duration: {exp.durationPlaceholder}</span>
                  </div>
                  <div className="flex items-center sm:justify-end space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-forest-600" />
                    <span>{exp.locationPlaceholder}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-[#404E4A] leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-3 pt-2 border-t border-[#EFECE3]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-forest-900">
                  Key Accomplishments &amp; Responsibilities:
                </h4>
                <ul className="space-y-2.5 text-xs text-[#52605B]">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-2 border-t border-[#EFECE3] flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-[#77827E]">Tools:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md bg-[#F7F5F0] border border-[#E5E1D7] text-xs font-mono text-[#404E4A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
