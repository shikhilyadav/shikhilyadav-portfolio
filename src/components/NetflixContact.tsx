import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, MapPin, ArrowUpRight, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const NetflixContact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-[#1f2723] bg-[#080909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-1 h-6 bg-[#00C982] rounded-full" />
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white font-bold">
            Contact &amp; Connect
          </h2>
          <span className="text-xs font-mono text-[#A7ADA9] hidden sm:inline">
            Direct Communication Channels
          </span>
        </div>

        {/* Contact Layout: Clean, Honest, No Fake Form */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Direct Outreach */}
          <div className="md:col-span-7 bg-[#111413] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#1f2723] shadow-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#123D2B] border border-[#00C982]/40 text-[#78FFB4] flex items-center justify-center shadow-lg">
                <Mail className="w-6 h-6 text-[#00C982]" />
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-bold">
                Direct Email Outreach
              </h3>
              <p className="text-sm text-[#A7ADA9] leading-relaxed">
                Connect directly regarding AI, machine learning projects, or professional software development collaborations.
              </p>

              {/* Email Address with Copy Interaction */}
              <div className="p-4 rounded-xl bg-[#080909] border border-[#1f2723] space-y-2">
                <div className="text-[10px] font-mono text-[#00C982] font-bold uppercase tracking-wider">
                  Contact Address
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm text-white font-medium break-all">
                    {profile.socials.emailPlaceholder}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#141816] hover:bg-[#1c2420] text-white transition-colors shrink-0 border border-[#1f2723]"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#00C982]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <div className="text-[11px] text-[#00C982] font-mono">
                    Copied to clipboard! (Remember to update with your real address)
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-[#1f2723] flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.socials.emailPlaceholder}`}
                className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#00C982] hover:bg-[#78FFB4] text-black text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#111413] hover:bg-[#141816] border border-[#1f2723] hover:border-[#00C982] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#00C982]" />
                <span>Resume (Pending)</span>
              </button>
            </div>
          </div>

          {/* Social Profiles & Presence */}
          <div className="md:col-span-5 bg-[#111413] rounded-2xl p-6 sm:p-8 border border-[#1f2723] shadow-2xl space-y-6">
            <div className="space-y-1">
              <h4 className="font-editorial text-2xl text-white font-bold">
                Digital Presence
              </h4>
              <p className="text-xs text-[#A7ADA9]">
                Explore code repositories and connect via LinkedIn:
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={profile.socials.githubPlaceholder}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#080909] hover:bg-[#141816] border border-[#1f2723] hover:border-[#00C982]/50 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <Github className="w-4 h-4 text-[#00C982]" />
                  <div>
                    <div className="text-xs font-bold text-white">GitHub</div>
                    <div className="text-[10px] font-mono text-[#A7ADA9]">github.com/shikhilyadav</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A7ADA9] group-hover:text-[#00C982] transition-colors" />
              </a>

              <a
                href={profile.socials.linkedinPlaceholder}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#080909] hover:bg-[#141816] border border-[#1f2723] hover:border-[#00C982]/50 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-4 h-4 text-[#00C982]" />
                  <div>
                    <div className="text-xs font-bold text-white">LinkedIn</div>
                    <div className="text-[10px] font-mono text-[#A7ADA9]">[Your-LinkedIn-Profile]</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A7ADA9] group-hover:text-[#00C982] transition-colors" />
              </a>
            </div>

            <div className="pt-4 border-t border-[#1f2723] flex items-center space-x-2 text-xs font-mono text-[#A7ADA9]">
              <MapPin className="w-3.5 h-3.5 text-[#00C982] shrink-0" />
              <span>Location: {profile.socials.locationPlaceholder}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
