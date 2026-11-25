import React from 'react';
import { Play, Info, GraduationCap, Briefcase, Flower2, Sparkles, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenAbout: () => void;
  onOpenFeaturedProject?: () => void;
}

export const NetflixHero: React.FC<HeroProps> = ({
  onExploreProjects,
  onOpenAbout,
  onOpenFeaturedProject,
}) => {
  const { profile, brand } = PORTFOLIO_DATA;

  const handleFeaturedClick = () => {
    if (onOpenFeaturedProject) {
      onOpenFeaturedProject();
    } else {
      onExploreProjects();
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 sm:pb-20 overflow-hidden bg-[#141414]"
    >
      {/* Cinematic Studio Glow & Atmospheric Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Abstract Glowing Gradients */}
        <div className="absolute top-0 right-0 w-[65vw] h-full bg-gradient-to-bl from-[#E50914]/15 via-emerald-950/15 to-transparent blur-3xl opacity-75" />
        <div className="absolute top-1/4 left-1/4 w-[45vw] h-[55vh] bg-gradient-to-tr from-[#173D2D]/20 via-teal-950/10 to-transparent blur-3xl" />

        {/* Subtle Matrix Dots */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Cinematic Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-[#141414]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split Hero: Desktop 55% / 45%, Stacked on Tablet & Mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 animate-fadeIn">
          
          {/* ========================================================================= */}
          {/* LEFT SIDE (Approx 55% width): Profile Introduction & CTAs                 */}
          {/* ========================================================================= */}
          <div className="w-full lg:w-[55%] space-y-6 text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-[#E50914] text-white text-[11px] font-bold tracking-widest uppercase shadow-md">
                <span>FEATURED PROFILE</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-[#252525]/90 border border-[#333333] text-[#B3B3B3] text-[11px] font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>MCA • Currently Pursuing</span>
              </div>

              <div className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-[#252525]/80 text-[#B3B3B3] text-[11px]">
                <span className="font-semibold text-white">#1</span>
                <span>IN DATA SCIENCE PORTFOLIOS</span>
              </div>
            </div>

            {/* Cinematic Name & Tagline */}
            <div className="space-y-2">
              <h1 className="font-cinematic text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-wider text-white uppercase drop-shadow-xl leading-none">
                {profile.name}
              </h1>

              <div className="text-base sm:text-xl font-sans font-semibold text-[#E50914] tracking-wide flex flex-wrap items-center gap-2">
                <span>{profile.headline}</span>
                <span className="text-[#555555] hidden sm:inline">•</span>
                <span className="text-[#B3B3B3] text-sm sm:text-base font-normal italic">
                  &ldquo;{brand.tagline}&rdquo;
                </span>
              </div>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#CCCCCC] font-sans leading-relaxed max-w-xl drop-shadow">
              {profile.subheadline}
            </p>

            {/* Action Buttons: Netflix Play & More Info Styles */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              {/* Play-style Button */}
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center space-x-2.5 px-6 sm:px-7 py-3 rounded-md bg-white hover:bg-white/90 text-black font-bold text-sm tracking-wide transition-all duration-200 shadow-xl hover:scale-105 cursor-pointer"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-black" />
                <span>Explore Projects</span>
              </button>

              {/* Info-style Button */}
              <button
                onClick={onOpenAbout}
                className="inline-flex items-center space-x-2 px-5 sm:px-6 py-3 rounded-md bg-[#525252]/70 hover:bg-[#525252]/90 text-white font-semibold text-sm tracking-wide transition-all duration-200 border border-white/10 hover:scale-105 cursor-pointer"
              >
                <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>More About Me</span>
              </button>
            </div>

            {/* Metadata Specs Strip */}
            <div className="pt-5 border-t border-[#252525]/80 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[#8C8C8C]">
              <div className="flex items-center space-x-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#E50914]" />
                <span>Oasis Infobyte Internship</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                <span>MCA Scholar</span>
              </div>
              <span>•</span>
              <div>
                <span className="text-white font-semibold">4</span> Verified Projects
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE (Approx 45% width): Cinematic Featured Content Banner (IRISAI) */}
          {/* ========================================================================= */}
          <div className="w-full lg:w-[45%] flex-shrink-0">
            <div
              onClick={handleFeaturedClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleFeaturedClick();
                }
              }}
              className="group/featured relative w-full rounded-2xl bg-gradient-to-br from-[#07241a] via-[#0d1e18] to-[#141414] border border-emerald-500/30 hover:border-emerald-400/60 p-6 sm:p-7 shadow-2xl shadow-black/80 hover:shadow-emerald-950/40 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#E50914]"
              aria-label="Explore featured project IrisAI"
            >
              {/* Subtle Red Brand Accent in top corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#E50914]/25 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 h-1 w-20 bg-gradient-to-r from-[#E50914] to-emerald-400" />

              {/* Glowing Emerald Particle Auras */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-pulseGlow" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-500/15 rounded-full blur-3xl pointer-events-none animate-pulseGlow" />

              {/* Card Header: Featured Project Label, Project Number & Category */}
              <div className="flex items-center justify-between mb-4 z-10 relative">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-sm bg-[#E50914] text-white text-[10px] font-bold tracking-widest uppercase shadow">
                    FEATURED PROJECT
                  </span>
                  <span className="font-mono text-xs text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-700/40">
                    01 / 04
                  </span>
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-mono text-emerald-300 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="uppercase tracking-wider">MACHINE LEARNING</span>
                </div>
              </div>

              {/* Central Abstract Botanical & AI Artwork */}
              <div className="relative my-4 py-3 sm:py-5 flex flex-col items-center justify-center text-center overflow-hidden">
                {/* Floating particle sparkle elements */}
                <div className="absolute top-2 left-6 text-emerald-400/50 animate-floatSlow">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="absolute bottom-3 right-8 text-teal-300/40 animate-floatSlow" style={{ animationDelay: '2s' }}>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>

                {/* Abstract Glowing Iris Petal Graphic */}
                <div className="relative mb-3 flex items-center justify-center">
                  {/* Subtle Radar Wave */}
                  <div className="absolute w-28 h-28 rounded-full border border-emerald-500/20 animate-ping opacity-25" />
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-emerald-900/80 via-emerald-800/40 to-teal-900/80 border border-emerald-400/40 flex items-center justify-center shadow-xl shadow-emerald-950/90 text-emerald-300 group-hover/featured:scale-110 transition-transform duration-500">
                    <Flower2 className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.7)]" />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-cinematic text-3xl sm:text-4xl text-white tracking-wider uppercase font-bold drop-shadow-md">
                  IRIS<span className="text-emerald-400">AI</span>
                </h3>

                {/* Species Badges (Fisher Dataset Morphology) */}
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-emerald-300/90 border border-emerald-500/20">
                    Setosa
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-emerald-300/90 border border-emerald-500/20">
                    Versicolor
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-emerald-300/90 border border-emerald-500/20">
                    Virginica
                  </span>
                </div>
              </div>

              {/* Headline & Description */}
              <div className="space-y-1.5 text-left z-10 relative">
                <div className="text-sm sm:text-base font-semibold text-emerald-300 font-sans tracking-wide">
                  &ldquo;Turning data into intelligent predictions.&rdquo;
                </div>
                <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                  An interactive machine learning application for Iris flower classification.
                </p>
              </div>

              {/* Bottom Specs & Action Buttons */}
              <div className="pt-4 mt-4 border-t border-[#1d352b] flex items-center justify-between gap-3 z-10 relative">
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-emerald-400 font-bold">98% Match</span>
                  <span className="text-[#688579]">•</span>
                  <span className="text-[#96aca2] text-[11px] font-mono">Fisher Dataset</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFeaturedClick();
                    }}
                    className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-md bg-white hover:bg-emerald-400 text-black font-bold text-xs tracking-wider uppercase transition-colors shadow-md group-hover/featured:bg-emerald-400 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>Explore Project</span>
                  </button>
                  <div className="p-2 rounded-md bg-[#192b23] border border-emerald-600/30 text-emerald-300 group-hover/featured:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
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
