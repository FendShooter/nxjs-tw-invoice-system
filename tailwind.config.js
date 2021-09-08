module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Roboto'],
      },
      screens: {
        print: { raw: 'print' },
        // => @media print { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
