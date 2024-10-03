import React from 'react';
import wheat from "../assets/wheat.jpg"
import grains from "../assets/grains.jpg";
import mangoes from "../assets/mangoes.jpg";
import vegetables from "../assets/vegetables.png"
import wheatflour from "../assets/wheatflour.png"

import { motion } from "framer-motion";
import { FadeLeft } from "../utility/animation";

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
  },
  {
    id: 4,
    title: "Mangoes",
    link: "/",
    price: "$150",
    img: mangoes,
  },
  {
    id: 5,
    title: "Vegetables",
    link: "/",
    price: "$100",
    img: vegetables,
  },
  {
    id: 6,
    title: "Wheat Flour",
    link: "/",
    price: "$350",
    img: wheatflour,
  },
];

export default function viewproducts() {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        >
          List of Products
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenusData.map((menu) => (
            <motion.div
              key={menu.id}
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-col justify-center items-center p-4"
            >
              <img
                src={menu.img}
                alt={menu.title}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="mt-4 text-center">
                <h1 className="text-xl font-semibold">{menu.title}</h1>
                <p className="text-lg font-semibold text-red-600">{menu.price}</p>
              </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-b-lg hover:bg-blue-700 transition duration-200"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
