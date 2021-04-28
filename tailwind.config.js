module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: ["active", "hover"],
      spacing: {
        72: "18rem",
        84: "21rem",
        88: "22rem",
        90: "23rem",
        96: "24rem",
        103: "27rem",
        105: "30rem",
        110: "31rem",
        111: "32rem",
        115: "40rem",
        120: "50rem",
        125: "60rem",
      },
      fontSize: {
        xxxs: ".5rem",
        xxs: ".6rem",
        xss: "0.68rem",
        standard: "0.84rem",
        titles: "0.9rem",
      },
      screens: {
        xs: "589px",
        sm: "640px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "2034px",
      },
      colors: {
        principal: {
          100: "#10069F",
          200: "#FFB500",
          300: "#FF671F",
        },
        gray: {
          100: "rgba(0,0,0,.05)",
          222: "#EDEDED",
        },
        blue: {
          450: "#005DDA",
          475: "#5497B5",
          550: "#0D1325",
        },
        green: {
          450: "#5BBD1F",
        },
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        sena: ["Josefin Sans"],
      },
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
    },
  },
  variants: {},
  plugins: [],
};
