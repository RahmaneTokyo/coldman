/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      fredoka: ['Fredoka One', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
