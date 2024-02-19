/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./out/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan1: "hsl(179, 62%, 43%)",
          cyan2: "hsl(179.48deg 47.15% 51.76%)",
          cyan3: "#6dd9da",
          brightYellow: "hsl(71, 73%, 54%)",
        },
        neutral: {
          lightGray: "hsl(204, 43%, 93%)",
          grayishBlue: "hsl(218, 22%, 67%)",
        },
      },
      fontFamily: {
        karla: ["karla"],
      },
      boxShadow: {
        inside: "inset 5px 4px 8px 0 rgb(0 0 0 / 0.1)",
      },
      fontSize: {
        "16px": "16px",
      },
    },
  },
  plugins: [],
};
