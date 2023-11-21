/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto Condensed'", "sans-serif"],
      },
      gridTemplateColumns: {
        collections: "300px 1fr",
      },
      colors: {
        background: "#fff",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: {
          green: "var(--accent-green)",
          blue: "var(--accent-blue)",
        },
      },
    },
  },
  plugins: [],
};
