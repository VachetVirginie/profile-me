/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5311DF",
        secondary: "#E92D8B",
        yellow_primary: "#FCD61D",
        yellow_secondary: "#D3A400",
        dark: "#151515"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

