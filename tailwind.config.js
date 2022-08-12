/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
      center: true,
    },
    extend: {
      minHeight: {
        'screen-no-header': 'calc(100vh - 56px)',
        'screen-no-footer': 'calc(100vh - 224px)',
        'screen-no-header-footer': 'calc(100vh - 56px - 224px)',
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
