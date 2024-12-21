/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0px)", fontSize: "16px", color: "#ffffff" },
          "100%": { transform: "translateY(-12px)", fontSize: "10px", color: "#ffffff" },
        },
        focusLost: {
          "0%": { transform: "translateY(-12px)", fontSize: "10px", color: "#ffffff" },
          "100%": { transform: "translateY(0px)", fontSize: "16px", color: "#ffffff" },
        },
      },
      animation: {
        floatUp: "floatUp 0.2s ease-out forwards",
        focusLost: "focusLost 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
