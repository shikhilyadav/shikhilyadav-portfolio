import React from 'react';
import { Sparkles, GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 border-t border-[#E3DFD5] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-forest-50 text-forest-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section 05 — Education</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-forest-900 tracking-tight">
              Academic Background
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#52605B] font-sans">
            Postgraduate computer science foundations reinforcing algorithmic theory, mathematics, and systems design.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E3DFD5] shadow-xs space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-forest-100/70 text-forest-800 text-xs font-semibold">
                    <GraduationCap className="w-3.5 h-3.5 text-forest-700" />
                    <span>{item.status}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-900">
                    {item.degree}
                  </h3>
                </div>

                <div className="text-xs font-mono text-[#6A7873] flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-forest-600" />
                  <span>Timeline: {item.yearPlaceholder}</span>
                </div>
              </div>

              {/* Institution Placeholder */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center space-x-2 text-amber-900 font-semibold">
                  <MapPin className="w-4 h-4 text-amber-700" />
                  <span>Institution / University:</span>
                </div>
                <span className="font-mono bg-white/90 px-3 py-1 rounded border border-amber-300 text-amber-900">
                  {item.institutionPlaceholder}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#404E4A] leading-relaxed">
                {item.description}
              </p>

              {/* Coursework Focus */}
              <div className="space-y-2 pt-2 border-t border-[#EFECE3]">
                <div className="text-xs font-semibold text-forest-900 flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-forest-700" />
                  <span>Core Academic Areas of Study:</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.keySubjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 rounded-xl bg-forest-50 border border-forest-200/60 text-xs font-medium text-forest-800"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
