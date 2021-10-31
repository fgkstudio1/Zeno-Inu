const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      ...colors,
      teal: '#00F5FE',
      pink: '#F20074',
      dark: '#141419',
      lighterGrey: '#23232B',
      chartGreen: '#3CDD9C',
      chartBlue: '#13E1FE',
      chartPurple: '#C97EFD',
      lightGrey: '#8D90A3'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
