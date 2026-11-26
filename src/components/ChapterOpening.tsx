import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface OpeningProps {
  onStartJourney: () => void;
}

export const ChapterOpening: React.FC<OpeningProps> = ({ onStartJourney }) => {
  const { story } = PORTFOLIO_DATA;
  const { opening } = story;

  return (
    <section
      id="chapter-00"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-[#080909]"
    >
      {/* Atmospheric Background Auras */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft emerald and forest light pools */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[800px] h-[450px] bg-gradient-to-b from-[#123D2B]/25 via-[#00C982]/10 to-transparent blur-[140px] rounded-full animate-pulseGlow" />
        <div className="absolute bottom-10 left-1/3 w-[45vw] h-[300px] bg-[#123D2B]/15 blur-[120px] rounded-full" />

        {/* Ambient Subtle Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #00C982 2%, transparent 0%), radial-gradient(circle at 75px 75px, #78FFB4 2%, transparent 0%)`,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080909] via-transparent to-[#080909]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fadeIn pt-16 sm:pt-20">
        
        {/* Chapter Index Indicator */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#111413] border border-[#1f2723] text-xs font-mono text-[#78FFB4] tracking-widest uppercase shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C982] animate-pulse" />
          <span>CHAPTER 00 — THE OPENING</span>
        </div>

        {/* Main Editorial Heading & Subtitle */}
        <div className="space-y-4">
          <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl tracking-wider text-[#F5F5F2] font-bold uppercase drop-shadow-2xl leading-[1.05]">
            {opening.heading}
          </h1>

          <div className="flex items-center justify-center space-x-3 text-lg sm:text-2xl font-mono text-[#00C982] tracking-widest uppercase font-semibold">
            <span className="h-px w-8 sm:w-12 bg-[#00C982]/50" />
            <span>{opening.subtitle}</span>
            <span className="h-px w-8 sm:w-12 bg-[#00C982]/50" />
          </div>

          <p className="text-xs sm:text-sm font-mono text-[#78FFB4]/80 tracking-widest italic pt-1">
            &ldquo;{story.tagline}&rdquo;
          </p>
        </div>

        {/* Supporting Narrative Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-[#A7ADA9] font-sans leading-relaxed">
          {opening.supportingText}
        </p>

        {/* Primary Call to Action */}
        <div className="pt-4 flex flex-col items-center space-y-4">
          <button
            onClick={onStartJourney}
            className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#00C982] hover:bg-[#78FFB4] text-black font-mono font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#00C982]/20 hover:scale-105 cursor-pointer"
          >
            <span>{opening.cta}</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>

          <span className="text-[11px] font-mono text-[#A7ADA9]/60 tracking-wider">
            Scroll to begin interactive documentary
          </span>
        </div>

      </div>

      {/* Bottom Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-1 text-xs font-mono text-[#A7ADA9]/50 animate-bounce">
        <ArrowDown className="w-4 h-4 text-[#00C982]" />
      </div>
    </section>
  );
};
