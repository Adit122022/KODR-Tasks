import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Components/Products';
import Header from './Components/Header';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import { CartProvider } from './Context/CartContext'; // Import CartProvider

const App = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <div className="w-screen h-screen overflow-x-hidden bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
