'use client';

import React from 'react';
import { 
  marqueeRow1, 
  marqueeRow2, 
  marqueeRow3, 
  marqueeRow4, 
  TechItem 
} from '@/data/toolkitData';
import { sounds } from './AudioEffects';
import { Sparkles, Terminal, Palette, Zap } from 'lucide-react';
import Constellations from './Constellations';
import { useTheme } from '@/context/ThemeContext';

// Single Tech Item Component with Icon Above and Name Directly Below
function TechLogoCard({ item }: { item: TechItem }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      onMouseEnter={() => sounds.playPop()}
      className="group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer w-28 sm:w-36 shrink-0"
    >
      {/* Subtle hover background highlight */}
      <div 
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none border border-transparent group-hover:border-[#F42B70]/30 shadow-sm opacity-0 group-hover:opacity-100 ${
          isDark ? 'bg-white/5' : 'bg-[#49352B]/5'
        }`}
      />

      {/* Official Technology Logo (Grayscale default, Brand color & Glow on hover) */}
      <div className="relative z-10 w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
        <div
          dangerouslySetInnerHTML={{ __html: item.svg }}
          className="w-full h-full flex items-center justify-center filter grayscale opacity-65 contrast-125 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
          style={{
            filter: undefined, // Controlled by Tailwind class
          }}
        />
        {/* Brand color ambient halo on hover */}
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-300 -z-10"
          style={{ backgroundColor: item.brandColor }}
        />
      </div>

      {/* Technology Name Centered Directly Below Logo */}
      <span className={`relative z-10 mt-2 sm:mt-2.5 font-mono text-[11px] sm:text-xs text-center tracking-wide transition-colors duration-200 line-clamp-1 ${
        isDark ? 'text-[#F5EBDD]/70 group-hover:text-white group-hover:font-bold' : 'text-[#5C4436] group-hover:text-[#260D27] group-hover:font-bold'
      }`}>
        {item.name}
      </span>
    </div>
  );
}

// Marquee Row Component
function MarqueeRow({
  items,
  direction,
  duration,
  className = '',
}: {
  items: TechItem[];
  direction: 'left' | 'right';
  duration: string;
  className?: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Duplicate items 4 times to ensure a seamless infinite loop across all viewport widths
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`marquee-container relative w-full overflow-hidden py-2 ${className}`}>
      {/* Left/Right Edge Gradient Fade Masks */}
      <div className={`absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r to-transparent z-10 pointer-events-none transition-colors duration-300 ${
        isDark ? 'from-[#260D27]' : 'from-[#F5EBDD]'
      }`} />
      <div className={`absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l to-transparent z-10 pointer-events-none transition-colors duration-300 ${
        isDark ? 'from-[#260D27]' : 'from-[#F5EBDD]'
      }`} />

      {/* Moving Marquee Track */}
      <div
        className={direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}
        style={{ '--marquee-duration': duration } as React.CSSProperties}
      >
        <div className="flex items-center gap-2 sm:gap-6 shrink-0">
          {duplicatedItems.map((item, index) => (
            <TechLogoCard key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Toolkit() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="toolkit"
      className="relative min-h-screen py-24 transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor: isDark ? '#260D27' : '#F5EBDD',
        color: isDark ? '#F5EBDD' : '#49352B',
      }}
    >
      {/* Spider-Verse Halftone & Grid Texture Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F42B70 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(101, 54, 217, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(101, 54, 217, 0.2) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Decorative Star Constellations Background Layer */}
      <Constellations variant="toolkit" />

      {/* Ambient Radial Color Glows */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#6536D9]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#F42B70]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14">
        
        {/* Comic Section Header Bar */}
        <div className={`flex flex-wrap items-center justify-between gap-3 pb-3 border-b mb-8 ${
          isDark ? 'border-[#49352B]' : 'border-[#D4C3B2]'
        }`}>
          <div className="flex items-center gap-2.5">
            <span className="font-comic text-xs tracking-wider px-3 py-1 bg-[#6536D9] text-white rounded border border-white/20 shadow-comic-sm">
              THE TOOLKIT
            </span>
            <span className="font-mono text-xs text-[#20C9E8] font-bold uppercase tracking-wider hidden sm:inline">
              POWERED BY CURIOSITY
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#20C9E8] font-bold">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#F42B70]" />
            <span>MY TECH COLLECTION // 34 TOOLS</span>
          </div>
        </div>

        {/* Section Heading & Supporting Text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className={`font-comic text-5xl sm:text-7xl lg:text-8xl tracking-wide leading-none ${
              isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'
            }`}>
              MY TECH ARSENAL
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#F42B70] tracking-widest mt-2 uppercase font-bold">
              // INFINITE INTERACTIVE LOGO MARQUEE • CONTINUOUS MOTION
            </p>
          </div>

          <p className={`font-sans text-sm sm:text-base max-w-lg leading-relaxed ${
            isDark ? 'text-[#D8C1A6]' : 'text-[#6B5344]'
          }`}>
            &ldquo;Every tool, language and technology I use to bring ideas to life.&rdquo;
          </p>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3 ROWS OF INFINITE TECH MARQUEE (ALL 27 TECHNOLOGIES)          */}
      {/* ============================================================== */}
      <div className="w-full space-y-4 sm:space-y-6 relative z-10">
        
        {/* Row 1: Right to Left (Languages & Core Frontend) */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-1 flex items-center gap-2">
            <span className="font-mono text-[10px] text-[#20C9E8] uppercase tracking-wider font-bold">
              ROW 01 // LANGUAGES &amp; WEB PLATFORM
            </span>
          </div>
          <MarqueeRow items={marqueeRow1} direction="left" duration="30s" />
        </div>

        {/* Row 2: Left to Right (Backend, APIs & Databases) */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-1 flex items-center gap-2">
            <span className="font-mono text-[10px] text-[#6536D9] uppercase tracking-wider font-bold">
              ROW 02 // BACKEND ARCHITECTURE &amp; DATABASES
            </span>
          </div>
          <MarqueeRow items={marqueeRow2} direction="right" duration="38s" />
        </div>

        {/* Row 3: Right to Left (Cloud DBs, UI Systems, AI & Dev Tools) */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-1 flex items-center gap-2">
            <span className="font-mono text-[10px] text-[#F42B70] uppercase tracking-wider font-bold">
              ROW 03 // INTELLIGENCE, CLOUD &amp; DEVELOPER TOOLING
            </span>
          </div>
          <MarqueeRow items={marqueeRow3} direction="left" duration="34s" />
        </div>

      </div>

      {/* ============================================================== */}
      {/* DEDICATED ROW 4: DESIGN TOOLS (Anchored for #design)          */}
      {/* Figma, Canva, Adobe Photoshop, Illustrator, InDesign          */}
      {/* ============================================================== */}
      <div id="design" className={`w-full mt-12 sm:mt-16 pt-8 border-t relative z-10 ${
        isDark ? 'border-[#49352B]' : 'border-[#D4C3B2]'
      }`}>
        
        {/* Anchor alias */}
        <div id="design-tools" className="absolute -top-16 left-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="font-comic text-xs px-2.5 py-0.5 bg-[#F42B70] text-white font-bold rounded border border-white/20">
              ROW 04 // DEDICATED CATEGORY
            </span>
            <h3 className={`font-comic text-2xl sm:text-3xl tracking-wide flex items-center gap-2 ${
              isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'
            }`}>
              <Palette className="w-5 h-5 text-[#20C9E8]" />
              DESIGN TOOLS &amp; CREATIVE SUITE
            </h3>
          </div>

          <span className={`font-mono text-[11px] ${
            isDark ? 'text-[#D8C1A6]' : 'text-[#6B5344]'
          }`}>
            FIGMA • CANVA • PHOTOSHOP • ILLUSTRATOR • INDESIGN • BLENDER • SKETCHUP
          </span>
        </div>

        {/* Row 4: Moves Left to Right (Opposite to Row 3) */}
        <MarqueeRow items={marqueeRow4} direction="right" duration="26s" />
      </div>



    </section>
  );
}

