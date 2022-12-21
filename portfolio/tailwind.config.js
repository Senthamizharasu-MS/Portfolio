/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        win: "url('./Component/Img/oldwin.jpg')",
        blank: "url('./Component/Img/blank.jpeg')",
      },
      borderRadius: {
        rad: "5px 0px 0px 5px",
      },
    },
  },
  plugins: [],
}
