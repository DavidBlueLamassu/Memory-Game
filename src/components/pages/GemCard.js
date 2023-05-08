import React from "react";

function GemCard(props) {
    return ( 
      <article> 
        <div id={props.id}>
            <img id={props.id} alt={props.title} src={props.location} className="object-cover w-40 h-40 border-4 border-slate-500 cursor-pointer"></img>
        </div>
      </article>
    );
  }
  
  export default GemCard;
  