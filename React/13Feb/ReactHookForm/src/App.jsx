 import React from 'react'
 import Login from './components/login'
import Registered from './components/Registered'
import { useState } from 'react'
 
 function App() {
  const [toggle, seToggle] = useState(false)
  
   return (
     <div className='flex items-center justify-center bg-gray-700 w-screen h-screen'>
           {toggle ?  <Login /> :<Registered />}
     </div>
   )
 }
 
 export default App