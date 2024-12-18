import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [Name, setName] = useState("");
  const [Details, setDetails] = useState("");
  const [Image, setImage] = useState("");
  const [AllData, setAllData] = useState([]);
  const [gender, setGender] = useState(true); // true for Male, false for Female
  const [showCards, setShowCards] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: Name,
      details: Details,
      image: Image,
      gender: gender ? "Male" : "Female",
    };
    setAllData([...AllData, obj]);
    setName("");
    setDetails("");
    setImage("");
    setShowCards(true);
  
  };
  const deleteCard = (id) => {
    const updatedData = [...AllData,];
    updatedData.splice(id,1)
    setAllData(updatedData);
  };

  return (
    <>
      {/* Form Section */}
      <div className="w-full flex justify-center items-center  my-5">
       <div>
        <img src="" alt="" />
       </div>
       <form
          className="flex flex-col justify-center items-center gap-9 border-2 border-emerald-400 py-8 rounded-xl md:px-10 md:w-1/2 h-auto"
          onSubmit={handleSubmit}
        >
          <div className="w-full px-5">
            {/* Name Input */}
            <input
              className="w-[48%] px-3 py-2 border-2 border-emerald-600 rounded-lg text-white outline-none bg-transparent focus:border-emerald-400"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your Name"
              required
            />
            {/* Details Input */}
            <input
              className="w-[48%] ml-[4%] px-3 my-5 py-2 border-2 border-emerald-600 rounded-lg text-white outline-none bg-transparent focus:border-emerald-400"
              value={Details}
              onChange={(e) => setDetails(e.target.value)}
              type="text"
              placeholder="Enter your Details"
              required
            />
            {/* Image URL Input */}
            <input
              className="w-full px-3 py-2 border-2 border-emerald-600 rounded-lg text-white outline-none bg-transparent focus:border-emerald-400"
              value={Image}
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="Enter your Image URL"
              required
            />
          </div>


<div className="md:flex   w-full px-4 justify-between">
          {/* Gender Toggle */}
          <div className="flex items-center gap-4">
            <label className="">Gender:</label>
            <div
              onClick={() => setGender(!gender)}
              className={`w-14 h-8 flex items-center rounded-full cursor-pointer ${
                gender ? "bg-blue-500" : "bg-pink-500"
              } p-1 transition-colors duration-300`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform ${
                  gender ? "translate-x-0" : "translate-x-6"
                } transition-transform duration-300`}
              ></div>
            </div>
            <span className=" duration-300  font-semibold font-sans opacity-95">{gender ? "Male" : "Female"}</span>
          </div>

          {/* Submit Button */}
          <button className="md:mt-0 mt-5 border-none bg-emerald-400 px-8 text-xl active:scale-95 hover:bg-emerald-600 py-2 text-white rounded-xl">
            Submit
          </button>
</div>
        </form>
      </div>

         {/* Cards Section */}
         {showCards && (
        <div className="w-full   text-white flex flex-wrap gap-6 md:p-6 p-0 justify-center  ">
          {AllData.map((data, index) => (
            <Card key={index} data={data} onDelete={deleteCard} />
          ))}
        </div>
      )}
    </> 
  );
};

export default Form;
