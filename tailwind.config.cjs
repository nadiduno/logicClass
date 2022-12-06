/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto,sans-serif',
      },
      colors: {
        white:{
          600: '#F2F2F2',
        },
        green: {
          300: '#00B37E',
          500: '#00875F',
          600: '#025939',
          700: '#015F43',
        },
        yellow: {
          600: '#F2A922',
        },
        orange: {
          500: '#FBA94C',
          600: '#F29422'
        },
        red: {
          500: '#F75A68',
          600: '#D9042B',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        }
      },
    },
  },
  plugins: [],
}
