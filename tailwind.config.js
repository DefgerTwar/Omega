/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        accent: {
          base: "#FFC34C",
        },
        secondary: {
          base: "#60A5FA",
        },
        gray: {
          50: "#334155",
          100: "#ffffff",
          200: "#F8FAFC",
          300: "#E2E8F0",
          400: "#E5E7EB",
          700: "#404040",
          800: "#2A2A2A",
          900: "#292524",
        },
      },
    },
  },
  plugins: [],
};
