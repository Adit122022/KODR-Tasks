import React from 'react';

const Card = ({ data ,onDelete }) => {
  return (
    <div       style={{
        backgroundColor: data.gender === "Male" ? "#D4EBF8" : "#EFB6C8", // Blue for male, pink for female
      }}
 className="border-2 border-transparent hover:opacity-90 hover:border-[#9AA6B2] hover:scale-105 transition-all duration-500   w-fit h-fit  flex-grow rounded-lg flex items-center justify-between flex-shrink-0 px-4  py-2  shadow-2xl  group">
      <div className=" w-16 h-16 overflow-hidden rounded-full">
        <img
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
          src={data.image}
          alt={data.name}
        />
      </div>
      <div className="ml-4 w-2/3 ">
        <h1 className="text-xl font-semibold text-gray-400 uppercase ">{data.name}</h1>
        <h1 className="text-sm font-semibold text-gray-600 w-1.2  ">{data.details}</h1>
      </div>
      <button className='text-2xl border-2 border-[#333] px-2 rounded' onClick={(id) => onDelete(data.id)}>-</button>
    </div>
  );
};

export default Card;
