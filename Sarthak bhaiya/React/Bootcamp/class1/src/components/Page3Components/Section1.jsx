import React from 'react'

const Section1 = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center flex-col pt-16 bg-white'>
        <p className='font-normal mb-10'>Our belief</p>
        <h1 className="relative md:text-[8rem] text-3xl font-bold text-center leading-[0.9] uppercase ">
        Brands just want <br />
        To have fun</h1>
    </div>
    <div className='w-screen md:h-[120vh] h-[50vh] px-5 md:px-20 md:pt-20 bg-white'>
        <img className='w-full h-full  rounded-[3rem] md:rounded-[8rem]' src="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cabd4824cecf2c23abed79_BRAND%20STORY%20SESSIES_Home-Nan-p-2000.webp" alt="" />
    </div>
    <div className='bg-white  md:px-20 md:flex pt-4 pb-8 items-center gap-4'>
        <span className='bg-[#A3A4A7] px-4 text-white py-2  rounded-3xl'>Brand Story sessies</span>
        <p className='text-[#A3A4A7] mt-10 md:mt-0'>Samen ontdekken we jouw merkverhaal</p>
    </div>
    </>
  )
}

export default Section1