import { useState, useMemo, useEffect } from 'react';
import { StoryNav } from './components/StoryNav';
import { ChapterProgress } from './components/ChapterProgress';
import { ChapterOpening } from './components/ChapterOpening';
import { ChapterBeginning } from './components/ChapterBeginning';
import { ChapterCuriosity } from './components/ChapterCuriosity';
import { ChapterChallenge } from './components/ChapterChallenge';
import { NetflixCarouselRow } from './components/NetflixCarouselRow';
import { NetflixAbout } from './components/NetflixAbout';
import { NetflixSkills } from './components/NetflixSkills';
import { NetflixExperience } from './components/NetflixExperience';
import { NetflixCertificates } from './components/NetflixCertificates';
import { NetflixContact } from './components/NetflixContact';
import { NetflixFooter } from './components/NetflixFooter';
import { NetflixProjectModal } from './components/NetflixProjectModal';
import { NetflixResumeModal } from './components/NetflixResumeModal';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';
import { Search, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChapter, setActiveChapter] = useState('chapter-00');

  // Map of all projects by ID
  const projectsById = useMemo(() => {
    const map = new Map<string, Project>();
    PORTFOLIO_DATA.projects.forEach((p) => map.set(p.id, p));
    return map;
  }, []);

  // Filtered projects for dynamic search
  const filteredSearchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return PORTFOLIO_DATA.projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to update active chapter indicator
  useEffect(() => {
    const chapterIds = [
      'chapter-00',
      'chapter-01',
      'chapter-02',
      'chapter-03',
      'chapter-04',
      'chapter-05',
      'chapter-06',
    ];
    const observers: IntersectionObserver[] = [];

    chapterIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveChapter(id);
              }
            });
          },
          { threshold: 0.2 }
        );
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#080909] text-[#F5F5F2] font-sans antialiased selection:bg-[#00C982] selection:text-black overflow-x-hidden">
      {/* 1. Minimal Story Navigation */}
      <StoryNav
        activeChapter={activeChapter}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* 2. Vertical Chapter Progress Indicator */}
      <ChapterProgress
        activeChapter={activeChapter}
        onSelectChapter={scrollToSection}
      />

      {/* Main Storyline Chapters */}
      <main>
        {/* CHAPTER 00 — THE OPENING */}
        <ChapterOpening
          onStartJourney={() => scrollToSection('chapter-01')}
        />

        {/* CHAPTER 01 — THE BEGINNING */}
        <ChapterBeginning
          onContinue={() => scrollToSection('chapter-02')}
        />

        {/* CHAPTER 02 — CURIOSITY & EXPLORATION */}
        <ChapterCuriosity
          onContinue={() => scrollToSection('chapter-03')}
        />

        {/* CHAPTER 03 — THE CHALLENGE */}
        <ChapterChallenge
          onContinue={() => scrollToSection('chapter-04')}
        />

        {/* CHAPTER 04 — THE CREATIONS (Interactive Case Studies & Carousels) */}
        <section id="chapter-04" className="pt-24 pb-12 border-t border-[#1f2723] bg-[#080909]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111413] border border-[#1f2723] text-xs font-mono text-[#78FFB4] tracking-widest uppercase">
                <span>CHAPTER 04 — THE CREATIONS</span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl text-white font-bold tracking-tight">
                Interactive Case Studies
              </h2>
              <p className="text-sm text-[#A7ADA9] max-w-2xl font-sans">
                Explore four core engineering systems spanning morphological classification, macroeconomic trend analysis, multivariate valuation, and transformer-based NLP.
              </p>
            </div>

            {/* Quick Search Bar */}
            <div className="pt-6 max-w-md">
              <div className="flex items-center bg-[#111413] border border-[#1f2723] focus-within:border-[#00C982] rounded-xl px-3.5 py-2 shadow-inner transition-colors">
                <Search className="w-4 h-4 text-[#A7ADA9] mr-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter case studies by title, BERT, ML..."
                  className="bg-transparent border-none outline-none text-xs text-white placeholder:text-[#666666] w-full"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-[#A7ADA9] hover:text-white font-mono ml-2"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Dynamic Search Results Banner */}
          {searchQuery.trim() !== '' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 animate-fadeIn">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#00C982] mb-3">
                <Sparkles className="w-4 h-4" />
                <span>MATCHING RESULTS ({filteredSearchResults.length})</span>
              </div>
              {filteredSearchResults.length > 0 ? (
                <NetflixCarouselRow
                  id="search-results"
                  title="MATCHING ENGINEERING WORKS"
                  subtitle="Filtered results"
                  projects={filteredSearchResults}
                  onSelectProject={(project) => setSelectedProject(project)}
                />
              ) : (
                <div className="p-6 rounded-xl bg-[#111413] border border-[#1f2723] text-center text-xs text-[#A7ADA9]">
                  No project records match &ldquo;{searchQuery}&rdquo;.
                </div>
              )}
            </div>
          )}

          {/* Project Carousels */}
          <div className="space-y-4 pt-2">
            {PORTFOLIO_DATA.carouselRows.map((row) => {
              const rowProjects = row.projectIds
                .map((id) => projectsById.get(id))
                .filter((p): p is Project => p !== undefined);

              return (
                <NetflixCarouselRow
                  key={row.id}
                  id={row.id}
                  title={row.title}
                  subtitle={row.subtitle}
                  projects={rowProjects}
                  onSelectProject={(project) => setSelectedProject(project)}
                />
              );
            })}
          </div>
        </section>

        {/* CHAPTER 05 — THE PRESENT (Profile, Skills & Experience) */}
        <div id="chapter-05">
          <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1f2723]">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111413] border border-[#1f2723] text-xs font-mono text-[#78FFB4] tracking-widest uppercase mb-2">
              <span>CHAPTER 05 — THE PRESENT</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl text-white font-bold tracking-tight">
              Postgraduate Research &amp; Industry Experience
            </h2>
            <p className="text-sm text-[#A7ADA9] max-w-2xl font-sans mt-1">
              Currently pursuing Master of Computer Applications (MCA) with practical data science internship experience at Oasis Infobyte.
            </p>
          </div>

          <NetflixAbout />
          <NetflixSkills />
          <NetflixExperience />
        </div>

        {/* CHAPTER 06 — THE NEXT CHAPTER (Certificates & Contact) */}
        <div id="chapter-06">
          <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1f2723]">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111413] border border-[#1f2723] text-xs font-mono text-[#78FFB4] tracking-widest uppercase mb-2">
              <span>CHAPTER 06 — THE NEXT CHAPTER</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl text-white font-bold tracking-tight">
              &ldquo;The story is still being written.&rdquo;
            </h2>
            <p className="text-sm text-[#A7ADA9] max-w-2xl font-sans mt-1">
              Verified credentials, future aspirations, and direct channels to connect regarding software and machine learning engineering.
            </p>
          </div>

          <NetflixCertificates />
          <NetflixContact onOpenResume={() => setIsResumeModalOpen(true)} />
        </div>
      </main>

      {/* Footer */}
      <NetflixFooter />

      {/* Interactive Project Modal */}
      <NetflixProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Inactive Resume Notice Modal */}
      <NetflixResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
