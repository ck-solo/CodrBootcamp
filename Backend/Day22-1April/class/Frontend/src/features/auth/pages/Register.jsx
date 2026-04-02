import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const Register = () => {

  const {handleRegister} =useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(
      "form submitted"
    )
    await handleRegister(formData)
    navigate('/profile')

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05050A] text-white relative overflow-hidden font-sans py-12 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-800/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-md w-full space-y-8 bg-[#0B0B14]/80 backdrop-blur-xl p-8 sm:p-10 rounded-[1.5rem] border border-white/5 z-10 shadow-2xl">
        <div>
          <h2 className="text-2xl font-semibold text-white tracking-tight">Sign Up</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-400">
            Create an account with your Google or Apple ID, or use your details.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <button className="w-full flex items-center justify-center px-4 py-3 rounded-[1.25rem] bg-[#151520] hover:bg-[#1A1A28] border border-transparent hover:border-white/5 transition-all text-sm font-medium text-gray-300">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign up with Google
          </button>
          
          <button className="w-full flex items-center justify-center px-4 py-3 rounded-[1.25rem] bg-[#151520] hover:bg-[#1A1A28] border border-transparent hover:border-white/5 transition-all text-sm font-medium text-gray-300">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="white">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.48.04 2.51.58 3.35 1.4-2.88 1.69-2.3 5.76.74 6.94-1.12 2.39-2.48 4.29-2.76 4.59zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Sign up with Apple
          </button>
        </div>

        <div className="relative mt-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[#0B0B14] text-gray-500">Or</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4" action="">
          <div>
            <label className="sr-only" htmlFor="fullname">Full name</label>
            <input
              id="fullname"
              onChange={handleChange}
              type="text"
              value={formData.fullname}
              placeholder="Full name"
              className="block w-full px-4 py-3.5 bg-[#151520] border border-transparent rounded-[1.25rem] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:bg-[#1A1A28] transition-all sm:text-sm"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="username">Username</label>
            <input
              id="username"
              value={formData.username}
              onChange={handleChange}
              type="text"
              placeholder="Username"
              className="block w-full px-4 py-3.5 bg-[#151520] border border-transparent rounded-[1.25rem] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:bg-[#1A1A28] transition-all sm:text-sm"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              id="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              className="block w-full px-4 py-3.5 bg-[#151520] border border-transparent rounded-[1.25rem] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:bg-[#1A1A28] transition-all sm:text-sm"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="password">Password</label>
            <input
              id="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="block w-full px-4 py-3.5 bg-[#151520] border border-transparent rounded-[1.25rem] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:bg-[#1A1A28] transition-all sm:text-sm"
            />
          </div>

          <button
            
            type="submit"
            className="w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-medium rounded-[1.25rem] text-white bg-[#9333EA] hover:bg-[#A855F7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-[#0B0B14] shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all mt-6"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-800 space-y-6">
          <div className="text-sm">
            <span className="text-gray-400">Already have an account? </span>
            <Link to="/login" className="font-medium text-[#9333EA] hover:text-[#A855F7] transition-colors">
              Log in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;