import React,{useState,useEffect} from "react";

const URL='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=l'
 
const Veera = ()=>{
    const[drinksData,setDrinksData]=useState([]);

    const fetchDrink = async(apiURL)=>{
    const response = await fetch(apiURL);
    console.log(response);
    };

    useEffect(()=>{
        fetchDrink(URL);
    },[])
    return(
        <div>
           <h1> drinks count:{drinksData.length}</h1>
        </div>
    );
};
export default Veera ;