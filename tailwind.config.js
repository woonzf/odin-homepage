/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/template.html',
            './src/js/dark-mode.js',
            './src/js/projects.js'],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'selector',
}