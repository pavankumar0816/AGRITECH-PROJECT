import React from 'react'
import { motion} from "framer-motion"
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf, FaWhatsapp} from 'react-icons/fa'

export default function Footer() 
{
  return (
   <footer className='bg-primary/10 py-6 mt-16'>
   <motion.div
    initial = {{opacity:0}}
    whileInView = {{opacity: 1}}
    transition = {{duration: 1, delay: 0.2}}
    className='container flex justify-between items-center'>
    
    {/* Logo Section */}
       <div className='text-2xl flex items-center gap-2 font-bold uppercase ' >
        <p className='text-primary' >Agriculture</p>
        <p className='text-secondary' >Store</p>
        <FaLeaf className='text-green-500' />
       </div>
       {/* Social Media icons */}
       <div className=' text-3xl flex ite gap-4 mt-6 text-gray-700 '>
          
          
              <div>
                <a href="https://x.com/agriinfrafund" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={30} color="#1DA1F2" />
                </a>
              </div>

              <div>
                <a href="https://www.facebook.com/groups/1461996164026800//" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} color="#1877F2" />
                </a>
              </div>

              <div>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} color="#E4405F" />
                </a>
              </div>

              <div>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={30} color="#25D366"/>
                </a>
              </div>
    </div>
   </motion.div>
   </footer>
  )
};
