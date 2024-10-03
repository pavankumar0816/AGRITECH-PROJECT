import React from 'react'
import fruits from "../assets/fruit.png"
import { motion} from "framer-motion"
import {IoBagHandleOutline} from "react-icons/io5";
import { FadeLeft,FadeUp } from '../utility/animation';

const bgStyle = {
  backgroundImage: `url(${fruits})`,
  backgroundPosition: "left top",
  backgroundSize: "cover", 
  backgroundRepeact: "no-repeat",
};
 
export default function Banner() {
  return (
     <section className='container mb-12'>
        <div 
       style={bgStyle}
        className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl '>
           
           <div></div>
       {/* Brand Info */}
       <div className='flex flex-col justify-center'>
        <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
            <motion.h1
            variants={FadeLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className='text-3xl lg:text-3xl font-bold uppercase'>
              {" "}
            Brand Info
            </motion.h1>
      <motion.p
      variants={FadeLeft(0.7)}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}
      className="text-black-700 mb-4">
      Our brand delivers fresh, organic produce from local farms, supporting sustainability and connecting farmers to a global market.
        </motion.p>
     
        <br/>
        {/* Button Section */}
        <motion.div 
           variants = {FadeLeft(0.9)}
           initial = "hidden"
          animate = "visible"
         className='flex justify-center md:justify-start'>
          <button className='primary-btn flex items-center gap-2 ' >
            Learn More
            </button>
         </motion.div>
        </div>
       </div>
        </div>
     </section>
  )
}
