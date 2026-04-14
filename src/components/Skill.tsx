"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Server, Wrench, Palette, Users } from "lucide-react";
import SectionHeader from "@/shared/SectionHeader";
import html from "../images/development-logo/html/html-svgrepo-com.svg";
import css from "../images/development-logo/css/download.png";
import js from "../images/development-logo/js/download (1).png";
import Bootstrap from "../images/development-logo/Bootstrap/download.png";
import Tailwind from "../images/development-logo/tailwind/download.png";
import Github from "../images/development-logo/Github/download (2).png";
import redux from "../images/development-logo/redux/download.png";
import Figma from "../images/development-logo/Figma/icons8-figma-48.png";
import Express from "../images/development-logo/ex/download (1).png";
import Mongo from "../images/development-logo/mongoose/icons8-mongodb-48.png";
import Netlify from "../images/development-logo/Netlify/download.png";
import postgresql from "../images/development-logo/postgresql/download.png";
import react from "../images/development-logo/react/download (1).png";
import typescript from "../images/development-logo/typesript/download (1).png";
import angular from "../images/development-logo/anguler/icons8-angular-480.png";
import SkillItem from "./SkillItem";
import nextjs from "../images/development-logo/next.js/download.jpg";
import prisma from "../images/development-logo/prisma/download (1).jpg";
import vercel from "../images/development-logo/vercel/download.png";
import docker from "../images/development-logo/docker/docker.png";
import aws from "../images/development-logo/aws/aws.png";
import jest from "../images/development-logo/jest/jest.png";

const skillCategories = [
  {
    category: "Front-End",
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-purple-500 to-indigo-500",
    skills: [
      { name: "HTML5", img: html, level: "Advanced", percentage: 85 },
      { name: "CSS3", img: css, level: "Advanced", percentage: 85 },
      { name: "JavaScript", img: js, level: "Advanced", percentage: 80 },
      { name: "React.js", img: react, level: "Advanced", percentage: 85 },
      { name: "Redux", img: redux, level: "Advanced", percentage: 75 },
      { name: "TypeScript", img: typescript, level: "Advanced", percentage: 78 },
      { name: "Angular", img: angular, level: "Intermediate", percentage: 55 },
      { name: "Next.js", img: nextjs, level: "Advanced", percentage: 82 },
      { name: "Tailwind CSS", img: Tailwind, level: "Advanced", percentage: 85 },
      { name: "Bootstrap", img: Bootstrap, level: "Advanced", percentage: 80 },
    ],
  },
  {
    category: "Back-End",
    icon: <Server className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Express.js", img: Express, level: "Advanced", percentage: 82 },
      { name: "Node.js", img: js, level: "Advanced", percentage: 80 },
      { name: "MongoDB", img: Mongo, level: "Advanced", percentage: 85 },
      { name: "PostgreSQL", img: postgresql, level: "Intermediate", percentage: 65 },
      { name: "Prisma", img: prisma, level: "Intermediate", percentage: 70 },
    ],
  },
  {
    category: "Tools & Deployment",
    icon: <Wrench className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "GitHub", img: Github, level: "Advanced", percentage: 85 },
      { name: "Figma", img: Figma, level: "Intermediate", percentage: 65 },
      { name: "Vercel", img: vercel, level: "Advanced", percentage: 80 },
      { name: "Netlify", img: Netlify, level: "Intermediate", percentage: 70 },
      { name: "Docker", img: docker, level: "Basic", percentage: 35 },
      { name: "AWS", img: aws, level: "Basic", percentage: 30 },
      { name: "Jest", img: jest, level: "Basic", percentage: 40 },
    ],
  },
  {
    category: "UI Libraries",
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-500",
    skills: [
      { name: "Material UI", img: react, level: "Intermediate", percentage: 65 },
      { name: "Shadcn UI", img: react, level: "Advanced", percentage: 75 },
      { name: "DaisyUI", img: react, level: "Intermediate", percentage: 70 },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, delay: 0.1 },
  },
};

const Skill = ({ id }: { id: string }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displaySkills = selectedCategory
    ? skillCategories.filter((cat) => cat.category === selectedCategory)
    : skillCategories;

  return (
      <motion.section
        id={id}
        className="relative py-10 sm:py-12 md:py-16 px-3 sm:px-4 md:px-8 lg:px-16 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Animated background elements */}
        <div className="absolute top-10 sm:top-20 left-2 sm:left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <SectionHeader
          badge="Technical Expertise"
          titleWhite="My"
          titleGradient="Skills"
          description="Comprehensive expertise across modern web technologies and development tools"
          className="text-center mb-8 sm:mb-12 md:mb-16 relative z-10"
          variants={headerVariants}
        />

        <motion.div className="text-center relative z-10 mb-8 sm:mb-10 md:mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2">
            <motion.button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50 hover:border-gray-600/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Skills
            </motion.button>
            {skillCategories.map((cat) => (
              <motion.button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                  selectedCategory === cat.category
                    ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg`
                    : "bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50 hover:border-gray-600/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 [&>svg]:w-full [&>svg]:h-full">{cat.icon}</span>
                <span className="hidden xs:inline sm:inline">{cat.category}</span>
                <span className="inline xs:hidden sm:hidden">{cat.category.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-1 sm:px-2">
          {displaySkills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="mb-8 sm:mb-10 md:mb-12"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6`}>
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{category.category}</h3>
                <div className={`flex-1 h-0.5 bg-gradient-to-r ${category.gradient} opacity-30 ml-2 sm:ml-4`}></div>
              </div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4"
                variants={containerVariants}
              >
                {category.skills.map((skill, i) => (
                  <motion.div key={i} variants={itemVariants} className="w-full">
                    <SkillItem skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}

          {/* Soft Skills Section */}
          <motion.div
            className="mt-8 sm:mt-10 md:mt-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 p-4 sm:p-6 md:p-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
              {["Project Management", "Git Management", "Team Collaboration", "Problem Solving", "Communication"].map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-lg sm:rounded-xl text-center"
                  whileHover={{ scale: 1.05, borderColor: "rgba(249, 115, 22, 0.5)" }}
                >
                  <span className="text-orange-300 font-semibold text-xs sm:text-sm md:text-base">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
  );
};

export default Skill;
