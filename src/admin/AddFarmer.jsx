import React from 'react';

export default function AddFarmer() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-teal-700">
      <form className="bg-gradient-to-r from-yellow-200 to-red-300 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Add Farmer</h2> {/* Title added here */}
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="fullname">Full Name</label>
          <input 
            type="text" 
            id="fullname" 
            placeholder='Enter Full Name' 
            required 
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="gender">Gender</label>
          <select 
            id="gender" 
            required 
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div> 

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="village">Address</label>
          <input 
            type="text" 
            id="village" 
            placeholder='Enter Your Town/Village' 
            required 
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder='Enter Your Email'  
            required 
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="contact">Contact</label>
          <input 
            type="number" 
            id="contact" 
            placeholder='Enter Your Contact Number (+91)'  
            required 
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
        >
          Add
        </button>
      </form>
    </div>
  );
}
