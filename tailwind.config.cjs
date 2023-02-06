/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#4C0707'
        }
      }
    },
  },
  plugins: [],
}
