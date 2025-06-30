/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#dc2626', // red-600
          500: '#ef4444'  // red-500
        }
      }
    },
  },
  plugins: [],
}