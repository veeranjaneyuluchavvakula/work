import React,{useState} from 'react';

const Sap =()=>{
    
    const [message,setMessage]=useState({text:"",id:""});
    const[list,setlist]=useState([]);
    const changeMessage =(e)=>{
        setMessage({...message,
            text: e.target.value,
           
        });
    }
    return(
<div >
    <form>
        <input type="text" name="message" id="message" value={message.text} onChange={changeMessage}   placeholder="enter some text"/>
        <button>add</button>
    </form>

</div>
    );
}

export default Sap;