/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#FFF8EB',
          100: '#FFEFC6',
          200: '#FFDB82',
          300: '#FFC94D',
          400: '#F5A623',
          500: '#E8920F',
          600: '#CC7A0A',
          700: '#A25D0C',
          800: '#854A10',
          900: '#713D13',
        },
        cream: {
          50: '#FFFDF7',
          100: '#FFF9EB',
          200: '#FFF3D6',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#2D2D2D',
          900: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
};

