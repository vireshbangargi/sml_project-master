/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  fontFamily: {
    'black-ops': ['Black Ops One', 'sans-serif'],
    'crimson-text': ['Crimson Text', 'serif'],
    acme: ['Acme'],
    fugas: ['Fugaz One'],
    inter: ['Inter'],
  },

  extend: {
    backgroundImage: {
      site: "url('../assets/bgimage/home.jpg')",
    },
  },
};
export const plugins = [require('daisyui')];
