'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Brain, ShieldCheck, Palette, Sparkles } from 'lucide-react';
import { sounds } from './AudioEffects';
import Constellations from './Constellations';
import { useTheme } from '@/context/ThemeContext';

interface PowerNode {
  num: string;
  title: string;
  icon: React.ElementType;
  accentColor: string;
  bgColor: string;
  nodeTextColor: string;
  description: string;
  tools: string[];
}

const powersData: PowerNode[] = [
  {
    num: '01',
    title: 'FRONTEND MASTERY',
    icon: Layout,
    accentColor: '#F42B70',
    bgColor: '#34132B',
    nodeTextColor: '#FFFFFF',
    description: 'Engineering responsive, cinematic web scrapbooks and 60fps micro-interactions with Next.js 15 and Framer Motion.',
    tools: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'HTML5 Canvas'],
  },
  {
    num: '02',
    title: 'BACKEND ENGINE',
    icon: Server,
    accentColor: '#6536D9',
    bgColor: '#291136',
    nodeTextColor: '#FFFFFF',
    description: 'Constructing robust server endpoints, structured database schemas, and high-throughput RESTful communication flows.',
    tools: ['Node.js', 'Express', 'Python', 'Next.js API', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  },
  {
    num: '03',
    title: 'AI & MACHINE LEARNING',
    icon: Brain,
    accentColor: '#20C9E8',
    bgColor: '#152538',
    nodeTextColor: '#1A0D22',
    description: 'Training real-time gesture tracking models for ASL translation and computer-vision restoration models for ancient artifacts.',
    tools: ['TensorFlow', 'PyTorch', 'OpenCV', 'MediaPipe', 'ASL Models', 'Scikit-Learn', 'NumPy'],
  },
  {
    num: '04',
    title: 'CYBERSECURITY',
    icon: ShieldCheck,
    accentColor: '#A47758',
    bgColor: '#342017',
    nodeTextColor: '#FFFFFF',
    description: 'Hardening web application boundaries, understanding threat vectors, cryptographic fundamentals, and OWASP defenses.',
    tools: ['OWASP Top 10', 'Auth Protocols', 'Network Defense', 'Penetration Testing', 'Secure Coding'],
  },
  {
    num: '05',
    title: 'GRAPHIC DESIGN',
    icon: Palette,
    accentColor: '#FFD600',
    bgColor: '#362B14',
    nodeTextColor: '#1A0D22',
    description: 'Translating comic-book narrative aesthetics into tactile, accessible, and high-converting graphic interfaces in Figma.',
    tools: ['Figma', 'Visual Storyboarding', 'Design Systems', 'Halftone Art', 'Typography', 'Accessibility'],
  },
  {
    num: '06',
    title: 'CREATIVE EXPERIMENTATION',
    icon: Sparkles,
    accentColor: '#F42B70',
    bgColor: '#35122E',
    nodeTextColor: '#FFFFFF',
    description: 'Building nostalgic browser extensions like vinyl record players, audio synthesizers, and playful scrapbooks.',
    tools: ['Chrome Extensions', 'Web Audio API', 'Audio Synthesizers', 'Gamification', 'Physics Sim'],
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section 
      id="skills" 
      className="relative w-full py-20 lg:py-28 transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor: isDark ? '#260D27' : '#EFE4D6',
        color: isDark ? '#F5EBDD' : '#49352B',
      }}
    >
      {/* Spider-Verse subtle halftone dots & cosmic radial glow */}
      <div className="absolute inset-0 bg-halftone-dots opacity-15 pointer-events-none" />
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(circle at 50% 30%, #3F1541 0%, #260D27 70%)'
            : 'radial-gradient(circle at 50% 30%, #E2D3C0 0%, #EFE4D6 70%)',
        }}
      />

      {/* Decorative Star Constellations Background Layer */}
      <Constellations variant="powers" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADING ================= */}
        {/* Clean, single heading without overlapping elements */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-comic text-5xl sm:text-7xl lg:text-8xl tracking-wider select-none filter drop-shadow-[4px_5px_0px_#1B0B1D]">
            <span className={isDark ? "text-[#F5EBDD]" : "text-[#49352B]"}>MY </span>
            <span className="text-[#F42B70]">POWERS</span>
          </h2>

          {/* Interactive Hint */}
          <div className="mt-4 flex items-center justify-center gap-2 font-mono text-xs sm:text-sm text-[#20C9E8] font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#20C9E8] animate-ping" />
            <span>HOVER ANY POWER TO TRIGGER THE MULTIVERSE GLITCH</span>
          </div>
        </div>

        {/* ================= DESKTOP S-SHAPED FLOWCHART TIMELINE (lg and up) ================= */}
        <div className="hidden lg:block relative w-full">
          
          {/* Continuous S-shaped SVG Path running vertically through the central 192px corridor */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-48 pointer-events-none z-0">
            <svg 
              className="w-full h-full"
              viewBox="0 0 192 1440" 
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Pink offset shadow behind the S-curve */}
              <path
                d="M 46,120 C 46,240 146,240 146,360 C 146,480 46,480 46,600 C 46,720 146,720 146,840 C 146,960 46,960 46,1080 C 46,1200 146,1200 146,1320"
                stroke="#F42B70"
                strokeWidth="20"
                strokeLinecap="round"
                transform="translate(4, 5)"
                opacity="0.75"
              />

              {/* Main thick coffee S-shaped winding ribbon */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                d="M 46,120 C 46,240 146,240 146,360 C 146,480 46,480 46,600 C 46,720 146,720 146,840 C 146,960 46,960 46,1080 C 46,1200 146,1200 146,1320"
                stroke="#49352B"
                strokeWidth="16"
                strokeLinecap="round"
              />

              {/* Inner glowing purple core accent */}
              <path
                d="M 46,120 C 46,240 146,240 146,360 C 146,480 46,480 46,600 C 46,720 146,720 146,840 C 146,960 46,960 46,1080 C 46,1200 146,1200 146,1320"
                stroke="#6536D9"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Six Timeline Rows alternating Left / Right */}
          <div className="relative z-10 flex flex-col space-y-12 xl:space-y-14">
            {powersData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div 
                  key={item.num}
                  className="grid grid-cols-12 items-center min-h-[200px]"
                >
                  {/* Left Column: Arrow Box (if isLeft) or Spacer (if !isLeft) */}
                  <div className="col-span-5 flex justify-end">
                    {isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        whileHover={{ y: -4, scale: 1.015 }}
                        onClick={() => sounds.playPop()}
                        className="relative w-full max-w-[490px] cursor-pointer group multiverse-glitch-item"
                        tabIndex={0}
                      >
                        {/* Rounded Arrow-shaped SVG Container with Multiverse Dimensional Shadows */}
                        <svg
                          className="absolute inset-0 w-full h-full filter drop-shadow-[5px_6px_0px_#1B0B1D] group-hover:drop-shadow-[0_0_15px_rgba(244,43,112,0.5)] transition-all duration-300"
                          viewBox="0 0 500 190"
                          preserveAspectRatio="none"
                        >
                          {/* Cyan Duplicate Silhouette (glitches on hover) */}
                          <path
                            d="M 18,4 L 460,4 L 496,95 L 460,186 L 18,186 Q 4,186 4,170 L 4,20 Q 4,4 18,4 Z"
                            fill="none"
                            stroke="#20C9E8"
                            strokeWidth="3"
                            transform="translate(-4, -2)"
                            className="opacity-0 group-hover:opacity-85 group-focus-within:opacity-85 transition-opacity duration-150"
                          />

                          {/* Pink Duplicate Silhouette (glitches on hover) */}
                          <path
                            d="M 18,4 L 460,4 L 496,95 L 460,186 L 18,186 Q 4,186 4,170 L 4,20 Q 4,4 18,4 Z"
                            fill="none"
                            stroke="#F42B70"
                            strokeWidth="3"
                            transform="translate(4, 2)"
                            className="opacity-0 group-hover:opacity-85 group-focus-within:opacity-85 transition-opacity duration-150"
                          />

                          {/* Main Arrow Body */}
                          <path
                            d="M 18,4 L 460,4 L 496,95 L 460,186 L 18,186 Q 4,186 4,170 L 4,20 Q 4,4 18,4 Z"
                            fill={isDark ? item.bgColor : '#FFFDF8'}
                            stroke="#49352B"
                            strokeWidth="3.5"
                            strokeLinejoin="round"
                          />
                        </svg>

                        {/* Content inside the Left Arrow Box */}
                        <div className="relative z-10 p-6 pr-14 flex flex-col justify-between min-h-[190px]">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <div 
                                className="w-10 h-10 rounded-lg flex items-center justify-center border-2 border-[#49352B] shadow-comic-sm group-hover:border-[#20C9E8] transition-colors"
                                style={{ backgroundColor: item.accentColor }}
                              >
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <h3 className={`font-comic text-2xl xl:text-3xl tracking-wide multiverse-title ${isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'}`}>
                                {item.title}
                              </h3>
                            </div>
                            <p className={`font-sans text-sm leading-relaxed mb-4 ${isDark ? 'text-[#F5EBDD]/90' : 'text-[#5C4436]'}`}>
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.tools.map((tool) => (
                              <span
                                key={tool}
                                tabIndex={0}
                                onMouseEnter={() => sounds.playPop()}
                                className={`multiverse-glitch-chip font-mono text-[11px] font-semibold px-2 py-0.5 rounded border border-[#49352B] shadow-comic-sm hover:border-[#F42B70] transition-colors cursor-pointer select-none ${
                                  isDark ? 'bg-[#260D27]/80 text-[#F5EBDD]' : 'bg-[#FAF3E8] text-[#49352B]'
                                }`}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="w-full" />
                    )}
                  </div>

                  {/* Center Column: Numbered Circle Node positioned directly on the S-curve */}
                  <div className="col-span-2 flex items-center justify-center relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.4 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: index * 0.1 }}
                      whileHover={{ scale: 1.18, rotate: isLeft ? 5 : -5 }}
                      onClick={() => sounds.playPunch()}
                      className={`relative z-20 w-16 h-16 xl:w-20 xl:h-20 rounded-full flex items-center justify-center border-4 border-[#49352B] shadow-[4px_5px_0px_#1B0B1D] cursor-pointer group ${
                        isLeft ? 'mr-auto lg:ml-2' : 'ml-auto lg:mr-2'
                      }`}
                      style={{ 
                        backgroundColor: item.accentColor,
                      }}
                      title={`Power Node ${item.num}`}
                      tabIndex={0}
                    >
                      {/* Multiverse Duplicate Echo Rings on Hover */}
                      <div className="absolute -inset-1 rounded-full border-2 border-[#20C9E8] opacity-0 group-hover:opacity-80 -translate-x-1 -translate-y-1 transition-all pointer-events-none" />
                      <div className="absolute -inset-1 rounded-full border-2 border-[#F42B70] opacity-0 group-hover:opacity-80 translate-x-1 translate-y-1 transition-all pointer-events-none" />

                      <span 
                        className="font-comic text-2xl xl:text-3xl font-bold tracking-tight select-none multiverse-title"
                        style={{ color: item.nodeTextColor }}
                      >
                        {item.num}
                      </span>
                    </motion.div>
                  </div>

                  {/* Right Column: Arrow Box (if !isLeft) or Spacer (if isLeft) */}
                  <div className="col-span-5 flex justify-start">
                    {!isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        whileHover={{ y: -4, scale: 1.015 }}
                        onClick={() => sounds.playPop()}
                        className="relative w-full max-w-[490px] cursor-pointer group multiverse-glitch-item"
                        tabIndex={0}
                      >
                        {/* Rounded Arrow-shaped SVG Container with Multiverse Dimensional Shadows */}
                        <svg
                          className="absolute inset-0 w-full h-full filter drop-shadow-[5px_6px_0px_#1B0B1D] group-hover:drop-shadow-[0_0_15px_rgba(244,43,112,0.5)] transition-all duration-300"
                          viewBox="0 0 500 190"
                          preserveAspectRatio="none"
                        >
                          {/* Cyan Duplicate Silhouette */}
                          <path
                            d="M 40,4 L 482,4 Q 496,4 496,20 L 496,170 Q 496,186 482,186 L 40,186 L 4,95 L 40,4 Z"
                            fill="none"
                            stroke="#20C9E8"
                            strokeWidth="3"
                            transform="translate(-4, -2)"
                            className="opacity-0 group-hover:opacity-85 group-focus-within:opacity-85 transition-opacity duration-150"
                          />

                          {/* Pink Duplicate Silhouette */}
                          <path
                            d="M 40,4 L 482,4 Q 496,4 496,20 L 496,170 Q 496,186 482,186 L 40,186 L 4,95 L 40,4 Z"
                            fill="none"
                            stroke="#F42B70"
                            strokeWidth="3"
                            transform="translate(4, 2)"
                            className="opacity-0 group-hover:opacity-85 group-focus-within:opacity-85 transition-opacity duration-150"
                          />

                          {/* Main Arrow Body */}
                          <path
                            d="M 40,4 L 482,4 Q 496,4 496,20 L 496,170 Q 496,186 482,186 L 40,186 L 4,95 L 40,4 Z"
                            fill={isDark ? item.bgColor : '#FFFDF8'}
                            stroke="#49352B"
                            strokeWidth="3.5"
                            strokeLinejoin="round"
                          />
                        </svg>

                        {/* Content inside the Right Arrow Box */}
                        <div className="relative z-10 p-6 pl-14 flex flex-col justify-between min-h-[190px]">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <div 
                                className="w-10 h-10 rounded-lg flex items-center justify-center border-2 border-[#49352B] shadow-comic-sm group-hover:border-[#20C9E8] transition-colors"
                                style={{ backgroundColor: item.accentColor }}
                              >
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <h3 className={`font-comic text-2xl xl:text-3xl tracking-wide multiverse-title ${isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'}`}>
                                {item.title}
                              </h3>
                            </div>
                            <p className={`font-sans text-sm leading-relaxed mb-4 ${isDark ? 'text-[#F5EBDD]/90' : 'text-[#5C4436]'}`}>
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.tools.map((tool) => (
                              <span
                                key={tool}
                                tabIndex={0}
                                onMouseEnter={() => sounds.playPop()}
                                className={`multiverse-glitch-chip font-mono text-[11px] font-semibold px-2 py-0.5 rounded border border-[#49352B] shadow-comic-sm hover:border-[#F42B70] transition-colors cursor-pointer select-none ${
                                  isDark ? 'bg-[#260D27]/80 text-[#F5EBDD]' : 'bg-[#FAF3E8] text-[#49352B]'
                                }`}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="w-full" />
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ================= MOBILE / TABLET VERTICAL TIMELINE (< lg) ================= */}
        <div className="block lg:hidden relative pl-4 sm:pl-8">
          
          {/* Vertical continuous line */}
          <div className="absolute top-0 bottom-0 left-8 sm:left-12 w-2 bg-[#49352B] rounded-full shadow-[2px_0px_0px_#F42B70]" />

          <div className="flex flex-col space-y-10 sm:space-y-12">
            {powersData.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.num} className="relative flex items-start gap-4 sm:gap-6">
                  
                  {/* Numbered Circle Node */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    onClick={() => sounds.playPunch()}
                    className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full shrink-0 flex items-center justify-center border-3 border-[#49352B] shadow-[3px_4px_0px_#1B0B1D] cursor-pointer group"
                    style={{ backgroundColor: item.accentColor }}
                    tabIndex={0}
                  >
                    <div className="absolute -inset-1 rounded-full border-2 border-[#20C9E8] opacity-0 group-hover:opacity-80 -translate-x-1 -translate-y-1 transition-all pointer-events-none" />
                    <div className="absolute -inset-1 rounded-full border-2 border-[#F42B70] opacity-0 group-hover:opacity-80 translate-x-1 translate-y-1 transition-all pointer-events-none" />

                    <span 
                      className="font-comic text-lg sm:text-xl font-bold tracking-tight select-none multiverse-title"
                      style={{ color: item.nodeTextColor }}
                    >
                      {item.num}
                    </span>
                  </motion.div>

                  {/* Information Box with Multiverse Glitch */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => sounds.playPop()}
                    className="relative flex-1 rounded-2xl border-3 border-[#49352B] shadow-[4px_5px_0px_#1B0B1D] p-5 sm:p-6 multiverse-glitch-item group"
                    style={{ backgroundColor: isDark ? item.bgColor : '#FFFDF8' }}
                    tabIndex={0}
                  >
                    {/* Multiverse Duplicate Echo Outlines */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-[#20C9E8] -translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-80 pointer-events-none transition-all" />
                    <div className="absolute inset-0 rounded-2xl border-2 border-[#F42B70] translate-x-1 translate-y-1 opacity-0 group-hover:opacity-80 pointer-events-none transition-all" />

                    <div className="flex items-center gap-2.5 mb-2">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center border-2 border-[#49352B]"
                        style={{ backgroundColor: item.accentColor }}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className={`font-comic text-xl sm:text-2xl tracking-wide multiverse-title ${isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'}`}>
                        {item.title}
                      </h3>
                    </div>

                    <p className={`font-sans text-xs sm:text-sm leading-relaxed mb-4 ${isDark ? 'text-[#F5EBDD]/90' : 'text-[#5C4436]'}`}>
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          tabIndex={0}
                          onMouseEnter={() => sounds.playPop()}
                          className={`multiverse-glitch-chip font-mono text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded border border-[#49352B] shadow-comic-sm hover:border-[#F42B70] transition-colors cursor-pointer select-none ${
                            isDark ? 'bg-[#260D27]/80 text-[#F5EBDD]' : 'bg-[#FAF3E8] text-[#49352B]'
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
