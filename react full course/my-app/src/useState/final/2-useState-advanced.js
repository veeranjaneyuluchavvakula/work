import React,{useState} from "react";
 
const Index = () => {
    const initialArray=[{
        id:456,
        firstName:"veera",
     lastName:"anjanailu",
        age:22
    },
    { 
        id:123,
      firstName:"karthik",
     lastName:"akhilesh",
      age:25
    },
    {
        id:789,
        firstName:"ram",
        lastName:"aayodhaiya",
        age:1990000,
    }

    ];
    const[data,setData]=useState(initialArray);
    console.log(data);
    const handleDelete =(comingId)=>{
        const filterData=data.filter((eachItem)=>{
        return eachItem.id !==comingId;
    });
    setData(filterData);
    };
    return (
        <div>
           <ul>
            {
                data.map((eachItem,index)=>{
                    const {firstName,lastName,age,id}=eachItem;
                    return( <li key={index}>
                        <div>
                            firstName:<strong>{firstName}</strong>
                        </div>
                        <div>
                            lastName:<strong>{lastName}</strong>
                            </div>
                        <div><strong>age:{age}</strong></div>
                        <button onClick={()=>handleDelete(id)}>delete</button>
                    </li>
                );
            })
            }
           </ul>
        </div>
    );
}

export default Index;