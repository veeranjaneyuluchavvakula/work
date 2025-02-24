import React,{useState} from "react";
 
const Index = () => {
   const [count,setCount]=useState(0);
   const incrementCount = () => {
   
    setCount((prevCount)=>{ return prevCount+1;
    });
     setCount((prevCount)=>prevCount+1);

   //  setCount((prevCount)=()=>{return prevCount-1;});
   //  console.log(count)
   }
   const decrementCount = () => {
    setCount(count - 1);
    console.log(count)
   }
   
//   var a=0;
//    var v1=()=>{
// a++;
//    console.log(a)
//    }
//    var v2=()=>{
//     a--;
//     console.log(a)
//    }
   return (
        <div>
           <button onClick={decrementCount}>-</button>
           <span>veera: {count}</span>
           <button onClick={incrementCount}>+</button>


           {/* <button onClick={v2}>-</button>
           <span>{a}</span>
           <button onClick={v1}>+</button> */}
        </div>

    );
};
 export default Index;