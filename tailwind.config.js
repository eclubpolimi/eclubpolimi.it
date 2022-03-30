module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      colors: {
        blue: "#120068",
        orange: "#fc3f1a",
      },
    },
  },
  plugins: [],
};
