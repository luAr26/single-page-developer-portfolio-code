/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      ["dark-gray"]: "var(--color-dark-gray)",
      ["light-gray"]: "var(--color-light-gray)",
      white: "var(--color-white)",
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
    fontSize: {
      xl: ["5.5rem", { lineHeight: "1", letterSpacing: "-2.5px" }],
      l: ["3rem", { lineHeight: "1.1666667", letterSpacing: "-1.5px" }],
      m: ["1.5rem", { lineHeight: "1.3333333" }],
      body: ["1.125rem", { lineHeight: "1.5555556" }],
    },
    extend: {},
  },
  plugins: [],
};
