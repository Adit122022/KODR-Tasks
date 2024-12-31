import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Frontend from '../Fontentend-Backend/Frontend';

const Domintation = () => {
  const { id } = useParams(); 

  return (
    <div className="flex  items-center justify-center h-screen w-full">
     <div className='flex flex-col items-center justify-center'>
     <h1 className="text-3xl font-bold mb-6">Domination</h1>
      <div className="grid grid-cols-1 gap-4 w-64">
        <Link 
          to={`/domi/${id}/frontend`} 
          className="block bg-blue-500 text-white text-center py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
        Frontend
        </Link>
        <Link 
          to={`/domi/${id}/backend`} 
          className="block bg-green-500 text-white text-center py-3 rounded-lg shadow-lg hover:bg-green-600 transition">
          Backend
        </Link>
      </div>
     </div>
    </div>
  );
};

export default Domintation;
