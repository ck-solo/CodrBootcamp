import React, { useState } from "react";

function Card() {
    const [first, setfirst] = useState(0)

    let count = first
    const addHandle =()=>{
        console.log("hello")
        setfirst(count+1)
    }
    const subHandle =()=>{
        console.log("hello")
        if(count>0){
            count--
        }
        setfirst(count)
    }
    const resetHandle =()=>{
        console.log("hello")
        setfirst(0)
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
       
        <div className="txt" style={{padding:"20px", fontSize:"30px", fontWeight:"bold"}}>
        <p style={{paddingBottom:"10px"}}>Counter Card</p>
        <p>{count}</p>
             
            </div>
         <div className="btns" style={{display:"flex", gap:"10px" , paddingLeft:"20px"}}>

          <button onClick={()=>addHandle()} style={{ padding:"12px 20px", backgroundColor:"blue", color:"white", border:"none", borderRadius:"5px"}}>+</button>
          <button onClick={()=>subHandle()} style={{ padding:"12px 20px", backgroundColor:"red", color:"white", border:"none", borderRadius:"5px"}}>-</button>
          <button onClick={()=>resetHandle()} style={{ padding:"12px 20px", backgroundColor:"gray", color:"white", border:"none", borderRadius:"5px"}}>Reset</button>
         
        </div>
      </div>
     
  );
}

export default Card;
