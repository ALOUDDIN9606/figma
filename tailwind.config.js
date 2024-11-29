import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "rasm": "url('./src/assets/bg.jpg')",
      }
    },
    colors:{
      ...colors,
      primary: "crimson",
      lorem: "#0f0",
    },
    fontFamily:{
      "edu": ["Edu"],
      "dancing": ["Dancing", "sans-serif"],
    },
    container:{
      center: true,
      screens: {
        ms: '300px',
        xs: '600px',
        sm: '700px',
        md: '850px',
        lg: '1080px',
        xl: '1280px',
        '2xl': '1330px',
      },
      padding: "1rem"
    }
  },
  darkMode: "class",
  plugins: [],
}