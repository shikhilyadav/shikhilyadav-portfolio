import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const NetflixFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1f2723] bg-[#060707] text-[#A7ADA9] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#141816]">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <span className="font-editorial text-2xl text-white font-bold tracking-wider">SHIKHIL</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C982]" />
              <span className="font-mono text-xs text-[#00C982] uppercase tracking-widest">THE STORY SO FAR</span>
            </div>
            <p className="text-xs font-mono text-[#A7ADA9]/80">
              &ldquo;{PORTFOLIO_DATA.brand.tagline}&rdquo; — Shikhil Yadav
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={PORTFOLIO_DATA.profile.socials.githubPlaceholder}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-[#111413] border border-[#1f2723] text-white hover:text-[#00C982] hover:border-[#00C982]/50 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.linkedinPlaceholder}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-[#111413] border border-[#1f2723] text-white hover:text-[#00C982] hover:border-[#00C982]/50 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#111413] hover:bg-[#00C982] text-white hover:text-black border border-[#1f2723] transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 text-xs font-mono text-[#A7ADA9]/70">
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Story Chapters</div>
            <div><a href="#chapter-00" className="hover:text-[#00C982]">00 The Opening</a></div>
            <div><a href="#chapter-01" className="hover:text-[#00C982]">01 The Beginning</a></div>
            <div><a href="#chapter-02" className="hover:text-[#00C982]">02 Curiosity</a></div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Exploration</div>
            <div><a href="#chapter-03" className="hover:text-[#00C982]">03 The Challenge</a></div>
            <div><a href="#chapter-04" className="hover:text-[#00C982]">04 The Creations</a></div>
            <div><a href="#chapter-05" className="hover:text-[#00C982]">05 The Present</a></div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Credentials</div>
            <div><a href="#chapter-05" className="hover:text-[#00C982]">MCA Pursuit</a></div>
            <div><a href="#chapter-05" className="hover:text-[#00C982]">Oasis Infobyte</a></div>
            <div><a href="#chapter-06" className="hover:text-[#00C982]">Certificates</a></div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Direct Reach</div>
            <div><a href="#chapter-06" className="hover:text-[#00C982]">06 Next Chapter</a></div>
            <div><span className="text-amber-500/80">[Resume Pending]</span></div>
            <div><span>Candidate: Shikhil Yadav</span></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#141816] text-center text-xs font-mono text-[#A7ADA9]/50">
          © {new Date().getFullYear()} Shikhil Yadav. SHIKHIL — THE STORY SO FAR. Cinematic Documentary Experience.
        </div>
      </div>
    </footer>
  );
};
