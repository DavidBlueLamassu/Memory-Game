import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    
    //Sets homepage background to black (this covers the entire screen) with white text and serifed text throughout
    <div className="bg-black text-white h-screen font-serif">

      {/* Centers text with significant padding from top of screen; text grows from 10% to full size (large) using textGrow animation.
      Default display suitable for mobile phones; text larger for wider screens. */}
      <h1 className="text-center pt-32 text-4xl sm:text-9xl animate-textGrow">MEMORY</h1>
      
      {/* Centers text with some margin above link div; text grows from 10% to full size (large) using textGrow animation. 
      Default display suitable for mobile phones; text larger for wider screens.*/}
      <h1 className="text-center text-3xl sm:text-8xl animate-textGrow mb-10">MATCH</h1>
      
      {/* Centers Link element  */}
      <div className="flex justify-center">
        
        {/* Link element to Game.js component; BEGIN text spins and changes color using colorWave animation. Default display 
        suitable for mobile phones; text larger for wider screens. */}
        <Link to="game">
          <h1 className="animate-colorWave text-xl">BEGIN</h1>
        </Link>
      </div>
    </div>
  );
}

export default Home;
