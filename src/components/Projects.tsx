'use client';

import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { projectsData, ProjectData } from '@/data/projectsData';
import FloatingProjectCard from './FloatingProjectCard';
import { sounds } from './AudioEffects';
import Constellations from './Constellations';
import { useTheme } from '@/context/ThemeContext';

// Individual Interactive Monochrome Gallery Card Component with Multiverse Glitch
function GalleryCard({
  project,
  isHovered,
  isAnyHovered,
  onHoverStart,
  onHoverEnd,
  onClick,
}: {
  project: ProjectData;
  isHovered: boolean;
  isAnyHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTilt({ x: rotateX, y: rotateY });
  }, [prefersReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    onHoverEnd();
  }, [onHoverEnd]);

  const isOtherHovered = isAnyHovered && !isHovered;

  return (
    <motion.div
      ref={cardRef}
      tabIndex={0}
      onMouseEnter={() => {
        sounds.playPop();
        onHoverStart();
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        sounds.playSwoosh();
        onClick();
      }}
      animate={{
        scale: isHovered ? 1.025 : isOtherHovered ? 0.98 : 1,
        opacity: isOtherHovered ? 0.85 : 1,
        rotateX: isHovered && !prefersReducedMotion ? tilt.x : 0,
        rotateY: isHovered && !prefersReducedMotion ? tilt.y : 0,
        zIndex: isHovered ? 20 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 24,
      }}
      style={{ perspective: 1000 }}
      className="relative flex flex-col h-[370px] xl:h-[385px] cursor-pointer group multiverse-glitch-item select-none"
    >
      {/* ============================================================ */}
      {/* MY POWERS MULTIVERSE GLITCH EFFECT (Dual Silhouettes & Glow) */}
      {/* ============================================================ */}
      {/* Cyan Duplicate Offset Silhouette */}
      <div 
        className="absolute inset-0 rounded-2xl border-2 border-[#20C9E8] pointer-events-none opacity-0 group-hover:opacity-85 group-focus-within:opacity-85 -translate-x-1.5 -translate-y-1 transition-all duration-200 z-0" 
      />

      {/* Pink Duplicate Offset Silhouette */}
      <div 
        className="absolute inset-0 rounded-2xl border-2 border-[#F42B70] pointer-events-none opacity-0 group-hover:opacity-85 group-focus-within:opacity-85 translate-x-1.5 translate-y-1 transition-all duration-200 z-0" 
      />

      {/* Spider-Verse Glow Halo on Hover */}
      <div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#20C9E8] via-[#6536D9] to-[#F42B70] opacity-0 blur-md transition-opacity duration-300 pointer-events-none -z-10 ${
          isHovered ? 'opacity-60' : ''
        }`}
      />

      {/* Main Card Body (Strictly Uniform Height & Width) */}
      <div
        className={`relative z-10 flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-200 shadow-md ${
          isHovered
            ? 'shadow-[0_12px_30px_-8px_rgba(244,43,112,0.35),0_0_20px_rgba(32,201,232,0.35)]'
            : ''
        }`}
        style={{
          backgroundColor: isDark ? '#1A0C1E' : '#FFFDF8',
          borderColor: isHovered
            ? '#F42B70'
            : isDark
            ? 'rgba(255, 255, 255, 0.12)'
            : 'rgba(73, 53, 43, 0.22)',
          color: isDark ? '#F5EBDD' : '#49352B',
        }}
      >
        {/* Subtle Halftone Pattern on Card */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#F42B70 1px, transparent 1px)',
            backgroundSize: '12px 12px',
          }}
        />

        {/* Card Header Strip */}
        <div 
          className="relative z-10 h-9 px-3.5 py-1.5 border-b flex items-center justify-between shrink-0"
          style={{
            backgroundColor: isDark ? '#220E27' : '#EFE4D6',
            borderColor: isDark ? '#2A0E23' : '#D4C3B2',
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className={`font-comic text-[11px] px-2 py-0.5 rounded font-bold transition-colors ${
                isHovered
                  ? 'bg-[#F42B70] text-white'
                  : isDark
                  ? 'bg-[#260D27]/80 text-[#F5EBDD]/70'
                  : 'bg-[#FAF3E8] text-[#49352B]'
              }`}
            >
              PANEL {project.number}
            </span>
            <span className="font-mono text-[10px] text-[#20C9E8] font-bold tracking-wider truncate max-w-[120px]">
              {project.category.split('//')[0]}
            </span>
          </div>

          <span
            className={`font-mono text-[9px] px-1.5 py-0.5 rounded border transition-colors ${
              isHovered
                ? project.badgeBg
                : isDark
                ? 'bg-[#260D27]/60 text-white/50 border-[#2A0E23]'
                : 'bg-[#FAF3E8] text-[#49352B]/70 border-[#D4C3B2]'
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Card Image Screenshot (Monochrome to Colour on hover) */}
        <div 
          className="relative w-full h-[142px] sm:h-[148px] shrink-0 overflow-hidden border-b"
          style={{
            backgroundColor: isDark ? '#260D27' : '#FAF3E8',
            borderColor: isDark ? '#2A0E23' : '#D4C3B2',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className={`w-full h-full object-cover transition-all duration-500 ease-out ${
              isHovered
                ? 'filter-none scale-105'
                : 'filter grayscale contrast-125 brightness-90 group-hover:scale-[1.02]'
            }`}
          />

          {/* Dark gradient overlay at bottom of image */}
          <div 
            className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-75"
            style={{
              backgroundImage: isDark
                ? 'linear-gradient(to top, #1A0C1E, transparent)'
                : 'linear-gradient(to top, rgba(255, 253, 248, 0.9), transparent)',
            }}
          />

          {/* Subtitle Badge on Image */}
          <div className="absolute bottom-1.5 left-2.5 right-2.5 flex items-center justify-between">
            <span 
              className="font-mono text-[10px] px-2 py-0.5 rounded backdrop-blur-sm border truncate font-semibold"
              style={{
                backgroundColor: isDark ? 'rgba(26, 12, 30, 0.85)' : 'rgba(255, 253, 248, 0.9)',
                color: isDark ? '#F5EBDD' : '#49352B',
                borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#D4C3B2',
              }}
            >
              {project.subtitle}
            </span>
          </div>

          {/* Hover Action Pill Overlay */}
          <div
            className={`absolute top-2 right-2 transition-all duration-300 transform ${
              isHovered
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-90 -translate-y-1 pointer-events-none'
            }`}
          >
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F42B70] text-white font-mono text-[9px] font-bold shadow-comic-sm">
              <Eye className="w-2.5 h-2.5" />
              <span>3D FLASHCARD</span>
            </div>
          </div>
        </div>

        {/* Card Information Panel (Strict Uniform Height & Spacing) */}
        <div className="relative z-10 p-3.5 flex-1 flex flex-col justify-between">
          <div>
            {/* Title with Multiverse Glitch chromatic text-shadow */}
            <div className="flex items-start justify-between gap-1 mb-1 h-[42px] overflow-hidden">
              <h3
                className={`font-comic text-base sm:text-lg tracking-wide leading-tight line-clamp-2 multiverse-title transition-colors ${
                  isHovered ? 'text-[#20C9E8]' : ''
                }`}
              >
                {project.title}
              </h3>
              <ArrowUpRight
                className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-transform ${
                  isHovered
                    ? 'text-[#20C9E8] translate-x-0.5 -translate-y-0.5'
                    : 'opacity-40'
                }`}
              />
            </div>

            {/* Short Introduction (Strictly 2 lines clamped) */}
            <p className="font-sans text-xs opacity-80 leading-relaxed line-clamp-2 h-[34px]">
              {project.shortDescription}
            </p>
          </div>

          <div className="pt-2 border-t" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#E9DDCE' }}>
            {/* Tech Chips */}
            <div className="flex flex-wrap gap-1 h-6 overflow-hidden">
              {project.toolsAndTechnologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[9px] font-semibold px-1.5 py-0.5 rounded border"
                  style={{
                    backgroundColor: isDark ? '#26122b' : '#FAF3E8',
                    color: isDark ? '#F5EBDD' : '#49352B',
                    borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#D4C3B2',
                  }}
                >
                  {tech}
                </span>
              ))}
              {project.toolsAndTechnologies.length > 3 && (
                <span className="font-mono text-[9px] text-[#F42B70] font-bold px-1 py-0.5">
                  +{project.toolsAndTechnologies.length - 3}
                </span>
              )}
            </div>

            {/* Click to Flip Prompt */}
            <div 
              className="mt-2 flex items-center justify-between text-[10px] font-mono opacity-60 group-hover:opacity-100 group-hover:text-[#20C9E8] transition-colors"
            >
              <span className="flex items-center gap-1 font-bold">
                <Sparkles className="w-2.5 h-2.5 text-[#F42B70]" />
                EXPLORE 3D FLASHCARD
              </span>
              <span className="font-bold">{project.number}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleNavigateProject = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === selectedProject.id);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0) nextIndex = projectsData.length - 1;
    if (nextIndex >= projectsData.length) nextIndex = 0;
    setSelectedProject(projectsData[nextIndex]);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor: isDark ? '#260D27' : '#E9DDCE',
        color: isDark ? '#F5EBDD' : '#49352B',
      }}
    >
      {/* Anchor for #developments alias */}
      <div id="developments" className="absolute -top-20 left-0" />

      {/* Spider-Verse Background Textures */}
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
      <Constellations variant="developments" />

      {/* Subtle radial ambient glows */}
      <div 
        className="absolute top-1/4 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: isDark ? '#6536D9' : '#F42B70' }}
      />
      <div 
        className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-15"
        style={{ backgroundColor: '#20C9E8' }}
      />

      {/* Top Banner & Header (Occupying Full Width with Comic Styling) */}
      <div className="w-full max-w-[1600px] mx-auto relative z-10 mb-8 sm:mb-10">
        
        {/* Top Comic Metadata Strip */}
        <div 
          className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b mb-6"
          style={{ borderColor: isDark ? '#49352B' : 'rgba(73, 53, 43, 0.25)' }}
        >
          <div className="flex items-center gap-3">
            <span className="font-comic text-xs tracking-wider px-3 py-1 bg-[#6536D9] text-white rounded border border-white/20 shadow-comic-sm">
              ISSUE 03 // ARCHITECTURE &amp; RESEARCH
            </span>
            <span className="font-mono text-xs text-[#20C9E8] font-bold uppercase tracking-wider hidden sm:inline">
              THE RESHHH-VERSE DEVELOPMENTS
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs opacity-75">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F42B70] animate-pulse" />
              8 PRODUCTION &amp; RESEARCH WORKS
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline text-[#20C9E8]">
              MONOCHROME GALLERY // HOVER TO ENERGIZE
            </span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-comic text-5xl sm:text-7xl lg:text-8xl tracking-wide leading-none">
              DEVELOPMENTS
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#F42B70] tracking-widest mt-2 uppercase font-bold">
              // INTERACTIVE MONOCHROME ARCHIVE • 3D RESEARCH FLASHCARDS
            </p>
          </div>

          <p className="font-sans text-xs sm:text-sm opacity-80 max-w-lg leading-relaxed">
            Hover over any project panel to activate its full-spectrum palette and multiverse glitch. 
            Click to expand a centered floating 3D flashcard, and flip to inspect the verified technical architecture.
          </p>
        </div>
      </div>

      {/* FULL-WIDTH UNIFORM GRID (4 COLUMNS × 2 ROWS ON DESKTOP, 2 ON TABLET, 1 ON MOBILE) */}
      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6 items-stretch">
          {projectsData.map((project) => (
            <GalleryCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              isAnyHovered={hoveredId !== null}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Floating 3D Project Flashcard (Centered in Viewport) */}
      <AnimatePresence>
        {selectedProject && (
          <FloatingProjectCard
            project={selectedProject}
            allProjects={projectsData}
            onClose={() => setSelectedProject(null)}
            onNavigate={handleNavigateProject}
          />
        )}
      </AnimatePresence>

    </section>
  );
}
