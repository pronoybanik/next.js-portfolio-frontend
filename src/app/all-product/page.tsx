"use client";
import ProductItem from "@/components/ProductItem";
import React, { useEffect, useState } from "react";
import { TProject } from "../types/projectType";
import { motion } from "framer-motion";
import { getAllProject } from "@/services/project";

const containerVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 14,
      staggerChildren: 0.15,
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
    scale: 1.03,
    boxShadow: "0 8px 32px 0 rgba(80, 0, 180, 0.12)",
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

const AllProjects = () => {
  const [projects, setProjects] = useState<TProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getAllProject();
      setProjects(response?.data || []);
    };

    fetchProjects();
  }, []);

  return (
    <motion.section
      className="px-8 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="text-center mb-16" variants={headerVariants}>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-400 mb-4">
          My <span className="text-indigo-600">Recent Works</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6"></div>
      </motion.div>

      <motion.div
        className="grid lg:grid-cols-2 grid-cols-1 max-w-screen-2xl mx-auto"
        variants={containerVariants}
      >
        {projects
          ?.slice()
          .reverse()
          .map((project: TProject, idx: number) => (
            <motion.div
              key={project?._id}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              transition={{ delay: idx * 0.12 }}
            >
              <ProductItem projectData={project} />
            </motion.div>
          ))}
      </motion.div>
    </motion.section>
  );
};

export default AllProjects;
