import React from "react";

//Generates a simple card to be used in conjunction with gems.json and the map method in Game.js; id is set for click events, 
//title is set for alt and location provides an address for stored images in the public folder. The image is formatted
//to display within a slate colored frame; there is also a shadow effect. A cursor pointer, further shadow effects and a  
//zoom animation are activated upon hover. The image dimensions and border are responsive.
function GemCard(props) {
    return ( 
      <article> 
        <div id={props.id}>
            <img id={props.id} alt={props.title} src={props.location} 
            className="shadow-black shadow-lg hover:shadow-2xl hover:shadow-black hover:animate-zoom object-cover w-15 h-15 sm:w-25 sm:h-25 md:w-40 md:h-40 border-2 sm:border-4 border-slate-500 cursor-pointer"></img>
        </div>
      </article>
    );
  }
  
  export default GemCard;
  