/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FBF6EC',
          100: '#F5EAD1',
          200: '#E9D29B',
          300: '#D9B668',
          400: '#C89C47',
          500: '#B8863B',
          600: '#9B6E2F',
          700: '#7C5625',
          800: '#5E411C',
          900: '#3E2B12',
        },
        cream: {
          50: '#FDFBF6',
          100: '#FBF6EC',
          200: '#F6EDD9',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        elegant: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(30, 20, 10, 0.15)',
        card: '0 4px 20px -6px rgba(30, 20, 10, 0.08)',
      },
      backgroundImage: {
        'hero-fade':
          'radial-gradient(ellipse at top left, #FBF6EC 0%, #FDFBF6 40%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
}
