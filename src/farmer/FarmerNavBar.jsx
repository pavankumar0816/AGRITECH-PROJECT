import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
 import AddProducts from './AddProducts';
 import ViewProducts from './ViewProducts';
 import DeleteProducts from "./DeleteProducts"
 
export default function FarmerNavBar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isFarmerLoggedIn');
    localStorage.removeItem('farmer');
    navigate('/farmerlogin');
    window.location.reload()
  };

  const [isProductsOpen, setProductsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">Farmer Panel</h1>
          <ul>
            <li className="mb-2">
              <Link to="/farmerhome" className="block py-2 px-4 rounded hover:bg-gray-700">Home</Link>
            </li>
            {/* Products Dropdown */}
            <li className="mb-2">
              <button
                className="flex justify-between items-center w-full py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setProductsOpen(!isProductsOpen)}
              >
                Products
                <span className="transform transition-transform duration-200" style={{ transform: isProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  ▼
                </span>
              </button>
              {isProductsOpen && (
                <ul className="pl-4">
                  <li className="mb-2">
                    <Link to="/addproducts" className="block py-2 px-4 rounded hover:bg-gray-600">Add Product</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/viewproducts" className="block py-2 px-4 rounded hover:bg-gray-600">View Products</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/updateproduct" className="block py-2 px-4 rounded hover:bg-gray-600">Update Product</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/deleteproduct" className="block py-2 px-4 rounded hover:bg-gray-600">Delete Product</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <Link to="/viewtransactionhistory" className="block py-2 px-4 rounded hover:bg-gray-700">View Transaction History</Link>
            </li>
            <li className="mb-2">
              <Link to="/viewcustomers" className="block py-2 px-4 rounded hover:bg-gray-700">View Customers</Link>
            </li>

            <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>

          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 p-0">
        {/* Top Navbar */}
        <div className="flex justify-between items-center bg-gray-900 text-white p-4">
          <h2 className="text-lg font-bold">Farmer</h2>
          <div>
            <Link to="/profile" className="mr-4 hover:underline">Profile</Link>
            <Link to="/logout" className="hover:underline">Logout</Link>
          </div>
        </div>
        
        {/* Routes */}
        <div className="p-4">
          <Routes>
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/viewproducts" element={<ViewProducts/>} />
          <Route path="/deleteproduct" element={<DeleteProducts/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
