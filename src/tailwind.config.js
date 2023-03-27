/** @type {import('tailwindcss').Config} */
module.exports = {
  // variants: {
    // width: ["responsive", "hover", "focus"],
  // },
  // corePlugins: {
  //   width: false,
  // },
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
      },
      fontSize: {
        "base": "10px",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
      colors: {
        marmalade: "#aa7f00",
      }
    },
  },
  plugins: [],
}
