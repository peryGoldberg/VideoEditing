import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './NavBar'
import Home from './Home';
import LogIn from './LogIn';
import About from './About';

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='LogIn' element={<LogIn/>}/>
        <Route path='About' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
