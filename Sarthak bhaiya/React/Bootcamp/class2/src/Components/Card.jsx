import React from 'react'

const Card = ({character}) => {
  return (
    <div className='text-white w-80 flex-grow h-3/4 flex group hover:justify-center hover:items-center  shadow border rounded-xl flex-shrink-0  relative overflow-hidden'>
        <div className="w-full h-full overflow-hidden">
        <img className='w-full h-full group-hover:scale-110 transition-all duration-500 object-cover object-top' src={character.img} alt="" />
        </div>
     
       <div className='backdrop-blur-[1px] bg-[rgba(255, 255, 255, 0.3);] transition-all duration-200 w-full h-full top-0 absolute opacity-0 group-hover:opacity-100'>
       <div className="w-full h-1/3 p-5 absolute opacity-0 transition-all duration-700  group-hover:opacity-100 group-hover:bottom-0 bottom-[-30%] ">
       <h3 className='text-sm text-[#D4F6FF] font-sans font-semibold'>{character.role}</h3>
        <h1 className='text-2xl font-black font-serif flex w-full items-center gap-5 text-[#f2f2f2]'>{character.name} <span className='text-sm font-semibold font-sans'> {character.age}</span></h1>
        <h2 className='font-["Shadows Into Light", cursive] scrollbar text-lg h-20 overflow-y-scroll w-full'>{character.famousLine}</h2>
       </div>
       </div>
    </div>
  )
}

export default Card