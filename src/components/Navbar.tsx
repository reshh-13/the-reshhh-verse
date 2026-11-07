'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Sparkles, Terminal, Moon, Sun } from 'lucide-react';
import { sounds } from './AudioEffects';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [soundActive, setSoundActive] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [helloOpen, setHelloOpen] = useState<boolean>(false);
  const helloTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setSoundActive(sounds.isEnabled());
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = sounds.toggleSound();
    setSoundActive(newState);
  };

  const handleHelloClick = () => {
    sounds.playHello();
    setHelloOpen((prev) => !prev);

    if (helloTimeoutRef.current) {
      clearTimeout(helloTimeoutRef.current);
    }
    helloTimeoutRef.current = setTimeout(() => {
      setHelloOpen(false);
    }, 4500);
  };

  const navLinks = [
    { name: 'ABOUT', href: '#about', badge: '01' },
    { name: 'POWERS', href: '#skills', badge: '02' },
    { name: 'TOOLKIT', href: '#toolkit', badge: '03' },
    { name: 'DEVELOPMENTS', href: '#projects', badge: '04' },
    { name: 'DESIGN', href: '#design', badge: '05' },
    { name: 'TIMELINE', href: '#timeline', badge: '06' },
    { name: 'TRANSMIT', href: '#contact', badge: '07' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 backdrop-blur-md shadow-md border-b'
          : 'py-3.5 backdrop-blur-[2px]'
      }`}
      style={{
        backgroundColor:
          theme === 'dark'
            ? scrolled
              ? 'rgba(38, 13, 39, 0.95)'
              : 'rgba(38, 13, 39, 0.7)'
            : scrolled
            ? 'rgba(245, 235, 221, 0.96)'
            : 'rgba(245, 235, 221, 0.8)',
        borderColor:
          theme === 'dark'
            ? 'rgba(73, 53, 43, 0.6)'
            : 'rgba(73, 53, 43, 0.25)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* ======================================================== */}
          {/* LEFT / CENTER: DESKTOP NAVIGATION                        */}
          {/* ======================================================== */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => sounds.playPop()}
                className={`group relative px-2.5 lg:px-3 py-1 font-mono text-xs lg:text-sm font-bold tracking-wider transition-colors ${
                  theme === 'dark' ? 'text-[#F5EBDD] hover:text-[#F42B70]' : 'text-[#49352B] hover:text-[#F42B70]'
                }`}
              >
                <span className="text-[10px] text-[#6536D9] group-hover:text-[#F42B70] font-mono block -mb-1 opacity-80 group-hover:opacity-100 font-black transition-colors">
                  {link.badge}
                </span>
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#F42B70] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* Mobile brand pill when drawer is closed */}
          <div className="md:hidden flex items-center">
            <span
              className="font-comic text-sm tracking-wide px-2.5 py-1 rounded border shadow-comic-sm"
              style={{
                backgroundColor: theme === 'dark' ? '#32102F' : '#FFFDF8',
                color: theme === 'dark' ? '#F5EBDD' : '#49352B',
                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(73,53,43,0.2)',
              }}
            >
              RESHMA // MULTIVERSE
            </span>
          </div>

          {/* ======================================================== */}
          {/* FAR RIGHT: THEME TOGGLE + SFX MUTE + HELLO! ELEMENT      */}
          {/* ======================================================== */}
          <div className="flex items-center gap-2 sm:gap-2.5 relative">
            
            {/* Theme Toggle Button (Light/Dark Mode) */}
            <button
              type="button"
              onClick={() => {
                sounds.playPop();
                toggleTheme();
              }}
              title={theme === 'dark' ? 'Switch to Light Mode (Daylight Universe)' : 'Switch to Dark Mode (Midnight Multiverse)'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all text-xs font-mono font-bold cursor-pointer"
              style={{
                backgroundColor: theme === 'dark' ? '#32102F' : '#FFFDF8',
                color: theme === 'dark' ? '#F5EBDD' : '#49352B',
                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(73,53,43,0.3)',
              }}
            >
              {theme === 'dark' ? (
                <>
                  <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#20C9E8]" />
                  <span className="hidden sm:inline">DARK</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD600]" />
                  <span className="hidden sm:inline">LIGHT</span>
                </>
              )}
            </button>

            {/* Audio Toggle Button (Sound Control) */}
            <button
              type="button"
              onClick={handleSoundToggle}
              title={soundActive ? 'Mute comic sound effects' : 'Enable comic sound effects'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all text-xs font-mono font-bold cursor-pointer"
              style={{
                backgroundColor: theme === 'dark' ? '#32102F' : '#FFFDF8',
                color: theme === 'dark' ? '#F5EBDD' : '#49352B',
                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(73,53,43,0.3)',
              }}
            >
              {soundActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F42B70] animate-pulse" />
                  <span className="hidden sm:inline">SFX: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-60" />
                  <span className="hidden sm:inline opacity-60">SFX: OFF</span>
                </>
              )}
            </button>

            {/* ====================================================== */}
            {/* INTERACTIVE COMIC HELLO! ELEMENT                       */}
            {/* ====================================================== */}
            <div className="relative">
              <motion.button
                type="button"
                onClick={handleHelloClick}
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95, rotate: 2 }}
                className="relative group flex items-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border-2 border-white/20 bg-gradient-to-r from-[#F42B70] via-[#6536D9] to-[#20C9E8] text-white shadow-comic-sm cursor-pointer select-none transition-shadow hover:shadow-[0_0_15px_rgba(244,43,112,0.6)]"
                title="Click to say Hello!"
              >
                {/* Left Animated Accent Sparks */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD600] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD600]" />
                </span>

                {/* Comic Lettering */}
                <span className="font-comic text-xs sm:text-sm tracking-wider font-bold drop-shadow-[1px_1px_0px_#260D27]">
                  HELLO!
                </span>

                {/* Friendly Comic Waving Icon */}
                <span className="text-xs sm:text-sm transform group-hover:rotate-12 transition-transform inline-block">
                  👋
                </span>

                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#F42B70] to-[#6536D9] opacity-0 group-hover:opacity-40 blur-sm transition-opacity pointer-events-none -z-10" />
              </motion.button>

              {/* Animated Comic Speech Bubble Popover */}
              <AnimatePresence>
                {helloOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6, y: -8, rotate: -3 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.7, y: -8 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                    className="absolute top-full right-0 mt-3 z-50 w-64 sm:w-72 p-4 bg-[#32102F] text-[#F5EBDD] rounded-2xl border-2 border-[#F42B70] shadow-[0_10px_35px_rgba(38,13,39,0.9),0_0_20px_rgba(244,43,112,0.35)]"
                  >
                    {/* Speech Bubble Pointer Tail */}
                    <div className="absolute -top-[10px] right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-[#F42B70]" />
                    <div className="absolute -top-[7px] right-6 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[8px] border-b-[#32102F]" />

                    {/* Popover Content */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F42B70] to-[#6536D9] text-white flex items-center justify-center font-comic text-base shrink-0 border border-white/20 shadow-comic-sm">
                        ✨
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-comic text-xs tracking-wider text-[#FFD600]">
                            RESHMA GREETS YOU:
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setHelloOpen(false);
                            }}
                            className="text-xs text-[#D8C1A6]/60 hover:text-white font-bold p-0.5"
                            title="Close"
                          >
                            ✕
                          </button>
                        </div>
                        <p className="font-sans text-xs font-semibold text-[#F5EBDD] mt-1 leading-snug">
                          &ldquo;HELLO! Welcome to The Reshhh-Verse! Glad you crossed dimensions to check out my work!&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Dialogue footer */}
                    <div className="mt-2.5 pt-2 border-t border-dashed border-white/15 flex items-center justify-between text-[10px] font-mono font-bold text-[#D8C1A6]/60">
                      <span className="text-[#20C9E8]">DIMENSION REC // ACTIVE</span>
                      <span className="text-[#F42B70]">★ TAP TO DISMISS</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => {
                sounds.playPop();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-1.5 sm:p-2 border rounded-lg shadow-sm focus:outline-none transition-colors"
              style={{
                backgroundColor: theme === 'dark' ? '#32102F' : '#FFFDF8',
                color: theme === 'dark' ? '#F5EBDD' : '#49352B',
                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(73,53,43,0.3)',
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden border-b-4 border-[#F42B70] border-2 shadow-xl px-6 py-6 mt-2 mx-4 rounded-xl animate-in fade-in slide-in-from-top-4 duration-200"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(50, 16, 47, 0.98)' : 'rgba(255, 253, 248, 0.98)',
            borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(73, 53, 43, 0.25)',
          }}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(73,53,43,0.15)' }}>
              <span className="font-comic text-lg text-[#F42B70]">DIRECTORY // NAVIGATION</span>
              <span className="font-mono text-xs bg-[#6536D9] text-white px-2 py-0.5 rounded font-bold">
                2026 EDITION
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  sounds.playPop();
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between py-2 px-3 rounded hover:bg-black/5 dark:hover:bg-white/5 font-mono text-sm font-bold border-l-4 border-[#F42B70] transition-colors ${
                  theme === 'dark' ? 'text-[#F5EBDD]' : 'text-[#49352B]'
                }`}
              >
                <span>{link.name}</span>
                <span 
                  className="text-xs font-mono px-2 py-0.5 rounded border"
                  style={{
                    backgroundColor: theme === 'dark' ? '#260D27' : '#EFE4D6',
                    color: theme === 'dark' ? '#20C9E8' : '#6536D9',
                    borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(73,53,43,0.2)',
                  }}
                >
                  {link.badge}
                </span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => {
                  sounds.playSwoosh();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#F42B70] to-[#6536D9] text-white font-comic text-lg py-2.5 rounded-lg border border-white/20 shadow-md"
              >
                <Terminal className="w-4 h-4" />
                ENTER THE RESHHH-VERSE
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
