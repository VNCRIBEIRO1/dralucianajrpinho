import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep Purple — Neurodiversidade, Inclusão, Força
        primary: {
          50: '#f8f5ff',
          100: '#f0eaff',
          200: '#e2d6ff',
          300: '#c9b3ff',
          400: '#a78bfa',
          500: '#2d1b4e',
          600: '#241542',
          700: '#1c1036',
          800: '#150c2a',
          900: '#0e081e',
          950: '#07040f',
        },
        // Warm neutrals — mais quentes
        secondary: {
          50: '#fefcf9',
          100: '#fdf8f0',
          200: '#f5ede0',
          300: '#e8dbc8',
          400: '#c4b49d',
          500: '#8a7f72',
          600: '#6b5f52',
          700: '#4a4139',
          800: '#2d2824',
          900: '#1a1715',
        },
        // Amber Gold — Profissionalismo & Justiça
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        // Rose accent — Luta feminina, coragem, acolhimento
        rose: {
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        },
        // Lavender — Neurodiversidade, autismo awareness
        lavender: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        // Infinity symbol colors (autism awareness) — mais vibrantes
        autism: {
          red: '#e74c3c',
          orange: '#e67e22',
          gold: '#f1c40f',
          green: '#2ecc71',
          blue: '#3498db',
          purple: '#9b59b6',
        },
        // Inclusão — tons quentes de acolhimento
        inclusion: {
          cream: '#fef9ef',
          peach: '#fed7aa',
          sky: '#bae6fd',
          mint: '#a7f3d0',
          blush: '#fce7f3',
          lilac: '#e9d5ff',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'rainbow-shift': 'rainbowShift 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'puzzle-spin': 'puzzleSpin 12s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        rainbowShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        puzzleSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'rainbow-bar': 'linear-gradient(to right, #e74c3c, #e67e22, #f1c40f, #2ecc71, #3498db, #9b59b6)',
        'inclusion-warm': 'linear-gradient(135deg, #fef9ef 0%, #f0eaff 50%, #fce7f3 100%)',
        'inclusion-gradient': 'linear-gradient(135deg, #e9d5ff 0%, #bae6fd 50%, #a7f3d0 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
