/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '540': '540px'
      },
      boxShadow:{
        'form': '0 15px 35px 0 rgba(60,66,87,80), 0 5px 15px 0 rgba(0,0,0,0.12)',
        'inputfocus': '0 0 0 2px #F472B6'
      },
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors:{
        'blue': '#1fb6ff',
        'boulder': 'rgba(122, 122, 122, 1)',
        'logcabin':'rgba(33, 33, 33, 1)',
        'licorice':' rgba(18, 18, 18, 1)',
        'seashell':' rgba(241, 241, 242, 1)',
        'primary':' #1eafde',
        'hoverdark': '#111111',
      },
      backgroundImage: {
        'gradient': "linear-gradient(0deg,#121212 0%, #181818 100%)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}