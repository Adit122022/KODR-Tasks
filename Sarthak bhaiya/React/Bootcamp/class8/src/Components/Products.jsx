import React from 'react';

const Products = ({ products }) => {
  return (
    <div className="w-full h-full overflow-y-scroll  p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300"
            key={item.id}
          >
                 <div className='flex justify-between mb-4 items-center'>
          <span className='px-2 py-1 rounded-full font-serif text-xs  bg-[#d1d1b7d7]'>{item.category}</span>
          <h1 className=" text-lg font-semibold text-gray-800 line-clamp-2">
              ${item.price}
            </h1>
          </div>
            <div className="w-full h-48 flex justify-center items-center overflow-hidden">
              <img
                className="object-contain max-w-full max-h-full"
                src={item.image}
                alt={item.title}
              />
            </div>
      
           <h1 className="mt-4 w-3/4 text-lg font-semibold text-gray-800 line-clamp-2">
              {item.title}
            </h1>  
            <p className="mt-4 text-xs font-medium text-gray-500 line-clamp-3">
              {item.description}
            </p>
            <button className=" mt-12 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
  ADD TO CART
</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
