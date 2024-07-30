/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/page/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'myBrown': '#B46F36',
        'chocolate': '#45270F',
        'myBeige': '#E6C0A1',
      },    
    },
    fontFamily: {
      lexend: ['Lexend Deca'],
      koulen: ['Koulen',]
    },
    
  },
  plugins: [],
}
