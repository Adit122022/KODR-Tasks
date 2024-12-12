import React from 'react'
import { motion } from "framer-motion"

const Card = ({character ,ref}) => {
  return (
    <motion.div  dragConstraints={ref} drag  whileDrag={{scale:1.05}} className='absolute z-10' >
    <div className='mb-10 md:mb-0 text-white md:w-80 flex-grow  md:h-[70vh] h-[50vh] flex group hover:justify-center hover:items-center  shadow-md  rounded-3xl flex-shrink-0  relative overflow-hidden'>
        <div className="w-full h-full overflow-hidden">
        <img className='w-full h-full group-hover:scale-110 transition-all duration-500 object-cover object-top' src={character.img} alt="" />
        </div>
       <div className='backdrop-blur-[1px] bg-[rgba(0,0,0,0.5);] transition-all duration-200 w-full h-full top-0 absolute opacity-0 group-hover:opacity-100'>
       <div className="w-full md:h-1/3 h-1/2 md:p-5 px-2 absolute opacity-0 transition-all duration-700  group-hover:opacity-100 group-hover:bottom-0 bottom-[-5%] ">
       <h3 className='md:text-sm text-xs text-[#D4F6FF] font-sans font-semibold'>{character.role}</h3>
        <h1 style={{color:character.textColor}} className='md:text-3xl text-2xl font-black font-serif flex w-full items-center gap-5 '>{character.name} <span className='md:text-sm text-xs font-semibold font-sans'> {character.age}</span></h1>
        <h2 className='font-shadows  scrollbar text-[#C1BAA1] text-base h-20 opacity-60 font-semibold overflow-y-scroll w-full'>{character.famousLine}</h2>
       </div>
       </div>
    </div>
    </motion.div>
  )
}

export default Card