module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      colors: {
        "main-colors": {
          blue: "#120068",
          orange: "#fc3f1a",
        },
      },
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      },
    },
  },
  variants: {
    extend: {
      height: ["group-hover"],
    },
  },
  plugins: [],
};
