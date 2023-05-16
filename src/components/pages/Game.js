import { Link } from "react-router-dom";
import GemCard from "./GemCard.js";
import gems from "./../../gems.json";
import React, { useState } from "react";

//This variable is paired with a variable for changing the state of the main card display; cardFormat narrows the width of the 
//relevant div so that the shake animation is activated at an incorrect answer, the element does not go outside the borders of the
//screen. The rest of the formatting centers the cards.
const cardFormat = " w-10/12 flex justify-center";

//This variable is paired with a variable for changing the state of the header text. The default text reads "Click an image to begin!"
//but upon a click event is revised to indicate if the user has made a correct or incorrect guess. The purpose of headerText is to 
//provide formatting to make this portion of the header responsive to smaller screens sizes.
const headerText = " text-xl md:text-3xl mt-5 lg:mt-0";

//These variables control the score, top score and instruction displays in the header
let oldTopScore = localStorage.getItem("topscore2");
let score = 0;
let topScore;
let imageText = "Click an image to begin!";

//These two variables are used for changes of state. Both are initially set to redundant values that will not affect the webpage's
//formatting. When textColor is reset upon a click event it will cause the header text represented by imageText to flash green, to
//indicate a correct guess or to flash red for an incorrect guess. cardMain will introduce an animation to shake the card display 
//when an incorrect guess is made.
let textColor = "text-white";
let cardMain = "text-white";

//gemArray stores the values for all the cards clicked.
let gemArray = [];

//correct is a boolean used in conjunction with functions that change state after a correct or incorrect click. If correct === true
//then the click was correct; if correct === false the answer was incorrect.
let correct;

//A conditional to determine what top score should be displayed. If the game has been played before there will be a top score saved
//in localStorage. This score will then be displayed as the top score. Otherwise topScore defaults to 0.
if (oldTopScore !== null) {
  topScore = oldTopScore;
} else {
  topScore = 0;
}

function Game() {
  
  //The useState hook sets the initial values for various parts of the Game component including the text and scores in the header and
  //the cards and status of the shake animation in the card display.
  const [cardState, setCardState] = useState({
    cardShuffle: GemDisplay(),
    gameScore: score,
    gameTopScore: topScore,
    imageStatus: imageText,
    imageStatusColor: textColor,
    cardMainMotion: cardMain
  });

  //This function arranges the card display which forms the core of the memory game. The cards are displayed in random order and
  //reshuffled every time a card is clicked.
  function GemDisplay() {
    
    //This variable stores numbers from 1 to 12 in random order, corresponding to the 12 gem objects in gems.json and represented
    //by the imported variable gems.
    const randomArray = [];

    //This array will store all the objects from gems.json in the order determined by the arrangement of the random numbers of 
    //randomArray.
    const randomGemsArray = [];
  
    //The while loop runs until 12 different random numbers have been selected from 1 to 12 and pushed to randomArray. 
    while (randomArray.length < gems.length) {
      
      //A random number is selected from 1-12.
      let x = Math.floor(Math.random() * 12);
      
      //The random number is checked against the numbers in randomArray. The code for the numberCheck variable is derived from 
      //an example on "MDN Web Docs": "Array.prototype.find()", MDN Web Docs, last viewed 12 May 2023:
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find and from an example on 
      //"freeCodeCamp": Sarah Chima Atuonwu, "Four Different Ways to Search an Array in JavaScript", freeCodeCamp (24 June 2020), 
      //last viewed 12 May 2023: https://www.freecodecamp.org/news/4-methods-to-search-an-array/
      let numberCheck = randomArray.find(e => e === x);
      
      //If numberCheck's value is undefined, the value of the randomly selected variable, x, will be pushed to randomArray.
      if (numberCheck === undefined) {
        randomArray.push(x);
      }
    }
  
    //This for loop makes an array from the objects in gems.json in the numerical order determined by randomArray. Once 
    //randomGemsArray is filled, it will contain a random arrangement of these objects.
    for (let i = 0; i < randomArray.length; i++) { 
      
      let randomNumber = randomArray[i]
      let randomGem = gems[randomNumber];
      
      randomGemsArray.push(randomGem);
    }
   
    //The function returns a randomly ordered card display in 2-4 columns (depending upon screen size). The div containing the cards 
    //contains an onClick function. Whenever one of the cards is clicked there will be a change of state resulting in a reshuffle of 
    //the cards, and the calling of functions to change the game score, high score and text in the header (including flashes
    //of green or red to indicate correct or incorrect guesses) and to call a function to determine whether to activate the shake
    //animation (for an incorrect answer). None of these functions are to be called for a mouse click on the div but not on one of
    //the cards (should the value of e.target.id === ""). This prevents inappropriate activation of functions meant solely to be
    //called for a card click.
    return( <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" onClick={(e) => {
      if(e.target.id === "") {
        return;
      };
      setCardState(
      { 
        ...cardState, cardShuffle: GemDisplay(), 
        gameScore: scoreDisplay(e), 
        gameTopScore: topScore = topScoreDisplay(), 
        imageStatus: imageText = imageTextDisplay(),
        imageStatusColor: textColor = textColorDisplay(),
        cardMainMotion: cardMain = cardMainDisplay(),
      }
      )}}>
        {/* This function maps over randomGemArray (derived from gem.json) to produce cards using props from GemCard. The scoreDisplay
        function uses the card id to determine whether the card has previously been clicked and assigns an increase in score (for a 
        correct click) or ends the game (for an incorrect click) as appropriate. */}
        {
          randomGemsArray.map(function(currentObject) {
            return <GemCard
            id={currentObject.id}
            key={currentObject.id}
            location={currentObject.location} 
            title={currentObject.title}
            />
          })
        }
      </div>
    )
  }

  return (
    <div>
      
      {/* header formatting: flexbox with elements spaced evenly; header position is fixed and does not scroll up or down. For 
      smaller screen sizes text elements are displayed in column; for large screens they are displayed in a row. z-index is set higher
      than for the card display in the main element below to prevent the cards appearing over the header when the shake animation
      is active. */}
      <header className="z-10 text-center lg:flex text-white bg-purple-900 py-6 text-3xl fixed w-screen lg:justify-evenly shadow-2xl font-serif">
        <h1 className="lg:ml-2 ml-0 text-5xl lg:text-3xl font-extrabold">Memory Match</h1>
        
        {/* formatting for instruction text, which also doubles to let the user know whether a click is correct or incorrect.
        Formatting and revisions to formatting are set using state. The formatting values in headerText make the webpage responsive
        to smaller screen sizes. */}
        <h1 className={cardState.imageStatusColor + headerText}>{cardState.imageStatus}</h1>
        
        {/* Score and Top Score values are set and revised using state. The formatting enlarges the text for larger screens. */}
        <h1 className="text-xl md:text-3xl">Score: {cardState.gameScore} | Top Score: {cardState.gameTopScore}</h1>
      </header>
      
      {/* Formatting for subheader immediately above the card display. Formatting includes an expanded margin for smaller screen
      sizes to prevent the header appearing on top of, and blocking, this text. */}
      <article className="text-white bg-slate-700 py-32 mb-2 font-serif">
        <h1 className="py-10 text-6xl text-center font-bold mt-20 sm:mt-10 lg:mt-0">Memory Match</h1>
        <h2 className="text-center text-2xl font-bold">Click on an image to earn points, but don't click on any more than once!</h2>
      </article>
      
      {/* card display, centered in a flex box; the value for cardMainMotion is changed to activate the shake animation when an 
      incorrect answer is given. The GemDisplay function is activated to reshuffle the cards immediately upon click. The z-index
      for this element is set lower than for the header above to prevent the cards appearing over the header when the shake
      animation is activated. */}
      <main className="z-0 flex justify-center py-5">
        <div className={cardState.cardMainMotion + cardFormat}>
        {cardState.cardShuffle}
        </div>
      </main>

      {/* footer and footer formatting; this includes and image for the react spinner. A link is included to return the user to the
      homepage. Upon clicking this event textColor and cardMain are returned to their original settings. This prevents the color
      and shake animations from activating upon the user returning to the game as the game is ended immediately upon returning
      to the homepage and it would not be appropriate for mid-game actions to be activated at the beginning of a new game. imageText,
      score and gemArray are also returned to their original values for the same reason. */}
      <footer className="mt-2 font-serif">
        <div className="py-8 bg-purple-500"></div>
        <div className="flex justify-between bg-purple-800 py-2 text-white">
          <p className="px-2 font-bold">Memory Match<img src="../assets/images/logo192.png" alt="React Spinner" className="w-5 h-5 float-right ml-2 animate-rotation"></img></p>
          <Link to="/" className="px-2 font-bold hover:text-red-500" onClick={() => {
            textColor = "text-white";
            cardMain = "text-white";
            imageText = "Click an image to begin!";
            score = 0;
            gemArray = [];
            }}>
            Home Page
          </Link>
        </div>
      </footer>
    </div>
  );
}

function scoreDisplay(e) {
  
  //This variable holds the id of the card most recently (from 1-12); although the cards are shuffled their ids are constant.
  let gemValue = e.target.id

  //This variable is used to determine whether the value of gemValue has already been pushed to gemArray
  const gemSearch = gemArray.find(element => element === gemValue);
  
  //If gemValue's value has not yet been pushed to the gemArray (gemSearch === undefined) the player's score increases by 1 for 
  //a correct answer and the value is pushed to gemArray as each card may only be clicked once and gemArray records the click 
  //event. Otherwise, if the value is found this is an incorrect answer, the game ends and the score returns to 0.
  if (gemSearch === undefined) {
    score = score + 1; 
    gemArray.push(gemValue);
    correct = true;
  } else {
    score = 0; 
    gemArray = [];
    correct = false;
  }

  //updates score display
  return score;
}

function topScoreDisplay() {
  
  //oldTopScore retrieves the last recorded top score from localStorage, provided the game has been played before and a score has 
  //been stored.
  let oldTopScore = localStorage.getItem("topscore2");
  
  //If a value has been stored then topScore = oldTopScore; otherwise topScore = it original value of 0. If the current score is 
  //greater than topScore then topScore will eqal score, as this is the current top score. 
  if (oldTopScore !== null) {
    topScore = oldTopScore;
  }
  if (score > topScore) {
    topScore = score;
  }

  //The value of topScore is saved to localStorage
  localStorage.setItem("topscore2", topScore);
  
  //updates topScore display
  return topScore;
}

//This function updates the text display in the header based upon whether the click event returned a correct or incorrect guess
//as determined in the scoreDisplay function and recorded in the boolean variable "correct".
function imageTextDisplay() {
  if (correct === true) {
    imageText = "You guessed correctly!";
  } else {
    imageText = "You guessed incorrectly!"
  }
  return imageText;
}

//This conditional function activates color effects for the header information text in accord with whether the click event gave a  
//correct or incorrect answer. This is determined in the scoreDisplay function and recorded in the boolean variable "correct".   
//When the value of correct is true (a correct answer), the text briefly flashes green; when the value of correct is false, the text
//flashes red. The color effects result from changes in the value of the "textColor" variable which is used to style the element 
//containing the header information text. Each color animation is set to iterate only once. Accordingly, two identical animations
//are required for the green effect, as it is possible to make more than one correct selection in a row, and an unchanged value 
//for the animation will not reactivate it should it be required more than once. As it is never possible to make two incorrect 
//selections in a row, only one animation is required for the red effect.
function textColorDisplay() {
  if (correct === true && textColor === "text-white") {
    textColor = "animate-flashGreen";
  } else if (correct === true && textColor === "animate-flashGreen") {
    textColor = "animate-flashGreenTwo";
  } else if (correct === true && textColor === "animate-flashGreenTwo") {
    textColor = "animate-flashGreen";
  } else if (correct === true && textColor === "animate-flashRed") {
    textColor = "animate-flashGreen";
  } else if (correct === false && textColor === "text-white") {
    textColor = "animate-flashRed";
  } else if (correct === false && textColor === "animate-flashRed") {
    textColor = "animate-flashRedTwo";
  } else if (correct === false && textColor === "animate-flashGreen") {
    textColor = "animate-flashRed";
  } else if (correct === false && textColor === "animate-flashGreenTwo") {
    textColor = "animate-flashRed";
  }

  return textColor;
}

//This function activates a shake animation when the user makes an incorrect click. This is determined in the scoreDisplay 
//function and recorded in the boolean variable "correct".  Only if the value of "correct" === false will a shake animation be
//activated by changing the value of "cardMain" to activate one of the two shake animations for the div containing the game cards. 
//These animations iterate only once and will not be reactivated if there is no change to the value of "cardMain". Accordingly,
//the conditional code of the cardMainDisplay function alternates between different, but identical, versions of the shake
//function once "cardMain" has been assigned one of them as a value (as opposed to its original inert value: "text-white").
function cardMainDisplay() {
  if (correct === false && cardMain === "text-white") {
    cardMain = "animate-shake";
  } else if (correct === false && cardMain === "animate-shake") {
    cardMain = "animate-shakeTwo";
  } else if (correct === false && cardMain === "animate-shakeTwo") {
    cardMain = "animate-shake";
  }
  return cardMain;
}

export default Game;
