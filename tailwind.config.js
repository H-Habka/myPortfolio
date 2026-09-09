/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070d14",
        navy: "#0b1622",
        surface: "#101c2b",
        raised: "#162536",
        line: "#94c5e8",
        paper: "#e8f1f8",
        muted: "#8aa0b5",
        cyan: "#3ee0d0",
        signal: "#5b8cff",
        violet: "#8b7cff",
        wa: "#25d366",
        li: "#0a66c2",
      },
      fontFamily: {
        sans: [
          "Outfit",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Instrument Serif",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        mono: [
          "IBM Plex Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 28px 80px -36px rgba(0, 0, 0, 0.72)",
        glow: "0 0 80px -16px rgba(62, 224, 208, 0.45)",
        signal: "0 0 90px -20px rgba(91, 140, 255, 0.5)",
      },
      maxWidth: {
        content: "72rem",
      },
      letterSpacing: {
        brand: "0.22em",
        kicker: "0.28em",
      },
      borderRadius: {
        sheet: "1.75rem",
      },
    },
  },
  plugins: [],
};
