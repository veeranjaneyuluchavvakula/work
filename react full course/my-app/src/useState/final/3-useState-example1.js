import React, { useState } from 'react'

const Index = () =>{
    const [showData,setshowData]=useState(false);

    const handlechange =()=>{ 
        setshowData(!showData);
    };

    return (
        <div>
         <button onClick={handlechange}>{showData ? "hide" : "show"}</button>
         
            {/* {showData && (
                <div className='content'>
                    above show the example of the use state
                </div>
            )} */}
            {showData ? (<div>here is showing the data in the above link </div>) : (<h3>i am hidden information</h3>) }
        </div>
    );
}
 

export default Index;