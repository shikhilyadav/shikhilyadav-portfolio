import React from 'react';
import { Flower2, TrendingUp, Car, ShieldAlert } from 'lucide-react';

interface ThumbnailProps {
  artType: string;
  category: string;
}

export const NetflixProjectThumbnail: React.FC<ThumbnailProps> = ({
  artType,
  category,
}) => {
  if (artType === 'iris') {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-emerald-950 via-[#06241b] to-[#141414] flex flex-col justify-between p-4 overflow-hidden select-none">
        {/* Glow & Geometric Accents */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl" />
        
        {/* Top Tag */}
        <div className="flex items-center justify-between z-10">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-emerald-950/80 text-emerald-300 border border-emerald-700/50">
            {category}
          </span>
          <Flower2 className="w-4 h-4 text-emerald-400" />
        </div>

        {/* Visual Graphic */}
        <div className="my-auto text-center z-10 py-3">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-900/60 border border-emerald-500/40 flex items-center justify-center text-emerald-300 mb-2 shadow-lg shadow-emerald-950/80">
            <Flower2 className="w-6 h-6" />
          </div>
          <div className="text-white font-cinematic text-2xl tracking-wider leading-none">
            IRIS<span className="text-emerald-400">AI</span>
          </div>
          <div className="text-[10px] text-emerald-200/80 font-mono tracking-widest mt-1">
            MORPHOLOGY CLASSIFIER
          </div>
        </div>

        {/* Bottom Specs */}
        <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400/90 z-10">
          <span>Fisher Dataset</span>
          <span>3 Species</span>
        </div>
      </div>
    );
  }

  if (artType === 'unemployment') {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-amber-950 via-[#271404] to-[#141414] flex flex-col justify-between p-4 overflow-hidden select-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-600/20 rounded-full blur-2xl" />

        <div className="flex items-center justify-between z-10">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-amber-950/80 text-amber-300 border border-amber-700/50">
            {category}
          </span>
          <TrendingUp className="w-4 h-4 text-amber-400" />
        </div>

        <div className="my-auto text-center z-10 py-3">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-900/60 border border-amber-500/40 flex items-center justify-center text-amber-300 mb-2 shadow-lg shadow-amber-950/80">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="text-white font-cinematic text-2xl tracking-wider leading-none">
            UNEMPLOYMENT <span className="text-amber-400">ANALYSIS</span>
          </div>
          <div className="text-[10px] text-amber-200/80 font-mono tracking-widest mt-1">
            SOCIOECONOMIC TRENDS
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-amber-400/90 z-10">
          <span>State-wise Trends</span>
          <span>COVID Impact</span>
        </div>
      </div>
    );
  }

  if (artType === 'autovalue') {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-cyan-950 via-[#041a29] to-[#141414] flex flex-col justify-between p-4 overflow-hidden select-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl" />

        <div className="flex items-center justify-between z-10">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-cyan-950/80 text-cyan-300 border border-cyan-700/50">
            {category}
          </span>
          <Car className="w-4 h-4 text-cyan-400" />
        </div>

        <div className="my-auto text-center z-10 py-3">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-900/60 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-2 shadow-lg shadow-cyan-950/80">
            <Car className="w-6 h-6" />
          </div>
          <div className="text-white font-cinematic text-2xl tracking-wider leading-none">
            AUTOVALUE <span className="text-cyan-400">AI</span>
          </div>
          <div className="text-[10px] text-cyan-200/80 font-mono tracking-widest mt-1">
            MULTIVARIATE VALUATION
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400/90 z-10">
          <span>Regression Model</span>
          <span>Market Pricing</span>
        </div>
      </div>
    );
  }

  // spamshield (NLP)
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-rose-950 via-[#26050b] to-[#141414] flex flex-col justify-between p-4 overflow-hidden select-none">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/20 rounded-full blur-2xl" />

      <div className="flex items-center justify-between z-10">
        <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-rose-950/80 text-rose-300 border border-rose-700/50">
          {category}
        </span>
        <ShieldAlert className="w-4 h-4 text-rose-400" />
      </div>

      <div className="my-auto text-center z-10 py-3">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-rose-900/60 border border-rose-500/40 flex items-center justify-center text-rose-300 mb-2 shadow-lg shadow-rose-950/80">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div className="text-white font-cinematic text-2xl tracking-wider leading-none">
          SPAMSHIELD <span className="text-[#E50914]">AI</span>
        </div>
        <div className="text-[10px] text-rose-200/80 font-mono tracking-widest mt-1">
          BERT &amp; ML TEXT CLASSIFIER
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-rose-400/90 z-10">
        <span>Transformer NLP</span>
        <span>SMS Corpus</span>
      </div>
    </div>
  );
};
