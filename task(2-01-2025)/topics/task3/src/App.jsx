import React from 'react'
import { useRef } from 'react'

const App = () => {
 const input= useRef(null)
 const container= useRef(null)
   return (
    <div ref={container} onClick={() =>input.current.click()} className='w-screen h-screen flex justify-center items-center '>
      <div className='w-32 flex items-center justify-center p-5 rounded-full active:scale-95 bg-black text-white relative'>
        <span className='absolute  text-xl uppercase  select-none   font-bold'>Color</span>
        <input className='' onInput={(e)=> container.current.style.backgroundColor = e.target.value}  ref={input} hidden type="color" />
      </div>
    </div>
  )
}

export default App