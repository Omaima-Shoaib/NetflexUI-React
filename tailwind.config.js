/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        "dark-red": "#b81d25",
        "light-red":'#e50915',
        "custom-black":"#21201e",
        "custom-white":'#f5f6f1'
      }
    },
  },
  plugins: [],
};
