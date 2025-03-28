import React from 'react'
import Home from './Components/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Create from './Components/Create'
import Update from './Components/Update'

const App = () => {
  return (

    <div className='w-screen h-screen'>
  <BrowserRouter>
  <Routes>
    
    <Route path="/" element={    <Home/>}/>
    <Route path="/create" element={    <Create/>}/>
    <Route path="/edit/:id" element={    <Update/>}/>
 
  </Routes>
  </BrowserRouter>
  </div>
   
  )
}

export default App