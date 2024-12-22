import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white fixed top-0 w-full z-50 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-5 px-8">
        {/* Left Section: Navigation Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline'
                : 'hover:text-blue-400 transition duration-300'
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline'
                : 'hover:text-blue-400 transition duration-300'
            }
          >
            Cart
          </NavLink>
        </div>

        {/* Center Section: Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-400 hover:text-blue-500 transition duration-300 cursor-pointer"
        >
          BrandName
        </NavLink>

        {/* Right Section: Optional Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline'
                : 'hover:text-blue-400 transition duration-300'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 underline'
                : 'hover:text-blue-400 transition duration-300'
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden text-white hover:text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
