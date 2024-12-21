import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Section: Navigation Links */}
        <div className="flex space-x-6">
          <div className="hover:text-blue-400 transition duration-300 cursor-pointer">
            Products
          </div>
          <div className="hover:text-blue-400 transition duration-300 cursor-pointer">
            Cart
          </div>
        </div>

        {/* Center Section: Logo */}
        <div className="text-2xl font-bold text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer">
          BrandName
        </div>

        {/* Right Section: Optional Links or Icons */}
        <div className="flex space-x-6">
          <div className="hover:text-blue-400 transition duration-300 cursor-pointer">
            About
          </div>
          <div className="hover:text-blue-400 transition duration-300 cursor-pointer">
            Contact
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
