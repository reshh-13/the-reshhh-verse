'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  X, 
  RotateCw, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Cpu, 
  CheckCircle2, 
  Terminal, 
  UserCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ProjectData } from '@/data/projectsData';
import { sounds } from './AudioEffects';
import { useTheme } from '@/context/ThemeContext';

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

interface FloatingProjectCardProps {
  project: ProjectData | null;
  allProjects: ProjectData[];
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export default function FloatingProjectCard({
  project,
  allProjects,
  onClose,
  onNavigate,
}: FloatingProjectCardProps) {
  const { theme } = useTheme();
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number>(0);
  const dragStartY = useRef<number>(0);
  const prefersReducedMotion = useReducedMotion();

  const isDark = theme === 'dark';

  // Reset flip whenever project changes
  useEffect(() => {
    setIsFlipped(false);
    setTilt({ x: 0, y: 0 });
  }, [project?.id]);

  // Handle ESC key and arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sounds.playPop();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        sounds.playPop();
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        sounds.playPop();
        onNavigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  // Lock background scrolling while open
  useEffect(() => {
    if (project) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [project]);

  // 3D perspective mouse tilt (desktop)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Subtle tilt range (-3 to 3 degrees)
    const tiltX = ((y - centerY) / centerY) * -3;
    const tiltY = ((x - centerX) / centerX) * 3;
    setTilt({ x: tiltX, y: tiltY });
  }, [prefersReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const handleFlip = useCallback(() => {
    sounds.playSwoosh();
    setIsFlipped((prev) => !prev);
  }, []);

  // Touch Swipe gesture detection (mobile friendly)
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - dragStartX.current;
    const deltaY = e.changedTouches[0].clientY - dragStartY.current;

    // Flip if horizontal swipe exceeds threshold
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      handleFlip();
    }
  };

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const totalCount = allProjects.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden">
      
      {/* 1. Backdrop Gallery Dimmer & Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 backdrop-blur-md cursor-pointer transition-colors"
        style={{
          backgroundColor: isDark ? 'rgba(8, 15, 43, 0.92)' : 'rgba(73, 53, 43, 0.55)',
        }}
        aria-label="Close project modal background"
      />

      {/* 2. Top Quick Bar Controls (Prev / Project Counter / Next / Close) */}
      <div className="absolute top-3 sm:top-5 left-3 sm:left-6 right-3 sm:right-6 z-50 flex items-center justify-between pointer-events-none">
        
        {/* Navigation buttons */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => {
              sounds.playPop();
              onNavigate('prev');
            }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border font-mono text-xs font-bold transition-all shadow-comic-sm hover:scale-105 cursor-pointer"
            style={{
              backgroundColor: isDark ? '#111A3A' : '#FFFDF8',
              color: isDark ? '#F5EBDD' : '#49352B',
              borderColor: isDark ? '#1D2B53' : '#D4C3B2',
            }}
            title="Previous project (Left arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">PREV</span>
          </button>

          <span 
            className="font-mono text-xs px-2.5 py-1 rounded border font-bold"
            style={{
              backgroundColor: isDark ? 'rgba(8, 15, 43, 0.85)' : 'rgba(239, 228, 214, 0.95)',
              color: isDark ? '#F5EBDD' : '#49352B',
              borderColor: isDark ? '#1D2B53' : '#D4C3B2',
            }}
          >
            {currentIndex + 1} / {totalCount}
          </span>

          <button
            onClick={() => {
              sounds.playPop();
              onNavigate('next');
            }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border font-mono text-xs font-bold transition-all shadow-comic-sm hover:scale-105 cursor-pointer"
            style={{
              backgroundColor: isDark ? '#111A3A' : '#FFFDF8',
              color: isDark ? '#F5EBDD' : '#49352B',
              borderColor: isDark ? '#1D2B53' : '#D4C3B2',
            }}
            title="Next project (Right arrow)"
          >
            <span className="hidden sm:inline">NEXT</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playPop();
            onClose();
          }}
          className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-xs font-bold transition-all shadow-comic-sm hover:scale-105 cursor-pointer"
          style={{
            backgroundColor: isDark ? '#111A3A' : '#FFFDF8',
            color: isDark ? '#F5EBDD' : '#49352B',
            borderColor: isDark ? '#1D2B53' : '#D4C3B2',
          }}
          aria-label="Close project flashcard (Escape)"
        >
          <X className="w-4 h-4" />
          <span className="hidden sm:inline">ESC</span>
        </button>
      </div>

      {/* 3. 3D Flashcard Perspective Container */}
      {/* Container maintains perspective (1600px) with NO overflow:hidden so 3D children participate properly */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, scale: 0.9, y: 25 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          rotateX: prefersReducedMotion ? 0 : tilt.x,
          rotateY: prefersReducedMotion ? 0 : tilt.y,
        }}
        exit={{ opacity: 0, scale: 0.9, y: 25 }}
        transition={{ type: 'spring', stiffness: 280, damping: 25 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ perspective: 1600 }}
        className="relative z-10 w-full max-w-3xl sm:max-w-4xl h-[620px] max-h-[86vh] flex flex-col items-center justify-center pointer-events-auto my-auto"
      >
        {/* Multiverse Glitch Offset Silhouettes (Outside the 3D flipper to prevent transform conflicts) */}
        <div 
          className="absolute inset-0 rounded-2xl border-2 border-[#20C9E8] pointer-events-none opacity-40 -translate-x-1.5 -translate-y-1 transition-opacity" 
        />
        <div 
          className="absolute inset-0 rounded-2xl border-2 border-[#F42B70] pointer-events-none opacity-40 translate-x-1.5 translate-y-1 transition-opacity" 
        />

        {/* Dimensional Glow Frame */}
        <div 
          className="relative w-full h-full rounded-2xl p-[2px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(32,201,232,0.3)] transition-colors"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #F42B70, #6536D9, #20C9E8)'
              : 'linear-gradient(135deg, #F42B70, #3B5BDB, #168FA8)',
          }}
        >
          {/* Card 3D Rotating Wrapper */}
          {/* IMPORTANT: NO overflow:hidden here! transform-style: preserve-3d ensures backface is not flattened or mirrored */}
          <div
            className="relative w-full h-full rounded-[14px]"
            style={{ 
              transformStyle: 'preserve-3d',
              WebkitTransformStyle: 'preserve-3d',
              transition: prefersReducedMotion ? 'none' : 'transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >

            {/* ============================================================== */}
            {/* FRONT FACE (rotateY: 0deg)                                     */}
            {/* ============================================================== */}
            <div
              className={`absolute inset-0 w-full h-full flex flex-col justify-between p-5 sm:p-7 rounded-[14px] overflow-hidden select-none transition-colors ${
                isFlipped ? 'pointer-events-none' : 'pointer-events-auto'
              }`}
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(0deg)',
                backgroundColor: isDark ? '#1C0A1F' : '#FFFDF8',
                color: isDark ? '#F5EBDD' : '#49352B',
              }}
            >
              {/* Halftone Texture Overlay */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ 
                  backgroundImage: 'radial-gradient(#F42B70 1.5px, transparent 1.5px)', 
                  backgroundSize: '16px 16px' 
                }} 
              />

              {/* Front Top Strip */}
              <div 
                className="relative z-10 flex items-center justify-between pb-3 border-b-2"
                style={{ borderColor: isDark ? '#2A0E23' : '#E9DDCE' }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-comic text-xl sm:text-2xl px-2.5 py-0.5 bg-[#F42B70] text-white rounded shadow-comic-sm font-bold">
                    {project.number}
                  </span>
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#20C9E8] uppercase block">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] opacity-75 hidden sm:inline">
                      {project.subtitle}
                    </span>
                  </div>
                </div>

                <span 
                  className="font-mono text-[11px] font-bold px-2.5 py-1 rounded border shadow-sm"
                  style={{
                    backgroundColor: isDark ? '#200B25' : '#EFE4D6',
                    color: isDark ? '#20C9E8' : '#3B5BDB',
                    borderColor: isDark ? 'rgba(32, 201, 232, 0.4)' : '#D4C3B2',
                  }}
                >
                  {project.status}
                </span>
              </div>

              {/* Front Image Container */}
              <div 
                onClick={handleFlip}
                className="relative z-10 my-3 rounded-xl overflow-hidden border-2 shadow-inner group/preview cursor-pointer"
                style={{
                  backgroundColor: isDark ? '#140816' : '#FAF3E8',
                  borderColor: isDark ? '#2A0E23' : '#D4C3B2',
                }}
              >
                <div className="relative aspect-[16/9] w-full max-h-[300px] overflow-hidden flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.title} live interface preview`}
                    className="w-full h-full object-cover group-hover/preview:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Hover Prompt */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="font-comic text-lg text-white bg-[#F42B70] px-4 py-2 rounded-lg border-2 border-white shadow-comic flex items-center gap-2 animate-bounce font-bold">
                      <RotateCw className="w-5 h-5" />
                      CLICK OR SWIPE TO FLIP CARD
                    </span>
                  </div>
                </div>

                <div 
                  className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-lg border backdrop-blur-md flex items-center justify-between"
                  style={{
                    backgroundColor: isDark ? 'rgba(20, 8, 22, 0.9)' : 'rgba(255, 253, 248, 0.9)',
                    borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#D4C3B2',
                  }}
                >
                  <span className="font-mono text-xs text-[#20C9E8] truncate font-bold">
                    &ldquo;{project.subtitle}&rdquo;
                  </span>
                  <span className="font-mono text-[10px] opacity-75 hidden sm:inline">
                    TAP ANYWHERE TO VIEW PROJECT DOSSIER
                  </span>
                </div>
              </div>

              {/* Front Bottom Info & SWIPE TO EXPLORE Button */}
              <div className="relative z-10 pt-2 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-xl">
                  <h3 className="font-comic text-2xl sm:text-4xl tracking-wide leading-none">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm opacity-85 leading-relaxed mt-2 line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                <button
                  onClick={handleFlip}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F42B70] to-[#6536D9] text-white font-comic text-base tracking-wide border-2 border-white/30 shadow-comic hover:scale-105 active:scale-95 transition-all cursor-pointer font-bold shrink-0 self-end sm:self-auto"
                >
                  <RotateCw className="w-4 h-4 animate-spin text-white" style={{ animationDuration: '6s' }} />
                  <span>SWIPE TO EXPLORE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* ============================================================== */}
            {/* BACK FACE (rotateY: 180deg)                                    */}
            {/* PLAIN, CLEAN, TEXT-BASED INFORMATION PANEL (THIRD SCREENSHOT)  */}
            {/* No oversized image, no cluttered nested cards, 100% upright    */}
            {/* ============================================================== */}
            <div
              className={`absolute inset-0 w-full h-full flex flex-col p-5 sm:p-7 rounded-[14px] overflow-hidden transition-colors ${
                isFlipped ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                backgroundColor: isDark ? '#1C0A1F' : '#FFFDF8',
                color: isDark ? '#F5EBDD' : '#49352B',
              }}
            >
              {/* Back Top Header Bar */}
              <div 
                className="relative z-10 pb-3 mb-3 border-b-2 flex items-start justify-between gap-4 shrink-0"
                style={{ borderColor: isDark ? '#2A0E23' : '#E9DDCE' }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-comic text-xs px-2.5 py-0.5 bg-[#6536D9] text-white rounded font-bold">
                      PANEL {project.number}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#20C9E8] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="font-comic text-2xl sm:text-3xl tracking-wide leading-tight">
                    {project.title}
                  </h2>
                  <p className="font-mono text-xs opacity-75 mt-0.5">
                    {project.subtitle} • PROJECT DOSSIER
                  </p>
                </div>

                <button
                  onClick={handleFlip}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-xs font-bold transition-all shadow-sm shrink-0 cursor-pointer"
                  style={{
                    backgroundColor: isDark ? '#26122b' : '#EFE4D6',
                    color: isDark ? '#F5EBDD' : '#49352B',
                    borderColor: isDark ? 'rgba(255,255,255,0.15)' : '#D4C3B2',
                  }}
                  title="Flip back to front preview"
                >
                  <RotateCw className="w-3.5 h-3.5 text-[#20C9E8]" />
                  <span>FLIP TO FRONT</span>
                </button>
              </div>

              {/* Scrollable Clean Plain Information Panel */}
              {/* Clean text hierarchy: Project Description, Tools & Tech, Key Features, Contribution */}
              <div className="relative z-10 flex-1 overflow-y-auto pr-1 sm:pr-2 space-y-4 custom-scrollbar text-sm">
                
                {/* 1. PROJECT DESCRIPTION */}
                <div className="space-y-1.5">
                  <h3 className="font-comic text-base tracking-wide text-[#20C9E8] flex items-center gap-1.5 uppercase">
                    <Terminal className="w-4 h-4 text-[#20C9E8]" />
                    <span>PROJECT DESCRIPTION</span>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm leading-relaxed opacity-90">
                    {project.overview}
                  </p>
                </div>

                {/* 2. TOOLS & TECHNOLOGIES */}
                <div className="space-y-2">
                  <h3 className="font-comic text-base tracking-wide text-[#20C9E8] flex items-center gap-1.5 uppercase">
                    <Cpu className="w-4 h-4 text-[#20C9E8]" />
                    <span>TOOLS &amp; TECHNOLOGIES</span>
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.toolsAndTechnologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded border shadow-sm"
                        style={{
                          backgroundColor: isDark ? '#140816' : '#FAF3E8',
                          color: isDark ? '#F5EBDD' : '#49352B',
                          borderColor: isDark ? 'rgba(255,255,255,0.12)' : '#D4C3B2',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. KEY FEATURES */}
                <div className="space-y-2">
                  <h3 className="font-comic text-base tracking-wide text-[#6536D9] flex items-center gap-1.5 uppercase">
                    <CheckCircle2 className="w-4 h-4 text-[#20C9E8]" />
                    <span style={{ color: isDark ? '#F5EBDD' : '#49352B' }}>KEY FEATURES</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.keyFeatures.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-[13px] font-sans leading-snug p-2.5 rounded-lg border"
                        style={{
                          backgroundColor: isDark ? 'rgba(20, 8, 22, 0.6)' : 'rgba(239, 228, 214, 0.6)',
                          borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#D4C3B2',
                          color: isDark ? '#F5EBDD' : '#49352B',
                        }}
                      >
                        <span className="text-[#20C9E8] font-comic text-base leading-none mt-[-1px]">★</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. MY CONTRIBUTION */}
                {project.contribution && (
                  <div className="space-y-1.5">
                    <h3 className="font-comic text-base tracking-wide text-[#F42B70] flex items-center gap-1.5 uppercase">
                      <UserCheck className="w-4 h-4 text-[#F42B70]" />
                      <span>MY CONTRIBUTION</span>
                    </h3>
                    <p className="font-sans text-xs sm:text-sm leading-relaxed opacity-90">
                      {project.contribution}
                    </p>
                  </div>
                )}

              </div>

              {/* Back Footer Links & Close */}
              <div 
                className="relative z-10 pt-3 mt-3 border-t-2 flex flex-wrap items-center justify-between gap-3 shrink-0"
                style={{ borderColor: isDark ? '#2A0E23' : '#E9DDCE' }}
              >
                <div className="flex items-center gap-2.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sounds.playPop()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-xs font-bold transition-all shadow-sm hover:scale-105"
                      style={{
                        backgroundColor: isDark ? '#200B25' : '#EFE4D6',
                        color: isDark ? '#F5EBDD' : '#49352B',
                        borderColor: isDark ? 'rgba(255,255,255,0.15)' : '#D4C3B2',
                      }}
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                      <span>GITHUB REPO</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sounds.playPop()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F42B70] hover:bg-[#e02464] text-white font-mono text-xs font-bold transition-all shadow-sm hover:scale-105"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>LIVE DEMO</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => {
                    sounds.playPunch();
                    onClose();
                  }}
                  className="px-4 py-1.5 rounded-lg bg-[#6536D9] hover:bg-[#5229be] text-white font-comic text-sm tracking-wide border border-white/20 shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  CLOSE FLASHCARD
                </button>
              </div>

            </div>

          </div>
        </div>

      </motion.div>

    </div>
  );
}
