 import React, { useState } from 'react'
import Navbar from './components/Navbar' 
import Home from './Pages/Home' 
import CartPage from './Pages/Cart'
 
 
 function App() {

  const [toggle, setToggle] = useState(false)
  const [cart, setCart] = useState([])
   return (
     <div className=' text-4xl h-screen   flex flex-col'>
      <Navbar setToggle={setToggle}/>
      <div>
        {
          toggle? <CartPage cart={cart}/> : <Home cart={cart} setCart={setCart}/>  
        }
        
      </div>
     </div>
   )
 }
 
 export default App