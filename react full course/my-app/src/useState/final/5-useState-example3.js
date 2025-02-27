import React,{useState} from 'react';

const Asa =()=>{
    
    return(
   <div><form>
    <div className='v1'><input type="text" name="firstname" id="firstname"
    placeholder=" enter your name" /></div>
    <div className="v1"><input type="email" name="email" id="email" placeholder='enter your email'/></div>

  <div className='v1'><input type="password" name="password" id="passward" placeholder="password"/></div>
  <button type="submit">submit</button>
  </form>
    </div>
    );
}

export default Asa;









