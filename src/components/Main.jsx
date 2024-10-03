import React from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import {IoBagHandleOutline} from "react-icons/io5";
import agri1 from "../assets/agri1.jpeg"
import leaf from "../assets/leaf.jpg" 
import { FadeRight } from '../utility/animation';
import { motion} from "framer-motion"

export default function Main() 
{   
  return (
    <section>
      <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative '>
       {/* Brand Info */}
       <div className='flex flex-col justify-center py-14 md:py-0 relative z-10 '>
        <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
         <motion.h1 
         variants = {FadeRight(0.6)}
         initial = "hidden"
         animate = "visible"
         className='text-5xl lg:text-6xl font-bold leading-relaxed 
         xl:leading-loose font-averia' >Pure
         <br />
        Fresh <span className='text-secondary'>Vegetables!</span>
         </motion.h1>
         <motion.p 
         variants = {FadeRight(0.9)}
           initial = "hidden"
          animate = "visible"
         className='text-2xl tracking-wide'>Order Now For Fresh Agriculture Life</motion.p>
         <motion.p 
           variants = {FadeRight(1.2)}
           initial = "hidden"
          animate = "visible"
         className='text-gray-400-'>
            Delivering fresh, organic produce straight from the farm to your door.
            Supporting sustainable farming practices for a healthier future.
         </motion.p>
         {/* button section */}
         <motion.div 
           variants = {FadeRight(1.5)}
           initial = "hidden"
          animate = "visible"
         className='flex justify-center md:justify-start'>
          <button className='primary-btn flex items-center gap-2 ' >
            <span>
                <IoBagHandleOutline/>
            </span>
            Order Now
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button  className='primary-btn flex items-center gap-3 '>
            <span>
                <IoBagHandleOutline/>
            </span>
           Login
            </button>
         </motion.div>
        </div>
       </div>
       {/*  Agri Images */}
       <div className='flex justify-center items-center' >
         <motion.img
         initial = {{opacity:0, x:200, rotate: 75}}
         animate = {{opacity:1, x: 0, rotate: 0}}
         transition = {{duration:1, delay: 0.2}}
         src={agri1} alt="" className='w-[350px] md:w-[550px] drop-shadow' />
       </div>

       {/*Leaf Image*/}
      <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]'>
      <motion.img
      initial = {{opacity:0, y: -200, rotate: 75}}
      animate = {{opacity:1, y: 0, rotate: 0}}
      transition = {{duration:1, delay: 1.5}}   
      src={leaf} alt="" className='w-full md:max-w-[300px]' />
      </div>
      </div>
    </section>
  )
}
