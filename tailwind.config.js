/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- this enables class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: { 50: '#eef2ff', 100: '#e0e7ff', 500: '#6366f1' }
      },
      boxShadow: { glow: '0 6px 18px rgba(99,102,241,0.18)' }
    },
  },
  plugins: [],
}
