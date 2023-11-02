/** @type {import('tailwindcss').Config} */
import { style } from './customTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:style,
    fontFamily:{
      'pop':['Poppins', 'sans-serif']

    }, 
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

