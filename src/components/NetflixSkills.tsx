import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const NetflixSkills: React.FC = () => {
  const { skillsRows } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-[#252525] bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-1 h-6 bg-[#E50914] rounded-full" />
          <h2 className="font-cinematic text-3xl sm:text-4xl lg:text-5xl tracking-wider text-white uppercase font-bold">
            SKILLS &amp; TECHNOLOGIES
          </h2>
          <span className="text-xs text-[#808080] hidden sm:inline">
            Technical Stack Collections
          </span>
        </div>

        {/* Compact Horizontal Rows */}
        <div className="space-y-4">
          {skillsRows.map((row) => (
            <div
              key={row.category}
              className="bg-[#181818] rounded-xl p-5 sm:p-6 border border-[#2A2A2A] hover:border-[#3D3D3D] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Category Title */}
              <div className="md:w-64 flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                  <h3 className="text-white font-bold text-sm tracking-wide">
                    {row.category}
                  </h3>
                </div>
              </div>

              {/* Skills Badges (No Invented Percentages) */}
              <div className="flex flex-wrap gap-2 flex-grow">
                {row.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-[#252525] hover:bg-[#303030] text-[#E5E5E5] hover:text-white border border-[#353535] text-xs font-medium transition-colors"
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
