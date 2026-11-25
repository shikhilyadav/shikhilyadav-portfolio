import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const NetflixCertificates: React.FC = () => {
  const { certificates } = PORTFOLIO_DATA;

  return (
    <section id="certificates" className="py-16 sm:py-24 border-t border-[#252525] bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-1 h-6 bg-[#E50914] rounded-full" />
          <h2 className="font-cinematic text-3xl sm:text-4xl lg:text-5xl tracking-wider text-white uppercase font-bold">
            CERTIFICATES &amp; CREDENTIALS
          </h2>
          <span className="text-xs text-[#808080] hidden sm:inline">
            Verified Credentials
          </span>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, idx) => {
            const isVerified = cert.status === 'Verified Internship';

            return (
              <div
                key={idx}
                className="bg-[#181818] rounded-xl p-6 sm:p-8 border border-[#2B2B2B] shadow-2xl flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${
                        isVerified
                          ? 'bg-emerald-950/60 border border-emerald-700/50 text-emerald-400'
                          : 'bg-amber-950/60 border border-amber-700/50 text-amber-400'
                      }`}
                    >
                      {isVerified ? (
                        <CheckCircle className="w-3.5 h-3.5" />
                      ) : (
                        <AlertCircle className="w-3.5 h-3.5" />
                      )}
                      <span>{cert.status}</span>
                    </span>

                    <span className="text-xs font-mono text-[#8C8C8C]">
                      {cert.datePlaceholder}
                    </span>
                  </div>

                  <h3 className="font-cinematic text-2xl text-white tracking-wider">
                    {cert.title}
                  </h3>
                  <div className="text-xs text-[#E50914] font-semibold">
                    Issuer: {cert.issuer}
                  </div>

                  <p className="text-xs text-[#B3B3B3] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Verification Placeholders */}
                <div className="pt-4 border-t border-[#282828] space-y-2 text-xs">
                  <div className="flex justify-between items-center text-[#8C8C8C]">
                    <span>Credential ID:</span>
                    <span className="font-mono text-amber-400">{cert.credentialIdPlaceholder}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#8C8C8C]">
                    <span>Verification Document:</span>
                    <span className="font-mono text-amber-400">{cert.linkPlaceholder}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
