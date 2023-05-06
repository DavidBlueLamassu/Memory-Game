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
        }
      },
      animation: {
        flashGreen: 'flashGreen 1s 1',
        flashGreenTwo: 'flashGreenTwo 1s 1',
        flashRed: 'flashRed 1s 1',
        flashRedTwo: 'flashRedTwo 1s 1',
      },
      
    },
  },
  plugins: [],
}

