"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Server, Wrench, Palette, Users } from "lucide-react";
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

const skillCategories = [
  {
    category: "Front-End",
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-purple-500 to-indigo-500",
    skills: [
      { name: "HTML5", img: html, level: "Expert" },
      { name: "CSS3", img: css, level: "Expert" },
      { name: "JavaScript", img: js, level: "Expert" },
      { name: "React.js", img: react, level: "Expert" },
      { name: "Redux", img: redux, level: "Advanced" },
      { name: "TypeScript", img: typescript, level: "Advanced" },
      { name: "Angular", img: angular, level: "Intermediate" },
      { name: "Next.js", img: nextjs, level: "Expert" },
      { name: "Tailwind CSS", img: Tailwind, level: "Expert" },
      { name: "Bootstrap", img: Bootstrap, level: "Advanced" },
    ],
  },
  {
    category: "Back-End",
    icon: <Server className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Express.js", img: Express, level: "Expert" },
      { name: "Node.js", img: js, level: "Expert" },
      { name: "MongoDB", img: Mongo, level: "Expert" },
      { name: "PostgreSQL", img: postgresql, level: "Advanced" },
      { name: "Prisma", img: prisma, level: "Advanced" },
    ],
  },
  {
    category: "Tools & Deployment",
    icon: <Wrench className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "GitHub", img: Github, level: "Expert" },
      { name: "Figma", img: Figma, level: "Advanced" },
      { name: "Vercel", img: vercel, level: "Expert" },
      { name: "Netlify", img: Netlify, level: "Advanced" },
    ],
  },
  {
    category: "UI Libraries",
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-500",
    skills: [
      { name: "Material UI", img: react, level: "Advanced" },
      { name: "Shadcn UI", img: react, level: "Advanced" },
      { name: "DaisyUI", img: react, level: "Advanced" },
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
        className="relative py-16 px-4 md:px-8 lg:px-16 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <motion.div className="text-center mb-16 relative z-10" variants={headerVariants}>
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">Technical Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="text-white">My </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Skills</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Comprehensive expertise across modern web technologies and development tools
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <motion.button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
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
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === cat.category
                    ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg`
                    : "bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50 hover:border-gray-600/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.icon}
                {cat.category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {displaySkills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="mb-12"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                <div className={`flex-1 h-0.5 bg-gradient-to-r ${category.gradient} opacity-30 ml-4`}></div>
              </div>

              <motion.div
                className="flex flex-wrap gap-4 sm:gap-6"
                variants={containerVariants}
              >
                {category.skills.map((skill, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <SkillItem skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}

          {/* Soft Skills Section */}
          <motion.div
            className="mt-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {["Project Management", "Git Management", "Team Collaboration", "Problem Solving", "Communication"].map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl"
                  whileHover={{ scale: 1.05, borderColor: "rgba(249, 115, 22, 0.5)" }}
                >
                  <span className="text-orange-300 font-semibold">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
  );
};

export default Skill;
