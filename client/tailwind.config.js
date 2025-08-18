/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('../tailwind.config.ts')],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
}
