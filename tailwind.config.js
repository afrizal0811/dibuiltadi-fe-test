/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'jet-stream': {
          light: '#EBF1F1',
          DEFAULT: '#BCD1D2',
          dark: '#8CB0B2',
        },
        'eerie-black': '#15181C',
      },
    },
  },
  plugins: [],
}
