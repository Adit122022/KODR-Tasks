import React from 'react';
import { useCart } from '../Context/CartContext'; 

const Home = ({products}) => {
  const { addToCart } = useCart();
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <img
          src="https://via.placeholder.com/1920x1080?text=Big+Hero+Image"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg max-w-2xl">
            Discover the best deals on gadgets, fashion, and home essentials. Shop now and save big!
          </p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
            Shop Now
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Section */}
      <div className="px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Featured Products
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex space-x-6 py-4 animate-scroll whitespace-nowrap"
            style={{
              animation: 'scroll 20s linear infinite',
            }}
          >
            {products.map((item, index) => (
  <div
    key={index}
    className="relative bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out inline-block w-72"
  >
    {/* Product Image */}
    <img
      className="w-full h-48 object-contain rounded-t-lg"
      src={item.image}
      alt={`Product ${index + 1}`}
    />

    {/* Product Info */}
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        {item.description.length > 50
          ? `${item.description.slice(0, 50)}...`
          : item.description}
      </p>
      <div className="flex justify-between items-center">
        {/* Price */}
        <span className="text-lg font-bold text-blue-500">${item.price}</span>

        {/* Add to Cart Button */}
        <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
