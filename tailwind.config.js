/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'lg-masonry': '800px',
      lgp: 'calc(1024px + 4rem)',
      ...defaultTheme.screens,
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
      center: true,
    },
    extend: {
      minHeight: {
        'screen-no-header': 'calc(100vh - 64px)',
        'screen-no-footer': 'calc(100vh - 196px)',
        'screen-no-header-footer': 'calc(100vh - 64px - 196px)',
      },
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(.56,-0.04,.22,1.47)',
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: '#6F7592',
      'gray-light': '#EFF1F5',
      'gray-dark': '#22232C',
      blue: '#6100FD',
      'blue-light': '#C7E0F3',
      red: '#E41568',
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [],
};
