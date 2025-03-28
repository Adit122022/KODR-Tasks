import React, { useState } from 'react';
import { addUser } from '../../store/reducer/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
 const users = useSelector((state) => state.user);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Name: ', name);
        // console.log('Email: ', email);
        // setName('');
        // setEmail('');
        dispatch(addUser({id:users[users.length-1].id +1 ,name, email}));
        navigate('/');
      };

    
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[90%] max-w-md">
        {/* Form Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New User
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={e=>setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
