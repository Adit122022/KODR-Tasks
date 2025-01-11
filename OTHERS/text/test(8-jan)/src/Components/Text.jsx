import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Text = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const generateImage = async () => {
 try { 
      const genAI = new GoogleGenerativeAI('AIzaSyCJ4vITsn9a7iNcqntTcN__3sn4ELIAAd4'); 
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

      const result = await model.generateContent(text , selectedImage); 
      console.log(result.response.candidates);
      const imageUrl = result.response.candidates[0].content.parts[0].text; 
      setImageSrc(imageUrl); 
      
   } catch (error) {
        console.error("Error generating image:", error);
      }
    }  
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(text)     
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
      };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        Text-to-Image Generator
      </h2>
      <div className="flex flex-col gap-4">
        {imageSrc && (
          <div className="flex justify-start">
            <div className="bg-blue-100 p-3 rounded-lg shadow-sm">
              <p className="w-48 rounded" >{imageSrc}</p>
            </div>
          </div>
        )}
        <div className="flex justify-end">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
            {/* input */}
            <input
              type="text"
              placeholder="Enter your prompt"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"    />
        <input  
        onChange={handleImageChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"  
        type="file" name="" id="" />
            <button
            onClick={generateImage}
              type="submit"
              className="self-end bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none"
            >
              Generate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Text;