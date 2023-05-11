import React from "react";

//Generates a simple card to be used in conjunction with gems.json and the map method in Game.js; id is set for click events 
//title information for alt and location to provide an address for stored images in the public folder. className formats the 
//image display within a slate colored frame and activates a cursor pointer upon hover
function GemCard(props) {
    return ( 
      <article> 
        <div id={props.id}>
            <img id={props.id} alt={props.title} src={props.location} 
            className="object-cover w-40 h-40 border-4 border-slate-500 cursor-pointer"></img>
        </div>
      </article>
    );
  }
  
  export default GemCard;
  