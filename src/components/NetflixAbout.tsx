import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const NetflixAbout: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-[#1f2723] bg-[#080909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-1 h-6 bg-[#00C982] rounded-full" />
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white font-bold">
            Candidate Profile &amp; Background
          </h2>
          <span className="text-xs font-mono text-[#A7ADA9] hidden sm:inline">
            Postgraduate Academic Identity
          </span>
        </div>

        {/* Profile Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Documentary Profile Card */}
          <div className="lg:col-span-5 bg-[#111413] rounded-2xl p-6 sm:p-8 border border-[#1f2723] shadow-2xl space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-[#123D2B] border border-[#00C982]/40 text-[#78FFB4] font-editorial text-2xl flex items-center justify-center font-bold shadow-xl">
                SY
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-[#00C982] uppercase tracking-widest font-bold">
                  Active Candidate Profile
                </div>
                <h3 className="font-editorial text-2xl text-white font-bold">
                  {profile.name}
                </h3>
                <div className="text-xs text-[#A7ADA9]">
                  {profile.educationBadge}
                </div>
              </div>
            </div>

            {/* Quick Specs Table */}
            <div className="divide-y divide-[#1f2723] text-xs">
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#A7ADA9]">Current Education</span>
                <span className="font-semibold text-white">MCA (Currently Pursuing)</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#A7ADA9]">Institution</span>
                <span className="font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                  [Add University Name]
                </span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#A7ADA9]">Internship</span>
                <span className="font-semibold text-white">Oasis Infobyte (OIBSIP)</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-[#A7ADA9]">Location</span>
                <span className="font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                  [Add City, Country]
                </span>
              </div>
            </div>

            {/* Interests Badges */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-[#78FFB4] uppercase tracking-wider block">
                Professional Interests
              </span>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-2.5 py-1 rounded bg-[#080909] border border-[#1f2723] text-xs text-white font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 bg-[#111413] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#1f2723] shadow-2xl space-y-6">
            <div className="space-y-4 text-[#A7ADA9] text-base leading-relaxed">
              <p>
                I am <strong className="text-white font-semibold">{profile.name}</strong>, a computer science postgraduate scholar pursuing my <span className="text-white font-medium">Master of Computer Applications (MCA)</span> with focused interests in Artificial Intelligence, Machine Learning, Data Science, and modern Software Engineering.
              </p>
              <p>
                My technical experience includes completing the <span className="text-white font-medium">Oasis Infobyte Data Science Internship (OIBSIP)</span>, where I built end-to-end data applications across morphological flower classification, socioeconomic unemployment trends, vehicle market valuation regression, and natural language spam classification comparing traditional vectorization with BERT embeddings.
              </p>
              <p>
                I am dedicated to building dependable, reproducible software that marries rigorous statistical validation with clean system architecture.
              </p>
            </div>

            {/* Core Values */}
            <div className="pt-4 border-t border-[#1f2723] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#080909] border border-[#1f2723] space-y-1">
                <div className="flex items-center space-x-2 text-white font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#00C982]" />
                  <span>Statistical Rigor</span>
                </div>
                <p className="text-xs text-[#A7ADA9]">
                  Cross-validation, error distributions, and metric honesty over unverified claims.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#080909] border border-[#1f2723] space-y-1">
                <div className="flex items-center space-x-2 text-white font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#78FFB4]" />
                  <span>Practical Codebases</span>
                </div>
                <p className="text-xs text-[#A7ADA9]">
                  Clean pipelines, modern React interfaces, and production-minded engineering.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
