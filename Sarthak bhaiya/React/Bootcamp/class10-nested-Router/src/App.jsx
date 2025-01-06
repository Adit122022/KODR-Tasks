import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sheriyansh from './Pages/Sheriyansh';
import Courses from './Pages/Courses';
import Kodr from './Pages/Kodr';
import Domintation from './Pages/Domintation';
import Nav from './Components/Nav';
import Frontend from './Fontentend-Backend/Frontend';
import Error from './Pages/Error';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Navigation */}
      <Nav />
      
      {/* Main Content */}
      <div className="flex-grow overflow-auto">
        <Routes>
          <Route path="/" element={<Sheriyansh />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/domi/:id" element={<Domintation />} />
          <Route path='domi/:id/frontend' element ={<Frontend/>} />
          <Route path="/kodr" element={<Kodr />} />
          <Route path='/*' element={<Error/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
