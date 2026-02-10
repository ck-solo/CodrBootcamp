import React, { useState } from 'react'

function CardFour() {

    const [first, setfirst] = useState(true)


  return (
     <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        width: "45%", 
        overflow: "hidden",
        fontFamily:"Gilroy",
        height:"250px",
        display:"flex",
        flexDirection:"column", 
        padding:"20px",
        gap:"20px"
      }}
    > 
    <p style={{fontSize:"20px"}}>Visibility Card</p>          
          <button onClick={()=>setfirst(!first)} style={{ padding:"12px 20px", backgroundColor:"red", color:"white", border:"none", borderRadius:"5px", width:"fit-content"}}>Hide Message</button>

{first &&<p style={{border:"1px solid green", padding:"15px",borderRadius:"10px", backgroundColor:"#ACF7AC"}}>🚀 This message is controlled by useState boolean value.</p>}
      </div>
  )
}

export default CardFour