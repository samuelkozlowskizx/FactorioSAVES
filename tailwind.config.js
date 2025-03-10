/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom': {
          500: 'var(--color-custom-500, #FF0000)',
          600: 'var(--color-custom-600, #E60000)',
        }
      }
    },
  },
  plugins: [],
};