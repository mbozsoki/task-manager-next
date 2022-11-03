const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.3161rem",
      "2xl": "2.2795rem",
      "3xl": "3rem",
    },
    colors: {
      white: "#fff",
      alabaster: "#ECE9E1",
      "lilac-luster": "#bda5bcff",
      "burnt-sienna": {
        100: "#FDF1EC",
        200: "#FAD5C7",
        300: "#F6B8A2",
        400: "#F39C7C",
        500: "#ee764c",
        600: "#EC6332",
        700: "#E04B15",
        800: "#95320E",
        900: "#70250A",
      },
      "cadet-grey": "#8999aa",
    },
    minWidth: {
      100: "100px",
    },
    extend: {
      fontFamily: ["Poppins", ...defaultTheme.fontFamily.sans],
      lineHeight: {
        h1: "4rem",
        h2: "3rem",
        h3: "1.8rem",
        h4: "1.4rem",
      },
    },
  },
  plugins: [],
};

