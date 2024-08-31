/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          light: "#FFCC66",
          base: "#FFC34C",
          dark: "#CC8800",
          darkest: "#996600",
        },
        primary: {
          light: "#93C5FD",
          base: "#60A5FA",
          dark: "#3B82F6",
          darkest: "#1F3C93",
        },
        dark: {
          title: "#F1F5F9",
          paragraph: "#CBD5E1",
          fill: "#0F172A",
          foregroundFill: "#1E293B",
          navbarFill: "#334155",
          footerFill: "#334155",
        },
        light: {
          title: "#F1F5F9",
          paragraph: "#CBD5E1",
          fill: "#09090B",
          foregroundFill: "#18181B",
          navbarFill: "#27272A",
          footerFill: "#27272A",
        },
      },
      fontFamily: {
        display: ["Lexend", "Arial", "sans-serif"],
        body: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
