'use client';

import React from 'react';

interface ConstellationsProps {
  variant?: 'about' | 'powers' | 'toolkit' | 'developments' | 'chronicles' | 'contact' | 'default';
  className?: string;
}

// 4-Point Comic Diamond Star Helper
function FourPointStar({
  x,
  y,
  size = 12,
  color = '#F42B70',
  className = '',
}: {
  x: number;
  y: number;
  size?: number;
  color?: string;
  className?: string;
}) {
  const half = size / 2;
  const quarter = size * 0.16;
  const path = `M ${x} ${y - half} Q ${x + quarter} ${y - quarter} ${x + half} ${y} Q ${x + quarter} ${y + quarter} ${x} ${y + half} Q ${x - quarter} ${y + quarter} ${x - half} ${y} Q ${x - quarter} ${y - quarter} ${x} ${y - half} Z`;

  return <path d={path} fill={color} className={className} />;
}

export default function Constellations({ variant = 'default', className = '' }: ConstellationsProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
    >
      {/* ======================================================== */}
      {/* 1. SOFT PLUM / PURPLE MULTIVERSE COSMIC DUST GRADIENTS   */}
      {/* ======================================================== */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 rounded-full bg-[#6E2259]/[0.08] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/12 w-[30rem] h-[30rem] rounded-full bg-[#6536D9]/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-[#F42B70]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute top-1/12 right-1/4 w-72 h-72 rounded-full bg-[#20C9E8]/[0.04] blur-3xl pointer-events-none" />

      {/* ======================================================== */}
      {/* 2. VECTOR SVG CONSTELLATIONS & DELICATE LINES            */}
      {/* ======================================================== */}
      <svg
        className="w-full h-full opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        <defs>
          <filter id="star-glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="star-glow-pink" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="star-glow-purple" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ---------------------------------------------------- */}
        {/* CONSTELLATION CLUSTER 1: Top Right Quadrant          */}
        {/* ---------------------------------------------------- */}
        <g className="opacity-80">
          <polyline
            points="980,90 1060,130 1120,95 1160,165 1100,210 1040,195 980,90"
            fill="none"
            stroke="rgba(101, 54, 217, 0.35)"
            strokeWidth="0.85"
            strokeDasharray="3 3"
          />
          <line
            x1="1060"
            y1="130"
            x2="1100"
            y2="210"
            stroke="rgba(244, 43, 112, 0.3)"
            strokeWidth="0.85"
            strokeDasharray="2 3"
          />

          {/* Star Nodes */}
          <circle cx="980" cy="90" r="2" fill="#F5EBDD" className="animate-star-twinkle-1" />
          <circle cx="1060" cy="130" r="2.8" fill="#F42B70" filter="url(#star-glow-pink)" className="animate-star-twinkle-2" />
          <circle cx="1120" cy="95" r="1.8" fill="#6536D9" className="animate-star-twinkle-3" />
          <circle cx="1160" cy="165" r="2.2" fill="#20C9E8" filter="url(#star-glow-cyan)" className="animate-star-twinkle-1" />
          <circle cx="1100" cy="210" r="3" fill="#F42B70" filter="url(#star-glow-pink)" className="animate-star-twinkle-2" />
          <circle cx="1040" cy="195" r="1.8" fill="#FFD600" className="animate-star-twinkle-3" />

          <FourPointStar x={1100} y={210} size={15} color="#F42B70" className="animate-star-pulse" />
        </g>

        {/* ---------------------------------------------------- */}
        {/* CONSTELLATION CLUSTER 2: Top Left Quadrant           */}
        {/* ---------------------------------------------------- */}
        <g className="opacity-75">
          <polyline
            points="60,110 120,160 190,130 250,190 180,240 120,160"
            fill="none"
            stroke="rgba(101, 54, 217, 0.35)"
            strokeWidth="0.85"
            strokeDasharray="3 3"
          />

          <circle cx="60" cy="110" r="1.8" fill="#F5EBDD" className="animate-star-twinkle-2" />
          <circle cx="120" cy="160" r="2.8" fill="#20C9E8" filter="url(#star-glow-cyan)" className="animate-star-twinkle-1" />
          <circle cx="190" cy="130" r="2.2" fill="#6536D9" className="animate-star-twinkle-3" />
          <circle cx="250" cy="190" r="2.4" fill="#F42B70" className="animate-star-twinkle-2" />
          <circle cx="180" cy="240" r="2" fill="#FFD600" className="animate-star-twinkle-1" />

          <FourPointStar x={120} y={160} size={13} color="#20C9E8" className="animate-star-pulse" />
        </g>

        {/* ---------------------------------------------------- */}
        {/* CONSTELLATION CLUSTER 3: Bottom Left Quadrant        */}
        {/* ---------------------------------------------------- */}
        <g className="opacity-80">
          <polyline
            points="80,680 150,620 220,660 300,590 260,710 150,620"
            fill="none"
            stroke="rgba(244, 43, 112, 0.3)"
            strokeWidth="0.85"
            strokeDasharray="2 3"
          />
          <circle cx="80" cy="680" r="2" fill="#F5EBDD" className="animate-star-twinkle-3" />
          <circle cx="150" cy="620" r="2.8" fill="#6536D9" filter="url(#star-glow-purple)" className="animate-star-twinkle-1" />
          <circle cx="220" cy="660" r="1.8" fill="#20C9E8" className="animate-star-twinkle-2" />
          <circle cx="300" cy="590" r="3" fill="#F42B70" filter="url(#star-glow-pink)" className="animate-star-twinkle-3" />
          <circle cx="260" cy="710" r="1.8" fill="#FFD600" className="animate-star-twinkle-1" />

          <FourPointStar x={300} y={590} size={14} color="#F42B70" className="animate-star-pulse" />
        </g>

        {/* ---------------------------------------------------- */}
        {/* CONSTELLATION CLUSTER 4: Bottom Right Quadrant       */}
        {/* ---------------------------------------------------- */}
        <g className="opacity-80">
          <polyline
            points="920,620 980,560 1060,590 1140,540 1100,670 980,560"
            fill="none"
            stroke="rgba(101, 54, 217, 0.35)"
            strokeWidth="0.85"
            strokeDasharray="3 3"
          />
          <circle cx="920" cy="620" r="1.8" fill="#F5EBDD" className="animate-star-twinkle-2" />
          <circle cx="980" cy="560" r="2.8" fill="#20C9E8" filter="url(#star-glow-cyan)" className="animate-star-twinkle-1" />
          <circle cx="1060" cy="590" r="2.2" fill="#F42B70" className="animate-star-twinkle-3" />
          <circle cx="1140" cy="540" r="2.8" fill="#6536D9" filter="url(#star-glow-purple)" className="animate-star-twinkle-2" />
          <circle cx="1100" cy="670" r="2" fill="#F5EBDD" className="animate-star-twinkle-1" />

          <FourPointStar x={980} y={560} size={14} color="#20C9E8" className="animate-star-pulse" />
        </g>

        {/* ---------------------------------------------------- */}
        {/* VARIANT-SPECIFIC CENTER / MID-PAGE CLUSTERS          */}
        {/* ---------------------------------------------------- */}
        {variant === 'powers' && (
          <g className="opacity-70">
            <polyline
              points="480,240 540,280 610,230 670,290"
              fill="none"
              stroke="rgba(244, 43, 112, 0.3)"
              strokeWidth="0.85"
              strokeDasharray="2 3"
            />
            <circle cx="480" cy="240" r="1.8" fill="#F5EBDD" className="animate-star-twinkle-1" />
            <circle cx="540" cy="280" r="2.4" fill="#20C9E8" filter="url(#star-glow-cyan)" className="animate-star-twinkle-2" />
            <circle cx="610" cy="230" r="1.8" fill="#6536D9" className="animate-star-twinkle-3" />
            <circle cx="670" cy="290" r="2.2" fill="#F42B70" className="animate-star-twinkle-1" />
          </g>
        )}

        {variant === 'toolkit' && (
          <g className="opacity-70">
            <polyline
              points="320,380 410,350 490,410 580,360 670,420"
              fill="none"
              stroke="rgba(101, 54, 217, 0.3)"
              strokeWidth="0.85"
              strokeDasharray="3 3"
            />
            <circle cx="320" cy="380" r="2" fill="#20C9E8" className="animate-star-twinkle-3" />
            <circle cx="410" cy="350" r="2.6" fill="#F42B70" filter="url(#star-glow-pink)" className="animate-star-twinkle-1" />
            <circle cx="490" cy="410" r="1.8" fill="#F5EBDD" className="animate-star-twinkle-2" />
            <circle cx="580" cy="360" r="2.4" fill="#6536D9" className="animate-star-twinkle-3" />
            <circle cx="670" cy="420" r="2" fill="#20C9E8" className="animate-star-twinkle-1" />
          </g>
        )}

        {variant === 'chronicles' && (
          <g className="opacity-70">
            <polyline
              points="520,120 590,80 660,110 720,70 780,115"
              fill="none"
              stroke="rgba(244, 43, 112, 0.3)"
              strokeWidth="0.85"
              strokeDasharray="2 3"
            />
            <circle cx="520" cy="120" r="2" fill="#F5EBDD" className="animate-star-twinkle-2" />
            <circle cx="590" cy="80" r="2.8" fill="#20C9E8" filter="url(#star-glow-cyan)" className="animate-star-twinkle-1" />
            <circle cx="660" cy="110" r="1.8" fill="#6536D9" className="animate-star-twinkle-3" />
            <circle cx="720" cy="70" r="2.4" fill="#F42B70" className="animate-star-twinkle-2" />
            <circle cx="780" cy="115" r="1.8" fill="#FFD600" className="animate-star-twinkle-1" />
            <FourPointStar x={590} y={80} size={14} color="#20C9E8" className="animate-star-pulse" />
          </g>
        )}

        {/* ---------------------------------------------------- */}
        {/* Scattered Ambient Twinkle Stars                      */}
        {/* ---------------------------------------------------- */}
        <g className="opacity-85">
          <circle cx="480" cy="85" r="1.6" fill="#F5EBDD" className="animate-star-twinkle-1" />
          <circle cx="720" cy="115" r="2.2" fill="#F42B70" className="animate-star-twinkle-3" />
          <circle cx="340" cy="380" r="1.5" fill="#20C9E8" className="animate-star-twinkle-2" />
          <circle cx="860" cy="390" r="2" fill="#FFD600" className="animate-star-twinkle-1" />
          <circle cx="590" cy="720" r="1.8" fill="#6536D9" className="animate-star-twinkle-3" />
          <circle cx="740" cy="680" r="2.2" fill="#F5EBDD" className="animate-star-twinkle-2" />
          <circle cx="430" cy="540" r="1.6" fill="#F42B70" className="animate-star-twinkle-1" />
          <circle cx="670" cy="480" r="2.5" fill="#20C9E8" filter="url(#star-glow-cyan)" className="animate-star-twinkle-2" />
          <FourPointStar x={670} y={480} size={12} color="#20C9E8" className="animate-star-pulse" />

          <circle cx="420" cy="110" r="1.3" fill="#F5EBDD" className="animate-star-twinkle-1" />
          <circle cx="780" cy="180" r="1.6" fill="#20C9E8" className="animate-star-twinkle-2" />
          <circle cx="340" cy="260" r="1.4" fill="#6536D9" className="animate-star-twinkle-3" />
          <circle cx="890" cy="340" r="1.8" fill="#F5EBDD" className="animate-star-twinkle-1" />
          <circle cx="160" cy="420" r="1.5" fill="#F42B70" className="animate-star-twinkle-2" />
          <circle cx="480" cy="510" r="1.3" fill="#F5EBDD" className="animate-star-twinkle-3" />
          <circle cx="740" cy="580" r="1.6" fill="#20C9E8" className="animate-star-twinkle-1" />
          <circle cx="380" cy="690" r="1.4" fill="#F42B70" className="animate-star-twinkle-2" />
          <circle cx="830" cy="710" r="1.6" fill="#6536D9" className="animate-star-twinkle-3" />
          <circle cx="610" cy="760" r="1.3" fill="#FFD600" className="animate-star-twinkle-1" />
        </g>
      </svg>
    </div>
  );
}
