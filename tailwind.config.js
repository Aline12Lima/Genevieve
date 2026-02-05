/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
     surface: {
    base: "#000000",
    card: "#111111",
    soft: "#121212",
    hover: "#181818",
  },

  text: {
    primary: "#ffffff",
    secondary: "#9ca3af", // gray-400
    muted: "#6b7280",     // gray-500
    ghost: "rgba(255,255,255,0.05)",
  },

  border: {
    soft: "rgba(255,255,255,0.05)",
    medium: "rgba(255,255,255,0.1)",
    strong: "rgba(255,255,255,0.2)",
  },

  accent: {
    blue: "#00a3ff",
  },
    },
    },
  },
  plugins: [],
};
