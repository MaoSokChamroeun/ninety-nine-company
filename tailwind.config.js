/** @type {import('tailwindcss').Config} */ 
export default { darkMode: 'class',
  content: [ "./index.html", "./src/**/*.{js,jsx,ts,tsx}", ],
   theme: { 
    extend: { 
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.08)" },
          "40%": { transform: "scale(1)" },
          "60%": { transform: "scale(1.08)" },
        },
      },
       animation: {
        heartbeat: "heartbeat 2.5s ease-in-out infinite",
      },
    fontFamily: { 
        josefin: ['"Josefin Sans"', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'], 
        khmer: ['Nokora', 'sans-serif'], 
        stack: ['Stack Sans Headline', 'sans-serif'], 
      }, 
    },
    screens : {
      xs : '480px',
      sm : '640px',
      md : '768px',
      lg : '1024px',
      xl : '1280px',
      '2xl' : '1536px',
    },
    plugins: [],
  }, 
}