/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'tn-maroon': {
          50: '#fdf4f4',
          100: '#fbe8e8',
          200: '#f8d5d5',
          300: '#f2b3b3',
          400: '#e88585',
          500: '#d95c5c',
          600: '#c13d3d',
          700: '#a02f2f',
          800: '#852929',
          900: '#6f2727',
          950: '#6E1A1A', // Deep Maroon - Temple walls
        },
        'tn-gold': {
          50: '#fffef0',
          100: '#fffadb',
          200: '#fff4b8',
          300: '#ffe98a',
          400: '#ffd84f',
          500: '#ffc225',
          600: '#f0a00b',
          700: '#c67906',
          800: '#9e5f0c',
          900: '#814e0d',
          950: '#D4AF37', // Temple Gold - Sacred ornaments
        },
        'tn-ivory': {
          50: '#FFF8E7', // Ivory Sand - Temple floors
          100: '#fdfcf0',
          200: '#fcf9e1',
          300: '#f9f4cc',
          400: '#f5ecad',
          500: '#f0e08a',
          600: '#e6cf5f',
          700: '#d4b942',
          800: '#b59536',
          900: '#967a2f',
        },
        'tn-lotus': {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d6',
          300: '#f5a9b5',
          400: '#ed778d',
          500: '#D97A8A', // Lotus Pink - Sacred flowers
          600: '#d9476b',
          700: '#be3358',
          800: '#9f2d4c',
          900: '#872a45',
        },
        'tn-turmeric': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#E8B923', // Turmeric Yellow - Auspicious color
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        'tn-stone': {
          50: '#f6f5f4',
          100: '#e7e5e4',
          200: '#d6d3d1',
          300: '#a8a29e',
          400: '#78716c',
          500: '#54473E', // Temple Stone Gray - Ancient carvings
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        'tn-peacock': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#005B8F', // Peacock Blue - Royal elegance
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        'tamil': ['Noto Sans Tamil', 'sans-serif'],
        'heading': ['Playfair Display', 'Cinzel', 'Cormorant Garamond', 'serif'],
        'body': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'kolam-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23D4AF37\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'temple-gradient': 'linear-gradient(135deg, #6E1A1A 0%, #a02f2f 50%, #D4AF37 100%)',
        'sacred-gradient': 'linear-gradient(to bottom, #FFF8E7 0%, #f9f4cc 50%, #D4AF37 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #D97A8A 0%, #E8B923 50%, #D4AF37 100%)',
      },
      boxShadow: {
        'temple': '0 10px 40px rgba(110, 26, 26, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.2)',
        'divine': '0 0 30px rgba(212, 175, 55, 0.4), 0 10px 30px rgba(110, 26, 26, 0.2)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(232, 185, 35, 0.3)',
      },
      borderRadius: {
        'temple': '0.5rem',
        'gopuram': '0 0 2rem 2rem',
      }
    },
  },
  plugins: [],
}
