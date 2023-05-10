import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-black text-white h-screen font-serif">
      <h1 className="text-center pt-32 text-9xl animate-textGrow">MEMORY</h1>
      <h1 className="text-center text-8xl animate-textGrow mb-10">MATCH</h1>
      <div className="flex justify-center">
        <Link to="game">
          <h1 className="animate-colorWave text-2xl">BEGIN</h1>
        </Link>
      </div>
    </div>
  );
}

export default Home;
