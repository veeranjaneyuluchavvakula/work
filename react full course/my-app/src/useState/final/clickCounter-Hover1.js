import React from "react";
import HighenhancedCounter from "./HighenhancedCounter";

const HoverCount=(props)=>{
    
return(
    <div>
        <h3 onMouseEnter={props.Increment}>Hovered {props.count}</h3>
    </div>
);
};

export default HighenhancedCounter(HoverCount ,15);