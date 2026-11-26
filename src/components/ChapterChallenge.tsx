import React, { useState } from 'react';
import { ArrowRight, Activity, Cpu, Search, RefreshCw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ChallengeProps {
  onContinue: () => void;
}

export const ChapterChallenge: React.FC<ChallengeProps> = ({ onContinue }) => {
  const { challenge } = PORTFOLIO_DATA.story;
  const [activeStage, setActiveStage] = useState<string>('01');

  const stageIcons: Record<string, React.ReactNode> = {
    '01': <Cpu className="w-5 h-5 text-[#00C982]" />,
    '02': <Search className="w-5 h-5 text-[#78FFB4]" />,
    '03': <RefreshCw className="w-5 h-5 text-[#00C982]" />,
  };

  return (
    <section
      id="chapter-03"
      className="relative min-h-screen py-24 sm:py-32 flex flex-col justify-center px-4 sm:px-6 lg:px-8 border-t border-[#1f2723] bg-[#080909] text-[#F5F5F2]"
    >
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-[40vw] h-[400px] bg-[#123D2B]/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[35vw] h-[350px] bg-[#00C982]/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#111413] border border-[#1f2723] text-xs font-mono text-[#78FFB4] tracking-widest uppercase">
            <span>{challenge.chapterTag}</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl text-[#F5F5F2] font-bold tracking-tight leading-[1.1]">
            &ldquo;{challenge.heading}&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-[#A7ADA9] font-sans leading-relaxed">
            {challenge.narrative}
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-[#00C982] to-[#123D2B] rounded-full" />
        </div>

        {/* Animated Machine Learning Pipeline Visualization: DATA -> MODEL -> PREDICTION -> EVALUATION */}
        <div className="bg-[#111413] rounded-3xl p-6 sm:p-8 border border-[#1f2723] shadow-2xl space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-[#78FFB4] uppercase tracking-wider">
            <span className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-[#00C982]" />
              <span>The Machine Learning Investigation Cycle</span>
            </span>
            <span className="text-[#A7ADA9]/60">Iterative Pipeline</span>
          </div>

          {/* Pipeline Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative">
            {challenge.pipelineSteps.map((step, idx) => (
              <div
                key={step.label}
                className="relative p-4 rounded-2xl bg-[#0d0f0e] border border-[#1f2723] hover:border-[#00C982]/50 transition-colors space-y-1 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#A7ADA9]/70 tracking-widest">
                    STEP 0{idx + 1}
                  </span>
                  {idx < challenge.pipelineSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#00C982] hidden md:block opacity-60 group-hover:translate-x-0.5 transition-transform" />
                  )}
                </div>

                <div className="font-editorial text-lg sm:text-xl text-white font-bold tracking-wide">
                  {step.label}
                </div>

                <p className="text-[11px] text-[#A7ADA9] leading-snug">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Three Stages: 01 Build | 02 Investigate | 03 Improve */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#78FFB4]">
            Three Stages of Rigorous Machine Learning:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenge.stages.map((stage) => {
              const isSelected = stage.number === activeStage;

              return (
                <div
                  key={stage.number}
                  onClick={() => setActiveStage(stage.number)}
                  className={`bg-[#111413] rounded-3xl p-6 sm:p-7 border transition-all duration-300 shadow-xl space-y-4 cursor-pointer ${
                    isSelected
                      ? 'border-[#00C982] shadow-[#00C982]/10 scale-[1.01]'
                      : 'border-[#1f2723] hover:border-[#00C982]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#080909] border border-[#1f2723] flex items-center justify-center">
                      {stageIcons[stage.number]}
                    </div>
                    <span className="font-mono text-sm font-bold text-[#00C982]">
                      STAGE {stage.number}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-editorial text-2xl text-white font-bold">
                      {stage.title}
                    </h3>
                    <div className="text-xs font-mono text-[#78FFB4]">
                      {stage.subtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A7ADA9] leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="pt-3 border-t border-[#1f2723] space-y-2">
                    <div className="text-[10px] font-mono text-[#78FFB4] uppercase tracking-wider">
                      Methodology Focus:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {stage.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-2.5 py-1 rounded-lg bg-[#080909] border border-[#1f2723] text-[10px] font-mono text-[#F5F5F2]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Forward Transition Prompt */}
        <div className="pt-6 border-t border-[#1f2723] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#A7ADA9]">
            Up Next: Chapter 04 — The Creations (Applied Models &amp; Analysis)
          </span>

          <button
            onClick={onContinue}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#111413] hover:bg-[#00C982] text-[#A7ADA9] hover:text-black font-mono text-xs font-semibold tracking-wider uppercase border border-[#1f2723] hover:border-[#00C982] transition-all cursor-pointer"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
