/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(223, 87%, 63%)",
        },
        neutral: {
          gray: "hsl(0, 0%, 59%)",
          veryDarkBlue: "hsl(209, 33%, 12%)",
        },
      },
      fontFamily: {
        libre: ["Libre Franklin"],
      },
      boxShadow: {
        inside: "inset 5px 4px 8px 0 rgb(0 0 0 / 0.1)",
      },
      fontSize: {
        "20px": "20px",
      },
      spacing: {
        "38px": "38px",
      }
    },
  },
  plugins: [],
};
