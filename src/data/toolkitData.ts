import React from 'react';

export interface TechItem {
  id: string;
  name: string;
  category: string;
  brandColor: string;
  svg: string; // inline SVG markup or SVG component
}

// 1. Programming Languages (7 items)
export const programmingLanguages: TechItem[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Programming Languages',
    brandColor: '#F7DF1E',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="#F7DF1E"/><path d="M12.44 19.4c.5.8 1.1 1.4 2.2 1.4 1.2 0 1.9-.6 1.9-2.3v-7.8h2.6v7.8c0 2.8-1.7 4.1-4.4 4.1-2.2 0-3.5-1.1-4.2-2.5l1.9-.7zm-8 0c.5.8 1.1 1.4 2.2 1.4 1.2 0 1.9-.6 1.9-2.3v-7.8h2.6v7.8c0 2.8-1.7 4.1-4.4 4.1-2.2 0-3.5-1.1-4.2-2.5l1.9-.7z" fill="none"/><path d="M6.2 19.3c.9.5 2 .9 3.2.9 2 0 3.2-1 3.2-2.6 0-1.6-1-2.2-2.7-3-2.1-.9-3.5-2-3.5-3.9 0-2.1 1.7-3.7 4.3-3.7 1.2 0 2.1.3 2.8.7l-.7 2c-.6-.4-1.3-.6-2.1-.6-1.3 0-2.1.8-2.1 1.8 0 1.2.8 1.8 2.5 2.5 2.3 1 3.7 2.1 3.7 4.2 0 2.4-1.9 4-4.8 4-1.4 0-2.7-.4-3.5-.9l.7-2.4zm10.7.7c.6.4 1.4.6 2.3.6 1.3 0 2.1-.6 2.1-1.6 0-1.1-.7-1.6-2.4-2.3-2.2-.9-3.4-1.9-3.4-3.7 0-2 1.6-3.6 4-3.6 1.1 0 2 .3 2.7.7l-.6 2c-.6-.4-1.3-.6-2.1-.6-1.2 0-1.8.6-1.8 1.4 0 1 .7 1.5 2.3 2.2 2.3 1 3.5 2 3.5 4 0 2.3-1.8 3.8-4.5 3.8-1.4 0-2.6-.4-3.3-.9l.7-2z" fill="#000000"/></svg>`
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Programming Languages',
    brandColor: '#3178C6',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="3" fill="#3178C6"/><path d="M12.3 8.3H7.5v2h1.3v8h2.2v-8h1.3v-2zm7.6 2.5c-.5-.4-1.3-.7-2.3-.7-1.3 0-2 .6-2 1.5 0 .9.6 1.3 1.8 1.8 1.7.7 2.7 1.5 2.7 3.1 0 1.9-1.5 3.1-3.8 3.1-1.3 0-2.5-.4-3.2-1l.7-1.8c.6.5 1.5.9 2.5.9 1.2 0 1.8-.5 1.8-1.3 0-.9-.7-1.3-2-1.9-1.6-.7-2.5-1.5-2.5-2.9 0-1.8 1.4-3 3.5-3 1.1 0 2.1.3 2.7.7l-.7 1.7z" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming Languages',
    brandColor: '#3776AB',
    svg: `<svg viewBox="0 0 24 24"><path d="M11.9 1.5c-3.1 0-5.2.3-5.2 2.4v1.8h5.3v.8H4.6c-2.1 0-3.9 1.3-3.9 3.8 0 2.2 1.6 3.8 3.9 3.8h1.3v-2.1c0-2.3 2-4.1 4.3-4.1h5.3c1.9 0 3.4-1.5 3.4-3.4V3.9c0-2.1-2.3-2.4-5.4-2.4h-1.6zm-2.7 1.5c.5 0 .9.4.9.9 0 .5-.4.9-.9.9-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9z" fill="#3776AB"/><path d="M12.1 22.5c3.1 0 5.2-.3 5.2-2.4v-1.8H12v-.8h7.4c2.1 0 3.9-1.3 3.9-3.8 0-2.2-1.6-3.8-3.9-3.8h-1.3v2.1c0 2.3-2 4.1-4.3 4.1H8.5c-1.9 0-3.4 1.5-3.4 3.4v1.5c0 2.1 2.3 2.4 5.4 2.4h1.6zm2.7-1.5c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9.5 0 .9.4.9.9 0 .5-.4.9-.9.9z" fill="#FFD438"/></svg>`
  },
  {
    id: 'c',
    name: 'C',
    category: 'Programming Languages',
    brandColor: '#00599C',
    svg: `<svg viewBox="0 0 24 24"><polygon points="12,1.5 22,7.3 22,18.7 12,24.5 2,18.7 2,7.3" fill="#00599C"/><polygon points="12,3.8 19.8,8.3 19.8,17.2 12,21.7 4.2,17.2 4.2,8.3" fill="#A8B9CC"/><path d="M15.4 8.7c-.8-.6-1.9-1-3.2-1-2.9 0-4.9 2-4.9 4.8s2 4.8 4.9 4.8c1.3 0 2.4-.4 3.2-1l.7 1.8c-1.1.7-2.4 1.1-4 1.1-4.1 0-7-2.9-7-6.7s2.9-6.7 7-6.7c1.6 0 2.9.4 4 1.1l-.7 1.8z" fill="#00599C"/></svg>`
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Programming Languages',
    brandColor: '#00758F',
    svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 6c0-2.2 3.6-4 8-4s8 1.8 8 4v12c0 2.2-3.6 4-8 4s-8-1.8-8-4V6z" fill="#00758F"/><ellipse cx="12" cy="6" rx="8" ry="3" fill="#20C9E8"/><path d="M4 11c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5" stroke="#FFFFFF" stroke-width="1.8"/><path d="M4 16c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5" stroke="#FFFFFF" stroke-width="1.8"/><text x="12" y="11" font-family="'Arial Black', sans-serif" font-size="5" font-weight="bold" fill="#003544" text-anchor="middle">SQL</text></svg>`
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Programming Languages',
    brandColor: '#E34F26',
    svg: `<svg viewBox="0 0 24 24"><path d="M2.5 1.5l1.7 19.2L12 23.5l7.8-2.8 1.7-19.2H2.5z" fill="#E34F26"/><path d="M12 21.6l6.4-2.3 1.4-16H12v18.3z" fill="#EF652A"/><path d="M6.3 5.4h11.4l-.3 3.3H9.8l.3 3.3h6.6l-.6 6.8-4.1 1.4-4.1-1.4-.3-3.2h2.7l.1 1.6 1.6.5 1.6-.5.2-2.1H6.7l-.4-9.8z" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Programming Languages',
    brandColor: '#1572B6',
    svg: `<svg viewBox="0 0 24 24"><path d="M2.5 1.5l1.7 19.2L12 23.5l7.8-2.8 1.7-19.2H2.5z" fill="#1572B6"/><path d="M12 21.6l6.4-2.3 1.4-16H12v18.3z" fill="#33A9DC"/><path d="M12 5.4H6.3l.9 9.9 4.8 1.6v-2.8l-2.6-.9-.2-2h2.8V8.6H6.6l-.3-3.2h5.7V5.4zm0 6.6h2.8l-.3 3-2.5.8v2.8l4.8-1.6.6-6.6H12V12zm5.4-3.4l.3-3.2H12v3.2h5.4z" fill="#FFFFFF"/></svg>`
  }
];

// 2. Frontend Development (4 items)
export const frontendTools: TechItem[] = [
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend Development',
    brandColor: '#61DAFB',
    svg: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.2" fill="#61DAFB"/><g stroke="#61DAFB" stroke-width="1.3"><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></g></svg>`
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend Development',
    brandColor: '#FFFFFF',
    svg: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#000000" stroke="#FFFFFF" stroke-width="1.2"/><path d="M15.5 8v8M8.5 8v8l8.2-9.8" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend Development',
    brandColor: '#06B6D4',
    svg: `<svg viewBox="0 0 24 24" fill="#06B6D4"><path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.2 3.4-.9.7.2 1.3.8 1.9 1.4 1 1 2.2 2.2 4.7 2.2 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.2-3.4.9-.7-.2-1.3-.8-1.9-1.4-1-1-2.2-2.2-4.7-2.2zm-6 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.2 3.4-.9.7.2 1.3.8 1.9 1.4 1 1 2.2 2.2 4.7 2.2 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.2-3.4.9-.7-.2-1.3-.8-1.9-1.4-1-1-2.2-2.2-4.7-2.2z"/></svg>`
  },
  {
    id: 'shadcn',
    name: 'shadcn/ui',
    category: 'Frontend Development',
    brandColor: '#20C9E8',
    svg: `<svg viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#09090b" stroke="#27272a"/><path d="M18 5L6 17" stroke="#20C9E8" stroke-width="2.5" stroke-linecap="round"/><path d="M13 19L19 19" stroke="#F42B70" stroke-width="2.5" stroke-linecap="round"/></svg>`
  }
];

// 3. Backend Development (4 items)
export const backendTools: TechItem[] = [
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend Development',
    brandColor: '#5FA04E',
    svg: `<svg viewBox="0 0 24 24" fill="#5FA04E"><path d="M12 1.5l9 5.2v10.6l-9 5.2-9-5.2V6.7l9-5.2zm0 2.3L4.8 8v8l7.2 4.2 7.2-4.2V8L12 3.8zm0 4.2a4 4 0 110 8 4 4 0 010-8z"/></svg>`
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'Backend Development',
    brandColor: '#E0234E',
    svg: `<svg viewBox="0 0 24 24" fill="#E0234E"><path d="M12 1.5c-1.3 0-2.5.5-3.4 1.4L2.8 8.7c-.9.9-1.3 2.1-1.3 3.3s.5 2.5 1.4 3.4l5.8 5.8c.9.9 2.1 1.4 3.3 1.4s2.5-.5 3.4-1.4l5.8-5.8c.9-.9 1.4-2.1 1.4-3.4 0-1.2-.5-2.4-1.4-3.3L15.4 2.9c-.9-.9-2.1-1.4-3.4-1.4zm0 4c.6 0 1.2.2 1.7.7l4.3 4.3c.4.4.7 1 .7 1.6 0 .6-.2 1.2-.7 1.6l-4.3 4.3c-.4.4-1 .7-1.7.7s-1.2-.2-1.7-.7l-4.3-4.3c-.4-.4-.7-1-.7-1.6 0-.6.2-1.2.7-1.6l4.3-4.3c.5-.5 1.1-.7 1.7-.7z"/></svg>`
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'Backend Development',
    brandColor: '#009688',
    svg: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10.5" fill="#009688"/><path d="M12.5 4.5l-4 8.5h3.5l-1.5 6.5 6-9h-4l2-6h-2z" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'restapis',
    name: 'REST APIs',
    category: 'Backend Development',
    brandColor: '#20C9E8',
    svg: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="4" stroke="#20C9E8" stroke-width="2"/><circle cx="7" cy="12" r="2" fill="#20C9E8"/><circle cx="17" cy="12" r="2" fill="#F42B70"/><path d="M9 12h6" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="2 2"/></svg>`
  }
];

// 4. Database & Backend Services (5 items)
export const databaseTools: TechItem[] = [
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database & Backend Services',
    brandColor: '#4169E1',
    svg: `<svg viewBox="0 0 24 24" fill="#4169E1"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3.2-.3.3-.7.3-1.1v-2.3c-.6.3-1.4.5-2.2.5-2.3 0-3.6-1.6-3.6-3.8 0-2.4 1.6-3.8 3.8-3.8.7 0 1.5.2 2 .5V9.4C7.7 8.9 7 7.7 7 6.4 7 4.5 8.6 3 10.6 3c1.7 0 3.1 1.1 3.5 2.7.5-.2 1.1-.3 1.7-.3 2.5 0 4.6 2 4.6 4.5 0 1.2-.5 2.3-1.3 3.1.6 1 1 2.2 1 3.5 0 2.5-1.7 4.6-4.1 5.2.3.4.5 1 .5 1.6v2.1c0 .4.1.8.3 1.1 3.7-1.5 6.3-5.1 6.3-9.3 0-5.5-4.5-10-10-10z"/></svg>`
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Database & Backend Services',
    brandColor: '#47A248',
    svg: `<svg viewBox="0 0 24 24" fill="#47A248"><path d="M12.2 1.5s-4.8 6.3-4.8 11.2c0 3.7 2.3 7 4.8 9.8 2.5-2.8 4.8-6.1 4.8-9.8 0-4.9-4.8-11.2-4.8-11.2zm-.3 17.5c-1.8-2.2-3.3-4.8-3.3-7.5 0-3.6 2.5-7.7 3.3-8.8.8 1.1 3.3 5.2 3.3 8.8 0 2.7-1.5 5.3-3.3 7.5z"/></svg>`
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'Database & Backend Services',
    brandColor: '#FFCA28',
    svg: `<svg viewBox="0 0 24 24"><path d="M4.6 15.3l1.8-11.2c.1-.6.8-.8 1.2-.4l3.5 5.2-6.5 6.4z" fill="#FFA000"/><path d="M12.9 8.2l2.6-4.9c.3-.6 1.2-.5 1.4.1l2.5 12-6.5-7.2z" fill="#F57C00"/><path d="M3.7 16.7l7.5 4.3c.5.3 1.1.3 1.6 0l7.5-4.3-4.9-3.2-3.4 3.7c-.4.4-1.1.4-1.5 0l-2.4-2.7-4.4 2.2z" fill="#FFCA28"/></svg>`
  },
  {
    id: 'prisma',
    name: 'Prisma ORM',
    category: 'Database & Backend Services',
    brandColor: '#2D3748',
    svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M19.5 19.5L12 2.5 4.5 19.5h15z" stroke="#20C9E8" stroke-width="2" fill="#161e2e"/><path d="M12 2.5v17" stroke="#20C9E8" stroke-width="1.8"/><path d="M12 2.5l3.5 17" stroke="#6536D9" stroke-width="1.5"/></svg>`
  },
  {
    id: 'neondb',
    name: 'NeonDB',
    category: 'Database & Backend Services',
    brandColor: '#00E599',
    svg: `<svg viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#000000" stroke="#00E599" stroke-width="1.2"/><path d="M6 18V6l12 12V6" stroke="#00E599" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  }
];

// 5. AI & Machine Learning (3 items)
export const aiTools: TechItem[] = [
  {
    id: 'mediapipe',
    name: 'MediaPipe',
    category: 'AI & Machine Learning',
    brandColor: '#0072B2',
    svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="#0072B2" stroke-width="1.8" fill="#081824"/><circle cx="12" cy="7" r="2" fill="#20C9E8"/><circle cx="7" cy="14" r="2" fill="#F42B70"/><circle cx="17" cy="14" r="2" fill="#FFD600"/><circle cx="12" cy="12" r="2.5" fill="#FFFFFF"/><path d="M12 7l-5 7m5-7l5 7m-10 0h10" stroke="#20C9E8" stroke-width="1.2"/></svg>`
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'AI & Machine Learning',
    brandColor: '#FF6F00',
    svg: `<svg viewBox="0 0 24 24"><path d="M12 1.5l8.5 4.9v9.8L12 21.1l-8.5-4.9V6.4L12 1.5zm0 2.5L5.7 7.6v7.4L12 18.6l6.3-3.6V7.6L12 4z" fill="#FF6F00"/><path d="M12 4v14.6M5.7 7.6l12.6 7.4M18.3 7.6L5.7 15" stroke="#FF8F00" stroke-width="1.2"/></svg>`
  },
  {
    id: 'openai',
    name: 'OpenAI API / Generative AI',
    category: 'AI & Machine Learning',
    brandColor: '#10A37F',
    svg: `<svg viewBox="0 0 24 24" fill="#10A37F"><path d="M22.3 9.4c-.2-.9-.8-1.7-1.6-2.2-1.3-.9-3-.9-4.3-.3V5.5c0-1.5-.8-2.9-2.1-3.6-1.5-.9-3.4-.7-4.7.4-.5.4-.9 1-1.1 1.6C7.9 3.5 7.1 3.5 6.3 4c-1.3.8-2.1 2.2-2.1 3.7v1.4C3.4 9.4 2.8 10 2.4 10.8c-.8 1.4-.7 3.2.2 4.6.4.6.9 1.1 1.6 1.4-.1.7-.1 1.5.3 2.2.8 1.3 2.2 2.1 3.7 2.1h1.4c.3.8.9 1.4 1.7 1.8 1.4.8 3.2.7 4.6-.2.6-.4 1.1-.9 1.4-1.6.7.1 1.5.1 2.2-.3 1.3-.8 2.1-2.2 2.1-3.7v-1.4c.8-.3 1.4-.9 1.8-1.7.8-1.5.7-3.3-.2-4.7zm-8.4 10.9c-.9 0-1.8-.4-2.4-1.1l-.8-1.1 3.2-1.8 2.6 1.5c-.7 1.5-1.4 2.5-2.6 2.5zm-5.6-3.2l2.6-1.5v-3.7l-3.2 1.8v1.3c0 1.2.3 1.9.6 2.1zm-1.8-5.3c0-.9.4-1.8 1.1-2.4l1.1-.8 1.8 3.2-1.5 2.6c-1.5-.7-2.5-1.4-2.5-2.6zm6.3-.9l2.6 1.5v3.7l-3.2-1.8V12c0-1.2.3-1.8.6-2.1zm1.8 5.3c0 .9-.4 1.8-1.1 2.4l-1.1.8-1.8-3.2 1.5-2.6c1.5.7 2.5 1.4 2.5 2.6zm-2.6-7.8c.9 0 1.8.4 2.4 1.1l.8 1.1-3.2 1.8-2.6-1.5c.7-1.5 1.4-2.5 2.6-2.5z"/></svg>`
  }
];

// 6. Developer Tools (4 items)
export const devTools: TechItem[] = [
  {
    id: 'git',
    name: 'Git',
    category: 'Developer Tools',
    brandColor: '#F05032',
    svg: `<svg viewBox="0 0 24 24" fill="#F05032"><path d="M21.6 10.7L13.3 2.4c-.6-.6-1.5-.6-2.1 0L9.1 4.5l2.6 2.6c.6-.2 1.4 0 1.8.5.5.5.6 1.2.4 1.8l2.5 2.5c.6-.2 1.3-.1 1.8.4.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.2.2.4.4.5.7.5.9.3 2.1-.6 2.7-.9.6-2.1.4-2.7-.5-.6-.9-.4-2.1.5-2.7.3-.2.6-.3.9-.3V9.6c-.3 0-.7-.1-.9-.3-.8-.8-.8-2.1 0-2.9l2.2-2.2-7.3 7.3c-.6.6-.6 1.5 0 2.1l8.3 8.3c.6.6 1.5.6 2.1 0l7.3-7.3c.5-.6.5-1.5 0-2.1z"/></svg>`
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Developer Tools',
    brandColor: '#FFFFFF',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>`
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'Developer Tools',
    brandColor: '#007ACC',
    svg: `<svg viewBox="0 0 24 24" fill="#007ACC"><path d="M17.6 2.1l-9 8.2-4.4-3.3-2.2 1.1v11.8l2.2 1.1 4.4-3.3 9 8.2 4.4-2.1V4.2l-4.4-2.1zm0 4.8v10.2l-6.3-5.1 6.3-5.1zM4 14.5V9.5l3.2 2.5L4 14.5z"/></svg>`
  },
  {
    id: 'chrome-extensions',
    name: 'Chrome Extensions',
    category: 'Developer Tools',
    brandColor: '#4285F4',
    svg: `<svg viewBox="0 0 24 24" fill="#4285F4"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.1 11.9 1 10.5 1S8 2.1 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5H2v4c0 1.1.9 2 2 2h3.8v-1.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V23H17c1.1 0 2-.9 2-2v-4h1.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z"/></svg>`
  }
];

// 7. Design Tools (Dedicated Row 4 - 5 items)
export const designTools: TechItem[] = [
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design Tools',
    brandColor: '#F24E1E',
    svg: `<svg viewBox="0 0 24 24"><path d="M8 2h4v4H8V2z" fill="#F24E1E"/><path d="M12 2h4a4 4 0 010 8h-4V2z" fill="#FF7262"/><path d="M12 10h4a4 4 0 010 8h-4v-8z" fill="#1ABCFE"/><path d="M8 6a4 4 0 104 4V6H8z" fill="#A259FF"/><path d="M8 14a4 4 0 104 4v-4H8z" fill="#0ACF83"/></svg>`
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'Design Tools',
    brandColor: '#00C4CC',
    svg: `<svg viewBox="0 0 24 24" fill="#00C4CC"><circle cx="12" cy="12" r="10.5"/><path d="M14.8 8.8c-.8-.6-1.8-.8-2.8-.8-2.6 0-4.6 2-4.6 4.7 0 2.8 1.9 4.8 4.6 4.8 1.1 0 2.1-.3 2.9-.9l-.6-1.3c-.6.4-1.4.7-2.2.7-1.8 0-3.1-1.3-3.1-3.3 0-1.9 1.4-3.2 3.2-3.2.7 0 1.4.2 2 .5l.6-1.2z" fill="#FFFFFF"/></svg>`
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    category: 'Design Tools',
    brandColor: '#31A8FF',
    svg: `<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#001E36" stroke="#31A8FF" stroke-width="1.2"/><text x="6" y="16" font-family="'Arial Black', sans-serif" font-size="10" font-weight="bold" fill="#31A8FF">Ps</text></svg>`
  },
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    category: 'Design Tools',
    brandColor: '#FF9A00',
    svg: `<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#330000" stroke="#FF9A00" stroke-width="1.2"/><text x="6" y="16" font-family="'Arial Black', sans-serif" font-size="10" font-weight="bold" fill="#FF9A00">Ai</text></svg>`
  },
  {
    id: 'indesign',
    name: 'Adobe InDesign',
    category: 'Design Tools',
    brandColor: '#FF3366',
    svg: `<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#49021F" stroke="#FF3366" stroke-width="1.2"/><text x="6" y="16" font-family="'Arial Black', sans-serif" font-size="10" font-weight="bold" fill="#FF3366">Id</text></svg>`
  },
  {
    id: 'blender',
    name: 'Blender',
    category: 'Design Tools',
    brandColor: '#E87D0D',
    svg: `<svg viewBox="0 0 24 24"><path d="M12.98 2.37c-.38.03-.76.12-1.12.28L4.3 6.06c-.84.4-1.42 1.18-1.57 2.1-.15.91.13 1.83.75 2.5l3.82 4.12a7.12 7.12 0 1012.3-4.22L12.98 2.37zm-.43 2.17l5.24 6.84a7.1 7.1 0 00-3.23-.77c-2.3 0-4.32 1.1-5.6 2.78l-2.92-3.15 6.51-5.7zm.15 6.74a4.8 4.8 0 11-4.8 4.8 4.8 4.8 0 014.8-4.8z" fill="#E87D0D"/><circle cx="12.7" cy="15.9" r="2.85" fill="#225796"/></svg>`
  },
  {
    id: 'sketchup',
    name: 'SketchUp',
    category: 'Design Tools',
    brandColor: '#EA212D',
    svg: `<svg viewBox="0 0 24 24"><path d="M11.76 0L0 6.79l3.92 2.26 7.84-4.52 7.84 4.52 3.92-2.26L11.76 0zm0 5.66L3.92 10.18v4.53l7.84-4.53V5.66zm.49 0v4.53l7.83 4.53v-4.53l-7.83-4.53zM3.92 15.83L0 18.1l11.76 6.79 11.76-6.79-3.92-2.26-7.84 4.52-7.84-4.52z" fill="#EA212D"/></svg>`
  }
];

// Marquee Row 1 (9 items)
export const marqueeRow1: TechItem[] = [
  programmingLanguages[0], // JavaScript
  programmingLanguages[1], // TypeScript
  programmingLanguages[2], // Python
  programmingLanguages[3], // C
  programmingLanguages[5], // HTML5
  programmingLanguages[6], // CSS3
  frontendTools[0],        // React.js
  frontendTools[1],        // Next.js
  frontendTools[2],        // Tailwind CSS
];

// Marquee Row 2 (9 items)
export const marqueeRow2: TechItem[] = [
  backendTools[0],         // Node.js
  backendTools[1],         // NestJS
  backendTools[2],         // FastAPI
  backendTools[3],         // REST APIs
  programmingLanguages[4], // SQL
  databaseTools[0],        // PostgreSQL
  databaseTools[1],        // MongoDB
  databaseTools[2],        // Firebase
  databaseTools[3],        // Prisma ORM
];

// Marquee Row 3 (9 items)
export const marqueeRow3: TechItem[] = [
  databaseTools[4],        // NeonDB
  frontendTools[3],        // shadcn/ui
  aiTools[0],              // MediaPipe
  aiTools[1],              // TensorFlow
  aiTools[2],              // OpenAI API / Generative AI
  devTools[0],             // Git
  devTools[1],             // GitHub
  devTools[2],             // VS Code
  devTools[3],             // Chrome Extensions
];

// Marquee Row 4: Dedicated Design Tools (All 7 items: Figma, Canva, Photoshop, Illustrator, InDesign, Blender, SketchUp)
export const marqueeRow4: TechItem[] = [
  designTools[0],          // Figma
  designTools[1],          // Canva
  designTools[2],          // Adobe Photoshop
  designTools[3],          // Adobe Illustrator
  designTools[4],          // Adobe InDesign
  designTools[5],          // Blender
  designTools[6],          // SketchUp
];

