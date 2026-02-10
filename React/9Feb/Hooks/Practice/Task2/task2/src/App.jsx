 import React from 'react'
import Card from './Components/card' 
import CardTwo from './Components/CardTwo'
import CardThree from './Components/CardThree'
import CardFour from './Components/CardFour'
 
 function App() {
   return (
     <div style={{display:"flex", gap:"40px", flexWrap:"wrap", backgroundColor:"lightblue", width:"100%" , padding:"30px" }}>
      <Card />
      <CardTwo /> 
      <CardThree />
      <CardFour />
     </div>
   )
 }
 
 export default App