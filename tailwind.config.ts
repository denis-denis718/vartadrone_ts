import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Multicam Camo
        camo: {
          dark: '#1C1F1A',
          olive: '#4A5240',
          khaki: '#8B7355',
          sand: '#C4B39A',
          brown: '#5C4033',
        },
        // Tactical Blacks
        tactical: {
          pure: '#000000',
          rich: '#0A0A0A',
          soft: '#141414',
          muted: '#1A1A1A',
          elevated: '#242424',
        },
        // Accent Colors
        accent: {
          gold: '#C9A227',
          amber: '#D4A84B',
          red: '#8B2635',
          green: '#2D5A3D',
        },
        // Grays
        gray: {
          900: '#18181B',
          800: '#27272A',
          700: '#3F3F46',
          600: '#52525B',
          500: '#71717A',
          400: '#A1A1AA',
          300: '#D4D4D8',
          100: '#F4F4F5',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Bebas Neue', 'Oswald', 'Anton', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace'],
        tactical: ['Black Ops One', 'Russo One', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1' }],
        'display-md': ['3rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(74, 82, 64, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 82, 64, 0.1) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
};

export default config;
