"use client";

import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Diploma in Computer Engineering",
    institute: "Institute of Computer Science and Technology (ICST)",
    duration: "2018 - 2022 : Completed",
    description:
      "Focused on fundamentals of programming, electronics, and computer hardware. Developed several practical projects including a mini ATM system and IoT-based sensor projects.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    degree: "BSc in Computer Science",
    institute: "Southeast University (SEU)",
    duration: "2023 - Present",
    description:
      "In-depth study of software engineering, data structures, algorithms, and web development. Built full-stack projects using MERN stack and deployed them on cloud platforms.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)"
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const Education = ({ id }: { id: string }) => {
  return (
    <motion.section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-400 mb-4">
            My <span className="text-indigo-600">Education</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-indigo-300 to-transparent transform -translate-x-1/2"></div>
          
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`relative ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Timeline dot */}
              <div className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-indigo-500 ${index % 2 === 0 ? 'right-0 transform translate-x-2' : 'left-0 transform -translate-x-2'}`}></div>
              
              <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                    <p className="text-indigo-600 font-medium mt-1">{edu.institute}</p>
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-indigo-50 text-indigo-700 rounded-full mt-2">
                      {edu.duration}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;