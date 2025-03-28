import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../store/reducer/userReducer';

const Home = () => {
  const users = useSelector((state) => state.user);
  const dispatch=useDispatch();

  const handleDelete = (id) =>{
    if (window.confirm('Are you sure you want to delete this user?')) {
        dispatch(deleteUser({ id }));
      }
  
  }

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center py-8">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">CRUD App Using Redux</h2>
      
      {/* Create Button */}
      <Link to="/create" className="px-6 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition">
        CREATE +
      </Link>

      {/* Table */}
      <div className="w-[90%] max-w-5xl mt-8 overflow-x-auto shadow-lg bg-white rounded-lg">
       {users.length > 0  ?  ( <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-100 transition">
                  <td className="py-3 px-4">{idx + 1}</td>
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">
                    <Link to={`/edit/${user.id}`} className="px-4 py-1 bg-emerald-400 text-white rounded hover:bg-emerald-600 transition">
                      Edit
                    </Link>
                    
                    <button onClick={()=>handleDelete(user.id)} className="px-4 ml-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        ) :(
            <p className="text-center py-8 text-gray-600">No users found. Add a new user to get started!</p>
        ) }
      </div>
    </div>
  );
};

export default Home;
