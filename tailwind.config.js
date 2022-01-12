const autoprefixer = require('autoprefixer')

const brandColors = {
  white: '#fff',
  black: '#000',
  blue: {
    200: '#83cef5',
    900: '#1B4E8E',
  }
}

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      ...brandColors,
      primary: brandColors.blue['900'],
      contrast: {
        primary: brandColors.white,
      },
    },
    nightwind: {
      colorScale: {
        50: 50,
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      colors: {
        primary: brandColors.blue['200'],
        contrast: {
          primary: brandColors.black,
        },
        white: brandColors.black,
        blue: {
          900: brandColors.blue['200']
        }
      },
    },
    extend: {},
  },
  plugins: [require('nightwind')]
}
