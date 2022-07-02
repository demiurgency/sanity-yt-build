/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    // ...
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  extend: {
    scale: ['group-hover'],
  },
};
