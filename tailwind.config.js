/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/**/*.{liquid,json}',
    './sections/**/*.liquid',
    './snippets/**/*.liquid'
  ],
  theme: {
    extend: {
      // Extend Tailwind's default configuration here
    },
  },
  plugins: [],
}
