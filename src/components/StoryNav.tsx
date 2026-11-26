import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface StoryNavProps {
  activeChapter: string;
  onOpenResume: () => void;
}

export const StoryNav: React.FC<StoryNavProps> = ({
  activeChapter,
  onOpenResume,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { brand } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '00 Opening', href: '#chapter-00', chapterId: 'chapter-00' },
    { label: '01 Beginning', href: '#chapter-01', chapterId: 'chapter-01' },
    { label: '02 Curiosity', href: '#chapter-02', chapterId: 'chapter-02' },
    { label: '03 Challenge', href: '#chapter-03', chapterId: 'chapter-03' },
    { label: '04 Creations', href: '#chapter-04', chapterId: 'chapter-04' },
    { label: '05 Present', href: '#chapter-05', chapterId: 'chapter-05' },
    { label: '06 Next', href: '#chapter-06', chapterId: 'chapter-06' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080909]/90 backdrop-blur-md border-b border-[#1f2723] shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#080909]/95 via-[#080909]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity: Minimalist Editorial Title */}
          <a
            href="#chapter-00"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#chapter-00');
            }}
            className="flex items-center space-x-3 group text-left select-none"
          >
            <div className="w-8 h-8 rounded-lg bg-[#111413] border border-[#1f2723] flex items-center justify-center text-[#00C982] shadow-sm group-hover:border-[#00C982] transition-colors">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="font-editorial text-lg sm:text-xl font-bold tracking-wider text-[#F5F5F2] flex items-center space-x-2">
                <span>{brand.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C982]" />
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#A7ADA9] uppercase">
                {brand.subtitle}
              </div>
            </div>
          </a>

          {/* Desktop Minimal Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-mono">
            {navLinks.map((link) => {
              const isActive = activeChapter === link.chapterId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-colors duration-200 tracking-wider ${
                    isActive
                      ? 'text-[#00C982] font-semibold'
                      : 'text-[#A7ADA9] hover:text-[#F5F5F2]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume / Inactive Upload Modal */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#111413] border border-[#1f2723] hover:border-[#00C982] text-xs font-mono text-[#A7ADA9] hover:text-[#00C982] transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#00C982]" />
              <span>Resume (Pending)</span>
            </button>
            <a
              href="#chapter-06"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#chapter-06');
              }}
              className="inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-full bg-[#00C982] hover:bg-[#78FFB4] text-black text-xs font-bold tracking-wider uppercase transition-all shadow-sm"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Drawer Trigger */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#A7ADA9] hover:text-[#F5F5F2] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#111413] border-b border-[#1f2723] px-5 py-5 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-1 text-[#A7ADA9] hover:text-[#00C982] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1f2723] flex items-center justify-between">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-xs font-mono text-[#A7ADA9] hover:text-[#00C982]"
            >
              Resume Status →
            </button>
            <a
              href="#chapter-06"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#chapter-06');
              }}
              className="text-xs font-mono font-bold text-[#00C982]"
            >
              Contact Shikhil →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
