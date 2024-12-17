import React, { useState } from 'react'
import Form from './Components/Form'

const App = () => {
  const [display, setdisplay] = useState(false)
  const handleToggle = () => {
    console.log('toggle')
   if(display == false) {
    return setdisplay(true);
   }
   else if(display == true) {
    return setdisplay(false)
   }
  }
  return (
    <div className='w-screen h-screen text-black overflow-x-hidden p-5 '>

<button className='text-2xl border-2 border-[#333] px-2 rounded' onClick={() =>{ handleToggle() }}>+</button>

{display ? <Form  /> : null}
    </div>
  )
}

export default App