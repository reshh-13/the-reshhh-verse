import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5EBDD',
        beige: '#D8C1A6',
        coffee: {
          DEFAULT: '#49352B',
          light: '#654C3F',
          dark: '#30221B',
        },
        caramel: '#A47758',
        plum: {
          DEFAULT: '#4A173C',
          dark: '#3D1231',
          deep: '#350F2B',
          light: '#5B1F4B',
        },
        comic: {
          pink: '#F42B70',
          pinkDark: '#E02665',
          purple: '#6536D9',
          cyan: '#20C9E8',
          yellow: '#FFD600',
          dark: '#1B1412',
          paper: '#FDFBF7',
        },
      },
      fontFamily: {
        comic: ['Bangers', 'Impact', 'cursive'],
        bubble: ['DynaPuff', '"Rubik Bubbles"', 'cursive', 'sans-serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', '"Comic Sans MS"', 'cursive'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'comic': '4px 4px 0px #49352B',
        'comic-sm': '2px 2px 0px #49352B',
        'comic-lg': '8px 8px 0px #49352B',
        'comic-xl': '12px 12px 0px #49352B',
        'comic-pink': '5px 5px 0px #F42B70',
        'comic-cyan': '5px 5px 0px #20C9E8',
        'comic-purple': '5px 5px 0px #6536D9',
        'comic-yellow': '5px 5px 0px #FFD600',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        'glitch-anim': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        'glitch-fast': 'glitch-anim 0.3s cubic-bezier(.25, .46, .45, .94) both infinite',
      },
    },
  },
  plugins: [],
};

export default config;
