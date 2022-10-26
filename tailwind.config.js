/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      colors: {
        ec_blue: "#120068",
        ec_orange: "#fc3f1a",
        ec_orange_hover: "#fc5833",
        ec_grey: "#b2bfcc",
      },
    },
  },
  plugins: [],
};
