import React, { useContext, useState, useEffect } from 'react';
import { ProductData } from '../context/ProductContext';
import Card from './Card';

const Searchbar = () => {
  const { products, loading } = useContext(ProductData);
  const [text, setText] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div>
      
      <div className="fixed top-0 left-0 right-0 p-2 z-10 shadow-lg">
        <div className="flex flex-col items-center justify-center">
          <input
            className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition duration-300 ease-in-out"
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search for products..."
          />
        </div>
      </div>
      
      {/* Product Cards Section */}
      <div className="pt-24 flex flex-col items-center justify-start  py-8 min-h-screen">
        {loading ? (
          <p className="text-center text-xl font-semibold text-gray-500">Loading products...</p> // Show loading message
        ) : filteredProducts.length > 0 ? (
          <Card products={filteredProducts} />
        ) : (
          <p className="text-lg font-medium text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
