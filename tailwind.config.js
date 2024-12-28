/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        desRed: 'hsl(0, 36%, 70%)',
        softRed: 'hsl(0, 93%, 68%)',
        darkGrayRed: 'hsl(0, 6%, 24%)',
        grad1Start: 'hsl(0, 0%, 100%)',
        grad1End: 'hsl(0, 100%, 98%)',
        grad2Start: 'hsl(0, 80%, 86%)',
        grad2End: 'hsl(0, 74%, 74%)',
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans serif'],
      },
      boxShadow: {
        defBtn: '0 10px 10px 4px hsla(0, 6%, 24%, 0.1)',
        hvrBtn: '0 10px 10px 5px hsla(0, 6%, 24%, 0.2)',
      },
    }
  },
  plugins: [],
}

