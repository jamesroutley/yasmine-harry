/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1D1D1B", // R: 29, G: 29, B: 27
          purple: "#931E3F", // R: 147, G: 30, B: 63
          orange: "#E66B12", // R: 230, G: 107, B: 18
          cream: "#FEF0E8", // R: 254, G: 240, B: 232
          green: "#9CAA56", // R: 156, G: 170, B: 86
          white: "#FFFFFF",
        },
        fontFamily: {
          sans: ["Cochin", "cursive"],
        },
      },
    },
  },
  plugins: [],
};
