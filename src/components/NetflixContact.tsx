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
    <section id="contact" className="py-16 sm:py-24 border-t border-[#252525] bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-1 h-6 bg-[#E50914] rounded-full" />
          <h2 className="font-cinematic text-3xl sm:text-4xl lg:text-5xl tracking-wider text-white uppercase font-bold">
            CONTACT &amp; CONNECT
          </h2>
          <span className="text-xs text-[#808080] hidden sm:inline">
            Get In Touch
          </span>
        </div>

        {/* Contact Layout: Clean, Honest, No Fake Form */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Direct Outreach */}
          <div className="md:col-span-7 bg-[#181818] rounded-xl p-6 sm:p-8 lg:p-10 border border-[#2B2B2B] shadow-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E50914] text-white flex items-center justify-center shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-cinematic text-3xl text-white tracking-wider">
                Direct Email Outreach
              </h3>
              <p className="text-sm text-[#CCCCCC] leading-relaxed">
                Connect directly regarding AI, machine learning projects, or professional software development collaborations.
              </p>

              {/* Email Address with Copy Interaction */}
              <div className="p-4 rounded-lg bg-[#252525] border border-[#333333] space-y-2">
                <div className="text-[10px] font-mono text-[#E50914] font-bold uppercase tracking-wider">
                  Verified Contact Address
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm text-white font-medium break-all">
                    {profile.socials.emailPlaceholder}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded bg-[#333333] hover:bg-[#444444] text-white transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <div className="text-[11px] text-emerald-400 font-medium">
                    Copied to clipboard! (Remember to update with your real address)
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-[#282828] flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.socials.emailPlaceholder}`}
                className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3 rounded bg-[#E50914] hover:bg-[#b80710] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded bg-[#252525] hover:bg-[#333333] border border-[#3A3A3A] text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                <FileText className="w-4 h-4 text-[#B3B3B3]" />
                <span>Resume (Pending)</span>
              </button>
            </div>
          </div>

          {/* Social Profiles & Presence */}
          <div className="md:col-span-5 bg-[#181818] rounded-xl p-6 sm:p-8 border border-[#2B2B2B] shadow-2xl space-y-6">
            <div className="space-y-1">
              <h4 className="font-cinematic text-2xl text-white tracking-wider">
                Digital Presence
              </h4>
              <p className="text-xs text-[#8C8C8C]">
                Explore code repositories and connect via LinkedIn:
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={profile.socials.githubPlaceholder}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded bg-[#252525] hover:bg-[#303030] border border-[#353535] transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <Github className="w-4 h-4 text-[#E50914]" />
                  <div>
                    <div className="text-xs font-bold text-white">GitHub</div>
                    <div className="text-[10px] font-mono text-[#8C8C8C]">github.com/shikhilyadav</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8C8C8C] group-hover:text-white transition-colors" />
              </a>

              <a
                href={profile.socials.linkedinPlaceholder}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded bg-[#252525] hover:bg-[#303030] border border-[#353535] transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-4 h-4 text-[#E50914]" />
                  <div>
                    <div className="text-xs font-bold text-white">LinkedIn</div>
                    <div className="text-[10px] font-mono text-[#8C8C8C]">[Your-LinkedIn-Profile]</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8C8C8C] group-hover:text-white transition-colors" />
              </a>
            </div>

            <div className="pt-4 border-t border-[#282828] flex items-center space-x-2 text-xs text-[#8C8C8C]">
              <MapPin className="w-3.5 h-3.5 text-[#E50914] shrink-0" />
              <span>Location: {profile.socials.locationPlaceholder}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
