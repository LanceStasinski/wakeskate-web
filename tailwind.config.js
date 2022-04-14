/* eslint-disable no-undef */
module.exports = {
  content: ['./app/**/*.hbs'],
  theme: {
    extend: {
      colors: {
        perfect: '#4dac26',
        good: '#b8e186',
        okay: '#f1b6da',
        poor: '#d01c8b',
        'wet-suit': '#00E0FF',
        'gray-1': '#444444',
        'gray-2': '#666666',
      },
      fontFamily: {
        'Poiret-One': ['Poiret One', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        'slide-down': {
          from: {
            top: '0',
          },
          to: {
            top: '14rem',
          },
        },
        'slide-up': {
          from: {
            top: '14rem',
          },
          to: {
            top: '-5rem',
          },
        },
      },
      animation: {
        'slide-down': 'slide-down 300ms ease-out forwards',
        'slide-up': 'slide-up 300ms ease-out forwards',
      },
    },
  },
  plugins: [],
};
