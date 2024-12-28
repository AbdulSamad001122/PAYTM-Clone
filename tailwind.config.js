/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
       customfonts: ['"Inter"' , "sans-serif"],
      },

      colors: {
         "nilla": "#00baf2",
         "darknilla": "#002970"
      },

    },
  },
  plugins: [],
}

