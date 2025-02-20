import React from "react";
import './App.css';
import picture from './logo.svg'
// import handling from "./reportWebVitals.js";

// import Sage from "./veera.js";
// import data from "./data";

const App=()=> {

  const handling1 = (a,firstname) => {   
    console.log("First Name : ",a, firstname);
  }

 const handling = (e,lastname) => {
    console.log("Last Name : ", e,lastname);
 }

  return (
<main className="cotainer">
  <button style={{color:"white",background:"red"}} className="button" onClick={(a)=>{handling1(a,"veera");handling("b","raju")}}>click me</button>
    <img style={ {width:"40%" , height:"50%" }} src={picture} alt="nature pic" />
</main>
  );

}

export default App;