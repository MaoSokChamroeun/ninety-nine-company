/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        khmer: ['Nokora', 'sans-serif'],
        stack: ['"Stack Sans Headline"', 'sans-serif'], 
      },
      
    },
  },
  plugins: [],
}
