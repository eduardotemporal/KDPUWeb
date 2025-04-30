/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add Inter font
      },
      colors: {
        'kpdu-background': '#0a0a0a',
        'kpdu-card': '#111827',
        'kpdu-accent': '#176a49',
        'kpdu-text-light': '#F3F4F6',
        'kpdu-text-dark': '#9CA3AF',
      },
    },
  },
  plugins: [],
}
