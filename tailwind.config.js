/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "navbar-dark": "#1B263B",
        "navbar-light": "#055394",
        "footer-dark": "#0B1F3A",
        "footer-light": "#102A4D",
        "main-red": "#8C3B2A",
        "main-blue": "#055394",
        "button-blue": "#1E507F",
        "quote-red": "#A88C7A",
        "bg-gray-p": "#F5F7FA",
        "line-cooper-hero-footer": "#C1582A",
        "blue-overlay": "#3362BB",
      },
    },
  },
  plugins: [],
};

