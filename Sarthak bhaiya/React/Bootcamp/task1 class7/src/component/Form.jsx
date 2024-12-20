import React, { useState } from 'react';

function FormUI() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phoneNumber: '',
    favorite: false,
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({...formData,[name]: type === 'checkbox' ? checked : value, });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: '', company: '', phoneNumber: '', favorite: false });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Contact Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your company"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="favorite"
              name="favorite"
              checked={formData.favorite}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="favorite" className="ml-2 block text-sm text-gray-700">
              Favorite
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800">Submitted Data:</h3>
          <ul className="mt-2 space-y-2">
            {submittedData.map((data, index) => (
              <li key={index} className="p-2 border border-gray-300 rounded-md">
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Company:</strong> {data.company}</p>
                <p><strong>Phone:</strong> {data.phoneNumber}</p>
                <p><strong>Favorite:</strong> {data.favorite ? 'Yes' : 'No'}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FormUI;

