/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black-400': '#373e44',
        'color-scheme-l5': '#666666',
        'color-scheme-l6': '#070707',
        'color-scheme-l11': 'rgba(7,7,7,0.05)',
        'border-color-gray': '#e3e3e3'
      },
      boxShadow: {
        'dropdown': '0 2px 20px 0 rgba(0,0,0,.07)'
      }
    },
  },
  plugins: [],
}

