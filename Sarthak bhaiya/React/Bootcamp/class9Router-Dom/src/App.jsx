import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Page1 from './components/Page1'
import Product from './components/Product'
import Navbar from './components/Navbar'

const App = () => {
  return (
<div className='w-screen h-screen overflow-hidden text-emerald-300 bg-slate-900'>

<Navbar />
     <div className='w-screen h-screen'>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/products" element={<Product />} />
      </Routes></div></div>

  )
}

export default App
