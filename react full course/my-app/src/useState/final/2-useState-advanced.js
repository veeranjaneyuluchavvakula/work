import React,{useState} from "react";
 
const Index = () => {
    const vse={
        firstName:"veera",
        secondName:"karthik",
        age:22,
    }
    const[data,setData]=useState(vse);
    const changeFirstName=()=>{
        setData({
            ...data,
            firstName:"sage it",    
        })
    }
    const changesecondName =()=>{
        setData({
            ...data,
            secondName:"ramu",
        })
    }

    return (
        <div>
            <h1>My nameis {data.firstName}</h1>
            <button onClick={changeFirstName}>change first name</button>
            <h1>My name is {data.secondName}</h1>
            <button onClick={changesecondName}>change lastname</button>
            <h1>age:{data.age}</h1>

        </div>
    );
}

export default Index;