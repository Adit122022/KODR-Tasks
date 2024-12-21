import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <h1 className="md:text-xl font-bold">ADD TO CART</h1>
    <ul className="flex px-12   gap-16 ">
      <li>
        <Link to="/products" className="hover:text-gray-400 md:text-2xl transition-colors">
          Products
        </Link>
      </li>
      <li>
        <Link to="/cart" className="hover:text-gray-400 md:text-2xl transition-colors">
          Cart
        </Link>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;
