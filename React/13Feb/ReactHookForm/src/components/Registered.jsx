import React from 'react'   
import { useState } from 'react'
import { useForm } from 'react-hook-form'

function Registered() {   
    let{
        register,
        handleSubmit,
        formState:{error}
    } = useForm()

  const [user, setuser] = useState([])

    const handleformSubmit = (data)=>{
        let arr = []

        setuser(arr)

    }
     


  return (


   <div className='border-2 p-2'>
        <p className='text-center text-4xl p-2 '>Registered</p>
        <form action="" className='flex flex-col gap-2 ' onSubmit={handleSubmit(handleformSubmit)} >
            <label htmlFor='name'>Name</label>
           <input {...register("name", {required:"this is name error"})}  type="text" className='border-2 rounded' placeholder='Enter your Name' />
            <label htmlFor='mobile'>Mobile</label>
            <input  {...register("mobile",{required:"this is name mobile"})} type="text" className='border-2 rounded'  placeholder='Enter your Mobile' />
            <label htmlFor='email'>Email</label>
           <input {...register("email", {required:"this is name email"})} type="email" className='border-2 rounded' placeholder='Enter Your Email' />
            <label htmlFor='password'>Password</label>
           <input {...register("password",{required:"this is name password"})} type="password"className='border-2 rounded' placeholder='Enter Your Passoword' />
          <button className='p-2 bg-blue-900 rounded'>Submit</button>
        </form>
        <h2>Don't have account ? <span className='text-blue-400'>Registered here</span></h2>
    </div>
  )
}

export default Registered