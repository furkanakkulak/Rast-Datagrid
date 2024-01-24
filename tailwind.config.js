/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#744BFC"
      },
      fontFamily: {
        "poppins": "Poppins"
      }
    },
  },
  plugins: [],
}
