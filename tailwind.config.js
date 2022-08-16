/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-primary": " #e63946ff",
        "theme-gray": "#f1faeeff",
        "theme-light": "#a8dadcff",
        "theme-secondary-light": "#457b9dff",
        "theme-secondary-dark": "#1d3557ff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
