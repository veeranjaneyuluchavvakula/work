import React,{useState} from "react";

const HighenhancedCounter=(OriginalComponent,incrementnumber)=>{

    const NewComponent=()=>{
   

        const[count,setCount]=useState(0);

        const Increment=()=>{
            setCount(count+incrementnumber);
        }
        return <OriginalComponent count={count} Increment={Increment}  />
    };

    return NewComponent;

}
export default HighenhancedCounter;