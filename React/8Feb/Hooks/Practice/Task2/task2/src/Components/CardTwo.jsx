import React, { useState } from 'react'

function CardTwo() {
    const [username, setUsername] = useState("Chandan")

    const nameHandler = () =>{
        console.log("hello")
        let name = "Devloper 🧑‍💻🧑‍💻"
        setUsername(name)       


    }
  return (
   <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        width: "45%", 
        overflow: "hidden",
        fontFamily:"Gilroy",
        height:"250px"
      }}
    >
       
        <div className="txt" style={{padding:"20px", fontSize:"30px"}}>
        <p style={{paddingBottom:"10px", fontSize:"20px",fontWeight:"bold"}}>Name Card</p>
        <p style={{paddingBottom:"10px", fontSize:"25px", fontWeight:"semibold"}}>{username}</p>
             
        </div>
         <div className="btns" style={{display:"flex", gap:"10px" , paddingLeft:"20px"}}>
 
          <button onClick={()=> nameHandler()} style={{ padding:"12px 20px", backgroundColor:"green", color:"white", border:"none", borderRadius:"5px"}}>Change Name</button>
         
        </div>
      </div>
  )
}

export default CardTwo