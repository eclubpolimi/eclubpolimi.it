module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      colors: {
        ec_blue: "#120068",
        ec_orange: "#fc3f1a",
        ec_grey: "#b2bfcc",
      },
    },
  },
  plugins: [],
};
