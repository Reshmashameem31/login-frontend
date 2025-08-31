import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate()
    const[user,setuser]=useState("")
    const[pass,setpass]=useState("")
    const[mail,setmail]=useState("")
    const handleUser=(e)=>{
        setuser(e.target.value)
    }
    const handlePass=(e)=>{
        setpass(e.target.value)
    }
    const handleMail=(e)=>{
      setmail(e.target.value)
    }
    const handleCheck=()=>{
   
     const logindetails=  axios.post("https://login-backend-frw8.onrender.com/login",{'username':user,'password':pass,'email':mail})
     logindetails.then(function(data){
        if(data.data===true){
           localStorage.setItem("isLoggedIn", "true"); 
          navigate('/home')
        }
        else {
        localStorage.setItem("isLoggedIn", "false"); 
        navigate('/signup');
      }
       })
    }
  return (
    <>
     <div className='flex items-center justify-center min-h-screen'>
          <img  src='library.jpg' className='absolute w-full h-full  inset-0 z-[-1]'/>
          <div className='bg-white/90 shadow-xl rounded-2xl p-6  max-w-sm md:max-w-md   w-full text-center'>
          <h1 className='text-3xl font-bold text-yellow-500 mb-6'>✨Login</h1>
      <input
        placeholder="username"
        value={user}
        onChange={handleUser}
         className='w-full p-3 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none' 
      />
      <input
        type="password"
        placeholder="password"
        value={pass}
        onChange={handlePass}
         className='w-full p-3 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none' 
      />
      <input
        type="email"
        placeholder="email"
        value={mail}
        onChange={handleMail}
         className='w-full p-3 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none' 
      />
      <button
          className='w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl shadow-md transition' 
        onClick={handleCheck}
        type="button"
      >
        Login
      </button>
      <p className="mt-3">
        Don't have an account?{" "}
        <span
          onClick={() => navigate('/signup')}
          className='text-yellow-600 font-semibold underline cursor-pointer hover:text-yellow-700'
        >
          Signup
        </span>
      </p>
      </div>
    </div>
    </>
  )
}

export default Login