import React from 'react';
import { Calendar, CheckCircle2, GraduationCap, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const NetflixExperience: React.FC = () => {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-[#1f2723] bg-[#080909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-1 h-6 bg-[#00C982] rounded-full" />
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white font-bold">
            Experience &amp; Academic Timeline
          </h2>
          <span className="text-xs font-mono text-[#A7ADA9] hidden sm:inline">
            Practical Internship &amp; Postgraduate Milestones
          </span>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Internship Experience */}
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#111413] rounded-2xl p-6 sm:p-8 border border-[#1f2723] shadow-2xl space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-[#123D2B]/50 border border-[#00C982]/40 text-[#78FFB4] text-xs font-mono font-bold uppercase tracking-wider mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-bold">
                    {exp.role} — <span className="text-[#00C982]">{exp.organization}</span>
                  </h3>
                </div>

                <div className="text-xs font-mono text-[#A7ADA9] flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-[#00C982]" />
                  <span>Duration: {exp.durationPlaceholder}</span>
                </div>
              </div>

              <p className="text-sm text-[#A7ADA9] leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2 pt-2 border-t border-[#1f2723]">
                <h4 className="text-xs uppercase tracking-wider text-white font-bold font-mono">
                  Key Accomplishments &amp; Deliverables:
                </h4>
                <ul className="space-y-2 text-xs text-[#A7ADA9]">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C982] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-2 border-t border-[#1f2723] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#A7ADA9]">Technologies:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded bg-[#080909] border border-[#1f2723] text-xs font-mono text-white"
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
              className="bg-[#111413] rounded-2xl p-6 sm:p-8 border border-[#1f2723] shadow-2xl space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-[#123D2B]/40 border border-[#00C982]/40 text-[#78FFB4] text-xs font-mono font-bold uppercase tracking-wider mb-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{edu.status}</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-bold">
                    {edu.degree}
                  </h3>
                </div>

                <div className="text-xs font-mono text-[#A7ADA9] flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-[#00C982]" />
                  <span>Timeline: {edu.yearPlaceholder}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#080909] border border-[#1f2723] flex items-center justify-between text-xs font-mono">
                <span className="text-[#A7ADA9]">Institution:</span>
                <span className="text-amber-400 bg-amber-950/30 px-2 py-0.5 rounded border border-amber-800/40">
                  {edu.institutionPlaceholder}
                </span>
              </div>

              <p className="text-sm text-[#A7ADA9] leading-relaxed">
                {edu.description}
              </p>

              {/* Key Subjects */}
              <div className="pt-2 border-t border-[#1f2723] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#A7ADA9]">Core Focus:</span>
                {edu.keySubjects.map((subj) => (
                  <span
                    key={subj}
                    className="px-2.5 py-0.5 rounded bg-[#080909] border border-[#1f2723] text-xs font-mono text-[#F5F5F2]"
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
