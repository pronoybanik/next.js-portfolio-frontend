"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import image from "../images/1o0FVW0sOxcAAAAASUVORK5CYII=.png";
import facebook from "../images/icons/icons8-facebook-250.png";
import github from "../images/icons/icons8-github-500.png";
import linkedin from "../images/icons/icons8-linkedin-250.png";

const resume = "/cv/my-cv.pdf";

const containerVariants = {
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

const itemVariants = {
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

const Header = ({ id }: { id: string }) => {
  return (
    <motion.section
      id={id}
      className="relative overflow-hidden bg-gradient-to-b from-purple-100 min-h-[90vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-100 blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-30" />
      </div>

      <motion.div
        className="max-w-7xl w-full mx-auto"
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
              <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold text-black">
                I am <span className="text-purple-600">Pronoy</span>
              </h2>
              <h1 className="text-4xl   sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 leading-tight">
                Next-Level Web Developer.
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto lg:mx-0">
              I break down complex user experience problems to create
              integrity-focused solutions that connect billions of people.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
              {/* Download Button */}
              <a
                href={resume}
                download="pronoy_banik_resume.pdf"
                className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:scale-105"
              >
                <span className="relative flex items-center gap-2">
                  Download CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
              </a>

              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  {
                    link: "https://www.facebook.com/pronoy.banik.7",
                    img: facebook,
                    alt: "Facebook",
                  },
                  {
                    link: "https://github.com/pronoybanik",
                    img: github,
                    alt: "GitHub",
                  },
                  {
                    link: "https://www.linkedin.com/in/pronoy-banik-1b5a3125a/",
                    img: linkedin,
                    alt: "LinkedIn",
                  },
                ].map(({ link, img, alt }) => (
                  <a
                    key={alt}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full shadow-md bg-white border border-gray-200 transition hover:scale-110 hover:shadow-lg hover:border-purple-300"
                    aria-label={alt}
                  >
                    <Image
                      src={img}
                      width={24}
                      height={24}
                      alt={alt}
                      className="transition-all duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section (Image) */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center"
            variants={itemVariants}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute -z-10 w-full h-full bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full blur-2xl opacity-10 scale-150" />
              <div className="relative w-full h-full group">
                <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-purple-400 -rotate-6 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden rotate-3 shadow-xl group-hover:rotate-0 group-hover:shadow-2xl bg-white">
                  <Image
                    src={image}
                    alt="Profile"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
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
