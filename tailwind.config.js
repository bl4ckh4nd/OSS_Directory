/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cloudBurst: '#1e2f43',
        fiord: '#4a576d',
        regentGray: '#7c8e9c',
        casper: '#a6b8c9',
        linkWater: '#d9e6f2',
      },
    },
  },
  plugins: [],
};