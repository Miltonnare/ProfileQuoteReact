import { useState } from "react";
import Infom from "./Info";
import AIM from "./assets/AIM.jpeg";


function CardApp(){
  const [userQuote, setUserQuote]=useState("");
  const [quote, setQuote]=useState(false);
  const HandlesSubmit=(e: React.FormEvent)=>{
    e.preventDefault();
    if(userQuote.trim()){
      setQuote(!quote);
    }
    
  }

  return(
    
    <div className="Container">
      <h2>Success is no accident. It is hard work, perseverance, learning, studying, sacrifice,_
         and most of all, love of what you are doing or learning to do." – Pelé</h2>
      <img src={AIM} alt="ProfilePicture" className="photo" />
      <p><Infom></Infom></p>
      {quote&&<p>"If you want something you've never had, you must be willing to do something you've never done."</p>}
      <button onClick={()=>setQuote(!quote)}>SHOW QUOTE</button>

      <form action="" onSubmit={HandlesSubmit}>
        <input
         type="text"
        placeholder="Enter your Quote"
         value={userQuote}
         onChange={(e)=>setUserQuote(e.target.value)}
          />
          <button type="submit" >AddQuote</button>
      </form>

    </div>
  )
}
export default CardApp;