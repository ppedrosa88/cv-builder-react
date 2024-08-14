/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-overlay': 'rgba(0, 0, 0, 0.87)',
        'black-overlay-hover': 'rgba(0, 0, 0, 0.05)',
        'primary': '#f3f3f3',
        'primary-link': '#1976d2',
        'primary-link-hover': 'rgba(0, 0, 0, 0.5)',
        'divider': 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

