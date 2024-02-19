/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          almostWhite: "hsl(0, 0%, 98%)",
          mediumGray: "hsl(0, 0%, 41%)",
          almostBlack: "hsl(0, 0%, 8%)",
        },
      },
      fontFamily: {
        Epilogue: "Epilogue",
      },
      fontSize: {
        "18px": "18px",
      },
      boxShadow: {
        inside: "inset 5px 4px 8px 0 rgb(0 0 0 / 0.1)",
        outside: "3px 2px 5px -4px #2d2d2d",
      },
    },
  },
  plugins: [],
};
