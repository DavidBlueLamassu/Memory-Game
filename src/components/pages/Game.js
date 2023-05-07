import { Link } from "react-router-dom";
import GemCard from "./GemCard.js";
import gems from "./../../gems.json";
import React, { useState } from "react";

let score = 0;
let topScore = 0;
let imageText = "Click an image to begin!";
let textColor = "text-white";
let cardMain = "w-10/12";
let gemArray = [];
let correct;

function Game() {
  const [cardState, setCardState] = useState({
    cardShuffle: GemDisplay(),
    gameScore: score,
    gameTopScore: topScore,
    imageStatus: imageText,
    imageStatusColor: textColor,
    cardMainMotion: cardMain
  });

  function GemDisplay() {
    const randomArray = [];
    const randomGemsArray = [];
  
    while (randomArray.length < gems.length) {
      let x = Math.floor(Math.random() * 12);
      let numberCheck = randomArray.find(e => e === x);
      if (numberCheck === undefined) {
        randomArray.push(x);
      }
    }
  
    for (let i = 0; i < randomArray.length; i++) { 
      let randomNumber = randomArray[i]
      let randomGem = gems[randomNumber];
      randomGemsArray.push(randomGem);
    }
   
    return( <div className="flex justify-evenly" onClick={(e) => {setCardState(
      { 
        ...cardState, cardShuffle: GemDisplay(), 
        gameScore: scoreDisplay(e), 
        gameTopScore: topScore = topScoreDisplay(), 
        imageStatus: imageText = imageTextDisplay(),
        imageStatusColor: textColor = textColorDisplay(),
        cardMainMotion: cardMain = cardMainDisplay(),
      }
      ); console.log(score);}}>
        {
          randomGemsArray.map(function(currentObject) {
            return <GemCard
            id={currentObject.id}
            key={currentObject.id}
            location={currentObject.location} 
            title={currentObject.title}/>
          })
        }
      </div>
    )
  }

  return (
    <div>
      <header className="flex text-white bg-purple-900 py-6 text-3xl fixed w-screen justify-evenly shadow-2xl">
        <h1 className="ml-2 font-extrabold">Clicky Game</h1>
        <h1 className={cardState.imageStatusColor}>{cardState.imageStatus}</h1>
        <h1>Score: {cardState.gameScore} | Top Score: {cardState.gameTopScore}</h1>
      </header>
      <article className="text-white bg-slate-700 py-32">
        <h1 className="py-10 text-6xl text-center font-bold">Clicky Game!</h1>
        <h2 className="text-center text-2xl font-bold">Click on an image to earn points, but don't click on any more than once!</h2>
      </article>
      <main className="flex justify-center">
        <div className={cardState.cardMainMotion}>
        {cardState.cardShuffle}
        </div>
      </main>
      <footer>
        <div className="py-8 bg-purple-500"></div>
        <div className="flex justify-between bg-purple-800 py-2 text-white">
        <p className="px-2 font-bold">Clicky Game!<img src="../assets/images/logo192.png" alt="React Spinner" className="w-5 h-5 float-right ml-2 mt-1"></img></p>
        <Link to="/" className="px-2 font-bold hover:text-red-500" onClick={() => {
          textColor = "text-white";
          cardMain = "w-10/12";
          imageText = "Click an image to begin!";
          }}>
          Home Page
        </Link>
        </div>
      </footer>
    </div>
  );
}

function scoreDisplay(e) {
  let gemValue = e.target.id
  const gemSearch = gemArray.find(element => element === gemValue);
  
  if (gemSearch === undefined) {
    score = score + 1; 
    gemArray.push(gemValue);
    correct = true;
    console.log("Gem Array")
    console.log(gemArray); 
  } else {
    score = 0; 
    gemArray = [];
    correct = false;
    console.log("Gem Array")
    console.log(gemArray); 
    console.log("Gem Value")
    console.log(gemValue);
  }
  return score;
}

function topScoreDisplay() {
  let oldTopScore = localStorage.getItem("topscore");
  if (oldTopScore !== null) {
    topScore = oldTopScore;
  }
  if (score > topScore) {
    topScore = score;
  }
  localStorage.setItem("topscore", topScore);
  return topScore;
}

function imageTextDisplay() {
  if (correct === true) {
    imageText = "You guessed correctly!";
  } else {
    imageText = "You guessed incorrectly!"
  }
  return imageText;
}

function textColorDisplay() {
  if (correct === true && textColor === "text-white") {
    textColor = "animate-flashGreen";
  } else if (correct === true && textColor === "animate-flashGreen") {
    textColor = "animate-flashGreenTwo";
  } else if (correct === true && textColor === "animate-flashGreenTwo") {
    textColor = "animate-flashGreen";
  } else if (correct === true && textColor === "animate-flashRed") {
    textColor = "animate-flashGreen";
  } else if (correct === false && textColor === "animate-flashRedTwo") {
    textColor = "animate-flashGreen";
  } else if (correct === false && textColor === "text-white") {
    textColor = "animate-flashRed";
  } else if (correct === false && textColor === "animate-flashRed") {
    textColor = "animate-flashRedTwo";
  } else if (correct === false && textColor === "animate-flashRedTwo") {
    textColor = "animate-flashRed";
  } else if (correct === false && textColor === "animate-flashGreen") {
    textColor = "animate-flashRed";
  } else if (correct === false && textColor === "animate-flashGreenTwo") {
    textColor = "animate-flashRed";
  }

  return textColor;
}

function cardMainDisplay() {
  if (correct === false && cardMain === "w-10/12") {
    cardMain = "w-10/12 animate-shake";
  } else if (correct === false && cardMain === "w-10/12 animate-shake") {
    cardMain = "w-10/12 animate-shakeTwo";
  } else if (correct === false && cardMain === "w-10/12 animate-shakeTwo") {
    cardMain = "w-10/12 animate-shake";
  }
  return cardMain;
}

export default Game;
