/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#42ADB6",
        "bleu": "#000091",
        "lime" : "#6AC76A",
        secondary: {
          "text": 'gray-900'
        },
        status: {
          "active-text": 'green-800',
          "active-bg": 'green-100',
          "yellow-text": '#975A16',
          "yellow-bg": '#F6E05E',
          "blue-text": '#2C5282',
          "blue-bg": '#63B3ED',
        }
      },
    },
  },
  plugins: [],
}