/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainPurple: "#5D37F3",
      },
      fontFamily: {
        sans: ["FiraGo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
