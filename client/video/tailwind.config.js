/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        'custom-black': '#131313',
        'custom-red': '#FF4E4E',
      },
    },
  },
  plugins: [],
}
