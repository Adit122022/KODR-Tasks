import React from 'react';

const Card = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  xl:grid-cols-4 gap-5 p-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white shadow-lg py-2 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <div className="w-full h-48 overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src={product.image}
              alt={product.title} // Use product name as alt text
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{product.title}</h2>
            <div className="flex w-full justify-between items-center">
              <p className="text-gray-700 font-medium mb-2">Price: ₹{product.price}</p>
              <p className="text-white text-sm px-2 py-1 bg-slate-500 rounded-full">{product.category}</p>
            </div>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p> {/* Limit to 3 lines */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
