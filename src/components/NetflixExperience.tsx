import React from 'react';
import { Calendar, CheckCircle2, GraduationCap, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const NetflixExperience: React.FC = () => {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-[#252525] bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-1 h-6 bg-[#E50914] rounded-full" />
          <h2 className="font-cinematic text-3xl sm:text-4xl lg:text-5xl tracking-wider text-white uppercase font-bold">
            EXPERIENCE &amp; EDUCATION
          </h2>
          <span className="text-xs text-[#808080] hidden sm:inline">
            Practical Industry &amp; Academic Timeline
          </span>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Internship Experience */}
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#181818] rounded-xl p-6 sm:p-8 border border-[#2B2B2B] shadow-2xl space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-[#E50914]/20 border border-[#E50914]/40 text-[#E50914] text-xs font-bold uppercase tracking-wider mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="font-cinematic text-3xl text-white tracking-wider">
                    {exp.role} — <span className="text-[#E50914]">{exp.organization}</span>
                  </h3>
                </div>

                <div className="text-xs font-mono text-[#8C8C8C] flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-[#B3B3B3]" />
                  <span>Duration: {exp.durationPlaceholder}</span>
                </div>
              </div>

              <p className="text-sm text-[#CCCCCC] leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2 pt-2 border-t border-[#282828]">
                <h4 className="text-xs uppercase tracking-wider text-white font-bold">
                  Key Accomplishments &amp; Deliverables:
                </h4>
                <ul className="space-y-2 text-xs text-[#B3B3B3]">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-2 border-t border-[#282828] flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#808080]">Technologies:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded bg-[#252525] border border-[#3A3A3A] text-xs font-mono text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Education Card */}
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#181818] rounded-xl p-6 sm:p-8 border border-[#2B2B2B] shadow-2xl space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-700/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{edu.status}</span>
                  </div>
                  <h3 className="font-cinematic text-3xl text-white tracking-wider">
                    {edu.degree}
                  </h3>
                </div>

                <div className="text-xs font-mono text-[#8C8C8C] flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-[#B3B3B3]" />
                  <span>Timeline: {edu.yearPlaceholder}</span>
                </div>
              </div>

              <div className="p-3 rounded-md bg-[#252525] border border-[#333333] flex items-center justify-between text-xs">
                <span className="text-[#8C8C8C]">Institution:</span>
                <span className="font-mono text-amber-400 bg-amber-950/30 px-2 py-0.5 rounded border border-amber-800/40">
                  {edu.institutionPlaceholder}
                </span>
              </div>

              <p className="text-sm text-[#CCCCCC] leading-relaxed">
                {edu.description}
              </p>

              {/* Key Subjects */}
              <div className="pt-2 border-t border-[#282828] flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#808080]">Core Focus:</span>
                {edu.keySubjects.map((subj) => (
                  <span
                    key={subj}
                    className="px-2.5 py-0.5 rounded bg-[#252525] border border-[#3A3A3A] text-xs text-[#CCCCCC]"
                  >
                    {subj}
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
