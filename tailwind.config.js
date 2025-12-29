/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui'],
        caption: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          DEFAULT: '#0b69ff',
          light: '#60a5fa',
          dark: '#08306b',
        },
        accent: '#7c3aed',
        surface: '#f8fafc',
        muted: '#6b7280',
      },
    },
  },
  plugins: [],
};