import React from 'react';
import { Code2, Database, GraduationCap, ArrowDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface BeginningProps {
  onContinue: () => void;
}

export const ChapterBeginning: React.FC<BeginningProps> = ({ onContinue }) => {
  const { beginning } = PORTFOLIO_DATA.story;

  const milestoneIcons = [
    <Code2 key="code" className="w-5 h-5 text-[#00C982]" />,
    <Database key="db" className="w-5 h-5 text-[#78FFB4]" />,
    <GraduationCap key="grad" className="w-5 h-5 text-[#00C982]" />,
  ];

  return (
    <section
      id="chapter-01"
      className="relative min-h-screen py-24 sm:py-32 flex flex-col justify-center px-4 sm:px-6 lg:px-8 border-t border-[#1f2723] bg-[#080909] text-[#F5F5F2]"
    >
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-[40vw] h-[400px] bg-[#123D2B]/15 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[35vw] h-[350px] bg-[#00C982]/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#111413] border border-[#1f2723] text-xs font-mono text-[#78FFB4] tracking-widest uppercase">
            <span>{beginning.chapterTag}</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl text-[#F5F5F2] font-bold tracking-tight leading-[1.1]">
            &ldquo;{beginning.heading}&rdquo;
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#00C982] to-[#123D2B] rounded-full" />
        </div>

        {/* Narrative Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-[#A7ADA9] text-base sm:text-lg leading-relaxed">
          <div className="md:col-span-6 space-y-4">
            <p>
              {beginning.narrative[0]}
            </p>
            <p>
              {beginning.narrative[1]}
            </p>
          </div>
          <div className="md:col-span-6 space-y-4">
            <p>
              {beginning.narrative[2]}
            </p>
            <div className="p-4 rounded-xl bg-[#111413] border border-[#1f2723] text-xs font-mono text-[#78FFB4] space-y-1">
              <div className="text-white font-bold">Academic Focus:</div>
              <div>Master of Computer Applications (MCA) — Currently Pursuing</div>
              <div className="text-[#A7ADA9]">Focus: Applied AI, Machine Learning &amp; Algorithmic Foundations</div>
            </div>
          </div>
        </div>

        {/* Milestones Visual Cards */}
        <div className="space-y-4 pt-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#78FFB4]">
            Key Evolutionary Milestones:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beginning.milestones.map((item, idx) => (
              <div
                key={item.phase}
                className="bg-[#111413] rounded-2xl p-6 border border-[#1f2723] hover:border-[#00C982]/50 transition-all duration-300 shadow-xl space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#080909] border border-[#1f2723] flex items-center justify-center group-hover:border-[#00C982] transition-colors">
                    {milestoneIcons[idx]}
                  </div>
                  <span className="font-mono text-xs text-[#00C982] font-semibold tracking-wider">
                    {item.phase}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-editorial text-xl text-white font-bold">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A7ADA9] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Forward Transition Prompt */}
        <div className="pt-6 border-t border-[#1f2723] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#A7ADA9]">
            Up Next: Chapter 02 — Curiosity &amp; Exploration (Interconnected Technology Fields)
          </span>

          <button
            onClick={onContinue}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#111413] hover:bg-[#00C982] text-[#A7ADA9] hover:text-black font-mono text-xs font-semibold tracking-wider uppercase border border-[#1f2723] hover:border-[#00C982] transition-all cursor-pointer"
          >
            <span>Proceed to Curiosity</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
