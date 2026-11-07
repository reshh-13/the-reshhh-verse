'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { sounds } from './AudioEffects';
import Constellations from './Constellations';
import { useTheme } from '@/context/ThemeContext';

// Radiating Pink Comic Accent Sparks (left side)
function PinkSparkLeft() {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-comic-pink select-none shrink-0" viewBox="0 0 32 32" fill="currentColor">
      {/* Top angled spark */}
      <path d="M22 6 C20 4, 14 8, 12 11 C10 13, 12 15, 14 15 C16 15, 24 8, 22 6 Z" />
      {/* Middle horizontal spark */}
      <path d="M28 16 C28 14, 18 14, 12 15 C8 16, 8 18, 12 18 C16 18, 28 18, 28 16 Z" />
      {/* Bottom angled spark */}
      <path d="M22 26 C24 24, 16 17, 14 17 C12 17, 10 19, 12 21 C14 24, 20 28, 22 26 Z" />
    </svg>
  );
}

// Radiating Pink Comic Accent Sparks (right side)
function PinkSparkRight() {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-comic-pink select-none shrink-0" viewBox="0 0 32 32" fill="currentColor">
      {/* Top angled spark */}
      <path d="M10 6 C12 4, 18 8, 20 11 C22 13, 20 15, 18 15 C16 15, 8 8, 10 6 Z" />
      {/* Middle horizontal spark */}
      <path d="M4 16 C4 14, 14 14, 20 15 C24 16, 24 18, 20 18 C16 18, 4 18, 4 16 Z" />
      {/* Bottom angled spark */}
      <path d="M10 26 C8 24, 16 17, 18 17 C20 17, 22 19, 20 21 C18 24, 12 28, 10 26 Z" />
    </svg>
  );
}

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isCharacterHovered, setIsCharacterHovered] = useState(false);

  return (
    <section 
      id="about" 
      className="relative w-full min-h-screen lg:h-screen flex items-center justify-center transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor: isDark ? '#46163C' : '#F5EBDD',
        color: isDark ? '#F5EBDD' : '#49352B',
      }}
    >
      {/* Background subtle radial halftone glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(circle at 65% 50%, #6E2259 0%, #46163C 68%)'
            : 'radial-gradient(circle at 65% 50%, #E9DDCE 0%, #F5EBDD 70%)',
        }}
      />
      <div className="absolute inset-0 bg-halftone-dots opacity-10 pointer-events-none" />

      {/* Decorative Star Constellations Background Layer */}
      <Constellations variant="about" />

      {/* Full-width standalone layout container (No max-width constraint) */}
      <div className="w-full h-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-20 pb-8 lg:py-0 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8 xl:gap-14">
        
        {/* ================= LEFT COLUMN: Character Illustration (Approx 38-42% screen width) ================= */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full lg:w-[40%] xl:w-[42%] flex justify-center lg:justify-start items-end select-none h-full"
        >
          {/* Taller character container preserving exact image aspect ratio without any cropping */}
          <div 
            onMouseEnter={() => {
              setIsCharacterHovered(true);
              sounds.playPop();
            }}
            onMouseLeave={() => setIsCharacterHovered(false)}
            onClick={() => {
              setIsCharacterHovered((prev) => !prev);
              sounds.playPop();
            }}
            className="group/character relative aspect-[635/1024] h-[72vh] sm:h-[80vh] lg:h-[88vh] xl:h-[93vh] max-h-screen w-auto max-w-full cursor-pointer"
            title="Hover or tap to interact with Reshhh"
          >
            {/* Resting Pose (Looking sideways) */}
            <Image
              src="/images/reshma-about.png"
              alt="Reshma Illustrated Character - Resting"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className={`object-contain object-bottom select-none drop-shadow-[0_10px_25px_rgba(38,13,39,0.5)] transition-opacity duration-500 ease-in-out pointer-events-none ${
                isCharacterHovered ? 'opacity-0' : 'opacity-100 group-hover/character:opacity-0'
              }`}
            />

            {/* Hover / Focused Pose (Eyes looking directly at visitor with smooth crossfade transition) */}
            <Image
              src="/images/reshma-hover.png"
              alt="Reshma Illustrated Character - Direct Gaze"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className={`object-contain object-bottom select-none drop-shadow-[0_10px_25px_rgba(38,13,39,0.5)] transition-opacity duration-500 ease-in-out pointer-events-none ${
                isCharacterHovered ? 'opacity-100' : 'opacity-0 group-hover/character:opacity-100'
              }`}
            />
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN: Typography, Description & Contact Icons (Approx 55-58% width) ================= */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="w-full lg:w-[58%] xl:w-[57%] flex flex-col justify-center items-start lg:pl-4 xl:pl-8 py-4 lg:py-6"
        >
          
          {/* Handwritten Greeting: "Hi, I'm" */}
          <div className="mb-0 sm:-mb-1">
            <span 
              className={`font-handwriting font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl inline-block transform -rotate-3 origin-bottom-left select-none ${
                isDark ? 'text-[#F5EBDD] drop-shadow-[1px_1px_0px_#2A0E23]' : 'text-[#49352B] drop-shadow-[1px_1px_0px_#E9DDCE]'
              }`}
            >
              Hi, I&apos;m
            </span>
          </div>

          {/* Bubbly RESHMA! Heading */}
          <div className="mb-5 sm:mb-7 xl:mb-9 select-none max-w-full overflow-visible">
            <h1 
              className="font-bubble text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] xl:text-[7.6rem] 2xl:text-[8.8rem] font-bold tracking-tight text-[#FFFDF7] inline-block whitespace-nowrap leading-none filter drop-shadow-[4px_5px_0px_#F42B70] sm:drop-shadow-[5px_6px_0px_#F42B70] lg:drop-shadow-[6px_7px_0px_#F42B70]"
              style={{
                paintOrder: 'stroke fill',
                WebkitTextStroke: isDark ? '5px #2A0E23' : '5px #49352B',
              }}
            >
              RESHMA!
            </h1>
          </div>

          {/* Description Text */}
          <div 
            className={`space-y-4 sm:space-y-5 font-sans text-base sm:text-lg lg:text-[1.18rem] xl:text-[1.32rem] leading-relaxed max-w-2xl xl:max-w-3xl font-normal ${
              isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'
            }`}
          >
            
            <p>
              I&apos;m a Computer Science Engineering student who loves exploring the intersection of technology and creativity. I&apos;m interested in{' '}
              <span className="inline-block px-3 sm:px-3.5 py-0.5 lg:py-1 rounded-full bg-comic-pink text-white font-bold border border-[#2A0E23]/30 shadow-comic-sm my-0.5 align-baseline">
                Cybersecurity,
              </span>{' '}
              <span className="inline-block px-3 sm:px-3.5 py-0.5 lg:py-1 rounded-full bg-comic-pink text-white font-bold border border-[#2A0E23]/30 shadow-comic-sm my-0.5 align-baseline">
                Full-Stack Development
              </span>{' '}
              and{' '}
              <span className="inline-block px-3 sm:px-3.5 py-0.5 lg:py-1 rounded-full bg-comic-pink text-white font-bold border border-[#2A0E23]/30 shadow-comic-sm my-0.5 align-baseline">
                Graphic Design.
              </span>
            </p>

            <p>
              I enjoy building things, experimenting with ideas, creating visual designs and finding creative ways to solve real-world problems.
            </p>

          </div>

          {/* ================= CONTACT ICONS ================= */}
          <div className="mt-8 sm:mt-12 xl:mt-14 flex items-center gap-3 sm:gap-5 select-none">
            
            {/* Left Pink Radiating Sparks */}
            <PinkSparkLeft />

            {/* 1. Email Icon */}
            <a
              href="mailto:reshma.s.092007@gmail.com"
              title="Send Email (reshma.s.092007@gmail.com)"
              onClick={() => sounds.playPop()}
              className={`group p-1 hover:text-comic-pink transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none ${
                isDark ? 'text-[#FFFDF7]' : 'text-[#49352B]'
              }`}
            >
              <svg 
                className="w-9 h-7 sm:w-11 sm:h-9 lg:w-13 lg:h-10" 
                viewBox="0 0 36 28" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="32" height="24" rx="4" />
                <path d="M4 6 L 18 17 L 32 6" />
              </svg>
            </a>

            {/* Vertical Separator */}
            <div 
              className="w-1 h-8 sm:h-9 lg:h-10 rounded-full opacity-80" 
              style={{ backgroundColor: isDark ? '#FFFDF7' : '#49352B' }}
            />

            {/* 2. GitHub Icon */}
            <a
              href="https://github.com/reshh-13"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile (@reshh-13)"
              onClick={() => sounds.playPop()}
              className="group p-1 transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none"
            >
              <svg className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="15" fill={isDark ? '#FFFDF7' : '#49352B'} />
                <path 
                  fill={isDark ? '#46163C' : '#FFFDF8'} 
                  d="M16 4C9.37 4 4 9.37 4 16c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C24.56 25.79 28 21.3 28 16c0-6.63-5.37-12-12-12z" 
                />
              </svg>
            </a>

            {/* Vertical Separator */}
            <div 
              className="w-1 h-8 sm:h-9 lg:h-10 rounded-full opacity-80" 
              style={{ backgroundColor: isDark ? '#FFFDF7' : '#49352B' }}
            />

            {/* 3. LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/s-reshma-522388318/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile (s-reshma)"
              onClick={() => sounds.playPop()}
              className="group p-1 transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none"
            >
              <svg className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12" viewBox="0 0 32 32">
                <rect x="2" y="2" width="28" height="28" rx="6" fill={isDark ? '#FFFDF7' : '#49352B'} />
                <path 
                  fill={isDark ? '#46163C' : '#FFFDF8'} 
                  d="M10.5 12.5H7.5V23.5H10.5V12.5ZM9 8.2C8 8.2 7.2 9 7.2 10C7.2 11 8 11.8 9 11.8C10 11.8 10.8 11 10.8 10C10.8 9 10 8.2 9 8.2ZM24.5 16.8C24.5 13.9 22.8 12.3 20.3 12.3C18.4 12.3 17.5 13.4 17 14.2V12.5H14V23.5H17V17.8C17 16.3 17.3 14.8 19.2 14.8C21.1 14.8 21.2 16.6 21.2 17.9V23.5H24.2L24.5 16.8Z" 
                />
              </svg>
            </a>

            {/* Right Pink Radiating Sparks */}
            <PinkSparkRight />

          </div>

        </motion.div>

      </div>

    </section>
  );
}
