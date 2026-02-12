 import React, { useState } from 'react'
 
 function App2() {
  const [formData, setFormData] = useState({

    name :"",
    email : "",
    password :"", 
  })
  console.log(formData)

  const handleSubmit =(e)=>{
    let {name, value} = e.target;
    setFormData({...formData, [name]: value })

  }

   return (
     <div>
      <form action="">
       Name- <input name='name' type="text" placeholder='Enter Your Name' onChange={handleSubmit} />
       Email- <input name='email' type="text" placeholder='Enter Your Email' onChange={handleSubmit} />
       password- <input name='password' type="text" placeholder='Enter Your Password' onChange={handleSubmit} />
      </form>
     </div>
   )
 }
 
 export default App2