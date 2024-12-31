import React, { useState } from 'react';

const Frontend = () => {
  const [selectedTopic, setSelectedTopic] = useState('');

  // Course topics
  const topics = [
    "HTML Basics",
    "CSS Fundamentals",
    "JavaScript Introduction",
    "Responsive Web Design",
    "Frontend Frameworks (React, Angular, Vue)"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center overflow-y-scroll mt-28">
      {/* Course Thumbnail */}
      <div className="w-1/2 h-96  bg-no-repeat bg-center mb-8 bg-cover" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMYTE_uB1ted-q5g_gC8rifW-FweOwk4iVw&s")' }}>
        <div className="flex justify-center items-end pb-12 w-full h-full hover:bg-black hover:bg-opacity-50">
          <h1 className="text-4xl font-extrabold text-white uppercase">Frontend DOMINATION</h1>
        </div>
      </div>

      {/* Course Details Section */}
      <div className="w-full max-w-4xl px-6 py-8 bg-gray-800 rounded-lg shadow-lg">
        {/* Price Section */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-yellow-400">Price: $49.99</h2>
        </div>

        {/* Topics Dropdown */}
        <div className="mb-6">
          <label htmlFor="topics" className="text-xl font-semibold block mb-2">Select a Topic:</label>
          <select
            id="topics"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="" disabled>Select a Topic</option>
            {topics.map((topic, index) => (
              <option key={index} value={topic}>{topic}</option>
            ))}
          </select>
        </div>

        {/* Description Section */}
        <div className="text-center">
          <p className="text-lg">
            This course covers all fundamental concepts of frontend web development.
            You will learn how to build modern websites using HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
