import { useState } from 'react'
import Login from './login'
import Signup from './signup'
import Home from './home'
import ProtectedRoute from "./ProtectedRoute"; 
import { useEffect } from 'react';
import{BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
useEffect(() => {
  
  localStorage.setItem("isLoggedIn", "false");
}, []);


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
       <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
    </Routes>
    </BrowserRouter>
  )
}

export default App
