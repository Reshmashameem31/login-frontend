import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import { Navigate, useNavigate } from 'react-router-dom'
const Signup = () => {
    
    const navigate=useNavigate()
    
    const[user,setuser]=useState("")
    const[mail,setmail]=useState("")
    const[pass,setpass]=useState("")
    const[confirmPass,setconfirmPass]=useState("")
    const handleUser=(e)=>{
        setuser(e.target.value)
    }
    const handlePass=(e)=>{
        setpass(e.target.value)
    }
    const handleConfirmPass=(e)=>{
        setconfirmPass(e.target.value)
    }
    const handleMail=(e)=>{
        setmail(e.target.value)
    }
    const handleSignUp=()=>{
        navigate('/')
        if(pass!==confirmPass){
            alert("Passwords do not match")
             return
        }
        const signupdetails=axios.post("https://login-backend-frw8.onrender.com/signup",{"username":user,"password":pass,"email":mail})
        signupdetails.then(function(res){
           if(res.data.success===true){
            alert("Signup successful! Please Login.")
           
           }
           else{
            alert(res.data.message)
           }
        })
    }
  return (
   <div className='flex items-center justify-center min-h-screen'>
     <img  src='library.jpg' className='absolute w-full h-full  inset-0 z-[-1]'/>
  <div className='bg-white/90 shadow-xl rounded-2xl p-8 max-w-sm md:max-w-md w-full text-center'>
    
    <h1 className='text-3xl font-bold text-yellow-500 mb-6'>✨ Signup</h1>

    <input 
      placeholder='username' 
      value={user}
      className='w-full p-3 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none' 
      onChange={handleUser}
    />
    <input
        type="email"
        placeholder="email"
        value={mail}
        onChange={handleMail}
         className='w-full p-3 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none' 
      />
    <input 
     type='password'
      placeholder='password' 
      value={pass}
      className='w-full p-3 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none' 
      onChange={handlePass}
    />

    <input 
      type='password'
      value={confirmPass}
      placeholder='confirm password' 
      className='w-full p-3 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none' 
      onChange={handleConfirmPass}
    />

    <button 
      className='w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl shadow-md transition' 
      onClick={handleSignUp}
    >
      Sign up
    </button>

    <p className='mt-4 text-gray-700'>
      Already have an account?{" "}
      <span 
        onClick={()=>navigate('/')} 
        className='text-yellow-600 font-semibold underline cursor-pointer hover:text-yellow-700'
      >
        Login
      </span>
    </p>
  </div>
</div>

    
    
  )
}

export default Signup