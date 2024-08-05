/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./component/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botonColor: '#6078b8',
        circleColor: '#FBB110',
        borderColor: '#ccc'
      },
    },
  },
  plugins: [],
}

