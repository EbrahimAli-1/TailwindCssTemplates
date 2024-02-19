/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          softOrange: "hsl(35, 77%, 62%)",
          softRed: "hsl(5, 85%, 63%)",
        },
        neutral: {
          offWhite: "hsl(36, 100%, 99%)",
          grayishBlue: "hsl(233, 8%, 79%) ",
          darkGrayishBlue: "hsl(236, 13%, 42%)",
          veryDarkBlue: "hsl(240, 100%, 5%)",
        },
      },
      fontFamily: {
        Inter: ["Inter"],
      },
      boxShadow: {
        inside: "inset 5px 4px 8px 0 rgb(0 0 0 / 0.1)",
        outside: "3px 2px 5px -4px #2d2d2d",
      },
      fontSize: {
        "15px": "15px",
      },
      letterSpacing: {
        0.2: "0.2em",
      },
      spacing: {
        "45px": "45px",
      },
    },
  },
  plugins: [],
};
