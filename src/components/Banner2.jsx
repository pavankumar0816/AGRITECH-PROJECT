import React from 'react'
import fruitsplash from "../assets/fruitsplash.png"
import { motion} from "framer-motion"
import {IoBagHandleOutline} from "react-icons/io5";
import { FadeLeft,FadeUp } from '../utility/animation';

export default function Banner() {
  return (
     <section className=''>
        <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24'>
       {/* Brand Info */}
       <div className='flex justify-center items-center'>
        <div className='text-center md:text-left space-y-4 lg:max-w-[700px]'>
        <motion.h1
  variants={FadeUp(0.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className='text-3xl lg:text-3xl font-bold uppercase'>
   {" "}
  Online Fruit Store
</motion.h1>

<motion.p
  variants={FadeUp(0.7)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="text-black-700 mb-4">
   Our store offers organically grown fruits directly from local farmers, ensuring the freshest produce for your table.
   We connect local farmers to global buyers, providing a variety of fruits that meet international standards. 
   By promoting modern farming techniques, we help farmers grow healthier, sustainable produce while using eco-friendly 
   packaging to protect the environment.
</motion.p>
 
<br />

        <br/>
        {/* Button Section */}
        <motion.div 
           variants = {FadeUp(1.1)}
           initial = "hidden"
          animate = "visible"
         className='flex justify-center md:justify-start'>
          <button className='primary-btn ' >
           Download App
            </button>
         </motion.div>
        </div>
       </div>
         {/* Banner Image */}
         <div className='flex justify-center items-center'>
         <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }} // Start off-screen with a rotation
            whileInView={{ opacity: 1, x: 0, rotate: 360 }} // Rotate fully as it comes into view
            transition={{ duration: 1, delay: 0.2 }} // Smooth transition with a slight delay
            viewport={{ once: true }}
       src={fruitsplash}  alt="" className='w-full md:max-w-[400px] h-auto object-contain drop-shadow ' />
       </div>   
        </div>
     </section>
  )
}
