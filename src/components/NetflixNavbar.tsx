import React, { useState, useEffect } from 'react';
import { Search, X, Menu, ChevronDown } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenProfile: () => void;
}

export const NetflixNavbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  onOpenProfile,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI & ML', href: '#ai-ml' },
    { label: 'Data Science', href: '#data-analytics' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#141414]/95 backdrop-blur-md border-b border-[#252525] shadow-xl'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left Brand & Navigation */}
          <div className="flex items-center space-x-6 lg:space-x-10">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center space-x-2 group text-left select-none"
            >
              <div className="flex items-center space-x-1">
                <span className="font-cinematic text-3xl sm:text-4xl text-[#E50914] tracking-wider font-bold drop-shadow-sm transition-transform group-hover:scale-105">
                  SHIKHIL
                </span>
                <span className="font-cinematic text-3xl sm:text-4xl text-white tracking-wider font-bold">
                  FLIX
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-5 lg:space-x-6 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-[#E5E5E5] hover:text-white transition-colors duration-200 font-medium text-xs lg:text-sm tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Actions: Search + Profile Avatar */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Expandable Search Input */}
            <div className="relative flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center bg-[#141414] border border-[#E50914] rounded-full px-3 py-1.5 shadow-lg animate-fadeIn w-48 sm:w-64">
                  <Search className="w-4 h-4 text-[#B3B3B3] shrink-0 mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search titles, NLP, ML..."
                    className="bg-transparent border-none outline-none text-white text-xs w-full placeholder:text-[#777777]"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      if (searchQuery) {
                        onSearchChange('');
                      } else {
                        setIsSearchOpen(false);
                      }
                    }}
                    className="text-[#B3B3B3] hover:text-white ml-1 p-0.5"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-[#E5E5E5] hover:text-white transition-colors rounded-full hover:bg-white/10"
                  aria-label="Open search input"
                  title="Search projects and skills"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Profile Avatar (Netflix-Style Red Square) */}
            <button
              onClick={onOpenProfile}
              className="flex items-center space-x-2 group p-1 rounded hover:bg-white/5 transition-colors"
              title="Shikhil Yadav Profile"
            >
              <div className="w-8 h-8 rounded bg-[#E50914] text-white font-bold text-xs flex items-center justify-center shadow-md transition-transform group-hover:scale-105 border border-white/20">
                SY
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#B3B3B3] group-hover:text-white transition-colors hidden sm:block" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#E5E5E5] hover:text-white transition-colors"
              aria-label="Toggle navigation drawer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#181818] border-b border-[#252525] px-5 py-4 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-2 text-sm text-[#E5E5E5] hover:text-[#E50914] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#333333] flex items-center justify-between">
            <span className="text-xs text-[#B3B3B3]">Candidate Profile</span>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenProfile();
              }}
              className="text-xs text-[#E50914] font-semibold"
            >
              View Bio &amp; MCA Details →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
