module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
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
