/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // from https://tailwindcss.com/docs/screens
      'xs': "540px", 
      // ... default Theme screens
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        'xs': '.5rem',
        'mediumText': '1.00rem', //'1.25rem'
        'titleStyle': '1.5rem', //1.875rem', // Current size
      },
    },
  },
  variants: {
    extend: [],
  }
}
