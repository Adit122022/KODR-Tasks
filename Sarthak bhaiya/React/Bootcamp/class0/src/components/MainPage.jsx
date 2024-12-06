import React from 'react'

const MainPage = () => {
  return (
    <main class="flex flex-col w-full h-[96vh] justify-center items-center" >
    <div class="flex flex-col w-full gap-5 items-center px-2">
     <h1 class="md:text-[4.9rem] text-3xl font-bold text-center tracking-tighter font-[Roboto]" >The React Framwork for the Web</h1>
     <p class="md:text-xl text-sm font-normal w-full  md:w-1/2 text-center my-8 bg-grey-500">Used by some of the world's largest companies, Next.js enables you to create <span class="font-semibold">high-quality web applications</span> with the power of React components.</p>
     <div class="flex">
       <button class="md:py-3 bg-black text-white md:px-8 px-4 py-2 text-sm   border-none rounded-xl  hover:bg-black hover:text-white">
         Get Started
       </button>
       <button class="md:py-3 md:px-8 px-3 py-2 text-sm   border-gray-100 border-2 ml-2 rounded-xl hover:bg-gray-200 transition-all ">
         Learn Next.js
       </button >
     </div>
 <div class="group flex "> 
    <a href=" " class="text-grey-500 flex items-center group transition-all">  <span class="group-hover:rotate-[360deg] ease-in duration-300">▲</span>~  npx create-next-app@latest </a>
   <i class=" ml-2 opacity-0 group-hover:opacity-100 ri-file-copy-line transition-all"></i></div>
    </div>
 
   </main>
  )
}

export default MainPage