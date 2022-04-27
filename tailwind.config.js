/* eslint-disable no-undef */
module.exports = {
  content: ['./app/**/*.hbs'],
  theme: {
    extend: {
      colors: {
        'green-1': '#46DD2D',
        'yellow-1': '#D4F411',
        'orange-2': '#FFA800',
        'red-1': '#FF2E00',
        'gray-1': '#444444',
        'gray-2': '#666666',
        'gray-3': '#2B2B2B',
        'blue-1': '#00E0FF',
        'orange-1': '#ED6E4D',
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
            top: '10rem',
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
