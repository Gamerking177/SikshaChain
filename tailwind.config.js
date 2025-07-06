/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shiksha-green': '#2BB57F',
        'shiksha-yellow': '#F29F05',
        'shiksha-bg': '#F6F9F8',
        'shiksha-text-dark': '#222',
        'shiksha-text-medium': '#444',
        'shiksha-text-light': '#777',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '24px',
        '2xl': '20px',
      },
      boxShadow: {
        'card': '0 8px 24px rgba(0,0,0,0.04)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-soft': 'pulse 3s infinite',
      }
    },
  },
  plugins: [],
}