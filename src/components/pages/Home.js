import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="bg-red-500">Home Page</h1>
      <Link to="game">
            START
      </Link>
    </div>
  );
}

export default Home;
