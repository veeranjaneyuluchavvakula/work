import React,{useState} from 'react';

const Asa =()=>{
  const [firstName,setfirstName] =useState("");
  const[email,setEmail] =useState("");
    const[password,setpassword]=useState("");

const handling1 =(e,name)=>{
  console.log(e.target.value);
  if(name==="firstName"){
    setfirstName(e.target.value);
  }
  else if(name==="email"){
    setEmail(e.target.value);
  }
  else if(name==="password"){
    setpassword(e.target.value);
  }
}

    // const changeFirstName =(e)=>{
    //   setfirstName(e.target.value);
    //   console.log(e.target.value);
    // };
    // const changeEmail =(e) =>{
    //   setEmail(e.target.value);
    //   console.log(e.target.value);
    // }
    // const changePassward =(e)=>{
    //   setPassword(e.target.value);
    //   console.log(e.target.value);
      
    // }
     const handleSubmit =(e)=>{e.preventDefault(); 
      let userObj={
        firstName:firstName,
        email:email,
        password:password,
      };
      console.log(userObj);
     };

    return(
    <div>
      <form onSubmit={handleSubmit}>
        <div className='v1'>
          <input type="text" name="firstname" id="firstname" value={firstName} placeholder=" enter your name" onChange={(e)=>handling1(e,"firstName")} />
        </div>
        <div className="v1">
          <input type="email" name="email" id="email" value={email} placeholder='enter your email' onChange={(e)=>handling1(e,"email")} />
        </div>
        <div className='v1'>
          <input type="password" name="password" id="password" value={password} placeholder="password" onChange={(e)=>handling1(e,"password")} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
    );
}

export default Asa;









