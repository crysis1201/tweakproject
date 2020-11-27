module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      textpink: '#E4DDDD',
      babypink: '#fef6f6',
      hoverpink: '#F5E8E8',
      brown: '#707070',
      darkbrown: '#302d2d',
      textbrown: '#4e4e4e',
      babyblue: '#F6F7FE',
      hoverblue: '#D9DCF1',
      darkblue: '#e9ecfe',
      dropblue: '#f0f2ff',
      progress1: '#ed7899',
      progress2: '#60be92',
      progress3: '#5594fd',
      progress4: '#f3c986',
      white: '#fffff',
      black: '#383838',
    },
    screens: {

      'mobile': '520px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'tablet': '850px',
      // => @media (min-width: 850px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    zIndex: {
      '-1': -1,
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '100': 100,
      'auto': 'auto',
    },
    bottom: {
      '120': 120,
     auto: 'auto',
     '1/2': '50%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
