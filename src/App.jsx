import React from 'react'
import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router'
import UserDetail from './components/UserDetail'
import Navbar from './components/Navbar'

function App() {

  return (
    <div  className="container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user-detail/:id' element={<UserDetail/>}/>
      </Routes>
      
    </div>
  )
}

export default App