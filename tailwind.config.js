/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      width: {
        125: "25.5rem",
        145: "45rem",
      },
      height: {
        130: "38.75rem",
      },
      colors: {
        customPurple: "#5D37F3",

        customYellow: {
          100: "#F4EDEA",
          900: "#D6961C",
        },
        customGreen: {
          100: "#1CD67D",
          900: "#15C972",
        },
        customViolet: {
          100: "#B11CD6",
          900: "#B71FDD",
        },
        customRed: {
          100: "#FA5757",
          900: "#DC2828",
        },
        customNaturalGreen: {
          100: "#70CF25",
          900: "#60BE16",
        },
        customCyan: {
          100: "#E0EFF4",
          900: "#1AC7A8",
        },
      },
      fontFamily: {
        sans: ["FiraGo", "sans-serif"],
      },
      backgroundImage: {
        "card-image": "url('public/card-img.jpg')",
      },
    },
  },
  plugins: [],
};
