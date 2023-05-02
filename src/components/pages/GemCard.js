import React from "react";

function GemCard(props) {
    return ( 
      <article> 
        <div id={props.id} className="border-4 border-slate-500 my-10 cursor-pointer">
            <img id={props.id} alt={props.title} src={props.location} className="object-cover w-40 h-40 "></img>
        </div>
      </article>
    );
  }
  
  export default GemCard;
  