/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      colors: {
        ec_blue: '#120068',
        ec_orange: '#fc3f1a',
        ec_orange_hover: '#fc5833',
        ec_grey: '#b2bfcc',
        ec_background: '#FFFFFF',
        ec_text: '#1F2937',
        ec_border: '#374151',

        // Dark Mode Colors
        ec_blue_darkmode: '#0A043C',
        ec_orange_darkmode: '#8c220c',
        ec_orange_hover_darkmode: '#a63920',
        ec_grey_darkmode: '#1F2937',
        ec_background_darkmode: '#111827',
        ec_text_darkmode: '#D1D5DB',
        ec_border_darkmode: '#E5E7EB',
      },
    },
  },
  plugins: [],
};

// { name: "Deep Midnight Blue", color: "#0A043C" },
// { name: "Royal Navy Blue", color: "#02182B" },
