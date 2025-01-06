import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="w-full flex justify-between items-center px-10 py-5 bg-gray-100 shadow-md fixed top-0 z-30">
      {/* Logo */}
      <Link to="/" className="text-3xl font-extrabold text-blue-600">
        SHERIYANS
      </Link>
      {/* Navigation Links */}
      <div className="flex justify-between gap-5 items-center">
        <Link to="/domi/:id" className="text-gray-600 hover:text-blue-500 transition">
          Domination
        </Link>
        <Link to="/courses" className="text-gray-600 hover:text-blue-500 transition">
          Courses
        </Link>
        <Link to="/kodr" className="text-gray-600 hover:text-blue-500 transition">
          Kodr
        </Link>
      </div> 
    </div>
  );
};
         
export default Nav;
