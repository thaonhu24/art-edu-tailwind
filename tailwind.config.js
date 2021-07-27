module.exports = {
  purge: {
    enabled: true,
    content: ['./public/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        test: ['Zen Tokyo Zoo', 'cursive'],
        title: ['Playfair Display', 'serif']
      },
      backgroundImage: theme => ({
        'background': "url('img/background.jpg')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
