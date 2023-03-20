/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./assets/**/*.css ',
    './components/*.{vue,js}',
    './components/**/*.{vue,js}',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './*.{vue,js,ts}',
    './nuxt.config.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#780F89',
        secondary: '#F3F3F3',
        tertiary: '#DADCE0',
        tag: '#000080'
      },
      fontFamily: {
        primary: ['Comfortaa', 'ui-sans-serif', 'system-ui'],
        secondary: ['Lato', 'ui-sans-serif', 'system-ui']
      },
      backgroundImage: {
      },
      spacing: {
        108: '27rem',
        120: '30rem'
      }
    }
  },
  plugins: []
}
