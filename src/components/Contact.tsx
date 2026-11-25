import React, { useState } from 'react';
import { Sparkles, Mail, Github, Linkedin, Copy, Check, MapPin, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-[#E3DFD5] bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-forest-50 text-forest-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section 08 — Contact &amp; Connect</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-forest-900 tracking-tight">
              Let&apos;s Start a Conversation.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#52605B] font-sans">
            Open to discussing machine learning projects, software development collaborations, and data science opportunities.
          </p>
        </div>

        {/* Contact Layout (Honest & Clean: No fake form backend) */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Direct Outreach Card */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E3DFD5] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-50 text-forest-700 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-forest-900">
                Direct Email Outreach
              </h3>
              <p className="text-sm text-[#52605B] leading-relaxed">
                Feel free to send an email directly to connect regarding artificial intelligence, technical projects, or internship discussions.
              </p>

              {/* Email Address with Copy interaction */}
              <div className="p-4 rounded-2xl bg-forest-50/70 border border-forest-100 space-y-2">
                <div className="text-xs font-mono text-forest-700 font-semibold uppercase tracking-wider">
                  Email Placeholder
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm text-forest-900 font-medium break-all">
                    {profile.socials.emailPlaceholder}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white border border-forest-200 hover:bg-forest-100 text-forest-700 transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <div className="text-[11px] text-emerald-700 font-medium">
                    Copied to clipboard! (Remember to update with your real address)
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-[#EFECE3]">
              <a
                href={`mailto:${profile.socials.emailPlaceholder}`}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-2xl bg-forest-700 hover:bg-forest-800 text-ivory text-sm font-semibold tracking-wide transition-all shadow-sm"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Social Profiles & Location Card */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3DFD5] shadow-xs space-y-6">
              
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-lg text-forest-900">
                  Digital Presence
                </h4>
                <p className="text-xs text-[#52605B]">
                  Connect via GitHub or LinkedIn. Placeholders are ready for your personal profiles:
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={profile.socials.githubPlaceholder}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F7F5F0] hover:bg-forest-50 border border-[#E3DFD5] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Github className="w-4 h-4 text-forest-700" />
                    <div>
                      <div className="text-xs font-semibold text-forest-900">GitHub</div>
                      <div className="text-[11px] font-mono text-[#77827E]">[Your-GitHub-Username]</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#77827E] group-hover:text-forest-700 transition-colors" />
                </a>

                <a
                  href={profile.socials.linkedinPlaceholder}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F7F5F0] hover:bg-forest-50 border border-[#E3DFD5] transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-4 h-4 text-forest-700" />
                    <div>
                      <div className="text-xs font-semibold text-forest-900">LinkedIn</div>
                      <div className="text-[11px] font-mono text-[#77827E]">[Your-LinkedIn-Profile]</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#77827E] group-hover:text-forest-700 transition-colors" />
                </a>
              </div>

              <div className="pt-4 border-t border-[#EFECE3] flex items-center space-x-2 text-xs text-[#6A7873]">
                <MapPin className="w-3.5 h-3.5 text-forest-600 shrink-0" />
                <span>Location: {profile.socials.locationPlaceholder}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
