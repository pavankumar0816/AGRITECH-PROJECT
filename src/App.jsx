import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from "./components/Navbar"; 
import AdminNavBar from './admin/AdminNavBar';
import FarmerNavBar from './farmer/FarmerNavBar' 
import AdminLogin from './admin/AdminLogin';  
import FarmerLogin from './farmer/FarmerLogin';  // Import FarmerLogin component

const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const[isFarmerLoggedIn, setIsFarmerLoggedIn] = useState(false);
  const[isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const farmerLoggedIn = localStorage.getItem('isFarmerLoggedIn') === 'true';
    const customerLoggedin = localStorage.getItem('isCustomerLoggedIn') === 'true';

    setIsAdminLoggedIn(adminLoggedIn);
    setIsFarmerLoggedIn(farmerLoggedIn);
    setIsCustomerLoggedIn(customerLoggedin);

  }, []);

  const onAdminLogin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  const onFarmerLogin = () => {
    localStorage.setItem('isFarmerLoggedIn', 'true');
    setIsFarmerLoggedIn(true);
  }

  const onCustomerLogin = () => {
     localStorage.setItem('isCustomerLoggedIn', 'true');
    setIsCustomerLoggedIn(true);
  }

  return (
    <Router>
      <Routes>
        {/* Admin Login Page */}
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin} />} />

        {/* Farmer Login Page */}
        <Route path="/farmerlogin" element={<FarmerLogin onFarmerLogin={onFarmerLogin} />} />

        {/* Main App Page */}
        <Route 
          path="*" 
          element={
            <main className="overflow-x-hidden">
              { isAdminLoggedIn ? (
                <AdminNavBar /> 
              ) :  isFarmerLoggedIn ? (
                <FarmerNavBar />
              ) : (
                <Navbar
                  onAdminLogin={onAdminLogin}
                  onFarmerLogin={onFarmerLogin}
                  onCustomerLogin={onCustomerLogin}
                />
              )}
            </main>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
