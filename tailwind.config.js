/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        one: "#0c100e",
        two: "#6d9a67",
        three: "#8fb889",
        four: "#c5e0bf",
        five: "#eef4ec",
        surface: "#141a16",
        raised: "#1c241e",
        muted: "#8b9d87",
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Outfit",
          "Plus Jakarta Sans",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 18px 50px -24px rgba(0, 0, 0, 0.55)",
        glow: "0 0 80px -20px rgba(109, 154, 103, 0.45)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
