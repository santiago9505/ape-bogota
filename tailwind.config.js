module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
      },
      fontFamily: {
        sena: ["JosefinSans-Medium"],
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
  variants: {
    extend: {},
  },
  plugins: [],
};
