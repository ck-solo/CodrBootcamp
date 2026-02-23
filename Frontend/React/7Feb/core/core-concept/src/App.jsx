 import React from 'react'
import Dashboard from './Components/Dashboard'
import './index.css'  
 
 function App() {
  const user = {
    name: 'John Doe',
    email: "Dev@gmail.com",
    role: "Developer"
  }

   return (
     <div className='app'>
      <h1>Dashboard</h1>
      <Dashboard user={user}/>
     </div>
   )
 }
 
 export default App