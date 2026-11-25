import { useState, useMemo } from 'react';
import { NetflixNavbar } from './components/NetflixNavbar';
import { NetflixHero } from './components/NetflixHero';
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
import { Search } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const irisProject = useMemo(() => {
    return PORTFOLIO_DATA.projects.find((p) => p.id === 'iris-ai') || PORTFOLIO_DATA.projects[0];
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans antialiased selection:bg-[#E50914] selection:text-white overflow-x-hidden">
      {/* Sticky Netflix Navigation */}
      <NetflixNavbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenProfile={() => scrollToSection('about')}
      />

      {/* Main Content Surfaces */}
      <main>
        {/* 1. Hero Section — Featured Profile & Featured IrisAI Card */}
        <NetflixHero
          onExploreProjects={() => scrollToSection('projects')}
          onOpenAbout={() => scrollToSection('about')}
          onOpenFeaturedProject={() => setSelectedProject(irisProject)}
        />

        {/* Dynamic Search Results Banner (Shown when searching) */}
        {searchQuery.trim() !== '' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
            <div className="flex items-center space-x-3 mb-4">
              <Search className="w-5 h-5 text-[#E50914]" />
              <h2 className="font-cinematic text-2xl sm:text-3xl tracking-wider text-white uppercase font-bold">
                SEARCH RESULTS FOR &ldquo;{searchQuery}&rdquo; ({filteredSearchResults.length})
              </h2>
            </div>

            {filteredSearchResults.length > 0 ? (
              <NetflixCarouselRow
                id="search-results"
                title="MATCHING ENGINEERING WORKS"
                subtitle="Projects matching your search criteria"
                projects={filteredSearchResults}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            ) : (
              <div className="p-8 rounded-xl bg-[#181818] border border-[#2B2B2B] text-center text-[#8C8C8C] space-y-2">
                <p>No project titles or tags match &ldquo;{searchQuery}&rdquo;.</p>
                <p className="text-xs text-[#666666]">
                  Try searching for keywords like &ldquo;BERT&rdquo;, &ldquo;Classification&rdquo;, &ldquo;Pandas&rdquo;, or &ldquo;Regression&rdquo;.
                </p>
              </div>
            )}
          </section>
        )}

        {/* 2. Netflix-Style Project Carousels */}
        <div id="projects" className="space-y-2 sm:space-y-4 pt-4 pb-12">
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

        {/* 3. About Me Section */}
        <NetflixAbout />

        {/* 4. Technical Skills Section */}
        <NetflixSkills />

        {/* 5. Experience & Education Section */}
        <NetflixExperience />

        {/* 6. Certificates Section */}
        <NetflixCertificates />

        {/* 7. Contact Section */}
        <NetflixContact onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* 8. Footer */}
      <NetflixFooter />

      {/* Interactive Project Detail Modal */}
      <NetflixProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Pending Modal */}
      <NetflixResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
