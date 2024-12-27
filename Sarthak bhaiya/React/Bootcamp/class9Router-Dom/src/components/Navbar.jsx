import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between w-full  py-2 px-10' >
      <Link to='/page1'> <h2 className='text-2xl text-emerald-400 uppercase font-bold'>Sheriyansh</h2> </Link>  
        <div className=' flex justify-between px-5 w-3/12 items-center'>
          <Link to='/'> Home </Link>
          <Link to='/about'> About </Link>
          <Link to='/products'> Product </Link>
          <Link to='/contact'> Contact </Link>
        </div>
    </div>
  )
}

export default Navbar