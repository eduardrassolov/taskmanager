/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        text: "rgb(2, 10, 1)",
        background: "rgb(255, 255, 255)",
        primary: "rgb(32, 40, 106)",
        secondary: "rgb(194, 235, 188)",
        accent: "rgb(169, 50, 64)",

        priorityNo: "#94a3b8",
        priorityLow: "#f6e05e",
        priorityMedium: "#ecc94b",
        priorityHigh: "#fbbf24",

        bgMain: "#f5f5f5",
        bgNav: "#ffffff",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        wedgewood: {
          50: "#f2f9f9",
          100: "#ddeff0",
          200: "#bfe0e2",
          300: "#92cace",
          400: "#5faab1",
          500: "#438e96",
          600: "#3b757f",
          700: "#356169",
          800: "#325158",
          900: "#2d464c",
          950: "#1a2c32",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
});
