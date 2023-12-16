/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideRight: "slideRight 30s linear infinite",
      },
    },
  },
  plugins: [],
};
