import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-black text-white h-screen font-serif">
      <h1 className="text-center pt-32 text-9xl animate-textGrow">MEMORY</h1>
      <h1 className="text-center text-8xl animate-textGrow">MATCH</h1>
      <Link to="game">
            <h1 className="text-center animate-colorWave pt-10 text-2xl">BEGIN</h1>
      </Link>
    </div>
  );
}

export default Home;
