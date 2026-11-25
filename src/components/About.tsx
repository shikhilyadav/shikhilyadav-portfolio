import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 border-t border-[#E3DFD5] bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-forest-50 text-forest-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section 02 — About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-forest-900 tracking-tight">
              Curious Mind, Rigorous Thinking.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#52605B] font-sans">
            A dedicated technologist merging mathematical intuition with algorithmic execution to solve real-world problems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3DFD5] shadow-xs space-y-6">
              
              {/* Monogram / Avatar Block */}
              <div className="relative aspect-4/3 rounded-2xl bg-gradient-to-br from-forest-800 to-forest-900 p-6 flex flex-col justify-between text-ivory overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-forest-500/20 blur-2xl pointer-events-none" />
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-mono text-forest-200 uppercase tracking-widest">
                    Candidate Profile
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-forest-700/80 border border-forest-600 text-[11px] font-mono">
                    MCA Student
                  </span>
                </div>
                <div className="z-10 space-y-1">
                  <div className="text-3xl font-serif font-bold tracking-tight">
                    {profile.name}
                  </div>
                  <div className="text-xs font-sans text-forest-100">
                    AI • Machine Learning • Data Science • Software
                  </div>
                </div>
              </div>

              {/* Quick Details Table */}
              <div className="divide-y divide-[#EFECE3] text-xs">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-[#6A7873] font-medium">Full Name</span>
                  <span className="font-semibold text-forest-900">{profile.name}</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-[#6A7873] font-medium">Degree</span>
                  <span className="font-semibold text-forest-900">MCA (Currently Pursuing)</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-[#6A7873] font-medium">Institution</span>
                  <span className="font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    [Add University Name]
                  </span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-[#6A7873] font-medium">Internship</span>
                  <span className="font-semibold text-forest-900">Oasis Infobyte (OIBSIP)</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-[#6A7873] font-medium">Location</span>
                  <span className="font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    [Add City, Country]
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E3DFD5] shadow-xs space-y-6">
              
              <div className="space-y-4 text-[#404E4A] text-base leading-relaxed">
                <p>
                  I am <strong className="text-forest-900 font-semibold">{profile.name}</strong>, a postgraduate computer science student currently pursuing my <span className="text-forest-800 font-medium">Master of Computer Applications (MCA)</span>. My academic and technical journey centers on uncovering patterns within complex data and turning theoretical machine learning algorithms into functional software solutions.
                </p>
                <p>
                  During my <span className="text-forest-800 font-medium">Data Science Internship with Oasis Infobyte (OIBSIP)</span>, I engaged with diverse end-to-end data pipelines: analyzing regional unemployment disruptions, structuring multivariate vehicle pricing regression models, classifying flower species morphology, and exploring SMS spam filtering using both traditional vectorization and transformer (BERT) embeddings.
                </p>
                <p>
                  I enjoy developing clean, maintainable software systems and believe that genuine artificial intelligence engineering starts with careful data hygiene, statistical honesty, and reproducible experimental workflows.
                </p>
              </div>

              {/* Pillars */}
              <div className="pt-4 border-t border-[#EFECE3] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-forest-50/60 border border-forest-100">
                  <CheckCircle2 className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-forest-900 text-sm">
                      Statistical Grounding
                    </h4>
                    <p className="text-xs text-[#52605B] mt-0.5">
                      Ensuring hypothesis testing and metric cross-validation precede algorithm deployment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-xl bg-forest-50/60 border border-forest-100">
                  <CheckCircle2 className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-forest-900 text-sm">
                      Applied Engineering
                    </h4>
                    <p className="text-xs text-[#52605B] mt-0.5">
                      Building intuitive interfaces, reproducible notebooks, and dependable codebases.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
