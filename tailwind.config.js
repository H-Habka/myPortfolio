/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        one: "#070709",
        two: "#c9a25a",
        three: "#e8c97a",
        four: "#f3e6c5",
        five: "#f6f1e8",
        surface: "#111114",
        raised: "#18181d",
        muted: "#9b9488",
        wa: "#25d366",
        li: "#0a66c2",
      },
      fontFamily: {
        sans: [
          "Manrope",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Syne",
          "Manrope",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 24px 60px -28px rgba(0, 0, 0, 0.7)",
        glow: "0 0 90px -18px rgba(201, 162, 90, 0.55)",
      },
      maxWidth: {
        content: "74rem",
      },
      letterSpacing: {
        brand: "0.18em",
      },
    },
  },
  plugins: [],
};
