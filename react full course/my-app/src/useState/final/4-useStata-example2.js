import React,{useState} from "react";
 
const Veera = () => {
    const[present,newpresent]=useState(false);
    const changeit = ()=>{
        newpresent(!present)
    }

    return(
        <div>
         <button onClick={changeit}>{present ? "hide" :"show"}</button>
         {present ? (<div>we are working for our company</div>) : (<h2>we are respect our hidden</h2>)}
        </div>
    );
}

export default Veera;