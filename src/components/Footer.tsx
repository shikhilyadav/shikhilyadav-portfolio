import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E3DFD5] bg-[#F1EFE9] text-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="text-center sm:text-left space-y-1">
            <div className="font-serif font-bold text-lg text-forest-900">
              {PORTFOLIO_DATA.profile.name}
            </div>
            <p className="text-xs text-[#52605B]">
              Artificial Intelligence, Machine Learning &amp; Data Science Portfolio
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={PORTFOLIO_DATA.profile.socials.githubPlaceholder}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white border border-[#E3DFD5] text-forest-800 hover:text-forest-600 transition-colors"
              title="GitHub Placeholder"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.linkedinPlaceholder}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white border border-[#E3DFD5] text-forest-800 hover:text-forest-600 transition-colors"
              title="LinkedIn Placeholder"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-forest-700 hover:bg-forest-800 text-ivory transition-colors shadow-xs"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-[#E3DFD5] text-center text-xs font-mono text-[#77827E]">
          © {new Date().getFullYear()} Shikhil Yadav. All rights reserved. Built with React, Vite &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};
