const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      pnormal: ["poppins_normal", "sans-serif"],
      psemibold: ["poppins_semiBold", "sans-serif"],
      pbold: ["poppins_bold", "sans-serif"],
    },
    colors: {
      c_blue: "#2405F2",
      tint_blue: "#1C1E53",
      dark_blue: "#282938",
      c_yellow: "#FCD980",
      c_gray: "#F4F6FC",
      c_accent: "#EEF4FA",
    },
  },
  plugins: [],
});
