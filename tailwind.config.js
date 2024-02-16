const colors = require("tailwindcss/colors");
const hamColors = require("./assets/json/colors.json");

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      ...colors,
      ...hamColors,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        hamtarot: {
          primary: hamColors["minsk"].DEFAULT,
          warning: hamColors.portica.DEFAULT,
          secondary: hamColors["electric-violet"].DEFAULT,
          accent: hamColors["royal-blue"].DEFAULT,
          neutral: hamColors["ship-gray"].DEFAULT,
          "base-100": hamColors.blackcurrant.DEFAULT,
          "base-content": hamColors["blue-chalk"].DEFAULT,
        },
      },
    ],
    darkTheme: "hamtarot",
  },
};
