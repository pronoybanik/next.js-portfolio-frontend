"use client";

import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Diploma in Computer Engineering",
    institute: "Institute of computer science and technology (ICST)",
    duration: "2018 - 2022 : Completed",
    description:
      "Focused on fundamentals of programming, electronics, and computer hardware. Developed several practical projects including a mini ATM system and IoT-based sensor projects.",
  },
  {
    degree: "BSc in Computer Science",
    institute: "Southeast University (SEU)",
    duration: "2023 Running",
    description:
      "In-depth study of software engineering, data structures, algorithms, and web development. Built full-stack projects using MERN stack and deployed them on cloud platforms.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 14,
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80 },
  },
  hover: {
    scale: 1.04,
    boxShadow: "0 8px 32px 0 rgba(80, 0, 180, 0.18)",
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, delay: 0.1 },
  },
};

const Education = ({ id }: { id: string }) => {
  return (
    <motion.section
      id={id}
      className="py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-screen-lg mx-auto">
        <motion.div className="text-center my-20" variants={headerVariants}>
          <h2 className="text-3xl sm:text-5xl md:text-7xl my-4 md:my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight">
            Education
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-purple-700">
                {edu.degree}
              </h3>
              <p className="text-gray-600 mt-1 font-medium">{edu.institute}</p>
              <p className="text-sm text-gray-500 mb-3">{edu.duration}</p>
              <p className="text-gray-700">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
