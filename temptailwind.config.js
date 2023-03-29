/** @type {import('tailwindcss').Config} */
// Tailwind CSS 3.0 release = 2021-12-9
module.exports = {
  // purge: {
  //   content: [
  //   // Example content paths...
  //   './public/**/*.html',
  //   './src/**/*.{js,jsx,ts,tsx}',
  //   ],
  // },
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // fontSize: {
    //   sm: ['14px', '20px'],
    //   base: ['16px', '24px'],
    //   lg: ['20px', '28px'],
    //   xl: ['24px', '32px'],
    // },
    extend: {},
  },
  plugins: [],
}