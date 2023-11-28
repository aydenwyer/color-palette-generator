/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'soft': '0 0 15px rgb(0 0 0 / .1)'
      },
      gridTemplateColumns: {
        'autofit': 'repeat(auto-fit, 200px)'
      }
    },
  },
  plugins: [],
}

