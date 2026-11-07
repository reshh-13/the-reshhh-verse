'use client';

import React from 'react';
import Image from 'next/image';
import { TornPaperDivider } from './TornPaper';
import { WashiTape, SparkleDoodle, ComicBurst } from './Doodles';
import { sounds } from './AudioEffects';
import { ChevronDown, ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-0 bg-[#120D10] text-[#F5EBDD] overflow-hidden">
      {/* Spider-Verse halftone & glitch ambient grid */}
      <div className="absolute inset-0 bg-halftone-dots opacity-20 pointer-events-none" />
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #6536D9 0%, transparent 60%)',
        }}
      />

      {/* Floating Scrapbook & Comic Accents around the Hero Composition */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 pt-4 pb-6">
        
        {/* Top Comic Meta Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b-2 border-[#49352B]/60 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="bg-comic-pink text-white px-2 py-0.5 font-bold uppercase tracking-wider text-[11px] border border-black shadow-comic-sm">
              VOL. 1 // NO. 26
            </span>
            <span className="text-white/80 hidden sm:inline">
              APPROVED BY THE MULTIVERSE COMICS CODE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-comic-cyan font-bold hidden md:inline">
              [ EARTH-616 // RESHHH TIMELINE ]
            </span>
            <div className="flex items-center gap-1 text-comic-yellow text-xs font-bold">
              <Zap className="w-3.5 h-3.5 fill-current animate-bounce" />
              <span>INTERACTIVE SCRAPBOOK</span>
            </div>
          </div>
        </div>

        {/* Hero Comic Composition Frame */}
        {/* The prompt strictly requires:
            - Entire image as full-width hero composition
            - Do not crop portrait
            - Do not crop title
            - Do not recreate artwork with CSS/text
            - Preserve original aspect ratio (16:9)
            - Display complete composition
            - Do not place headings over the artwork
        */}
        <div className="relative group mx-auto rounded-lg sm:rounded-xl overflow-hidden border-4 sm:border-[6px] border-coffee shadow-comic-xl bg-black">
          
          {/* Subtle neon Spider-Verse chromatic edge glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-comic-pink via-comic-purple to-comic-cyan opacity-25 group-hover:opacity-60 blur-sm transition-opacity duration-500 pointer-events-none" />

          {/* Full artwork container maintaining exact 16:9 aspect ratio */}
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#1A1215]">
            <Image
              src="/images/hero-comic.jpg"
              alt="The Reshhh-Verse Hero Artwork - Portfolio 2026"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
              className="object-contain w-full h-full select-none"
            />
          </div>

          {/* Interactive tactile comic stickers positioned outside the art canvas edge */}
          <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 pointer-events-auto">
            <WashiTape color="yellow" angle="-3deg" text="RESHHH-VERSE" className="text-[10px] sm:text-xs" />
          </div>

          <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 pointer-events-auto hidden sm:block">
            <WashiTape color="cyan" angle="2deg" text="MULTIVERSE DEV" className="text-[10px] sm:text-xs" />
          </div>

          {/* Clickable comic pop sticker */}
          <button
            onClick={() => {
              sounds.playPunch();
            }}
            title="Hit me for a comic pop!"
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 hover:scale-110 active:scale-95 transition-transform cursor-pointer"
          >
            <ComicBurst text="POW!" color="#F42B70" className="scale-75 sm:scale-90" />
          </button>
        </div>

        {/* Hero Interactive Sub-Bar & Scroll Prompt */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
          
          <div className="flex items-center gap-3 text-sm font-handwriting text-beige text-xl">
            <SparkleDoodle className="w-5 h-5 text-comic-yellow animate-spin" />
            <span>Welcome to my illustrated digital universe. Turn the pages below!</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#about"
              onClick={() => sounds.playSwoosh()}
              className="inline-flex items-center gap-2 bg-comic-yellow hover:bg-yellow-400 text-coffee font-comic text-lg px-5 py-2 border-2 border-coffee shadow-comic-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>ENTER THE SCRAPBOOK</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              onClick={() => sounds.playPop()}
              className="inline-flex items-center gap-2 bg-[#2B2028] hover:bg-[#3D2C39] text-comic-cyan font-mono text-xs font-bold px-4 py-2.5 border-2 border-coffee shadow-comic-sm"
            >
              <span>// VIEW MISSIONS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

