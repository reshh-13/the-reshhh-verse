'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, FileText, Send, Sparkles, Copy, Check, Radio, Terminal } from 'lucide-react';
import { WashiTape, SpeechBubble, ComicBurst, PushPin } from './Doodles';
import { sounds } from './AudioEffects';
import Constellations from './Constellations';
import { useTheme } from '@/context/ThemeContext';

function GithubIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const emailPlaceholder = 'reshma.s.092007@gmail.com';

  const handleCopyEmail = () => {
    sounds.playPop();
    navigator.clipboard.writeText(emailPlaceholder);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playPunch();

    // Trigger colorful comic confetti explosion!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#F42B70', '#6536D9', '#20C9E8', '#FFD600'],
      });
    } catch {
      // safe fallback
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 overflow-hidden border-t-4 transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#140E16' : '#EFE4D6',
        color: isDark ? '#F5EBDD' : '#49352B',
        borderColor: '#49352B',
      }}
    >
      
      {/* Spider-Verse Glitch & Halftone background */}
      <div className="absolute inset-0 bg-halftone-dots opacity-5 pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 80% 20%, #6536D9 0%, transparent 45%), radial-gradient(circle at 20% 80%, #F42B70 0%, transparent 45%)'
            : 'radial-gradient(circle at 80% 20%, #E2D3C0 0%, transparent 45%), radial-gradient(circle at 20% 80%, #F9E2EB 0%, transparent 45%)',
        }}
      />

      {/* Decorative Star Constellations Background Layer */}
      <Constellations variant="contact" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Comic Final Page Dramatic Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 font-mono text-xs px-3 py-1 mb-4 border shadow-comic-sm rotate-[-1deg] ${
            isDark ? 'bg-[#32102F] text-[#20C9E8] border-white/10' : 'bg-[#FFFDF8] text-[#6536D9] border-[#49352B]/20'
          }`}>
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#F42B70]" />
            <span>FINAL PANEL // MULTIVERSE DISPATCH</span>
          </div>

          <h2 className={`font-comic text-5xl sm:text-7xl lg:text-8xl tracking-wide leading-none ${
            isDark ? 'text-white drop-shadow-[4px_4px_0px_#0D090E]' : 'text-[#49352B] drop-shadow-[4px_4px_0px_#D4C3B2]'
          }`}>
            TO BE CONTINUED...
          </h2>

          <div className="mt-3">
            <span className={`font-handwriting text-3xl sm:text-4xl font-bold tracking-wide ${
              isDark ? 'text-[#20C9E8]' : 'text-[#F42B70]'
            }`}>
              ...In our next collaboration across the Spider-Verse!
            </span>
          </div>

          <div className="mt-6 max-w-2xl mx-auto">
            <SpeechBubble tail="bottom-right" className={`border-2 border-[#49352B] text-left rotate-[1deg] ${
              isDark 
                ? 'bg-[#220E27] text-[#F5EBDD] shadow-[4px_4px_0px_#0D090E]' 
                : 'bg-[#FFFDF8] text-[#49352B] shadow-[4px_4px_0px_#D4C3B2]'
            }`}>
              <p className={`font-sans text-sm sm:text-base font-normal leading-relaxed ${
                isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'
              }`}>
                Whether you have an ambitious frontend challenge, an AI research collaboration, a hackathon idea, or just want to swap comic-book and playlist recommendations—my frequency is open.
              </p>
            </SpeechBubble>
          </div>
        </div>

        {/* Contact Layout: 2 Columns (Dispatch Form + Direct Transmission Channels) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* LEFT: Comic Dispatch Form */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border-2 border-[#49352B] relative rotate-[-0.5deg] ${
            isDark 
              ? 'bg-[#1A0C1E] text-[#F5EBDD] shadow-[6px_6px_0px_#0D090E]' 
              : 'bg-[#FFFDF8] text-[#49352B] shadow-[6px_6px_0px_#D4C3B2]'
          }`}>
            
            {/* Top washi tape */}
            <div className="absolute -top-3 left-8 z-10">
              <WashiTape color="pink" angle="-2deg" text="TRANSMIT MESSAGE" />
            </div>

            <div className="border-b-2 border-[#49352B] pb-3 mb-6">
              <h3 className={`font-comic text-3xl tracking-wide flex items-center gap-2 ${
                isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'
              }`}>
                <Terminal className="w-6 h-6 text-[#20C9E8]" />
                TRANSMISSION TELEGRAM
              </h3>
              <p className={`font-mono text-xs font-bold ${
                isDark ? 'text-[#20C9E8]' : 'text-[#6536D9]'
              }`}>
                ENCRYPTION: 256-BIT MULTIVERSE PROTOCOL
              </p>
            </div>

            {formSubmitted ? (
              <div className={`p-8 text-center border-2 border-dashed border-[#F42B70]/40 rounded-xl ${
                isDark ? 'bg-[#140E16]' : 'bg-[#FAF3E8]'
              }`}>
                <Sparkles className="w-12 h-12 text-[#F42B70] mx-auto mb-3 animate-spin" />
                <h4 className={`font-comic text-2xl ${isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'}`}>DISPATCH TRANSMITTED!</h4>
                <p className={`font-handwriting text-2xl mt-1 font-bold ${isDark ? 'text-[#20C9E8]' : 'text-[#F42B70]'}`}>
                  Your signal has traveled across Dimension-616. Reshhh will respond soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className={`block font-mono text-xs font-bold uppercase tracking-wider mb-1 ${
                    isDark ? 'text-[#D8C1A6]' : 'text-[#6B5344]'
                  }`}>
                    AGENT CODENAME / NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Peter Parker / Creative Recruiter"
                    className={`w-full border-2 border-[#49352B] rounded-lg px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-[#F42B70] shadow-comic-sm ${
                      isDark 
                        ? 'bg-[#26122b] text-[#F5EBDD] placeholder-[#D8C1A6]/40' 
                        : 'bg-[#FAF3E8] text-[#49352B] placeholder-[#7B6658]/50'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block font-mono text-xs font-bold uppercase tracking-wider mb-1 ${
                    isDark ? 'text-[#D8C1A6]' : 'text-[#6B5344]'
                  }`}>
                    RETURN FREQUENCY / EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@universe.com"
                    className={`w-full border-2 border-[#49352B] rounded-lg px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-[#F42B70] shadow-comic-sm ${
                      isDark 
                        ? 'bg-[#26122b] text-[#F5EBDD] placeholder-[#D8C1A6]/40' 
                        : 'bg-[#FAF3E8] text-[#49352B] placeholder-[#7B6658]/50'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block font-mono text-xs font-bold uppercase tracking-wider mb-1 ${
                    isDark ? 'text-[#D8C1A6]' : 'text-[#6B5344]'
                  }`}>
                    MISSION BRIEF / INQUIRY
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or just say hello..."
                    className={`w-full border-2 border-[#49352B] rounded-lg px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-[#F42B70] shadow-comic-sm resize-none ${
                      isDark 
                        ? 'bg-[#26122b] text-[#F5EBDD] placeholder-[#D8C1A6]/40' 
                        : 'bg-[#FAF3E8] text-[#49352B] placeholder-[#7B6658]/50'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#F42B70] hover:bg-[#e02464] text-white font-comic text-xl font-bold tracking-wider rounded-lg border-2 border-[#F42B70]/60 shadow-[4px_4px_0px_#0D090E] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-5 h-5 text-white" />
                  <span>TRANSMIT DISPATCH</span>
                </button>
              </form>
            )}

          </div>

          {/* RIGHT: Direct Channels & Placeholders */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Quick Email Copy Card */}
            <div className={`p-5 rounded-2xl border-2 border-[#49352B] ${
              isDark 
                ? 'bg-[#1A0C1E] text-white shadow-[4px_4px_0px_#0D090E]' 
                : 'bg-[#FFFDF8] text-[#49352B] shadow-[4px_4px_0px_#D4C3B2]'
            }`}>
              <div className={`flex items-center gap-2 text-xs font-mono mb-2 font-bold ${
                isDark ? 'text-[#20C9E8]' : 'text-[#6536D9]'
              }`}>
                <Mail className="w-4 h-4" />
                <span>DIRECT RADAR // EMAIL</span>
              </div>
              <div className={`p-3 rounded-lg border flex items-center justify-between gap-2 ${
                isDark ? 'bg-[#26122b] border-white/10' : 'bg-[#FAF3E8] border-[#49352B]/20'
              }`}>
                <span className={`font-mono text-xs sm:text-sm truncate font-semibold ${
                  isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'
                }`}>
                  {emailPlaceholder}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 bg-[#6536D9] hover:bg-[#5229be] rounded border border-white/20 text-white transition-all text-xs font-mono font-bold flex items-center gap-1 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5 text-white" />}
                  <span>{copiedEmail ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* GitHub Profile */}
            <a
              href="https://github.com/reshh-13"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playPop()}
              className={`group p-4 rounded-xl border-2 border-[#49352B] hover:border-[#F42B70] hover:-translate-y-0.5 transition-all flex items-center justify-between ${
                isDark 
                  ? 'bg-[#1A0C1E] text-[#F5EBDD] shadow-[4px_4px_0px_#0D090E]' 
                  : 'bg-[#FFFDF8] text-[#49352B] shadow-[4px_4px_0px_#D4C3B2]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border group-hover:border-[#F42B70] ${
                  isDark ? 'bg-[#26122b] text-[#F5EBDD] border-white/10' : 'bg-[#FAF3E8] text-[#49352B] border-[#49352B]/20'
                }`}>
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className={`font-mono text-[10px] uppercase font-bold block ${
                    isDark ? 'text-[#D8C1A6]' : 'text-[#7B6658]'
                  }`}>
                    CODE REPOSITORY
                  </span>
                  <span className={`font-comic text-xl transition-colors ${
                    isDark ? 'text-[#F5EBDD] group-hover:text-[#20C9E8]' : 'text-[#49352B] group-hover:text-[#F42B70]'
                  }`}>
                    GITHUB // @RESHH-13
                  </span>
                </div>
              </div>
              <span className={`font-mono text-xs font-bold px-2 py-1 rounded border ${
                isDark ? 'text-[#20C9E8] bg-[#26122b] border-white/10' : 'text-[#6536D9] bg-[#FAF3E8] border-[#49352B]/20'
              }`}>
                EXPLORE →
              </span>
            </a>

            {/* LinkedIn Profile */}
            <a
              href="https://www.linkedin.com/in/s-reshma-522388318/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playPop()}
              className={`group p-4 rounded-xl border-2 border-[#49352B] hover:border-[#20C9E8] hover:-translate-y-0.5 transition-all flex items-center justify-between ${
                isDark 
                  ? 'bg-[#1A0C1E] text-[#F5EBDD] shadow-[4px_4px_0px_#0D090E]' 
                  : 'bg-[#FFFDF8] text-[#49352B] shadow-[4px_4px_0px_#D4C3B2]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border group-hover:border-[#20C9E8] ${
                  isDark ? 'bg-[#26122b] text-[#20C9E8] border-white/10' : 'bg-[#FAF3E8] text-[#20C9E8] border-[#49352B]/20'
                }`}>
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className={`font-mono text-[10px] uppercase font-bold block ${
                    isDark ? 'text-[#D8C1A6]' : 'text-[#7B6658]'
                  }`}>
                    PROFESSIONAL NETWORK
                  </span>
                  <span className={`font-comic text-xl transition-colors ${
                    isDark ? 'text-[#F5EBDD] group-hover:text-[#20C9E8]' : 'text-[#49352B] group-hover:text-[#20C9E8]'
                  }`}>
                    LINKEDIN // S-RESHMA
                  </span>
                </div>
              </div>
              <span className={`font-mono text-xs font-bold px-2 py-1 rounded border ${
                isDark ? 'text-[#20C9E8] bg-[#26122b] border-white/10' : 'text-[#6536D9] bg-[#FAF3E8] border-[#49352B]/20'
              }`}>
                CONNECT →
              </span>
            </a>

            {/* Resume Dossier Placeholder */}
            <div className={`p-5 rounded-2xl border-2 border-[#49352B] relative overflow-hidden ${
              isDark 
                ? 'bg-[#1A0C1E] text-white shadow-[4px_4px_0px_#0D090E]' 
                : 'bg-[#FFFDF8] text-[#49352B] shadow-[4px_4px_0px_#D4C3B2]'
            }`}>
              <div className="absolute top-2 right-2">
                <WashiTape color="yellow" angle="5deg" text="CLASSIFIED" className="text-[9px]" />
              </div>

              <div className={`flex items-center gap-2 text-xs font-mono mb-2 font-bold ${
                isDark ? 'text-[#20C9E8]' : 'text-[#6536D9]'
              }`}>
                <FileText className="w-4 h-4" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>

              <h4 className={`font-comic text-2xl mb-1 ${
                isDark ? 'text-white' : 'text-[#49352B]'
              }`}>
                RESHHH // DOSSIER [PDF]
              </h4>
              <p className={`font-sans text-xs mb-4 ${
                isDark ? 'text-[#D8C1A6]' : 'text-[#7B6658]'
              }`}>
                Comprehensive academic credentials, project blueprints, and technical competencies.
              </p>

              <button
                onClick={() => {
                  sounds.playPunch();
                  alert('Resume Dossier Download placeholder triggered! (File link ready for resume.pdf)');
                }}
                className="w-full py-2.5 bg-[#6536D9] hover:bg-[#5229be] text-white font-comic text-base tracking-wide border-2 border-white/20 shadow-comic-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
              >
                <Sparkles className="w-4 h-4 text-[#FFD600]" />
                <span>DOWNLOAD RESUME [PDF]</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
