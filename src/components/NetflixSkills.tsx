import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const NetflixSkills: React.FC = () => {
  const { skillsRows } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-[#1f2723] bg-[#080909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-1 h-6 bg-[#00C982] rounded-full" />
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white font-bold">
            Technical Stack Collections
          </h2>
          <span className="text-xs font-mono text-[#A7ADA9] hidden sm:inline">
            Frameworks, Languages &amp; Toolkits
          </span>
        </div>

        {/* Compact Horizontal Rows */}
        <div className="space-y-4">
          {skillsRows.map((row) => (
            <div
              key={row.category}
              className="bg-[#111413] rounded-2xl p-5 sm:p-6 border border-[#1f2723] hover:border-[#00C982]/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Category Title */}
              <div className="md:w-64 flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C982]" />
                  <h3 className="text-white font-bold text-sm tracking-wide font-editorial">
                    {row.category}
                  </h3>
                </div>
              </div>

              {/* Skills Badges (No Invented Percentages) */}
              <div className="flex flex-wrap gap-2 flex-grow">
                {row.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-[#080909] hover:bg-[#141816] text-[#A7ADA9] hover:text-[#00C982] border border-[#1f2723] text-xs font-mono transition-colors"
                  >
                    {skill}
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
