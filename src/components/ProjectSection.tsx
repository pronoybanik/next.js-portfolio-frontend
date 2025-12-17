"use client";
import { TProject } from "@/app/types/projectType";
import { motion } from "framer-motion";
import { Variants } from "motion";
import ProductItem from "./ProductItem";

const containerVariants: Variants = {
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

const cardVariants: Variants = {
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

const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80, delay: 0.1 },
    },
};

const ProjectSection = ({ project }: { project: TProject[] }) => {
    return (
        <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>

            <motion.section
                className="relative z-10 px-8 my-16"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div className="text-center mb-16" variants={headerVariants}>
                    <div className="inline-block mb-4">
                        <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">Full Portfolio</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        <span className="text-white">All My </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Projects</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-12 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
                        <div className="w-8 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"></div>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Transforming ideas into unique web projects that inspire and engage both you and your customers
                    </p>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-2 grid-cols-1 max-w-screen-2xl mx-auto"
                    variants={containerVariants}
                >
                    {project
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
        </div>
    );
};

export default ProjectSection;