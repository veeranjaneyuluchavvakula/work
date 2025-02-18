import React from "react";
import data from "./data.js";
console.log(data);

const AppName = () => {


  return (
  <main className="container">
    <ul className="comments-container">
      {
      data.map((eachcomment) => {
        const{id,body,email, name}=eachcomment;
        return(
          <ListItems key={id} id={id} email={email} name={name} body={body} />
        );
      })
      }
      </ul>
  </main>
  );
};
      const ListItems=(props) => {
        const{id,email,body,name}=props;
        return( 
      
      <li  className="comment">
        <div className="comments-header">
          <h1 className="num">{id}</h1>
          <h3 className="email">{email}</h3>
          <h2 className="name">{name}</h2>
          
          
         
        </div>
        <div className="message">{body}</div>
        </li>
        );
      }
      {/* <li className="comment">
        <div className="comments-header">
          <h3 className="email">email@gmail.com</h3>
          <h3 className="name">some name random name</h3>
        </div>
          <p className="message">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.


          </p>

       </li>
        */}
    


    
export default AppName;