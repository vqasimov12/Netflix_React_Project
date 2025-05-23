export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Roboto:["Roboto","sans-serif"],
        Poppins:["Poppins","serif"],
      },
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "scrollbar-width": "none", 
          "-ms-overflow-style": "none", 
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
