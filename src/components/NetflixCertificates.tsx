import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const NetflixCertificates: React.FC = () => {
  const { certificates } = PORTFOLIO_DATA;

  return (
    <section id="certificates" className="py-16 sm:py-20 border-t border-[#1f2723] bg-[#080909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-1 h-6 bg-[#00C982] rounded-full" />
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white font-bold">
            Certifications &amp; Credentials
          </h2>
          <span className="text-xs font-mono text-[#A7ADA9] hidden sm:inline">
            Verified Internship Documentation
          </span>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, idx) => {
            const isVerified = cert.status === 'Verified Internship';

            return (
              <div
                key={idx}
                className="bg-[#111413] rounded-2xl p-6 sm:p-8 border border-[#1f2723] shadow-2xl flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider ${
                        isVerified
                          ? 'bg-[#123D2B]/60 border border-[#00C982]/50 text-[#78FFB4]'
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

                    <span className="text-xs font-mono text-[#A7ADA9]">
                      {cert.datePlaceholder}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl text-white font-bold">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono text-[#00C982] font-semibold">
                    Issuer: {cert.issuer}
                  </div>

                  <p className="text-xs text-[#A7ADA9] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Verification Placeholders */}
                <div className="pt-4 border-t border-[#1f2723] space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-center text-[#A7ADA9]">
                    <span>Credential ID:</span>
                    <span className="text-amber-400">{cert.credentialIdPlaceholder}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#A7ADA9]">
                    <span>Verification Document:</span>
                    <span className="text-amber-400">{cert.linkPlaceholder}</span>
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
