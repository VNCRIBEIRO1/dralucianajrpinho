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
        // Nogueira — Autoridade, Tradição jurídica
        primary: {
          50: '#EFEBE9',
          100: '#D7CCC8',
          200: '#BCAAA4',
          300: '#A1887F',
          400: '#8D6E63',
          500: '#795548',
          600: '#6D4C41',
          700: '#5D4037',
          800: '#4E342E',
          900: '#3E2723',
          950: '#2C1A15',
        },
        // Cognac — Sofisticação, Elegância
        secondary: {
          50: '#FAF8F5',
          100: '#F5F0EB',
          200: '#EDE8E3',
          300: '#D7CCC8',
          400: '#BCAAA4',
          500: '#A1887F',
          600: '#8D6E63',
          700: '#6D4C41',
          800: '#4E342E',
          900: '#3E2723',
        },
        // Dourado Sóbrio — Detalhes, CTAs
        gold: {
          50: '#FBF7EE',
          100: '#F5EDD6',
          200: '#E8D5A3',
          300: '#D4BC7B',
          400: '#BFA76A',
          500: '#A8924F',
          600: '#8D6B30',
          700: '#725620',
          800: '#5C4518',
          900: '#4A3712',
        },
        // Warm whites — Fundos limpos e acolhedores
        warm: {
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F5F0EB',
          300: '#EDE8E3',
          400: '#E0D6CC',
          500: '#D1C4B7',
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
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
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
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #FAF8F5 0%, #F5F0EB 50%, #EDE8E3 100%)',
        'wood-gradient': 'linear-gradient(135deg, #EFEBE9 0%, #D7CCC8 50%, #BCAAA4 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
