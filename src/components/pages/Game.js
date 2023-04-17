import React from "react";
import { Link } from "react-router-dom";

let score = 0;
let topScore = 0;

function Game() {
  return (
    <div>
      <header className="flex text-white bg-purple-900 py-6 text-3xl fixed w-screen justify-evenly shadow-2xl">
        <h1 className="ml-2 font-extrabold">Clicky Game</h1>
        <h1>Click an image to begin!</h1>
        <h1>Score: {score} | Top Score: {topScore}</h1>
      </header>
      <article className="text-white bg-slate-700 py-32">
        <h1 className="py-10 text-6xl text-center font-bold">Clicky Game!</h1>
        <h2 className="text-center text-2xl font-bold">Click on an image to earn points, but don't click on any more than once!</h2>
      </article>
      <main className="justi">
        <div className="my-80">
        </div>
      </main>
      <footer className="flex justify-between">
        <p className="px-2 font-bold">Clicky Game!</p>
        <Link to="/" className="px-2 font-bold hover:text-red-500">
          Home Page
        </Link>
      </footer>
    </div>
  );
}

export default Game;
