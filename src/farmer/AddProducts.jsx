import React, { useState } from 'react';
import { FaTag, FaListAlt, FaDollarSign, FaImage, FaUpload } from 'react-icons/fa';

export default function AddProduct() {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ productId, productName, productCategory, price, description, image });
    // Reset form
    setProductId('');
    setProductName('');
    setProductCategory('');
    setPrice('');
    setDescription('');
    setImage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-blue-300 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg p-5 w-1/3">
        <h2 className="te`xt-2xl font-bold mb-6 text-center text-gray-800">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Product ID</label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaTag className="text-gray-400 m-2" />
              <input
                type="text"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="flex-1 p-2 focus:outline-none"
                placeholder="Enter Product ID"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Product Name</label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaListAlt className="text-gray-400 m-2" />
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="flex-1 p-2 focus:outline-none"
                placeholder="Enter Product Name"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Product Category</label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaListAlt className="text-gray-400 m-2" />
              <input
                type="text"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="flex-1 p-2 focus:outline-none"
                placeholder="Enter Product Category"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Price</label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaDollarSign className="text-gray-400 m-2" />
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="flex-1 p-2 focus:outline-none"
                placeholder="Enter Price"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none"
              placeholder="Enter Product Description"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Upload Image</label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <FaImage className="text-gray-400 m-2" />
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="flex-1 p-2 focus:outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            <FaUpload className="inline mr-2" /> Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
