import React from 'react'

function Login() {
  return (
    <div className='border-2 p-2'>
        <p className='text-center text-4xl p-2 '>Login</p>
        <form action="" className='flex flex-col gap-2 ' >
           Email<input type="text" className='border-2 rounded' placeholder='Enter Your Email' />
           Passowrd<input type="text"className='border-2 rounded' placeholder='Enter Your Passoword' />
          <button className='p-2 bg-blue-900 rounded'>Submit</button>
        </form>
        <h2>Don't have account ? <span className='text-blue-400'>Registered here</span></h2>
    </div>
  )
}

export default Login