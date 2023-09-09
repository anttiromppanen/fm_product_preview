/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        userDarkCyan: "hsl(158, 36%, 37%)",
        userCream: "hsl(30, 38%, 92%)",
        userVeryDarkBlue: "hsl(212, 21%, 14%)",
        userVeryDarkGreen: "hsl(156, 42%, 18%)",
        userDarkGrayishBlue: "hsl(230, 3%, 41%)",
        userWhite: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}