import React from 'react';

export function TornPaperDivider({ 
  position = 'top', 
  fill = '#F5EBDD', 
  flip = false,
  className = '' 
}: { 
  position?: 'top' | 'bottom'; 
  fill?: string; 
  flip?: boolean;
  className?: string; 
}) {
  return (
    <div 
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      style={{
        transform: `${position === 'bottom' ? 'rotate(180deg)' : ''} ${flip ? 'scaleX(-1)' : ''}`,
      }}
    >
      <svg 
        className="w-full h-8 md:h-12 text-[#F5EBDD] block filter drop-shadow-[0px_2px_1px_rgba(73,53,43,0.15)]" 
        viewBox="0 0 1200 48" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0,0 L0,22 Q30,12 60,25 T120,18 T180,28 T240,15 T300,26 T360,16 T420,30 T480,18 T540,28 T600,16 T660,29 T720,17 T780,28 T840,15 T900,27 T960,19 T1020,30 T1080,18 T1140,27 L1200,16 L1200,0 Z" 
          fill={fill} 
        />
        {/* Torn edge fibers accent */}
        <path 
          d="M0,22 Q30,12 60,25 T120,18 T180,28 T240,15 T300,26 T360,16 T420,30 T480,18 T540,28 T600,16 T660,29 T720,17 T780,28 T840,15 T900,27 T960,19 T1020,30 T1080,18 T1140,27 L1200,16" 
          stroke="rgba(73, 53, 43, 0.2)" 
          strokeWidth="1.5" 
          fill="none" 
        />
      </svg>
    </div>
  );
}

export function TornBadge({ 
  children, 
  className = '',
  bgColor = '#FDFBF7'
}: { 
  children: React.ReactNode; 
  className?: string;
  bgColor?: string;
}) {
  return (
    <div 
      className={`relative inline-block px-4 py-2 border-[2.5px] border-coffee shadow-comic filter drop-shadow-sm ${className}`}
      style={{
        backgroundColor: bgColor,
        clipPath: 'polygon(0% 4%, 4% 0%, 96% 0%, 100% 6%, 98% 95%, 95% 100%, 5% 98%, 0% 92%)',
      }}
    >
      {children}
    </div>
  );
}

