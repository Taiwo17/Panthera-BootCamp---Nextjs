/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        clashDisplay: ['ClashDisplay', ...defaultTheme.fontFamily.sans],
        sora: ['Sora', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        vendiitPrimary: '#184CD1',
      },
      lineHeight: {
        110: '110%',
        140: '140%',
      },
    },
  },
  plugins: [],
}
