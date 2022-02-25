module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.jsx",
  ],
  theme: {
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      MyFont: ['"My Font"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    colors: {
      dustDark: "#0E1C2D",
      dustLight: "#85CEC0",
      dustM: "#588A88",
      dustring: "#2F4D56",
      dustrang: "#619793",
      white: "#ffffff",
      black: "#000000",
      red: "#DB524E",
    },
    extend: {
      backgroundImage: {
        "contact-pattern": "url('assets/images/pic3.jpg')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
