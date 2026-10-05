/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#111111',
          soft: '#1A1A1A',
          muted: '#3D3B38',
          faint: '#716D66',
        },
        ivory: {
          DEFAULT: '#FFFFFF',
          soft: '#FAF9F6',
          warm: '#F7F5F0',
          elevated: '#F4F1EA',
          border: '#E8E4DC',
        },
        gold: {
          DEFAULT: '#9E7B34',
          rich: '#8A6D3B',
          bright: '#C9A55C',
          light: '#E7CF91',
          dark: '#6E531D',
          faint: 'rgba(182, 141, 64, 0.12)',
        },
        line: {
          DEFAULT: 'rgba(182, 141, 64, 0.22)',
          soft: 'rgba(0, 0, 0, 0.08)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'cinematic': 'cubic-bezier(0.76, 0, 0.24, 1)',
      }
    },
  },
  plugins: [],
}
