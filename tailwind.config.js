module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        'rs-red': '#e31e3c',
        'rs-white': '#fefefe',
        'rs-black': '#111111',
        'rs-grey': '#858585',
      },
      fontFamily: {
        header: ['Vollkorn', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 1.5rem',
          '@screen sm': {
            padding: '0 50px',
          },
          '@screen xl': {
            padding: '0 105px',
          },
        },
      });
    },
  ],
};
