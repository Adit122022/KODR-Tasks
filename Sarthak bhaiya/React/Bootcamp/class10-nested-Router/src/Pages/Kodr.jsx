import React from 'react';
import { Link } from 'react-router-dom';

const Kodr = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-8">Kodr - Programming Academy</h1>

      {/* Course Description */}
      <div className="max-w-3xl text-center mb-8 px-6">
        <p className="text-xl mb-6">
          Welcome to Kodr! We offer a variety of courses to help you master different programming languages and concepts.
          From Python to JavaScript, our courses are designed for developers of all skill levels.
        </p>
        
        <p className="text-lg text-gray-300">
          Get started today and enhance your coding skills with our structured and easy-to-follow curriculum.
        </p>
      </div>

      {/* Call-to-Action Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Browse Our Courses</h2>

        <div className="flex gap-4">
          {/* Link Buttons */}
          <Link to="/domi/kodr" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
            Frontend Courses
          </Link>
          <Link to="/domi/kodr" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition">
            Backend Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kodr;
