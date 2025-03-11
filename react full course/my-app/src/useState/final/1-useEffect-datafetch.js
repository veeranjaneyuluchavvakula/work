import React,{useState,useEffect} from "react";

const URL ="https://jsonplaceholder.typicode.com/users";

const Assa =()=>{
    const [userData,setUsersData]=useState([]);
    const[Loading,setLoading]=useState(false);
    const[isError,setisError]=useState({status:false,msg:''})
    const fetchUserData = async(apiURL)  =>  {
       setLoading(true) 
       setisError({status:false,msg:''})    
        try{
        const response = await fetch(apiURL);
        const data = await response.json(
          
        );

        setUsersData(data);
        setLoading(false)
         setisError({status:false,msg:''});
       if(response.status===404){
        throw new Error("data not found");
       }
       } 
     catch(error){
        console.log(error.message);
       setLoading(false)
       setisError({status:true,msg: error.message||"something went,pls try again!"})
     }
        };
      useEffect(()=>{
      fetchUserData(URL)},[]);
       if(Loading){
     return(<div>
        <h3>Loading...</h3>
     </div>
     );
        }
        if(isError?.status){
            return<div>
                <h3 style={{color:'red'}}>{isError?.msg}</h3>
            </div>
        }
    
     return(
        <div>
            <h1>veeras</h1>
            <ul>
              {
                userData.map((eachUser)=>{
                    const {id,email,name}=eachUser;
                   return<li key={id}>
                    
                    <div>{email}</div>
                    <div>{name}</div>
                    </li>
                })
              }  
            </ul>
        </div>
    );

}
export default Assa;