/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dripp: ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
        workforce: ['"Righteous"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            backgroundColor: 'rgba(6,182,212,0);'
            // transform: 'translateY(-10px)'
          },
          '100%': {
            backgroundColor: 'rgb(6,182,212,0.5);'
            // transform: 'translateY(0)'
          },
        },
        'fade-out-up': {
          '0%': {
            backgroundColor: 'rgb(6,182,212,0.5);'
            // transform: 'translateY(0)'
          },
          '100%': {
            backgroundColor: 'rgb(6,182,212,0);'
            // transform: 'translateY(-10px)'
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
        'fade-out-up': 'fade-out-up 0.5s ease-out'
      }
    },
  },
  plugins: [],
}

