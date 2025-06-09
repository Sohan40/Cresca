/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        // “max-sm-864” means “when the viewport is 864px or smaller”
        "max-sm-864": { max: "864px" }
      }
    }
  },
  plugins: []
}