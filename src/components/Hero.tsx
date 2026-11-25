import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, GraduationCap, Briefcase, BrainCircuit } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-forest-100/40 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-forest-50 border border-forest-200/60 text-forest-800 text-xs font-semibold tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-forest-500 animate-pulse" />
            <span>Master of Computer Applications (MCA) — Currently Pursuing</span>
          </div>

          {/* Editorial Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-forest-900 leading-[1.12]">
              Bridging Data Science, <br className="hidden sm:inline" />
              <span className="italic font-normal text-forest-700">Machine Learning</span> &amp; Modern Systems.
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#52605B] font-sans leading-relaxed">
              Hello, I am <strong className="text-forest-900 font-semibold">{profile.name}</strong>. Exploring artificial intelligence, statistical modeling, and predictive engineering with hands-on internship experience at <span className="text-forest-800 font-medium">Oasis Infobyte</span>.
            </p>
          </div>

          {/* Focus Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {profile.interests.map((interest) => (
              <span
                key={interest}
                className="px-3.5 py-1 rounded-full bg-white/80 border border-[#DFDAD0] text-xs font-medium text-[#404E4A] shadow-xs"
              >
                {interest}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-forest-700 hover:bg-forest-800 text-ivory text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Explore 4 Featured Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-white border border-[#DFDAD0] hover:border-forest-600 text-forest-800 hover:bg-forest-50 text-sm font-semibold tracking-wide transition-all shadow-sm"
            >
              <span>Resume (Pending Upload)</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-mono font-medium">
                Placeholder
              </span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-transparent hover:bg-forest-50 text-forest-800 text-sm font-semibold tracking-wide transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Social and Profile Placeholders */}
          <div className="pt-4 flex items-center justify-center space-x-4 text-xs font-mono text-[#6A7873]">
            <a
              href={profile.socials.githubPlaceholder}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[#E3DFD5] bg-white/60 hover:bg-white text-forest-800 transition-colors"
              title="GitHub Profile Placeholder"
            >
              <Github className="w-3.5 h-3.5 text-forest-700" />
              <span>GitHub: [Add Your Link]</span>
            </a>
            <a
              href={profile.socials.linkedinPlaceholder}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[#E3DFD5] bg-white/60 hover:bg-white text-forest-800 transition-colors"
              title="LinkedIn Profile Placeholder"
            >
              <Linkedin className="w-3.5 h-3.5 text-forest-700" />
              <span>LinkedIn: [Add Your Link]</span>
            </a>
          </div>

          {/* Highlights Grid */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center mb-3">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div className="font-serif font-bold text-lg text-forest-900">4 Core Projects</div>
              <p className="text-xs text-[#52605B] mt-1 leading-relaxed">
                Spanning classical ML classification, socioeconomic EDA, valuation regression &amp; transformer NLP.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="font-serif font-bold text-lg text-forest-900">MCA Scholar</div>
              <p className="text-xs text-[#52605B] mt-1 leading-relaxed">
                Currently pursuing Master of Computer Applications with focus on algorithms and intelligent systems.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-forest-50 text-forest-700 flex items-center justify-center mb-3">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="font-serif font-bold text-lg text-forest-900">Oasis Infobyte</div>
              <p className="text-xs text-[#52605B] mt-1 leading-relaxed">
                Data Science Internship experience delivering reproducible pipelines, exploratory models &amp; insights.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
