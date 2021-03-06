module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("kutty"),
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
