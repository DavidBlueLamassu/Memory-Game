import React from "react";
import { Link } from "react-router-dom";

function Game() {
  return (
    <div>
      <h1 className="bg-blue-500">About Page</h1>
      <Link to="/">
            HOME
      </Link>
    </div>
  );
}

export default Game;
