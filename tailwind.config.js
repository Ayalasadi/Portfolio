/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          glow: {
            '0%, 100%': { filter: 'drop-shadow(0 0 0px #38bdf8)' },
            '50%': { filter: 'drop-shadow(0 0 8px #38bdf8)' },
          },
        },
        animation: {
          glow: 'glow 2s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }
  
  