/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        trend: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
}

