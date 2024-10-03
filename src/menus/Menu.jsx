import React from 'react'
import grains from "../assets/grains.jpg"
import wheat from "../assets/wheat.jpg"
import riceflour from "../assets/rice-flour.jpg"
import mangoes from "../assets/mangoes.jpg"
import {motion} from "framer-motion"
import {FadeLeft} from "../utility/animation"

const MenusData = [
  {
    id: 1,
    title: "Grains",
    link : "/",
    price : "$250",
    img : grains,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Organic Rice Flour",
    link : "/",
    price : "$150",
    img : wheat,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Wheat Flour",
    link : "/",
    price : "$200",
    img : riceflour,  
  },
  {
    id: 4,
    title: "Mangoes",
    link : "/",
    price : "$350",
    img : mangoes,
  },
  
]

export default function Menu() 
{
  return (
    <section>
      <div className='container pt-12 pb-20 '>
      <motion.h1
      initial = {{opacity: 0, x: -200}}
      whileInView={{opacity: 1, x:0}}
      transition={{duration: 1, delay:0.3}}
      className='text-2xl font-bold text-left pb-10 uppercase'>
       List of Menus 
      </motion.h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
      {MenusData.map((menu) => (
  <motion.div key={menu.id} 
  variants={FadeLeft(menu.delay)}
  initial = "hidden"
  whileInView={"visible"}
  whileHover={{scale: 1.1}}
  className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)]
  flex flex-row justify-around items-center gap-3'>
    <img src={menu.img} alt={menu.title} className='w-[60px] mb-4 scale-110 transform-translate-y-6 ' />
    <div>
      <h1 className='text-lg font-semibold'>{menu.title}</h1>
      <p className='text-lg font-semibold text-red-600' >{menu.price}</p> {/* Update this line to show the price instead of repeating the title */}
    </div>
  </motion.div>  
))}
      </div>
      </div>
    </section>
  )
}
