import React from 'react';

export function PaperClip({ className = 'w-6 h-12 text-coffee' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 42V10a6 6 0 0 1 12 0v30a10 10 0 0 1-20 0V14a4 4 0 0 1 8 0v24a2 2 0 0 1-4 0V18" />
    </svg>
  );
}

export function PushPin({ color = '#F42B70', className = 'w-6 h-6' }: { color?: string; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div 
        className="w-4 h-4 rounded-full border-2 border-coffee shadow-comic-sm absolute top-0 left-0"
        style={{ backgroundColor: color }}
      />
      <div className="w-1 h-3 bg-coffee rounded absolute top-3 left-1.5 rotate-12" />
    </div>
  );
}

export function WashiTape({ 
  className = '', 
  color = 'pink',
  angle = '-2deg',
  text = ''
}: { 
  className?: string; 
  color?: 'pink' | 'yellow' | 'cyan' | 'caramel' | 'purple';
  angle?: string;
  text?: string;
}) {
  const colorMap = {
    pink: 'bg-[#F42B70]/85 text-white',
    yellow: 'bg-[#FFD600]/90 text-coffee',
    cyan: 'bg-[#20C9E8]/85 text-coffee',
    caramel: 'bg-[#A47758]/90 text-white',
    purple: 'bg-[#6536D9]/85 text-white',
  };

  return (
    <div 
      className={`relative inline-flex items-center justify-center px-4 py-1 font-mono text-xs font-bold uppercase tracking-wider shadow-sm select-none border-y border-dashed border-coffee/30 ${colorMap[color]} ${className}`}
      style={{
        transform: `rotate(${angle})`,
        clipPath: 'polygon(0% 0%, 97% 2%, 100% 50%, 98% 100%, 2% 98%, 0% 50%)',
      }}
    >
      {text}
    </div>
  );
}

export function StarDoodle({ className = 'w-6 h-6 text-comic-yellow' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5l2.7 6.8 7.3.6-5.5 4.8 1.6 7.2L12 17.1l-6.1 3.8 1.6-7.2L2 8.9l7.3-.6L12 1.5z" />
    </svg>
  );
}

export function SparkleDoodle({ className = 'w-5 h-5 text-comic-pink' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c.5 6 5.5 11 11.5 11.5-6 .5-11 5.5-11.5 11.5-.5-6-5.5-11-11.5-11.5 6-.5 11-5.5 11.5-11.5z" />
    </svg>
  );
}

export function ArrowDoodle({ className = 'w-12 h-8 text-coffee', direction = 'right' }: { className?: string; direction?: 'right' | 'left' | 'down' | 'curve' }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 60 40" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{
        transform: direction === 'left' ? 'scaleX(-1)' : direction === 'down' ? 'rotate(90deg)' : 'none'
      }}
    >
      <path d="M5 25 Q 30 10 50 20" />
      <path d="M42 12 L 53 20 L 44 28" />
    </svg>
  );
}

export function ComicBurst({ 
  text = 'POW!', 
  color = '#F42B70', 
  textColor = '#FFFFFF',
  className = '' 
}: { 
  text?: string; 
  color?: string; 
  textColor?: string;
  className?: string;
}) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg className="w-20 h-20 filter drop-shadow-[3px_3px_0px_#080F2B]" viewBox="0 0 100 100">
        <polygon 
          points="50,2 62,28 92,15 78,42 98,62 70,68 75,98 48,78 28,95 32,68 2,60 25,40 8,18 38,28" 
          fill={color} 
          stroke="#080F2B" 
          strokeWidth="3"
        />
      </svg>
      <span 
        className="absolute inset-0 flex items-center justify-center font-comic text-xl font-bold tracking-wider transform -rotate-6"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </div>
  );
}

export function SpeechBubble({ 
  children, 
  className = '',
  tail = 'bottom-left' 
}: { 
  children: React.ReactNode; 
  className?: string;
  tail?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}) {
  return (
    <div className={`relative bg-comic-paper border-[3px] border-coffee rounded-2xl p-4 shadow-comic ${className}`}>
      {children}
      {/* Speech bubble tail */}
      {tail === 'bottom-left' && (
        <div className="absolute -bottom-3 left-6 w-4 h-4 bg-comic-paper border-b-[3px] border-r-[3px] border-coffee transform rotate-45" />
      )}
      {tail === 'bottom-right' && (
        <div className="absolute -bottom-3 right-6 w-4 h-4 bg-comic-paper border-b-[3px] border-r-[3px] border-coffee transform rotate-45" />
      )}
    </div>
  );
}

