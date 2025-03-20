import React,{useState} from 'react';

const ParentComponent=()=>{
  const[userDetails,setuserDetails]= useState({
    firstName:"emma",
    lastName:"watson",
    email:"emma@gmail.com",
   });

    return(
  <div>
    <h1>useContext Parent COmponent</h1>
    <ChildComponent userDetails={userDetails}/>
  </div>
    );
};
const ChildComponent=(props)=>{
  console.log(props.userDetails);
  return(
<div><h1>
  ChildComponent</h1>
  <SubChildComponent userDetails={props.userDetails}/>
</div>
  );
};
const SubChildComponent=({userDetails})=>{
 

  return(
    <div>
      <h3>SubChildComponent</h3>
      <div>name:{userDetails.firstName}</div>
      <div>name:{userDetails.lastName}</div>
      <div>name:{userDetails.email}</div>
    </div>
  );
}
export default ParentComponent;