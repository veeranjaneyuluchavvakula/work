import React from 'react';
import HighenhancedCounter from './HighenhancedCounter';

 const ClickCounter =(props)=>{
   
    return(
   <div>
    <button  onClick={props.Increment}> count showing{props.count}times</button>
   </div>
    );
 };

 export default HighenhancedCounter(ClickCounter,10); 