'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles, CheckCircle2, Bookmark, RotateCcw } from 'lucide-react';
import { sounds } from './AudioEffects';
import Constellations from './Constellations';
import { useTheme } from '@/context/ThemeContext';

interface ClueData {
  id: string; // '1' - '6'
  number: string; // '01' - '06'
  direction: 'DOWN' | 'ACROSS';
  word: string;
  startPos: [number, number]; // [row, col]
  length: number;
  items: string[];
  emptyNote?: string;
}

const clues: ClueData[] = [
  // --- DOWN CLUES ---
  {
    id: '1',
    number: '01',
    direction: 'DOWN',
    word: 'HACKATHONS',
    startPos: [0, 1],
    length: 10,
    items: [
      'GDG Hackathon',
      'Power BI Event',
      'UI Building',
      'Poster Designing',
    ],
  },
  {
    id: '2',
    number: '02',
    direction: 'DOWN',
    word: 'ACHIEVEMENTS',
    startPos: [0, 3],
    length: 12,
    items: [
      'RPA Design and Development v4.0 – UiPath Academic Alliance (May 2026)',
      'NPTEL – Design and Implementation of Human Computer Interface',
      'Cyber Security Online Internship',
    ],
  },
  {
    id: '3',
    number: '03',
    direction: 'DOWN',
    word: 'LEADERSHIP',
    startPos: [0, 8],
    length: 10,
    items: [
      'Treasurer of Designix Club, Rajalakshmi Engineering College',
    ],
  },

  // --- ACROSS CLUES ---
  {
    id: '4',
    number: '04',
    direction: 'ACROSS',
    word: 'INTERNSHIP',
    startPos: [8, 0],
    length: 10,
    items: [
      '30-day Internship at Titan Company Limited',
      'Full Stack Development Internship at Internezy',
      'Cyber Security Global Virtual Internship at Clifford Chance',
    ],
  },
  {
    id: '5',
    number: '05',
    direction: 'ACROSS',
    word: 'EVENTS',
    startPos: [6, 3],
    length: 6,
    items: [
      'Power BI Event',
      'UI Building',
      'Poster Designing',
    ],
  },
  {
    id: '6',
    number: '06',
    direction: 'ACROSS',
    word: 'CLUBS',
    startPos: [0, 7],
    length: 5,
    items: [],
    emptyNote: 'Reserved for upcoming student clubs and societies. Slot actively preserved.',
  },
];

interface CellInfo {
  char: string;
  clueIds: string[];
  number?: string;
}

// Build the 12x12 crossword grid map
const buildGridMap = () => {
  const map = new Map<string, CellInfo>();

  for (const clue of clues) {
    const [startR, startC] = clue.startPos;
    for (let i = 0; i < clue.length; i++) {
      const r = clue.direction === 'DOWN' ? startR + i : startR;
      const c = clue.direction === 'ACROSS' ? startC + i : startC;
      const key = `${r},${c}`;
      const char = clue.word[i];

      const existing = map.get(key);
      if (existing) {
        if (!existing.clueIds.includes(clue.id)) {
          existing.clueIds.push(clue.id);
        }
        if (i === 0) {
          existing.number = clue.number;
        }
      } else {
        map.set(key, {
          char,
          clueIds: [clue.id],
          number: i === 0 ? clue.number : undefined,
        });
      }
    }
  }

  return map;
};

const gridMap = buildGridMap();
const GRID_ROWS = 12;
const GRID_COLS = 12;

// Standardized Clue Entry Component
function ClueCard({
  clue,
  isSelected,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  clue: ClueData;
  isSelected: boolean;
  isHovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isDown = clue.direction === 'DOWN';
  const isEmpty = clue.items.length === 0;

  // Selected accent styling
  let containerStyle = isDark 
    ? 'bg-[#3B1939] border-white/10 hover:border-white/20 hover:bg-[#431D41]' 
    : 'bg-[#FFFDF8] border-[#49352B]/20 shadow-sm hover:border-[#49352B]/40 hover:bg-[#FAF3E8]';

  if (isSelected) {
    containerStyle = isDown
      ? isDark
        ? 'bg-[#4A173A] border-2 border-[#F42B70] shadow-[0_0_15px_rgba(244,43,112,0.35)] -translate-y-0.5'
        : 'bg-[#FFF0F5] border-2 border-[#F42B70] shadow-[0_0_15px_rgba(244,43,112,0.25)] -translate-y-0.5'
      : isDark
        ? 'bg-[#3A184D] border-2 border-[#6536D9] shadow-[0_0_15px_rgba(101,54,217,0.35)] -translate-y-0.5'
        : 'bg-[#F3EFFE] border-2 border-[#6536D9] shadow-[0_0_15px_rgba(101,54,217,0.25)] -translate-y-0.5';
  } else if (isHovered) {
    containerStyle = isDown
      ? isDark ? 'bg-[#4A173A]/80 border-[#F42B70]/50' : 'bg-[#FFF0F5] border-[#F42B70]/50'
      : isDark ? 'bg-[#3A184D]/80 border-[#6536D9]/50' : 'bg-[#F3EFFE] border-[#6536D9]/50';
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative p-2.5 sm:p-3 rounded-xl border transition-all duration-150 cursor-pointer select-none flex flex-col justify-between ${containerStyle}`}
    >
      {/* Standardized Header */}
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span
            className={`font-comic text-xs px-2 py-0.5 rounded border leading-none font-bold transition-colors ${
              isSelected
                ? isDown
                  ? 'bg-[#F42B70] text-white border-[#F42B70]'
                  : 'bg-[#6536D9] text-white border-[#6536D9]'
                : isDark
                  ? 'bg-[#260D27] text-[#F5EBDD] border-white/10'
                  : 'bg-[#EFE4D6] text-[#49352B] border-[#49352B]/20'
            }`}
          >
            {clue.number}
          </span>
          <h4
            className={`font-comic text-sm xl:text-base tracking-wide transition-colors ${
              isSelected
                ? isDown
                  ? 'text-[#F42B70]'
                  : isDark ? 'text-[#20C9E8]' : 'text-[#6536D9]'
                : isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'
            }`}
          >
            {clue.word}
          </h4>
        </div>

        <div className="flex items-center gap-1.5">
          {isSelected && (
            <span
              className={`hidden sm:inline-flex items-center gap-1 font-mono text-[9px] font-bold ${
                isDown ? 'text-[#F42B70]' : isDark ? 'text-[#20C9E8]' : 'text-[#6536D9]'
              }`}
            >
              <CheckCircle2 className="w-3 h-3" />
              ACTIVE
            </span>
          )}
          <span className={`font-mono text-[10px] font-bold uppercase ${
            isDark ? 'text-[#D8C1A6]' : 'text-[#7B6658]'
          }`}>
            {clue.length} LETTERS
          </span>
        </div>
      </div>

      {/* Standardized Body Items */}
      {!isEmpty ? (
        <ul className="space-y-1 pl-0.5">
          {clue.items.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-start gap-1.5 text-xs leading-snug ${
                isDark ? 'text-[#D8C1A6]' : 'text-[#5C4436]'
              }`}
            >
              <span
                className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                  isSelected
                    ? isDown
                      ? 'bg-[#F42B70]'
                      : isDark ? 'bg-[#20C9E8]' : 'bg-[#6536D9]'
                    : isDark ? 'bg-[#D8C1A6]/50' : 'bg-[#7B6658]/50'
                }`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="pl-0.5">
          <p className={`font-mono text-xs italic flex items-center gap-1.5 leading-snug ${
            isDark ? 'text-[#D8C1A6]/80' : 'text-[#7B6658]'
          }`}>
            <Bookmark className="w-3.5 h-3.5 text-[#20C9E8]/70 shrink-0" />
            <span>{clue.emptyNote}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default function Timeline() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [selectedClueId, setSelectedClueId] = useState<string | null>(null);
  const [hoveredClueId, setHoveredClueId] = useState<string | null>(null);

  const activeClue = clues.find((c) => c.id === selectedClueId) || null;

  const handleClueClick = (id: string) => {
    sounds.playPop();
    setSelectedClueId((prev) => (prev === id ? null : id));
  };

  const handleCellClick = (cell: CellInfo) => {
    sounds.playPop();
    if (!cell.clueIds.length) return;

    if (selectedClueId && cell.clueIds.includes(selectedClueId)) {
      if (cell.clueIds.length > 1) {
        const nextClue = cell.clueIds.find((id) => id !== selectedClueId);
        if (nextClue) {
          setSelectedClueId(nextClue);
          return;
        }
      }
      setSelectedClueId(null);
    } else {
      setSelectedClueId(cell.clueIds[0]);
    }
  };

  const downClues = clues.filter((c) => c.direction === 'DOWN');
  const acrossClues = clues.filter((c) => c.direction === 'ACROSS');

  return (
    <section
      id="timeline"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen pt-20 pb-8 lg:pt-16 lg:pb-3 px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col justify-between overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#260D27' : '#F5EBDD',
        color: isDark ? '#F5EBDD' : '#49352B',
      }}
    >
      {/* Spider-Verse Halftone & Ambient Texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F42B70 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(circle at 75% 35%, #3F1541 0%, #260D27 75%)'
            : 'radial-gradient(circle at 75% 35%, #E9DDCE 0%, #F5EBDD 75%)',
        }}
      />

      {/* Subtle Star Constellations Background */}
      <Constellations variant="chronicles" />

      {/* Main Responsive Container */}
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between relative z-10">
        
        {/* ======================================================== */}
        {/* 1. COMPACT TOP HEADING (Dark Theme & Space Efficient)    */}
        {/* ======================================================== */}
        <div className="text-center mb-2 sm:mb-3 lg:mb-1 shrink-0">
          <div className={`inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] px-3 py-0.5 rounded-full mb-0.5 border shadow-comic-sm ${
            isDark ? 'bg-[#32102F] text-[#F5EBDD] border-white/10' : 'bg-[#EFE4D6] text-[#49352B] border-[#49352B]/20'
          }`}>
            <Sparkles className="w-3 h-3 text-[#F42B70] animate-pulse" />
            <span className="font-bold tracking-wider uppercase">CHAPTER 05 // MULTIVERSE CHRONICLES</span>
          </div>

          <h2 className={`font-comic text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-wider uppercase leading-tight ${
            isDark ? 'text-[#F5EBDD] drop-shadow-[2px_2px_0px_#140816]' : 'text-[#49352B] drop-shadow-[2px_2px_0px_#D4C3B2]'
          }`}>
            THE CHRONICLES OF RESHHH
          </h2>

          <p className="font-mono text-[10px] sm:text-xs font-bold text-[#20C9E8] tracking-widest mt-0.5 uppercase">
            A JOURNEY, WRITTEN ONE EXPERIENCE AT A TIME
          </p>
        </div>

        {/* ======================================================== */}
        {/* 2. BALANCED LAYOUT: CROSSWORD (LEFT) + CLUES (RIGHT)     */}
        {/* ======================================================== */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 xl:gap-8 items-center w-full">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: DARK-THEMED INTERCONNECTED CROSSWORD PUZZLE */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`w-full max-w-[380px] sm:max-w-[410px] xl:max-w-[430px] rounded-2xl p-3 sm:p-3.5 xl:p-4 flex flex-col justify-between ${
                isDark 
                  ? 'bg-[#32102F] border-2 border-white/15 shadow-[5px_5px_0px_#140816]' 
                  : 'bg-[#FFFDF8] border-2 border-[#49352B] shadow-[5px_5px_0px_#D4C3B2]'
              }`}
            >
              {/* Board Header Bar */}
              <div className={`flex items-center justify-between pb-2 mb-2 border-b ${
                isDark ? 'border-white/10' : 'border-[#49352B]/20'
              }`}>
                <div className="flex items-center gap-2">
                  <h3 className={`font-comic text-base sm:text-lg tracking-wide ${
                    isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'
                  }`}>
                    EXPERIENCE CROSSWORD
                  </h3>
                  <span className={`font-mono text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded font-bold border ${
                    isDark ? 'bg-[#260D27] text-[#20C9E8] border-white/10' : 'bg-[#EFE4D6] text-[#6536D9] border-[#49352B]/20'
                  }`}>
                    12×12
                  </span>
                </div>

                {/* Reset button if something is selected */}
                {selectedClueId && (
                  <button
                    type="button"
                    onClick={() => {
                      sounds.playPop();
                      setSelectedClueId(null);
                    }}
                    className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#F42B70] text-white hover:brightness-110 transition-all flex items-center gap-1 shadow-sm"
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                    <span>RESET</span>
                  </button>
                )}
              </div>

              {/* 12x12 Crossword Grid Container */}
              <div className={`w-full aspect-square p-2 rounded-xl border shadow-inner grid grid-cols-12 grid-rows-12 gap-[2px] sm:gap-[2.5px] ${
                isDark ? 'bg-[#1B0B1D] border-white/10' : 'bg-[#EFE4D6] border-[#49352B]/25'
              }`}>
                {Array.from({ length: GRID_ROWS }).map((_, r) =>
                  Array.from({ length: GRID_COLS }).map((_, c) => {
                    const key = `${r},${c}`;
                    const cell = gridMap.get(key);

                    if (!cell) {
                      return (
                        <div
                          key={key}
                          className={`w-full h-full rounded-[2px] border border-transparent ${
                            isDark ? 'bg-[#260D27]/40' : 'bg-[#E3D6C5]/50'
                          }`}
                        />
                      );
                    }

                    // Active crossword tile
                    const isSelected = selectedClueId && cell.clueIds.includes(selectedClueId);
                    const isHovered = hoveredClueId && cell.clueIds.includes(hoveredClueId);

                    let cellBg = isDark 
                      ? 'bg-[#3B1939] text-[#F5EBDD] border-white/10' 
                      : 'bg-[#FFFDF8] text-[#49352B] border-[#49352B]/30 shadow-comic-sm';

                    if (isSelected) {
                      cellBg =
                        activeClue?.direction === 'ACROSS'
                          ? 'bg-[#6536D9] text-white border-[#20C9E8] shadow-[0_0_10px_rgba(32,201,232,0.8)] z-10 scale-[1.06]'
                          : 'bg-[#F42B70] text-white border-white shadow-[0_0_10px_rgba(244,43,112,0.8)] z-10 scale-[1.06]';
                    } else if (isHovered) {
                      cellBg = isDark 
                        ? 'bg-[#4A173A] text-white border-[#20C9E8] z-0'
                        : 'bg-[#FAF3E8] text-[#49352B] border-[#F42B70] z-0';
                    }

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleCellClick(cell)}
                        onMouseEnter={() => cell.clueIds[0] && setHoveredClueId(cell.clueIds[0])}
                        onMouseLeave={() => setHoveredClueId(null)}
                        className={`relative w-full h-full rounded-[2px] border flex items-center justify-center font-mono font-bold select-none cursor-pointer transition-all duration-150 ${cellBg}`}
                        title={`Tile ${cell.char} (Words: ${cell.clueIds.join(', ')})`}
                      >
                        {/* Clue Number inside starting cell */}
                        {cell.number && (
                          <span
                            className={`absolute top-0.5 left-0.5 text-[7px] sm:text-[8px] font-mono font-bold leading-none ${
                              isSelected ? 'text-white' : isDark ? 'text-[#D8C1A6]' : 'text-[#7B6658]'
                            }`}
                          >
                            {cell.number}
                          </span>
                        )}

                        {/* Letter */}
                        <span className="text-xs sm:text-sm xl:text-base leading-none translate-y-[0.5px]">
                          {cell.char}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Crossword Legend & Interactive Hint */}
              <div className={`mt-2.5 pt-2 border-t flex items-center justify-between text-[10px] font-mono ${
                isDark ? 'border-white/10' : 'border-[#49352B]/20'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#F42B70]" />
                    <span className={`font-bold ${isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'}`}>DOWN (01–03)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#6536D9]" />
                    <span className={`font-bold ${isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'}`}>ACROSS (04–06)</span>
                  </div>
                </div>

                <span className={`font-bold hidden sm:inline ${
                  isDark ? 'text-[#20C9E8]' : 'text-[#6536D9]'
                }`}>
                  ★ Click tiles to select
                </span>
              </div>
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: STANDARDIZED DOWN & ACROSS CLUE SECTIONS    */}
          {/* Two-Column Grid: DOWN on left, ACROSS on right            */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3.5 xl:gap-5 items-start w-full">
            
            {/* ------------------------------------------------------ */}
            {/* 3. SUB-COLUMN 1: DOWN (3 Standardized Entries)         */}
            {/* ------------------------------------------------------ */}
            <div className="flex flex-col space-y-2">
              {/* Section Header */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-[#F42B70] text-white flex items-center justify-center shadow-comic-sm">
                    <ArrowDown className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <h3 className={`font-comic text-base sm:text-lg tracking-wide ${
                    isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'
                  }`}>
                    DOWN
                  </h3>
                </div>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#F42B70]/20 text-[#F42B70] border border-[#F42B70]/30">
                  3 CLUES
                </span>
              </div>

              {/* 3 DOWN Entries */}
              <div className="space-y-2">
                {downClues.map((clue) => (
                  <ClueCard
                    key={clue.id}
                    clue={clue}
                    isSelected={selectedClueId === clue.id}
                    isHovered={hoveredClueId === clue.id}
                    onClick={() => handleClueClick(clue.id)}
                    onMouseEnter={() => setHoveredClueId(clue.id)}
                    onMouseLeave={() => setHoveredClueId(null)}
                  />
                ))}
              </div>
            </div>

            {/* ------------------------------------------------------ */}
            {/* 4. SUB-COLUMN 2: ACROSS (3 Standardized Entries)       */}
            {/* ------------------------------------------------------ */}
            <div className="flex flex-col space-y-2">
              {/* Section Header */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-[#6536D9] text-white flex items-center justify-center shadow-comic-sm">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <h3 className={`font-comic text-base sm:text-lg tracking-wide ${
                    isDark ? 'text-[#F5EBDD]' : 'text-[#49352B]'
                  }`}>
                    ACROSS
                  </h3>
                </div>
                <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${
                  isDark ? 'bg-[#6536D9]/25 text-[#20C9E8] border-[#6536D9]/40' : 'bg-[#6536D9]/15 text-[#6536D9] border-[#6536D9]/30'
                }`}>
                  3 CLUES
                </span>
              </div>

              {/* 3 ACROSS Entries */}
              <div className="space-y-2">
                {acrossClues.map((clue) => (
                  <ClueCard
                    key={clue.id}
                    clue={clue}
                    isSelected={selectedClueId === clue.id}
                    isHovered={hoveredClueId === clue.id}
                    onClick={() => handleClueClick(clue.id)}
                    onMouseEnter={() => setHoveredClueId(clue.id)}
                    onMouseLeave={() => setHoveredClueId(null)}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
