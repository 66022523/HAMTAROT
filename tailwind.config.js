const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      ...colors,
      black: "#332941",
      navy: "#3B3486",
      purple: "#864AF9",
      yellow: "#F8E559",
      dark: "#3D3B40",
      blue: "#525CEB",
      gray: "#BFCFE7",
      pink: "#F8EDFF",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: [],
  },
};
