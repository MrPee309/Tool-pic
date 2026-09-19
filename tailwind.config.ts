import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0B1B3A",
          800: "#14284F",
          700: "#22375F",
        },
        brand: {
          DEFAULT: "#1F5EFF",
          dark: "#1748CC",
          50: "#F2F6FF",
          100: "#E3ECFF",
          200: "#C7D8FF",
        },
        muted: "#5B6B85",
        line: "#E3E8F0",
        surface: "#F7F9FC",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
