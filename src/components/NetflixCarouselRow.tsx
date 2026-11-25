import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { NetflixProjectCard } from './NetflixProjectCard';

interface CarouselRowProps {
  id: string;
  title: string;
  subtitle: string;
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const NetflixCarouselRow: React.FC<CarouselRowProps> = ({
  id,
  title,
  subtitle,
  projects,
  onSelectProject,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.clientWidth * 0.75;
      rowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Mouse Drag Support
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - rowRef.current.offsetLeft);
    setScrollLeft(rowRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !rowRef.current) return;
    e.preventDefault();
    const x = e.pageX - rowRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    rowRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  if (!projects || projects.length === 0) return null;

  return (
    <section id={id} className="relative py-4 sm:py-6 group/row">
      {/* Row Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-3">
        <div className="flex items-baseline space-x-3">
          <div className="w-1 h-5 bg-[#E50914] rounded-full" />
          <h3 className="font-cinematic text-xl sm:text-2xl lg:text-3xl tracking-wider text-white uppercase font-bold">
            {title}
          </h3>
          <span className="text-xs text-[#808080] hidden sm:inline">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Row Container with Navigation Chevrons */}
      <div className="relative">
        {/* Left Chevron Button */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-0 bottom-0 z-30 w-10 sm:w-12 bg-black/60 hover:bg-black/90 text-white flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-200 cursor-pointer"
          aria-label={`Scroll ${title} carousel left`}
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {/* Scrollable Project Cards Track */}
        <div
          ref={rowRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex space-x-3 sm:space-x-4 overflow-x-auto scrollbar-none px-4 sm:px-8 py-4 scroll-smooth select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <NetflixProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {/* Right Chevron Button */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-0 bottom-0 z-30 w-10 sm:w-12 bg-black/60 hover:bg-black/90 text-white flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-200 cursor-pointer"
          aria-label={`Scroll ${title} carousel right`}
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
};
