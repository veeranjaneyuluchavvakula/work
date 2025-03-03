import React,{useEffect, useState} from "react";

const Final =()=>{
    const [list,setList]=useState(0);
    const [Toggle,setToggle]=useState(true);
    const [pageWidth,setpageWidth]=useState(window.innerWidth);
    useEffect(()=>{
        const resizeHandler=window.addEventListener("resize",()=>{
            setpageWidth(window.innerWidth);
        });
        console.log("hello i am coming from useEffect",list,Toggle


            
        );
        
        return ()=>{
            console.log("i am removing");
            window.removeEventListener("resize",resizeHandler);
        };
    });
    return(
        <div>
            <h1>sage it in hyderabad</h1>
            <h1>{list}</h1>
            <h1 onClick={()=>setToggle(!Toggle)}>{Toggle ? "open":"close"}</h1>
            <button onClick={()=>{setList(list+1)}}>+</button>
            <h1>{pageWidth}</h1>
        </div>
    );
}
export default Final;