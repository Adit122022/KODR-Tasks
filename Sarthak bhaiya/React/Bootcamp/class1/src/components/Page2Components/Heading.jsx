import React from "react";

const Heading = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col mt-16">
        <p className="font-normal mb-10">Cases</p>
        <h1 className="relative text-4xl md:text-[9rem] font-bold text-center leading-[0.9] uppercase after:content-['Gotta_see_m_all']   md:after:absolute after:top-[95%] md:after:right-52  after:rotate-[-15deg]  after:normal-case after:text-xs after:px-2 after:py-2 after:right-60 md:after:text-lg   md:after:px-7 md:after:py-5 after:bg-[#F4C727]  after:rounded-3xl after:font-semibold  ">
          Head Turning <br /> Projects
        </h1>
      </div>
      <div className="w-screen flex justify-end px-20 mb-16">
        <button className="md:py-4 md:px-4 px-3 underline-offset-4   md:content-end rounded-2xl md:mt-5 mt-10  hover:rounded-[3rem] transition-all ease-linear duration-200 hover:underline text-zinc-800 text-base font-semibold border border-1 border-gray-950 ">
          Alle projecten <i class="ri-arrow-right-line ml-5"></i>
        </button>
      </div>
    </>
  );
};

export default Heading;
