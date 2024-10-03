import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from "framer-motion";
import Main from './Main';  
import Menu from '../menus/Menu';  
import Banner from './Banner';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Footer from './Footer';
import AdminLogin from '../admin/AdminLogin'; 
import FarmerLogin from "../farmer/FarmerLogin"

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Products", link: "/products" },
  { id: 3, title: "Status of Order", link: "/about" },
];

export default function Navbar({ onAdminLogin, onFarmerLogin}) {
  const [open, setOpen] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false); // State for login dropdown

  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-4 md:pt-4"
        >
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Agriculture</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_rgba(239,68,68,1)] font-semibold"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}

              {/* Dropdown for Login */}
              <div className="relative">
                <button
                  onClick={() => setLoginDropdown(!loginDropdown)}
                  className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_rgba(239,68,68,1)] font-semibold"
                >
                  Login
                </button>

                {loginDropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  >
                    <li className="hover:bg-gray-100">
                      <Link to="/adminlogin" className="block px-4 py-2 text-gray-700">
                        Admin Login
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100">
                      <Link to="/farmerlogin" className="block px-4 py-2 text-gray-700">
                        Farmer Login
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100">
                      <Link to="/customerlogin" className="block px-4 py-2 text-gray-700">
                        Customer Login
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </div>

              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* Mobile Hamburger */}
          <div className="" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Section */}
      <ResponsiveMenu open={open} setOpen={setOpen} />

      {/* Additional Components */}
      <Main />
      <Menu />
      <Banner />
      <Banner2 />
      <Banner3 />
      <Footer />

      {/* Admin Login Route */}
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin} />} />
        <Route path="/farmerlogin" element={<FarmerLogin onFarmerLogin={onFarmerLogin}  />} />
        <Route path="/customerlogin" element={<div>Customer Login Page</div>} />
      </Routes>
    </>
  );
}
