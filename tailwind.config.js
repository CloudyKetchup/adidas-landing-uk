module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backdropFilter: { // defaults to {}
      'none': 'none',
      'blur': 'blur(20px)',
    }
  },
  variants: {
    extend: {},
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-filters'),
  ]
}
