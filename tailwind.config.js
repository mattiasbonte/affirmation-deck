const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
        'cool-gray': colors.coolGray,
        gray: colors.gray,
        'true-gray': colors.trueGray,
        'warm-gray': colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      },
      backgroundImage: (theme) => ({
        'dark-pattern': "url('../src/assets/Achtergrond.webp')",
        'card-pattern': "url('../src/assets/BG-Card.webp')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
