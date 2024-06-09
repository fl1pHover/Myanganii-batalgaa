/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        tightest: "-.075em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".25em",
      },
      fontSize: {
        sm: "0.8rem",
        base: "0.875rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      screens: {
        xss: "310px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },

      aspectRatio: {
        "2/1": "2 / 1",
        "3/2": "3 / 2",
        "5/4": "5 / 4",
        "5/3": "5 / 3",
        "6/5": "6 / 5",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/img/hero-bg.jpg')",
      },
      colors: {
        color: {
          0: "#040404",
          1: "#777777",
          2: "#96dd1e",
          3: "#c5c5c5",
          white: "#ffffff",
        },
        gray: {
          0: "#f5f5f5",
          1: "#c5c5c5",
          2: "#777777",
          3: "#555555",
        },
        loader: {
          dark_green: "#00d084",
          yellow: "#fcb900",
        },
        stroke: {
          1: "#26242C",
        },
        // n: {
        //   1: "#FFFFFF",
        // },
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [
    // truncate
    require("@tailwindcss/line-clamp"),
  ],
};
