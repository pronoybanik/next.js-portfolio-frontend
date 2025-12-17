"use client";

import { motion, Variants } from "framer-motion";

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

const containerVariants : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants : Variants = {
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

const headerVariants : Variants = {
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
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">Academic Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="text-white">My </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Education</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4">A continuous journey of learning and growth in computer science and engineering</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent transform -translate-x-1/2 rounded-full"></div>
          
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`relative ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Timeline dot with pulse effect */}
              <div className={`hidden md:block absolute top-6 ${index % 2 === 0 ? 'right-0 transform translate-x-2' : 'left-0 transform -translate-x-2'}`}>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-purple-500/30 animate-ping"></div>
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl shadow-purple-900/10 p-6 h-full flex flex-col group hover:border-purple-500/30 transition-all duration-300">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl text-purple-400 border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{edu.degree}</h3>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold mt-1">{edu.institute}</p>
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-purple-500/10 text-purple-300 rounded-full mt-2 border border-purple-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;