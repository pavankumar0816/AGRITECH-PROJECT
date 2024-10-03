import React from 'react';
import wheat from "../assets/wheat.jpg"
import grains from "../assets/grains.jpg";
import mangoes from "../assets/mangoes.jpg";
import vegetables from "../assets/vegetables.png"
import wheatflour from "../assets/wheatflour.png"

import { motion } from "framer-motion";

// Updated animations
const fadeInUp = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  },
});

const zoomIn = (delay) => ({
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  },
});

const hoverEffect = {
  hover: {
    scale: 1.1,
    rotate: 3,
    transition: { duration: 0.3 },
  },
};

const MenusData = [
  {
    id: 1,
    title: "Grains",
    link: "/",
    price: "$250",
    img: grains,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Organic Rice Flour",
    link: "/",
    price: "$150",
    img: wheat,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Wheat Flour",
    link: "/",
    price: "$200",
    img: wheatflour,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Mangoes",
    link: "/",
    price: "$150",
    img: mangoes,
    delay: 1.2,
  },
  {
    id: 5,
    title: "Vegetables",
    link: "/",
    price: "$100",
    img: vegetables,
    delay: 1.5,
  },
  {
    id: 6,
    title: "Wheat Flour",
    link: "/",
    price: "$350",
    img: wheatflour,
    delay: 1.8,
  },
];

export default function ViewProducts() {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-bold text-left pb-10 uppercase"
        >
          Our Products
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {MenusData.map((menu) => (
            <motion.div
              key={menu.id}
              variants={zoomIn(menu.delay)}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-6"
              style={{ overflow: 'hidden' }}
            >
              <motion.img
                src={menu.img}
                alt={menu.title}
                className="w-full h-[200px] object-cover rounded-lg"
                variants={hoverEffect}
              />
              <motion.div className="mt-4 text-center">
                <h1 className="text-xl font-bold">{menu.title}</h1>
                <p className="text-lg font-semibold text-green-600">{menu.price}</p>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: '#2563eb' }}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
              >
                Approve
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
