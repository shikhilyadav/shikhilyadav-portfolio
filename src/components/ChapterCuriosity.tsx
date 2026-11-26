import React, { useState } from 'react';
import { BrainCircuit, Cpu, Database, Code2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CuriosityProps {
  onContinue: () => void;
}

export const ChapterCuriosity: React.FC<CuriosityProps> = ({ onContinue }) => {
  const { curiosity } = PORTFOLIO_DATA.story;
  const [activeDomainId, setActiveDomainId] = useState<string>('ai');

  const domainIcons: Record<string, React.ReactNode> = {
    ai: <BrainCircuit className="w-5 h-5 text-[#00C982]" />,
    ml: <Cpu className="w-5 h-5 text-[#78FFB4]" />,
    ds: <Database className="w-5 h-5 text-[#00C982]" />,
    dev: <Code2 className="w-5 h-5 text-[#78FFB4]" />,
    sec: <ShieldCheck className="w-5 h-5 text-[#00C982]" />,
  };

  const activeDomain = curiosity.domains.find((d) => d.id === activeDomainId) || curiosity.domains[0];

  return (
    <section
      id="chapter-02"
      className="relative min-h-screen py-24 sm:py-32 flex flex-col justify-center px-4 sm:px-6 lg:px-8 border-t border-[#1f2723] bg-[#080909] text-[#F5F5F2]"
    >
      {/* Cinematic Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[45vw] h-[400px] bg-[#123D2B]/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[350px] bg-[#00C982]/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#111413] border border-[#1f2723] text-xs font-mono text-[#78FFB4] tracking-widest uppercase">
            <span>{curiosity.chapterTag}</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl text-[#F5F5F2] font-bold tracking-tight leading-[1.1]">
            &ldquo;{curiosity.heading}&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-[#A7ADA9] font-sans leading-relaxed">
            {curiosity.narrative}
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-[#00C982] to-[#123D2B] rounded-full" />
        </div>

        {/* Interactive Technology Ecosystem Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 5 Interconnected Ecosystem Nodes */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#78FFB4] pb-1 uppercase tracking-wider">
              <span>Interactive Technology Fields:</span>
              <span className="text-[#A7ADA9]/60">Select to inspect</span>
            </div>

            <div className="space-y-2.5">
              {curiosity.domains.map((domain) => {
                const isSelected = domain.id === activeDomainId;

                return (
                  <button
                    key={domain.id}
                    onClick={() => setActiveDomainId(domain.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-[#111413] border-[#00C982] shadow-lg shadow-[#00C982]/10 scale-[1.01]'
                        : 'bg-[#0d0f0e] border-[#1f2723] hover:border-[#00C982]/50 hover:bg-[#111413]/70'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-colors ${
                          isSelected
                            ? 'bg-[#123D2B]/50 border-[#00C982]'
                            : 'bg-[#141816] border-[#1f2723] group-hover:border-[#00C982]/40'
                        }`}
                      >
                        {domainIcons[domain.id]}
                      </div>

                      <div className="space-y-0.5">
                        <div className="text-[10px] font-mono tracking-widest text-[#78FFB4] uppercase">
                          {domain.tag}
                        </div>
                        <h3 className="font-editorial text-lg sm:text-xl text-white font-bold tracking-wide">
                          {domain.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-xs font-mono transition-colors ${
                          isSelected ? 'text-[#00C982]' : 'text-[#A7ADA9]/50 group-hover:text-[#A7ADA9]'
                        }`}
                      >
                        {isSelected ? 'Active' : 'Inspect'}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isSelected ? 'text-[#00C982] translate-x-1' : 'text-[#A7ADA9]/40 group-hover:translate-x-1'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Deep-Dive Focus Panel */}
          <div className="lg:col-span-5 bg-[#111413] rounded-3xl p-6 sm:p-8 border border-[#1f2723] shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#00C982]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-2">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#141816] border border-[#1f2723] text-[10px] font-mono text-[#00C982] uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#00C982]" />
                <span>Ecosystem Deep-Dive</span>
              </div>
              <h4 className="font-editorial text-2xl sm:text-3xl text-white font-bold">
                {activeDomain.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#A7ADA9] leading-relaxed">
                {activeDomain.summary}
              </p>
            </div>

            {/* Core Tooling & Exploration Areas */}
            <div className="space-y-3 pt-3 border-t border-[#1f2723]">
              <div className="text-xs font-mono uppercase tracking-widest text-[#78FFB4]">
                Explored Frameworks &amp; Concepts:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeDomain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-[#080909] border border-[#1f2723] text-xs font-mono text-[#F5F5F2] hover:border-[#00C982]/60 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Continuity Note */}
            <div className="p-4 rounded-xl bg-[#080909]/70 border border-[#1f2723] text-xs font-mono text-[#A7ADA9] space-y-1">
              <span className="text-[#00C982] font-semibold">Curiosity in Action:</span>
              <p className="text-[11px] leading-relaxed">
                Exploring these distinct domains formed the interdisciplinary basis for building reliable, reproducible data systems and applied machine learning models.
              </p>
            </div>

          </div>

        </div>

        {/* Forward Transition Prompt */}
        <div className="pt-6 border-t border-[#1f2723] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#A7ADA9]">
            Up Next: Chapter 03 — The Challenge (Investigating Model Behavior)
          </span>

          <button
            onClick={onContinue}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#111413] hover:bg-[#00C982] text-[#A7ADA9] hover:text-black font-mono text-xs font-semibold tracking-wider uppercase border border-[#1f2723] hover:border-[#00C982] transition-all cursor-pointer"
          >
            <span>Proceed to The Challenge</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
