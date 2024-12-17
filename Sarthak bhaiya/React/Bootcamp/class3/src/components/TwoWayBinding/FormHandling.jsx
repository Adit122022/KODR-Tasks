import React, { useState } from "react";
import Card from "../Card";

const FormHandling = () => {
  const [value, setValue] = useState(""); 
  const [disc, setDisc] = useState(""); 
  const [file, setFile] = useState(""); 
  const [data, setData] = useState([]); 

  const submitHandler = (e) => {
    e.preventDefault();


    const newEntry = {
      name: value,
      description: disc,
      file: file,
    };

    setData([...data, newEntry]);

    setValue("");
    setDisc("");
    setFile("");
  };

  return (
    <>
      <div className="flex h-screen justify-center absolute z-50   items-center backdrop-blur-md backdrop-opacity-55 md:backdrop-filter-none bg-[#0d0d0de6]  w-screen ">
        <form
          className="w-1/2  bg-[#ffffff87] backdrop-blur-xl flex items-center border-green-400 border text-white   py-12  rounded-xl justify-center"
          onSubmit={submitHandler}
        >
          <div className="w-1/2 h-full flex flex-col gap-10">
            {/* Name Input */}
            <input
              className="bg-transparent rounded-xl px-4 py-2 outline-none border border-green-400"
              placeholder="NAME........."
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            {/* Description Input */}
            <input
              className="bg-transparent rounded-xl px-4 py-2 outline-none border border-green-400"
              placeholder="DESCRIPTION........."
              type="text"
              value={disc}
              onChange={(e) => setDisc(e.target.value)}
            />

            {/* File Input */}
            <input
             className=" text-green-200 text-sm file:text-base rounded-xl px-4 py-2 outline-none border border-green-400 flex gap-10 file:text-green-400 file:mr-7  file:outline-none  file:border-0   file:bg-transparent "
              type="file"
             
              onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
            />

            {/* Preview Image */}
            {file && <img src={file} alt="Preview" className="w-32 h-32" />}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-400 rounded-xl active:scale-95 hover:bg-green-300 text-white font-bold text-xl py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:h-[70vh] h-[50vh] gap-5">
        {data.map((item, index) => (
          <div key={index} id={index} className="mb-5">
            <Card
              text={item.name}
              discription={item.description}
              file={item.file}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FormHandling;
