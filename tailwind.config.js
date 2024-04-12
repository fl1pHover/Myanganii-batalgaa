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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/img/hero-bg.jpg')",
      },
      colors: {
        color: {
          1: "#AC6AFF",
          2: "#96dd1e",
        },
        stroke: {
          1: "#26242C",
        },
        // n: {
        //   1: "#FFFFFF",
        // },
      },
    },
  },
  plugins: [],
};
