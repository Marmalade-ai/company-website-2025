/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*/{js,jsx,ts,tsx}"],
  darkMode: false,
  variants: {
    extend: {},
  },
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}