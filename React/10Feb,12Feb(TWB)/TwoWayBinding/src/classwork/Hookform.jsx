import React, { useState } from "react";
//  import { SubmitHandler  } from 'react-hook-form'
const Hookform = () => {

  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
  })

  const changeHandler = () =>{

  }

  const submitHandler = (e) =>{
    e.preventDefault()
  }


  return (
    <form onSubmit={submitHandler} className=" gap-3 ">
      <h1>HookForm Logic</h1>
      Name -<input type="text" className=" border-2 gap-3" placeholder="Enter your name" onChange={changeHandler} />
      Email -<input type="text" className=" border-2" placeholder="Enter your Email" />
      password -<input type="text"className=" border-2" placeholder="Enter your password" />

      <button className="bg-amber-600 border-2">Submit</button>
    </form>
  );
};

export default Hookform;
