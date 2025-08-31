
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
   const navigate=useNavigate()

  const [book,setbook]=useState("")
    const [cover,setcover]=useState("")
    const [author,setauthor]=useState("")
    const [desc,setdesc]=useState("")

    const handleBooks=(e)=>{
         setbook(e.target.value)
    }
    const handleClick=()=>{
     const bookData=axios(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
        bookData.then(function(res){
          console.log(res.data.items[0].volumeInfo)
         
      const item = res.data.items[0].volumeInfo  

      setcover(item.imageLinks ? item.imageLinks.thumbnail : "")
          setauthor(res.data.items[0].volumeInfo.authors)
          setdesc(res.data.items[0].volumeInfo.description )
        })
    }
   const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
  };
  return (
   <>
    <div className="relative min-h-screen flex flex-col items-center justify-center">
    <img  src='library.jpg' className='absolute w-full h-full  inset-0 z-[-1]'/>
      <div className="bg-white/90 shadow-xl rounded-2xl p-4 md:p-8 mt-4 text-center max-w-sm md:max-w-xl w-full">
       <button onClick={handleLogout}  className="bg-yellow-500 right-1/3 absolute hover:bg-yellow-600 text-white px-5 py-2 rounded-xl shadow-md transition">Logout</button>
       
        <h1 className="text-4xl font-extrabold text-yellow-500 mb-2">📚 Book Finder</h1>
        <p className="text-amber-900 text-lg mb-6">
          Search for books that inspire you ✨
        </p>
      
        <div className="flex  items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Enter book name..."
            className="flex-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
            onChange={handleBooks}
          />
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-xl shadow-md transition"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>

      
      
        <div className=" mt-5 md:mt-10 bg-white/90 shadow-lg mb-2 rounded-2xl p-4 md:p-6 max-w-sm md:max-w-lg md:w-full text-center">
          <img
            src={cover}
            
            className="mx-auto rounded-lg shadow-md mb-4 w-32"
          />
          <h2 className="text-xl font-semibold italic text-yellow-600">{author}</h2>
          <p className="text-amber-500 mt-3 text-justify">{desc}</p>
        </div>
      </div>
   
    </>
  )
}
  



export default Home