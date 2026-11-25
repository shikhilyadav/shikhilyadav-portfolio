import React from 'react';
import { Sparkles, CheckCircle2, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 border-t border-[#E3DFD5] bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-forest-50 text-forest-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section 04 — Technical Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-forest-900 tracking-tight">
              Core Technical Competencies
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#52605B] font-sans">
            Organized across applied machine learning, exploratory analytics, core programming languages, and tooling ecosystems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-3xl p-6 border border-[#E3DFD5] shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-forest-50 text-forest-700 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-forest-900 leading-snug">
                  {category.title}
                </h3>
                <p className="text-xs text-[#52605B] leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <ul className="space-y-2 pt-2 border-t border-[#EFECE3]">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-2 text-xs font-medium text-[#404E4A]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
