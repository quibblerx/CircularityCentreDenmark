/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "6xl": "4rem", // 64px
      },
      borderRadius: {
        32: "32px",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
        "nunito-sans": ["var(--font-nunito-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
