/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
