/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f1f5f9",
        secondary: "#f1f5f9",
        borderClr: "#27272a",
        darkBorderClr: "#e9e61fff",
        darkPrimary: "#27272a",
        darkSecondary: "#27272a",
      },
    },
  },
  plugins: [],
};
