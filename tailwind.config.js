/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        mespo: {
          page: "#F5F5F5",
          pocket: "#F2F2F2",
          neon: "#39FF14",
          muted: "#8E8E93",
          tab: "#0C0C0C",
        },
      },
    },
  },
  plugins: [],
};
