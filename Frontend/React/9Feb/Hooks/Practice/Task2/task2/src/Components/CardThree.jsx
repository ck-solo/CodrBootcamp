import React, { useState } from 'react'
import namehandler from './CardTwo'
function CardThree() {

    const [role, setRole] = useState("Student")

    const changeRole = () =>{
        console.log("hello")
        let newRole = "Developer"
        setRole(newRole)
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
        <h2 style={{paddingBottom:"10px", fontSize:"20px"}}>User Card</h2>
        <div className="texts" style={{color:"black", fontWeight:"semibold", fontSize:"20px"}}>
        <p>Name: Lucy </p>
        <p>Role: {role}  </p>
        </div>
             
            </div>
         <div className="btns" style={{display:"flex", gap:"10px" , paddingLeft:"20px"}}> 
          <button onClick={()=>changeRole()} style={{ padding:"12px 20px", backgroundColor:"yellow", color:"black", border:"none", fontWeight:"bold", borderRadius:"5px"}}>Promote to Developer</button>
         
        </div>
      </div>
  )
}

export default CardThree