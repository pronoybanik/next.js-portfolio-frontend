"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import image from "../images/Header-image.png";
import { Facebook, Github, Linkedin } from "lucide-react";
import Typed from "typed.js";

// Option 1: Use Google Drive direct download link
const resumeUrl = "https://drive.google.com/uc?export=download&id=1pGrRdhRI1KTy7MWKWDB13_lKXRr3ChdN";


const containerVariants : Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants : Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16,
    },
  },
};

const bgCircleVariants : Variants= {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 0.3,
    scale: 1,
    transition: { duration: 1.2, delay: 0.2 },
  },
};

const headlineVariants : Variants= {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 80 },
  }),
};

const imageVariants : Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 60, delay: 0.5 },
  },
  hover: { scale: 1.05, rotate: 2 },
};

const Header = ({ id }: { id: string }) => {
  const autoTypeRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["FRONTEND DEVELOPER", "MERN STACK DEVELOPER", "WEB DEVELOPER"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed(autoTypeRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

const handleDownload = () => {
  window.open(resumeUrl, '_blank');
};

  return (
    <motion.section
      id={id}
      className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-[90vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full blur-3xl opacity-20 z-0"
        variants={bgCircleVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-gradient-to-tl from-blue-500 to-purple-600 rounded-full blur-3xl opacity-15 z-0"
        variants={bgCircleVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 rounded-full blur-3xl z-0"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="max-w-7xl w-full mx-auto relative z-10"
        variants={containerVariants}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
            variants={itemVariants}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="space-y-3">
              <motion.div
                className="inline-block"
                custom={0}
                variants={headlineVariants}
                initial="hidden"
                animate="visible"
              >
                <span className="text-sm md:text-base font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">Welcome to my portfolio</span>
              </motion.div>
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
                custom={0}
                variants={headlineVariants}
                initial="hidden"
                animate="visible"
              >
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Pronoy Banik</span>
              </motion.h2>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-gray-300 leading-tight"
                custom={1}
                variants={headlineVariants}
                initial="hidden"
                animate="visible"
              >
                <span className="text-purple-400">►</span> <span className="autoType" ref={autoTypeRef}></span>
              </motion.h1>
            </div>

            <motion.p
              className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light"
              custom={2}
              variants={headlineVariants}
              initial="hidden"
              animate="visible"
            >
              I architect <span className="text-purple-400 font-medium">scalable, user-centric</span> web applications by breaking
              down intricate UX challenges into intuitive, performance-driven
              solutions. My full-stack expertise empowers me to build seamless
              digital experiences that resonate with users while maintaining
              <span className="text-indigo-400 font-medium"> technical excellence</span>.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
              {/* Download Button */}
              <motion.button
                onClick={handleDownload}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Download CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 group-hover:animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </span>
              </motion.button>

              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  {
                    link: "https://www.facebook.com/pronoy.banik.7",
                    icon: Facebook,
                    alt: "Facebook",
                  },
                  {
                    link: "https://github.com/pronoybanik",
                    icon: Github,
                    alt: "GitHub",
                  },
                  {
                    link: "https://www.linkedin.com/in/pronoy-banik-1b5a3125a/",
                    icon: Linkedin,
                    alt: "LinkedIn",
                  },
                ].map(({ link, icon: Icon, alt }) => (
                  <motion.a
                    key={alt}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-purple-500/50 hover:bg-gray-700/50 group"
                    aria-label={alt}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transition-colors duration-300 relative z-10" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section (Image) */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center"
            variants={imageVariants}
            style={{ willChange: "transform, opacity" }}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute -z-10 w-full h-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 rounded-full blur-3xl opacity-20 scale-150 animate-pulse" />
              <div className="relative w-full h-full group">
                <div className="absolute inset-0 rounded-3xl border-2 border-purple-500/30 -rotate-6 transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:border-purple-400/50" />
                <div className="absolute inset-0 rounded-3xl border-2 border-indigo-500/20 rotate-3 transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:border-indigo-400/40" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/50 group-hover:shadow-3xl group-hover:shadow-purple-800/60 bg-gradient-to-br from-gray-800 to-gray-900 p-1 transition-all duration-500">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-white relative">
                    <Image
                      src={image}
                      alt="Profile"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Header;