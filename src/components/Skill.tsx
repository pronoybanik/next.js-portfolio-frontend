"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import html from "../images/development-logo/html/html-svgrepo-com.svg";
import css from "../images/development-logo/css/download.png";
import js from "../images/development-logo/js/download (1).png";
import Bootstrap from "../images/development-logo/Bootstrap/download.png";
import Tailwind from "../images/development-logo/tailwind/download.png";
import Github from "../images/development-logo/Github/download (2).png";
import redux from "../images/development-logo/redux/download.png";
import Figma from "../images/development-logo/Figma/icons8-figma-48.png";
import Express from "../images/development-logo/ex/download (1).png";
import Firebase from "../images/development-logo/firebase/icons8-firebase-48.png";
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

const skills = [
  { name: "HTML", img: html, level: "Advance" },
  { name: "CSS", img: css, level: "Advance" },
  { name: "Javascript", img: js, level: "Advance" },
  { name: "React", img: react, level: "Advance" },
  { name: "Redux", img: redux, level: "Advance" },
  { name: "TypeScript", img: typescript, level: "Advance" },
  { name: "Angular", img: angular, level: "Moderate" },
  { name: "PostgreSQL", img: postgresql, level: "Advance" },
  { name: "Bootstrap", img: Bootstrap, level: "Advance" },
  { name: "Tailwind CSS", img: Tailwind, level: "Advance" },
  { name: "Github", img: Github, level: "Moderate" },
  { name: "Figma", img: Figma, level: "Moderate" },
  { name: "Express js", img: Express, level: "Advance" },
  { name: "Firebase", img: Firebase, level: "Moderate" },
  { name: "Mongo DB", img: Mongo, level: "Advance" },
  { name: "Netlify", img: Netlify, level: "Moderate" },
  { name: "Next.js", img: nextjs, level: "Advance" },
  { name: "Prisma", img: prisma, level: "Advance" },
  { name: "Vercel", img: vercel, level: "Advance" },
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
  return (
      <motion.section
        id={id}
        className="py-16 px-4 md:px-8 lg:px-16 min-h-screen dark:bg-gray-900 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-400 mb-4">
            My <span className="text-indigo-600">Skill</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          variants={containerVariants}
        >
          {skills.map((skill, i) => (
            <motion.div key={i} variants={itemVariants}>
              <SkillItem skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
  );
};

export default Skill;
