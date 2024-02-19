import hamColors from "./assets/json/colors.json";

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        ...hamColors,
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        hamtarot: {
          primary: hamColors["electric-violet"].DEFAULT,
          secondary: hamColors["minsk"].DEFAULT,
          accent: hamColors["royal-blue"].DEFAULT,
          neutral: hamColors["ship-gray"].DEFAULT,
          "base-100": hamColors.blackcurrant.DEFAULT,
          "base-content": hamColors["blue-chalk"].DEFAULT,
          warning: hamColors.portica.DEFAULT,
        },
      },
    ],
    darkTheme: "hamtarot",
  },
};
