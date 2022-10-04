/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/components/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#5267df",
        salmon: "#fa5959",
        grayDark: "#242a45",
        grayMedium: "#9194a2",
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 1024px) { ... }

        xl: "1200px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1400px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
