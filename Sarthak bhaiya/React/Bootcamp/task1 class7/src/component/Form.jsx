import React, { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";

function FormUI() {
  const [Name, setName] = useState("");
  const [Company, setCompany] = useState("");
  const [Phone, setPhone] = useState('');
  const [Favorite,setFavorite] = useState(false);
  const [AllData, setAllData] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: Name,
      company: Company,
      phone: Phone,
    favorite:Favorite
    };
    setAllData([...AllData, obj]);
    setName("");
    setPhone("");
    setCompany("");
    setFavorite(true);
  
  };
  const deleteCard = (id) => {
    const updatedData = [...AllData,];
    updatedData.splice(id,1)
    setAllData(updatedData);
  };

  return (
    <div className="h-full w-full bg-gray-100 flex ">
      <div className="bg-white shadow-lg rounded-lg p-8 w-1/2 mx-auto h-full bg-gradient-to-r to-blue-200 from-blue-500">
        <h2 className="text-4xl font-extrabold  font-sans text-center text-white uppercase mb-6">ADD Contact </h2>
        <form onSubmit={handleSubmit} className="w-full p-8  shadow-xl bg-[#ffffff2a] backdrop-blur-xl rounded-md">
          <div className='mb-5'>
            <label htmlFor="name" className="block text-base font-serif font-semibold  text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={Name}
              onChange={(e)=> setName(e.target.value)}
              className="w-full border border-gray-300 placeholder:font-mono placeholder:text-xl placeholder:text-white bg-white/30 backdrop-brightness-90 rounded-md p-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className='mb-5'>
            <label htmlFor="company" className="block text-base font-serif font-semibold  text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={Company}
              onChange={(e)=> setCompany(e.target.value)}
              className="w-full border border-gray-300 placeholder:font-mono placeholder:text-xl placeholder:text-white bg-white/30 backdrop-brightness-90 rounded-md p-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
              placeholder="Enter your company"
              required
            />
          </div>
          <div className='mb-5'>
            <label htmlFor="phoneNumber" className="block text-base font-serif font-semibold  text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={Phone}
              onChange={(e)=> setPhone(e.target.value)}
              className="w-full border border-gray-300 placeholder:font-mono placeholder:text-xl placeholder:text-white rounded-md p-2 bg-white/30 backdrop-brightness-90 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="flex items-center mb-5">
          <input
    type="checkbox"
    id="favorite"
    name="favorite"
    checked={Favorite}
    onChange={(e) => setFavorite(e.target.checked)}
    className="h-5 w-5 text-blue-600 bg-blue-500 hover:scale-110 transition transform duration-200 focus:ring-2 focus:ring-blue-500 border-gray-300 rounded"
  />
            <label htmlFor="favorite" className="ml-2 block text-base font-serif font-semibold text-gray-700">
              Favorite
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 backdrop-brightness-90 text-base font-serif font-semibold text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
      {/* card */}
      <div className=" p-8 w-1/2 bg-slate-300 h-screen overflow-y-scroll bg-gradient-to-r from-blue-200 to-blue-500">
          <h1 className='text-4xl font-extrabold  font-sans text-center text-slate-100 uppercase  mb-10'>Contact List </h1>
         
            {AllData.map((data, index) => (
              <li key={index} className="p-4 border transition-all duration-300  animate-bounce bg-slate-100  border-gray-300 rounded-md list-none shadow-md mt-4 flex justify-between">
                <div>
                    <h1 className='text-xl font-bold text-[#262525]'>{data.name}</h1>
                    <h2 className=' mt-2 text-xm font-bold text-slate-600'> Company : {data.company}</h2>
                    <h2 className='text-xm font-bold text-slate-600'> Phone Number : {data.phone}</h2>
                </div>
              <div className='flex flex-col items-center justify-between px-5' >
                <button className=' text-red-500 transition-all duration-300  animate-bounce  hover:text-red-900' onClick={(index)=>{
                  deleteCard(index)
                }}>
               
                <span className='text-3xl  '>  <MdOutlineDeleteOutline /></span>

</button>
              {data.favorite ? (<span className='bg-orange-500 transition-all duration-300  animate-bounce hover:bg-orange-700 text-white px-2 py-1 rounded-full'>Favorite </span> ): ''}
              </div>
              </li>
            ))}
         
        </div>
    </div>
  );
}

export default FormUI;

