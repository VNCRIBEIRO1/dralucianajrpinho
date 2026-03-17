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
        // Nogueira Escuro — Autoridade, Tradição jurídica
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
          950: '#1A0F0A',
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
        // Dourado Ouro — Luxo, Prestígio
        gold: {
          50: '#FFF9E6',
          100: '#FFF0BF',
          200: '#FFE699',
          300: '#FFD966',
          400: '#D4AF37',
          500: '#C5A028',
          600: '#B8860B',
          700: '#996F0A',
          800: '#7A5908',
          900: '#5C4306',
        },
        // Warm whites — Fundos limpos e acolhedores
        warm: {
          50: '#FFFFFF',
          100: '#FDFCFA',
          200: '#FAF7F2',
          300: '#F5F0E8',
          400: '#EDE5D8',
          500: '#D9CFC2',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
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
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212,175,55,0.15)' },
          '100%': { boxShadow: '0 0 40px rgba(212,175,55,0.35)' },
        },
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #FDFCFA 0%, #FAF7F2 50%, #F5F0E8 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.08) 50%, transparent 100%)',
        'luxury-dark': 'linear-gradient(135deg, #1A0F0A 0%, #2C1A15 40%, #1A0F0A 100%)',
        'luxury-gold': 'linear-gradient(135deg, #D4AF37 0%, #FFD966 50%, #D4AF37 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
