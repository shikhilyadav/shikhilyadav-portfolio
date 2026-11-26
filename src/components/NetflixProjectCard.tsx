import React from 'react';
import { Play, Info, Check } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { NetflixProjectThumbnail } from './NetflixProjectThumbnail';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const NetflixProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(project)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] aspect-video rounded-md bg-[#252525] border border-[#333333] hover:border-white/50 cursor-pointer overflow-hidden transition-all duration-300 transform hover:scale-105 hover:z-30 hover:shadow-2xl hover:shadow-black/90 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
      aria-label={`View details for ${project.title}`}
    >
      {/* Visual Thumbnail */}
      <div className="absolute inset-0">
        <NetflixProjectThumbnail
          artType={project.backdropArt}
          category={project.category}
        />
      </div>

      {/* Top Left Badge */}
      <div className="absolute top-2 left-2 z-20">
        <span className="px-2 py-0.5 rounded-sm bg-[#123D2B]/90 text-[#78FFB4] border border-[#00C982]/40 text-[9px] font-bold tracking-wider uppercase shadow">
          {project.cardBadge}
        </span>
      </div>

      {/* Hover Information Layer (Slides up / fades in on hover) */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#141414] via-[#141414]/90 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        
        {/* Quick Action Icons */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(project);
              }}
              className="w-8 h-8 rounded-full bg-white hover:bg-white/90 text-black flex items-center justify-center shadow transition-transform hover:scale-110"
              title="Explore project architecture"
            >
              <Play className="w-3.5 h-3.5 fill-black ml-0.5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-[#2A2A2A] border border-[#555555] text-white flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="w-8 h-8 rounded-full bg-[#2A2A2A] hover:bg-[#3A3A3A] border border-[#555555] text-white flex items-center justify-center transition-transform hover:scale-110"
            title="More Info"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        {/* Title & Metadata */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-[11px] font-semibold">
            <span className="text-emerald-400">{project.matchScore}</span>
            <span className="text-[#8C8C8C]">{project.releaseYear}</span>
            <span className="px-1 py-0.2 bg-[#333333] text-[#CCCCCC] rounded text-[9px] font-mono">
              {project.rating}
            </span>
            <span className="text-[#8C8C8C] text-[10px]">{project.category}</span>
          </div>

          <h4 className="text-sm font-bold text-white tracking-wide truncate">
            {project.title}
          </h4>

          <p className="text-[11px] text-[#B3B3B3] line-clamp-2 leading-tight">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 pt-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[9px] px-1.5 py-0.5 rounded bg-black/50 text-[#CCCCCC] border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
