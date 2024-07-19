/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        greenLighter: 'hsl(148, 38%, 91%)',
        greenMedium: 'hsl(169, 82%, 27%)',
        redPrimary: 'hsl(0, 66%, 54%)',
        whiteNeutral: 'hsl(0, 0%, 100%)',
        greyMedium: 'hsl(186, 15%, 59%)',
        greyDarker: 'hsl(187, 24%, 22%)',
        linkColor: 'hsl(228, 45%, 44%)',
      },
      fontFamily: {
        'karla': ['karla', 'sans-serif']
      }
    },
  },
  plugins: [],
}

