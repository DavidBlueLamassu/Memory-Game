/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        flashGreen: {
          '50%': { color: 'green' },
        },
        flashGreenTwo: {
          '50%': { color: 'green' },
        },
        flashRed: {
          '50%': { color: 'red' },
        }, 
        flashRedTwo: {
          '50%': { color: 'red' },
        },
        shake: {
          '0%, 100%': {transform: 'translateX(0)'},
          '10%': {transform: 'translateX(-20px)'},
          '20%': {transform: 'translateX(20px)'},
          '30%': {transform: 'translateX(-20px)'},
          '40%': {transform: 'translateX(20px)'},
          '50%': {transform: 'translateX(-20px)'},
          '60%': {transform: 'translateX(20px)'},
          '70%': {transform: 'translateX(-20px)'},
          '80%': {transform: 'translateX(20px)'},
        },
        shakeTwo: {
          '0%, 100%': {transform: 'translateX(0)'},
          '10%': {transform: 'translateX(-20px)'},
          '20%': {transform: 'translateX(20px)'},
          '30%': {transform: 'translateX(-20px)'},
          '40%': {transform: 'translateX(20px)'},
          '50%': {transform: 'translateX(-20px)'},
          '60%': {transform: 'translateX(20px)'},
          '70%': {transform: 'translateX(-20px)'},
          '80%': {transform: 'translateX(20px)'},
        }
      },
      animation: {
        flashGreen: 'flashGreen 1s 1',
        flashGreenTwo: 'flashGreenTwo 1s 1',
        flashRed: 'flashRed 1s 1',
        flashRedTwo: 'flashRedTwo 1s 1',
        shake: 'shake 1s 1',
        shakeTwo: 'shakeTwo 1s 1',
      },
      
    },
  },
  plugins: [],
}

