import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#E3DFD5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#home');
            }}
            className="flex items-center space-x-3 group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-forest-700 text-ivory flex items-center justify-center font-serif text-xl font-bold shadow-sm transition-transform group-hover:scale-105">
              SY
            </div>
            <div>
              <div className="font-serif font-bold text-xl text-forest-800 tracking-tight leading-none">
                {PORTFOLIO_DATA.profile.name}
              </div>
              <div className="text-[11px] font-sans uppercase tracking-widest text-forest-600 font-semibold mt-1">
                AI & Data Science
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
                className="text-sm font-medium text-[#404E4A] hover:text-forest-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action / Resume */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-forest-600/30 text-forest-700 bg-white/70 hover:bg-forest-50 hover:border-forest-600 text-xs font-semibold tracking-wide transition-all shadow-sm"
              title="Resume download pending upload"
            >
              <FileText className="w-3.5 h-3.5 text-forest-600" />
              <span>Resume (Pending)</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('#contact');
              }}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-forest-700 hover:bg-forest-800 text-ivory text-xs font-semibold tracking-wide shadow-sm transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-forest-800 hover:bg-[#EAE6DC] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E3DFD5] bg-[#F7F5F0] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#404E4A] hover:bg-forest-50 hover:text-forest-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E3DFD5] flex flex-col space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full justify-center inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-forest-600/30 text-forest-700 bg-white text-xs font-semibold"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume (Pending Upload)</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('#contact');
              }}
              className="w-full justify-center inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-forest-700 text-ivory text-xs font-semibold"
            >
              <span>Contact Shikhil</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
