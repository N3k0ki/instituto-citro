/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        citro: {
          orange: '#C85227',
          hover: '#b0431f',
          dark: '#5C3D2E',
        }
      }
    },
  },
  plugins: [],
}