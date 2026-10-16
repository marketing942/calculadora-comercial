import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Identidade visual CPPEM (mesmos tokens da Central de Ajuda)
        gold: {
          DEFAULT: "#af9256",
          light: "#c9ae7a",
          pale: "#f0dcb0",
          dark: "#8a7040",
        },
        base: "#0a0a0b",
        surface: { DEFAULT: "#111115", 2: "#18181e", 3: "#1f1f28" },
        ink: { DEFAULT: "#e8e4d9", soft: "#ada99b", muted: "#87847a" },
        line: { DEFAULT: "rgba(175,146,86,0.18)", active: "rgba(175,146,86,0.55)" },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        ui: ["var(--font-ui)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
