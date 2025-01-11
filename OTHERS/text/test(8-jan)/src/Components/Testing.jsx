import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const TextToImageGenerator = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  // Convert image file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const generateImage = async () => {
    if (!text || !selectedImage) {
      alert("Please provide both a text prompt and an image.");
      return;
    }

    try {
      // Convert image to base64
      const base64Image = await convertToBase64(selectedImage);

      // Create Google Generative AI instance
      const genAI = new GoogleGenerativeAI(
        "AIzaSyCJ4vITsn9a7iNcqntTcN__3sn4ELIAAd4"
      );

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Ensure the image and text are passed correctly in the API request
      const result = await model.generateContent(text, {
        image: base64Image,mimeType: base64Image.type
      });

      console.log(result); // Check the full API response for debugging

      if (result && result.response && result.response.candidates) {
        const generatedText = result.response.candidates[0].content.parts[0].text;
        setImageSrc(generatedText); // Assuming the response contains the generated text
      } else {
        console.error("No candidates found in the API response.");
      }
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImage();
  };

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
          <div className="flex justify-start ">
            <div className="bg-blue-100 p-3 rounded-lg shadow-sm w-60 h-52 overflow-auto ">
              <p className="w-full rounded">{imageSrc}</p>
            </div>
          </div>
        )}
        <div className="flex justify-end">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
            {/* Input for Text */}
            <input
              type="text"
              placeholder="Enter your prompt"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {/* Input for Image */}
            <input
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="file"
              accept="image/*"
            />
            <button
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

export default TextToImageGenerator;
