/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'east-hope-red': '#d32f2f',
        'east-hope-red-dark': '#c8102e',
        'east-hope-red-light': '#e63946',
        'background-light': '#f8f9fa',
        'text-primary': '#333333',
        'text-secondary': '#666666',
      },
      fontFamily: {
        'sans': ['Noto Sans SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}