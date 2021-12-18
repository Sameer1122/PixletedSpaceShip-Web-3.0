module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["OCR A Std"],
      },
      colors: {
        greenButon: "#00ff00",
        countDownRed: "#ff0000",
        barBackground: "#cccccc",
        heroSection: "#728079",
        cardSecton: "#808080",
        afterCard: "#A0A0A0",
        seventhGray: "#008500",
        parralexColor: "#008000",
        teamIcon: "#00AE00",
        footerIcon: "#515151",
        teamBorder: "#00E500",
        afterCardBorder: "#E5E5E5",
      },
      rotate: {
        270: "270deg",
        250: "250deg",
        165: "165deg",
        230: "230deg",
        75: "75deg",
        360: "360deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
