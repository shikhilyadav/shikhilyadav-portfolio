import React from 'react';
import { Sparkles, AlertCircle, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certificates: React.FC = () => {
  const { certificates } = PORTFOLIO_DATA;

  return (
    <section id="certificates" className="py-20 border-t border-[#E3DFD5] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-forest-50 text-forest-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section 07 — Certificates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-forest-900 tracking-tight">
              Certifications &amp; Credentials
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#52605B] font-sans">
            Verified internship completion documentation and placeholders for forthcoming specializations.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, idx) => {
            const isVerified = cert.status === 'Verified Internship';

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3DFD5] shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                        isVerified
                          ? 'bg-forest-100 text-forest-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {isVerified ? (
                        <CheckCircle className="w-3.5 h-3.5 text-forest-700" />
                      ) : (
                        <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                      )}
                      <span>{cert.status}</span>
                    </span>

                    <span className="text-xs font-mono text-[#77827E]">
                      {cert.datePlaceholder}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-xl font-serif font-bold text-forest-900">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-forest-700 mt-1">
                      Issuer: {cert.issuer}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#52605B] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Placeholder details */}
                <div className="pt-4 border-t border-[#EFECE3] space-y-2 text-xs">
                  <div className="flex justify-between items-center text-[#6A7873]">
                    <span>Credential ID:</span>
                    <span className="font-mono text-amber-800">{cert.credentialIdPlaceholder}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#6A7873]">
                    <span>Verification:</span>
                    <span className="font-mono text-amber-800">{cert.linkPlaceholder}</span>
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
