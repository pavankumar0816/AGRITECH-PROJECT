import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FarmerLogin({onFarmerLogin}) {
   
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onFarmerLogin();   
    navigate('/farmernavbar');  
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-300">
      <motion.div
        className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg p-8 w-full max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-semibold text-center mb-6 text-white">Farmer Login</h1>
        <form onSubmit={handleSubmit}>
          <motion.div
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mb-4"
          >
            <label className="block mb-2 text-sm font-medium text-white"> 
              Username
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-2.5 text-black" />  
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform duration-200 ease-in-out hover:scale-105 bg-white"
              />
            </div>
          </motion.div>

          <motion.div
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mb-4"
          >
            <label className="block mb-2 text-sm font-medium text-white"> 
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-2.5 text-black" /> 
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform duration-200 ease-in-out hover:scale-105 bg-white"
              />
            </div>
          </motion.div>

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-white"> 
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-300 hover:underline"> 
              Forgot Password
            </a>
          </div>

          <motion.button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}  
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
