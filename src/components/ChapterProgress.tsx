import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ChapterProgressProps {
  activeChapter: string;
  onSelectChapter: (id: string) => void;
}

export const ChapterProgress: React.FC<ChapterProgressProps> = ({
  activeChapter,
  onSelectChapter,
}) => {
  const { chapters } = PORTFOLIO_DATA.story;

  return (
    <aside
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end space-y-3 pointer-events-auto select-none"
      aria-label="Story Chapter Progress"
    >
      <div className="text-[10px] font-mono tracking-widest text-[#78FFB4] uppercase pr-1 pb-1 opacity-70">
        TIMELINE
      </div>

      <div className="flex flex-col items-end space-y-2.5">
        {chapters.map((ch) => {
          const isActive = activeChapter === ch.id;

          return (
            <button
              key={ch.id}
              onClick={() => onSelectChapter(ch.id)}
              className="group flex items-center space-x-3 cursor-pointer focus:outline-none"
              title={`${ch.number} — ${ch.title}`}
            >
              {/* Expandable Label on Hover or Active */}
              <span
                className={`text-[11px] font-mono tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-[#00C982] opacity-100 font-bold translate-x-0'
                    : 'text-[#A7ADA9] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
                }`}
              >
                {ch.number} {ch.shortLabel}
              </span>

              {/* Pip Indicator */}
              <div
                className={`relative flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'w-4 h-4'
                    : 'w-2.5 h-2.5 group-hover:w-3.5 group-hover:h-3.5'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-[#00C982]/30 animate-ping" />
                )}
                <div
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-2.5 h-2.5 bg-[#00C982] shadow-[0_0_10px_#00C982]'
                      : 'w-1.5 h-1.5 bg-[#1f2723] group-hover:bg-[#78FFB4]'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
