/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     colors: {
      colorPrimary: "#B6002C",
      textColor: "#000000"
     },
     fontFamily: {
      blinker: 'Blinker, sans-serif'
     },
    
    },
  },
  plugins: [],
};