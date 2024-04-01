/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Primary: {
          moderateViolet: "hsl(263, 55%, 52%)",
          veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
          veryDarkBlackishBlue: "hsl(219, 29%, 14%)",
          white: "hsl(0, 0%, 100%)",
        },
        Neutral: {
          lightGray: "hsl(0, 0%, 81%)",
          lightGrayishBlue: "hsl(210, 46%, 95%)",
        },
      },
      fontSize: {
        body: "13px",
      },
      fontFamily: {
        barlowSemiCondensed: "Barlow Semi Condensed",
      },
    },
  },
  plugins: [],
};
