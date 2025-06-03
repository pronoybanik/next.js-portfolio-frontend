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
      <motion.div className="text-center my-20" variants={containerVariants}>
        <h2 className="text-4xl sm:text-5xl md:text-7xl my-4 md:my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight">
          My Recent Works
        </h2>
        <motion.p
          className="text-white mt-8 text-xl font-medium text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
        >
          We put your ideas and thus your wishes in the form of a unique web
          project that <br /> inspires you and you customers.
        </motion.p>
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
