import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const NetflixFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#252525] bg-[#101010] text-[#808080] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#202020]">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-1.5">
              <span className="font-cinematic text-2xl text-[#E50914] font-bold">SHIKHIL</span>
              <span className="font-cinematic text-2xl text-white font-bold">FLIX</span>
            </div>
            <p className="text-xs text-[#666666]">
              &ldquo;{PORTFOLIO_DATA.brand.tagline}&rdquo; — Designed for Shikhil Yadav
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={PORTFOLIO_DATA.profile.socials.githubPlaceholder}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded bg-[#181818] border border-[#2E2E2E] text-white hover:text-[#E50914] transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.linkedinPlaceholder}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded bg-[#181818] border border-[#2E2E2E] text-white hover:text-[#E50914] transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#252525] hover:bg-[#E50914] text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 text-xs text-[#666666]">
          <div className="space-y-2">
            <div className="font-semibold text-[#888888] uppercase tracking-wider text-[11px]">Portfolio</div>
            <div><a href="#home" className="hover:underline">Home</a></div>
            <div><a href="#projects" className="hover:underline">All Projects</a></div>
            <div><a href="#skills" className="hover:underline">Tech Stack</a></div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-[#888888] uppercase tracking-wider text-[11px]">Domains</div>
            <div><a href="#ai-ml" className="hover:underline">Machine Learning</a></div>
            <div><a href="#data-analytics" className="hover:underline">Data Analysis</a></div>
            <div><a href="#nlp" className="hover:underline">NLP &amp; BERT</a></div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-[#888888] uppercase tracking-wider text-[11px]">Credentials</div>
            <div><a href="#experience" className="hover:underline">Oasis Infobyte</a></div>
            <div><a href="#experience" className="hover:underline">MCA Education</a></div>
            <div><a href="#certificates" className="hover:underline">Certificates</a></div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-[#888888] uppercase tracking-wider text-[11px]">Direct Reach</div>
            <div><a href="#contact" className="hover:underline">Contact</a></div>
            <div><span className="font-mono text-[10px] text-amber-500/80">[Resume Pending]</span></div>
            <div><span className="font-mono text-[10px]">Service Code: 2026-SY</span></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#1C1C1C] text-center text-xs font-mono text-[#555555]">
          © {new Date().getFullYear()} Shikhil Yadav. SHIKHIL FLIX Portfolio Experience. Built with React &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};
