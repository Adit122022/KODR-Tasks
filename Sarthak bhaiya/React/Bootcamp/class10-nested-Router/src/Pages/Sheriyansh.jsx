import React from 'react';

const Sheriyansh = () => {
  return (
    <div className="bg-gray-900 text-white">

      {/* Hero Section */}
      <div className="relative w-full h-screen bg-cover bg-center mt-20" style={{ backgroundImage: 'url("https://i.ytimg.com/vi/B9ZLDN-G_X0/maxresdefault.jpg")' }}>
        <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-center text-center bg-black opacity-60">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-4">Welcome to Sheriyansh</h1>
          <p className="text-xl mb-8">Your journey to mastering programming and development starts here</p>
          <a href="#features" className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg text-xl hover:bg-yellow-500 transition">Get Started</a>
        </div>
      </div>

      {/* Intro Section */}
      <div className="px-6 py-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">About Sheriyansh</h2>
        <p className="text-lg text-gray-300">
          Sheriyansh is a platform dedicated to providing quality learning resources for programming, web development, and tech-related fields. Whether you're a beginner or an advanced learner, we have something for you.
        </p>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-gray-800 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Features</h2>
          <p className="text-lg text-gray-300 mb-6">Explore our platform and discover the resources that can help you grow and master your skills.</p>
        </div>
        <div className="flex justify-center gap-12">
          <div className="w-64 text-center text-white">
            <div className="bg-yellow-400 text-gray-900 p-6 rounded-full mb-4">
              <i className="fas fa-laptop-code text-4xl"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Interactive Learning</h3>
            <p className="text-lg text-gray-300">Engage with hands-on exercises and projects.</p>
          </div>

          <div className="w-64 text-center text-white">
            <div className="bg-green-400 text-gray-900 p-6 rounded-full mb-4">
              <i className="fas fa-book text-4xl"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Comprehensive Resources</h3>
            <p className="text-lg text-gray-300">Access a wide range of courses and tutorials.</p>
          </div>

          <div className="w-64 text-center text-white">
            <div className="bg-blue-400 text-gray-900 p-6 rounded-full mb-4">
              <i className="fas fa-users text-4xl"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Community Support</h3>
            <p className="text-lg text-gray-300">Join a community of like-minded learners and experts.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-800 text-white py-6">
        <div className="text-center">
          <p className="text-lg">© 2024 Sheriyansh. All rights reserved.</p>
          <div className="mt-4">
            <a href="/about" className="text-yellow-400 hover:text-yellow-500">About Us</a> | 
            <a href="/contact" className="text-yellow-400 hover:text-yellow-500 ml-4">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheriyansh;
