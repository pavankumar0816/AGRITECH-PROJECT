import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import AddFarmer from './AddFarmer';
import ViewFarmers from './ViewFarmers';
import ApproveProducts from './ApproveProducts'
import EditProducts from './EditProducts'
 
export default function AdminNavBar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };

  const [isFarmersOpen, setFarmersOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
          <ul>
            <li className="mb-2">
              <Link to="/adminhome" className="block py-2 px-4 rounded hover:bg-gray-700">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/changeadminpwd" className="block py-2 px-4 rounded hover:bg-gray-700">Change Password</Link>
            </li>
            <li className="mb-2">
              <button
                className="flex justify-between items-center w-full py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setFarmersOpen(!isFarmersOpen)}
              >
                Farmers
                <span className="transform transition-transform duration-200" style={{ transform: isFarmersOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  ▼
                </span>
              </button>
              {isFarmersOpen && (
                <ul className="pl-4">
                  <li className="mb-2">
                    <Link to="/addfarmer" className="block py-2 px-4 rounded hover:bg-gray-600">Add Farmer</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/viewfarmers" className="block py-2 px-4 rounded hover:bg-gray-600">View Farmers</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/updatefarmer" className="block py-2 px-4 rounded hover:bg-gray-600">Update Farmer</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/deletefarmer" className="block py-2 px-4 rounded hover:bg-gray-600">Delete Farmer</Link>
                  </li>
                </ul>
              )}
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
                    <Link to="/approveproducts" className="block py-2 px-4 rounded hover:bg-gray-600">Approve Products</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/editproducts" className="block py-2 px-4 rounded hover:bg-gray-600">Edit Products</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/deleteproducts" className="block py-2 px-4 rounded hover:bg-gray-600">Delete Products</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/viewproducts" className="block py-2 px-4 rounded hover:bg-gray-600">View Products</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <Link to="/viewtransactionhistory" className="block py-2 px-4 rounded hover:bg-gray-700">View Transaction History</Link>
            </li>

            <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>

          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 p-0">
        {/* Top Navbar */}
        <div className="flex justify-between items-center bg-gray-900 text-white p-4">
          <h2 className="text-lg font-bold">Admin</h2>
          <div>
            <Link to="/updateadminpwd" className="mr-4 hover:underline">Update Password</Link>
            <Link to="/logout" className="hover:underline">Logout</Link>
          </div>
        </div>

        {/* Routes */}
        <div className="p-4">
          <Routes>
            <Route path="/addfarmer" element={<AddFarmer />} />
            <Route path="/viewfarmers" element={<ViewFarmers />} />
            <Route path="/approveproducts" element={<ApproveProducts />} />
            <Route path="/editproducts" element={<EditProducts />} />
             
          </Routes>
        </div>
      </div>
    </div>
  );
}
