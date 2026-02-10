 import { useState } from 'react'
 
 function App() {

  let [user,setUser] = useState(20)
  console.log("rendering") 

  let handlClick = () => {
    setUser(user+3)
    setUser(user+2) 
  } 
   return (
     <div>
      <h1>Hello Developer!</h1>
      <h2>Count - <p>{user}</p></h2> 
     <button onClick={handlClick}> Incerement
     </button>
     
     </div>
   )
 }
 
 export default App