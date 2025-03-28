import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector , } from 'react-redux';
import { updateUser } from '../../store/reducer/userReducer';


const Update = () => {
    const {id} =useParams()
    const users = useSelector((state) => state.user);
    const navigate =useNavigate()
    const dispatch = useDispatch();
    const filteredUsers = users.filter(user => user.id == id )
    const{name , email} =filteredUsers[0]

       const [upname, setName] = useState(name)
        const [upemail, setEmail] = useState(email)
         const handleSubmit = (e) => {
                e.preventDefault();
                dispatch(updateUser({id:id ,name:upname, email : upemail}));
                navigate('/');
                
              };
    
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-lg p-8 w-[90%] max-w-md">
      {/* Form Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
       Update User
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} >
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
       value={upname}
        onChange={(e)=> setName(e.target.value)}
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
           value={upemail}
           onChange={(e)=> setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Update