/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light : {
          primary : "#191D4A",
          backGround : "#F5F7FA",
          card : "#E3E8F1",
          text_primary : "#0F1235",
          text_secondary : "#6B7280",
          accent : "#00D1FF",
          red : "#FF4D6D",
          emeraled : "#2ECC71",
        },
        dark : {
          primary : "#191D4A",
          backGround : "#0B0D22",
          card : "#1F223B",
          text_primary : "#E5E7EB",
          text_secondary : "#A1A8C1",
          accent : "#4FB8FF",
          red : "#FF6B81",
          emeraled : "#3EDC91",
        }
      },
    },
  },
  plugins: [],
}