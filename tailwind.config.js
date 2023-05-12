/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        //flashGreen effects are used to indicate a correct guess for a click event; flahsRed effects are used to indicate an incorrect
        //guess. Two animations are used for each color as they are set to flash only once upon a change of state (resulting from a click 
        //event). Accordingly, as no effect will arise without changing to a new animation there is conditional code in Game.js to
        //alternate from one version of each color animation to the other. Each animation lasts one second (see animation key below) and 
        //flashes from white to color and back to white. The code for these flash color effects is based upon the examples given for
        //color-change animations in W3 Schools: "CSS Animations", W3 Schools, last viewed 12 May 2023: 
        //https://www.w3schools.com/css/css3_animations.asp
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

        //The shake effect is used to emphasize that the user has chosen a wrong answer in conjuction with the flash red animations. Upon
        //clicking an incorrect answer the div containing image cards will 20px to the left and right four times over a period of one 
        //second. The cycle iterates once (see animation key below). There are two version of the shake animation so that the effect may
        //be re-activated upon a change of state generated by a click event. Conditional code in Game.js allows an alternations between
        //the two effects. The code for these effects is based upon the "headShake" animation from: Nidhi D, "TailwindCSS -- How to Design
        //Custom Animations", Canopas (30 June 2022), last viewed 12 May 2023: 
        //https://blog.canopas.com/tailwind-css-custom-animations-b041a1310aab
        shake: {
          '0%, 100%': { transform: 'translateX(0)'},
          '10%': { transform: 'translateX(-20px)'},
          '20%': { transform: 'translateX(20px)'},
          '30%': { transform: 'translateX(-20px)'},
          '40%': { transform: 'translateX(20px)'},
          '50%': { transform: 'translateX(-20px)'},
          '60%': { transform: 'translateX(20px)'},
          '70%': { transform: 'translateX(-20px)'},
          '80%': { transform: 'translateX(20px)'},
        },
        shakeTwo: {
          '0%, 100%': { transform: 'translateX(0)'},
          '10%': { transform: 'translateX(-20px)'},
          '20%': { transform: 'translateX(20px)'},
          '30%': { transform: 'translateX(-20px)'},
          '40%': { transform: 'translateX(20px)'},
          '50%': { transform: 'translateX(-20px)'},
          '60%': { transform: 'translateX(20px)'},
          '70%': { transform: 'translateX(-20px)'},
          '80%': { transform: 'translateX(20px)'},
        },

        //This animation is used in Home.js and allows the game title to be displayed with eye-catching expanding letters which 
        //change color from red to white. The animation lasts 5 seconds and goes through one iteration (see animation key below). 
        //It is used for both main title elements ("MEMORY" and "GAME"). The code for this effect is based upon the "heartBeat" 
        //animation from: Nidhi D, "TailwindCSS -- How to Design Custom Animations", Canopas (30 June 2022), last viewed 12 May 2023: 
        //https://blog.canopas.com/tailwind-css-custom-animations-b041a1310aab
        textGrow: {
          '0%': {transform: 'scale(0.1)'},
          '0%': {color: 'red'},
          '2%': {transform: 'scale(0.15)'},
          '4%': {transform: 'scale(0.2)'},
          '6%': {transform: 'scale(0.25)'},
          '8%': {transform: 'scale(0.3)'},
          '10%': {transform: 'scale(0.35)'},
          '12%': {transform: 'scale(0.4)'},
          '14%': {transform: 'scale(0.45)'},
          '16%': {transform: 'scale(0.5)'},
          '18%': {transform: 'scale(0.55)'},
          '20%': {transform: 'scale(0.6)'},
          '22%': {transform: 'scale(0.65)'},
          '24%': {transform: 'scale(0.7)'},
          '26%': {transform: 'scale(0.75)'},
          '28%': {transform: 'scale(0.8)'},
          '30%': {transform: 'scale(0.85)'},
          '32%': {transform: 'scale(0.9)'},
          '34%': {transform: 'scale(0.95)'},
          '36%': {transform: 'scale(1)'},
          '100%': {transform: 'scale(1)'},
        },

        //This animation is not used at present but may be employed in later versions of the game. Like the textGrow animation above
        //it expands letters in an eye-catching manner to display the title of the game. However, the effect is delayed and is meant
        //to be used in conjunction with textGrow so that one part of the game expands first followed by the second. Like textGrow
        //this animation lasts 5 seconds and undergoes only one iteration (see animation key below). The code for this effect is based 
        //upon the "heartBeat" animation from: Nidhi D, "TailwindCSS -- How to Design Custom Animations", Canopas (30 June 2022), 
        //last viewed 12 May 2023: https://blog.canopas.com/tailwind-css-custom-animations-b041a1310aab
        textGrow2: {
          '0%': {transform: 'scale(0.1)'},
          '0%': {color: 'black'},
          '38%': {transform: 'scale(0.1)'},
          '38%': {color: 'black'},
          '40%': {transform: 'scale(0.15)'},
          '40%': {color: 'red'},
          '42%': {transform: 'scale(0.2)'},
          '44%': {transform: 'scale(0.25)'},
          '46%': {transform: 'scale(0.3)'},
          '48%': {transform: 'scale(0.35)'},
          '50%': {transform: 'scale(0.4)'},
          '52%': {transform: 'scale(0.45)'},
          '54%': {transform: 'scale(0.5)'},
          '56%': {transform: 'scale(0.55)'},
          '58%': {transform: 'scale(0.6)'},
          '60%': {transform: 'scale(0.65)'},
          '62%': {transform: 'scale(0.7)'},
          '64%': {transform: 'scale(0.75)'},
          '66%': {transform: 'scale(0.8)'},
          '68%': {transform: 'scale(0.85)'},
          '70%': {transform: 'scale(0.9)'},
          '72%': {transform: 'scale(0.95)'},
          '74%': {transform: 'scale(1)'},
          '100%': {transform: 'scale(1)'},
        },

        //This animation is not used at present but may be employed in later versions of the game. The animation would move an object
        //incrementally downward 75px over a period of 5 seconds. It is currently set to infinite iterations (see animation key below).
        //The code for these effects is based upon the "headShake" animation from: Nidhi D, "TailwindCSS -- How to Design
        //Custom Animations", Canopas (30 June 2022), last viewed 12 May 2023: 
        //https://blog.canopas.com/tailwind-css-custom-animations-b041a1310aab
        textFall: {
          '0%': {transform: 'translateY(0px)'},
          '2%': {transform: 'translateY(5px)'},
          '4%': {transform: 'translateY(10px)'},
          '6%': {transform: 'translateY(15px)'},
          '8%': {transform: 'translateY(20px)'},
          '10%': {transform: 'translateY(25px)'},
          '12%': {transform: 'translateY(30px)'},
          '14%': {transform: 'translateY(35px)'},
          '16%': {transform: 'translateY(40px)'},
          '18%': {transform: 'translateY(45px)'},
          '20%': {transform: 'translateY(50px)'},
          '22%': {transform: 'translateY(55px)'},
          '24%': {transform: 'translateY(60px)'},
          '26%': {transform: 'translateY(65px)'},
          '28%': {transform: 'translateY(70px)'},
          '30%': {transform: 'translateY(75px)'},
          '100%': {transform: 'translateY(75px)'},
        },

        //This animation begins with a series of rapid rotations and then cyles through a series of color changes (from yellow to 
        //red to blue to green). The full animation takes 60 second to run and is current set to infinite iterations (see animation 
        //key below). This animation is attached to the BEGIN link on Home.js to bring the user's eye to the clickable element
        //which initiates the game. The code for color effects is based upon the examples given for color-change animations in W3 Schools:
        //"CSS Animations", W3 Schools, last viewed 12 May 2023: https://www.w3schools.com/css/css3_animations.asp. The rotation effect
        //derives from the "flip horizontal" animation from Nidhi D, "TailwindCSS -- How to Design Custom Animations", Canopas (30 June 
        //2022), last viewed 12 May 2023: https://blog.canopas.com/tailwind-css-custom-animations-b041a1310aab and from the "waving-hand"
        //animation from Nitin Ranganath, "Creating custom animations with Tailwind CSS", Log Rocket (4 April 2022), last viewed 12 May 
        //2023: https://blog.logrocket.com/creating-custom-animations-tailwind-css/
        colorWave: {
          '0.1%': {transform: 'rotateY(0deg)'},
          '0.2%': {transform: 'rotateY(180deg)'},
          '0.3%': {transform: 'rotateY(0deg)'},
          '0.4%': {transform: 'rotateY(180deg)'},
          '0.5%': {transform: 'rotateY(0deg)'},
          '0.6%': {transform: 'rotateY(180deg)'},
          '0.7%': {transform: 'rotateY(0deg)'},
          '0.8%': {transform: 'rotateY(180deg)'},
          '0.9%': {transform: 'rotateY(0deg)'},
          '1%': {transform: 'rotateY(180deg)'},
          '1.1%': {transform: 'rotateY(0deg)'},
          '1.2%': {transform: 'rotateY(180deg)'},
          '1.3%': {transform: 'rotateY(0deg)'},
          '1.4%': {transform: 'rotateY(180deg)'},
          '1.5%': {transform: 'rotateY(0deg)'},
          '1.6%': {transform: 'rotateY(180deg)'},
          '1.7%': {transform: 'rotateY(0deg)'},
          '1.8%': {transform: 'rotateY(180deg)'},
          '1.9%': {transform: 'rotateY(0deg)'},
          '2%': {transform: 'rotateY(180deg)'},
          '2.1%': {transform: 'rotateY(0deg)'},
          '0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%': {color: 'yellow'},
          '2.5%, 12.5%, 22.5%, 32.5%, 42.5%, 52.5%, 62.5%, 72.5%, 82.5%, 92.5%': {color: 'red'},
          '5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95%': {color: 'blue'},
          '7.5%, 17.5%, 27.5%, 37.5%, 47.5%, 57.5%, 67.5%, 77.5%, 87.5%, 97.5%': {color: 'green'},
        }
      },
      animation: {
        flashGreen: 'flashGreen 1s 1',
        flashGreenTwo: 'flashGreenTwo 1s 1',
        flashRed: 'flashRed 1s 1',
        flashRedTwo: 'flashRedTwo 1s 1',
        shake: 'shake 1s 1',
        shakeTwo: 'shakeTwo 1s 1',
        textGrow: 'textGrow 5s 1',
        textFall: 'textFall 5s infinite',
        colorWave: 'colorWave 60s infinite',
        textGrow2: 'textGrow2 5s 1',
      },
      
    },
  },
  plugins: [],
}

