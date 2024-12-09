import React from 'react'

const Card = ({character}) => {
  return (
    <div className=' mb-10 md:mb-0 text-white md:w-80 flex-grow md:h-3/4 h-3/5 flex group hover:justify-center hover:items-center  shadow-md  rounded-3xl flex-shrink-0  relative overflow-hidden'>
        <div className="w-full h-full overflow-hidden">
        <img className='w-full h-full group-hover:scale-110 transition-all duration-500 object-cover object-top' src={character.img} alt="" />
        </div>
     
       <div className='backdrop-blur-[1px] bg-[rgba(0,0,0,0.5);] transition-all duration-200 w-full h-full top-0 absolute opacity-0 group-hover:opacity-100'>
       <div className="w-full md:h-1/3 h-1/2 p-5 absolute opacity-0 transition-all duration-700  group-hover:opacity-100 group-hover:bottom-0 bottom-[-5%] ">
       <h3 className='text-sm text-[#D4F6FF] font-sans font-semibold'>{character.role}</h3>
        <h1 style={{color:character.textColor}} className='text-3xl font-black font-serif flex w-full items-center gap-5 '>{character.name} <span className='text-sm font-semibold font-sans'> {character.age}</span></h1>
        <h2 className='font-shadows scrollbar text-[#C1BAA1] text-base h-20 opacity-60 font-semibold overflow-y-scroll w-full'>{character.famousLine}</h2>
       </div>
       </div>
    </div>
  )
}

export default Card