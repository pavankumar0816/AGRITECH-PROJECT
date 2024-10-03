import React from 'react'
import vegsplash from "../assets/vegetable-splash.jpg"
import { motion} from "framer-motion"
import {IoBagHandleOutline} from "react-icons/io5";
import { FadeLeft,FadeUp } from '../utility/animation';

export default function Banner() {
  return (
     <section className='bg-secondary/10'>
        <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 '>
            {/* Banner Image */}
       <div className='flex justify-center'>
       <motion.img
        initial={{ opacity: 0, x: 200, rotate: 75 }}  
        whileInView={{ opacity: 1, x: 0, rotate: 360 }} 
        transition={{ duration: 1, delay: 0.2 }}  
        viewport={{ once: true }}
       src={vegsplash}  alt="" className='w-full md:max-w-[400px] h-auto object-contain drop-shadow ' />
       </div>   
       {/* Brand Info */}
       <div className='flex justify-center items-center'>
        <div className='text-center md:text-left space-y-4 lg:max-w-[700px]'>
            <motion.h1
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className='text-3xl lg:text-3xl font-bold uppercase'>Brand Info
            </motion.h1>

             <motion.p
                variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                className="text-black-700 mb-4">
            We assist farmers in transforming their crops into valuable products like processed foods, 
            while connecting them with global buyers to expand their market reach. 
            By integrating modern technology and promoting sustainable practices, 
            we empower rural entrepreneurs to enhance productivity and create eco-friendly products.
            </motion.p>

        <br/>
        {/* Button Section */}
        <motion.div 
           variants = {FadeUp(1.1)}
           initial = "hidden"
          animate = "visible"
         className='flex justify-center md:justify-start'>
          <button className='primary-btn flex items-center gap-2 ' >
            <span>
                <IoBagHandleOutline/>
            </span>
            Learn More
            </button>
         </motion.div>
        </div>
       </div>
        </div>
     </section>
  )
}
