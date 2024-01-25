/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        quicksand: ["var(--font-quicksand)"],
      },
      colors: {
        primary: "#46a587",
        secondary: "#b4fae4",
      },
      boxShadow: {
        btn: "0px 2px 8px rgba(0,0,0,0.16)",
      },
    },
  },
  plugins: [],
};
