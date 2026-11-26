/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        story: {
          bg: '#080909',
          secondary: '#111413',
          card: '#141816',
          cardHover: '#1a201d',
          forest: '#123D2B',
          emerald: '#00C982',
          highlight: '#78FFB4',
          text: '#F5F5F2',
          muted: '#A7ADA9',
          border: '#1f2723',
          glow: 'rgba(0, 201, 130, 0.15)',
        },
        netflix: {
          black: '#141414',
          dark: '#181818',
          card: '#252525',
          cardHover: '#2f2f2f',
          red: '#E50914',
          redHover: '#b80710',
          text: '#FFFFFF',
          muted: '#B3B3B3',
          border: '#333333',
        },
        forest: {
          50: '#F1F6F2',
          100: '#DFF4E5',
          200: '#B8E2C4',
          500: '#285943',
          600: '#1F4735',
          700: '#173D2D',
          800: '#102B20',
          900: '#0A1C15',
        },
        ivory: {
          DEFAULT: '#F7F5F0',
          light: '#FCFBF8',
          dark: '#EFECE3',
        },
        charcoal: '#202A28',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        cinematic: ['Bebas Neue', 'sans-serif'],
        editorial: ['Cinzel', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
