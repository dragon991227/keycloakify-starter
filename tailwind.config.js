/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter, sans-serif"],
      },
      colors: {
        primary: "#3598db",
        secondary: "#AC2DFE",

        layer: {
          light: {
            50: "#ffffff",
            100: "#ebebeb",
            200: "#d6d6d6",
            300: "#c2c2c2",
            400: "#adadad",
            500: "#999999",
            600: "#858585",
            700: "#707070",
            800: "#5c5c5c",
            900: "#474747",
          },

          dark: {
            50: "#b8b8b8",
            100: "#a3a3a3",
            200: "#8f8f8f",
            300: "#7a7a7a",
            400: "#666666",
            500: "#525252",
            600: "#3d3d3d",
            700: "#292929",
            800: "#141414",
            900: "#000000",
          },

          secondary: {
            50: "#fbf4ff",
            100: "#f5e5ff",
            200: "#edd0ff",
            300: "#dfacff",
            400: "#cb77ff",
            500: "#b843ff",
            600: "#ac2dfe",
            700: "#900fe1",
            800: "#7a12b7",
            900: "#641093",
          },

          primary: {
            50: "#f0f9ff",
            100: "#e0f1fe",
            200: "#b9e4fe",
            300: "#7ccffd",
            400: "#35b8fa",
            500: "#0ca0eb",
            600: "#007fc9",
            700: "#0165a3",
            800: "#065586",
            900: "#0b476f",
          },
        },
      },
    },
  },
  plugins: [],
};
