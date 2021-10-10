module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      colors: {
        homeImg: '#DCE4F7',
        ARbg: '#80ffd4',
        page404A: "#1C1023",
        page404B: "#B53FA6",
        page404C: "#351945",
        blue: {
          dark: "#282C4D",
          light: "#E3EEF4",
        }
      },
      zIndex: {
        "-1": "-1",
      },
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'carattere': ['Carattere', 'cursive'],
      'sourceSerifPro': ['Source Serif Pro'],
      "fontVollkorn": ['Vollkorn'],
      'body': ['Open Sans'],
      'Arapey': ['Arapey', 'serif'],
      'Overpass': ['Overpass', 'sans-serif']
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}