/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'roti-bg': "url('/src/assets/background-roti.jpg')",
        'roti-logo': "url('/src/assets/myroti.png')",
      }
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwind-glassmorphism'),
  ],
}
