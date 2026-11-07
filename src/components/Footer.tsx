'use client';

import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { sounds } from './AudioEffects';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    sounds.playSwoosh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="py-12 border-t-4 border-[#49352B] relative overflow-hidden font-mono text-xs transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#0D090E' : '#E3D5C5',
        color: isDark ? '#D8C1A6' : '#6B5344',
      }}
    >
      
      {/* Halftone texture */}
      <div className="absolute inset-0 bg-halftone-dots opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
          isDark ? 'border-[#49352B]' : 'border-[#49352B]/20'
        }`}>
          
          {/* Logo & Seal */}
          <div className="flex items-center gap-4">
            <div className={`font-comic text-2xl px-3 py-1 border border-[#49352B] shadow-comic-sm ${
              isDark ? 'bg-[#220E27] text-[#F5EBDD]' : 'bg-[#FFFDF8] text-[#49352B]'
            }`}>
              <span className="text-[#FFD600]">★</span> RESHHH-VERSE
            </div>
            <div className={`hidden sm:block text-[10px] ${isDark ? 'text-[#D8C1A6]' : 'text-[#7B6658]'}`}>
              ISSUE #01 • 2026 EDITION<br />
              DIMENSION // 616
            </div>
          </div>

          {/* Comic Barcode Placeholder */}
          <div className={`flex items-center gap-3 px-4 py-2 rounded border border-[#49352B] ${
            isDark ? 'bg-[#220E27]' : 'bg-[#FFFDF8]'
          }`}>
            <div className="flex gap-0.5 h-8 items-end">
              {[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4].map((h, i) => (
                <div 
                  key={i} 
                  className={isDark ? "bg-[#F5EBDD]/80" : "bg-[#49352B]"} 
                  style={{ width: `${(i % 3) + 1}px`, height: `${h * 3 + 8}px` }} 
                />
              ))}
            </div>
            <span className={`text-[10px] font-mono tracking-widest font-bold ${
              isDark ? 'text-[#20C9E8]' : 'text-[#6536D9]'
            }`}>
              978-0-RESHHH-2026
            </span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-[#F42B70] hover:bg-[#e02464] text-white font-comic text-sm px-4 py-2 border border-[#F42B70]/40 shadow-comic-sm hover:translate-y-[-2px] transition-all cursor-pointer font-bold"
          >
            <ArrowUp className="w-4 h-4 text-white" />
            <span>RETURN TO TOP</span>
          </button>
        </div>

        {/* Bottom credits */}
        <div className={`pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left ${
          isDark ? 'text-[#D8C1A6]' : 'text-[#6B5344]'
        }`}>
          <p className={`flex items-center gap-1.5 font-handwriting text-lg ${
            isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'
          }`}>
            <span>Handcrafted with caffeine, Next.js 15, and comic love by</span>
            <span className="text-[#F42B70] font-bold">RESHHH</span>
            <Sparkles className="w-4 h-4 text-[#FFD600] fill-current" />
          </p>

          <p className={`text-[11px] ${isDark ? 'text-[#D8C1A6]' : 'text-[#7B6658]'}`}>
            © 2026 THE RESHHH-VERSE • ALL MULTIVERSE RIGHTS RESERVED
          </p>
        </div>

      </div>
    </footer>
  );
}

