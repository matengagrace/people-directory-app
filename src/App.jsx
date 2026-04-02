import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import UserDetail from './components/UserDetail'
import Navbar from './components/Navbar'

function App() {

  return (
    <div  className="w-full h-screen bg-[#d5d5d5] justify-center items-center"> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user-detail/:id' element={<UserDetail/>}/>
      </Routes>
      
    </div>
  )
}

export default App