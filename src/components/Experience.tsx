"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experienceData = [
  {
    title: "Frontend Developer & Tester",
    company: "Normalize",
    type: "Part-time",
    location: "Remote",
    duration: "Sep 2025 – Nov 2025",
    period: "3 months",
    responsibilities: [
      "Working as a Frontend Developer and Tester, contributing to UI development and performance optimisation.",
      "Developing responsive, high-quality user interfaces using React.js, Remix, and Shopify tools.",
      "Participating in testing workflows, identifying UI/UX issues, and ensuring pixel-perfect implementation."
    ],
    skills: ["React.js", "Remix", "Shopify"],
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "Frontend Development & Management Intern",
    company: "xCodexa",
    type: "Internship",
    location: "Remote",
    duration: "Sep 2022 – Feb 2023",
    period: "6 months",
    responsibilities: [
      "Contributed to building and maintaining responsive web applications using React.js and TypeScript.",
      "Collaborated with the design and development team to enhance UI/UX and improve overall usability.",
      "Worked extensively with GitHub, handling pull requests, code reviews, and feature branch management."
    ],
    skills: ["React.js", "Redux", "Tailwind CSS", "Material-UI", "TypeScript"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    type: "Freelance",
    location: "Remote",
    duration: "2022 – Present",
    period: "Ongoing",
    responsibilities: [
      "Building custom web applications and websites for clients across various industries.",
      "Providing end-to-end development services from requirement analysis to deployment and maintenance.",
      "Specializing in modern web technologies including React, Next.js, and full-stack MERN development."
    ],
    skills: ["React.js", "Next.js", "Node.js", "MongoDB", "Full Stack"],
    gradient: "from-green-500 to-emerald-500"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    x: 5,
    boxShadow: "0 20px 40px -10px rgba(147, 51, 234, 0.3)"
  }
};

const headerVariants: Variants = {
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

const Experience = ({ id }: { id: string }) => {
  return (
    <motion.section
      id={id}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">Professional Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="text-white">Work </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Experience</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4">Building innovative solutions and contributing to impactful projects</p>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-indigo-500/30 to-transparent"></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-8 top-6 transform -translate-x-1/2 items-center justify-center">
                <div className="relative">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} animate-pulse`}></div>
                  <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} animate-ping opacity-75`}></div>
                </div>
              </div>

              <div className="md:ml-20 relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl shadow-purple-900/10 p-6 group hover:border-purple-500/30 transition-all duration-300">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <div className={`p-2.5 bg-gradient-to-br ${exp.gradient} rounded-xl text-white shadow-lg mt-1`}>
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold text-lg">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mt-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                          {exp.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-green-500/10 text-green-300 rounded-full border border-green-500/20">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-700/50">
                    <p className="text-gray-400 text-xs font-semibold mb-2">SKILLS & TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-lg border border-gray-600/50 hover:border-purple-500/30 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
