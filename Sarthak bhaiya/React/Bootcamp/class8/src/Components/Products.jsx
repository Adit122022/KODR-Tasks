import React from 'react';
import { useCart } from '../Context/CartContext'; // Import the useCart hook

const Products = ({ products }) => {
  const { addToCart } = useCart(); // Access the addToCart function

  return (
    <div className="w-full h-full  mb-12 py-12">
      <div className="container mx-auto mb-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain rounded-t-lg"
              />

              <div className="p-6">
                {/* Category and Price */}
                <div className="text-sm text-gray-500 mb-2">{product.category}</div>
                <h3 className="text-xl font-semibold text-gray-800 truncate">{product.title}</h3>
                <p className="text-lg font-bold text-blue-500 mt-2">${product.price}</p>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)} // Call addToCart when the button is clicked
                  className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
