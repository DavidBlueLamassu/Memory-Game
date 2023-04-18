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
      <main className="w-4">
        <div className="my-80">
        </div>
      </main>
      <footer >
        <div className="py-8 bg-purple-500"></div>
        <div className="flex justify-between bg-purple-800 py-2 text-white">
        <p className="px-2 font-bold">Clicky Game!<img src="../assets/logo192.png" alt="React Spinner" className="w-5 h-5 float-right ml-2 mt-1"></img></p>
        <Link to="/" className="px-2 font-bold hover:text-red-500">
          Home Page
        </Link>
        </div>
      </footer>
    </div>
  );
}

export default Game;
