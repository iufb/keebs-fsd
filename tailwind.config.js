/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto Condensed'", "sans-serif"],
      },
      minWidth: {
        "20vw": "20vw",
      },
      minHeight: {
        "15vh": "15vh",
      },
      gridTemplateColumns: {
        collections: "300px 1fr",
        imageGallery: "80px 500px",
      },
      gridTemplateRows: {
        imageGallery: " 500px 80px",
      },
      colors: {
        background: "#fff",
        select: "var(--select)",
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
