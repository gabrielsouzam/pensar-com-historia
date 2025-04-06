export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        brown: {
          50: '#F5F5DC',
          100: '#E2D4C7',
          150: '#F5F5DC',
          200: '#C6B19F',
          300: '#C2B280 ',
          400: '#8A795D',
          500: '#5A4633',
          600: '#4B392B',
          700: '#3D2D23',
          800: '#3C2F22',
          900: '#1F1612',
        },
      },
    },
  },
  plugins: [],
}
