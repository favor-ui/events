module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fff9db',
          100: '#fff3b4',
          200: '#ffec8d',
          300: '#ffe566',
          400: '#ffde3e',
          500: '#ffd717', // Your desired gold color
          600: '#cca01d',
          700: '#d4af37',
          800: '#665e0d',
          900: '#3d3f09',
        },
        sky:{
          950:'#082f49'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};






// module.exports = {
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }