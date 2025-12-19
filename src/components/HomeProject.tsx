"use client";


import ProductItem from "@/components/ProductItem";
import Link from "next/link";
import { TProject } from "@/app/types/projectType";
import { motion } from "framer-motion";
import SectionHeader from "@/shared/SectionHeader";


const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 14,
            staggerChildren: 0.18,
        },
    },
} as const;

const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80, delay: 0.1 },
    },
} as const;

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
        boxShadow: "0 8px 32px 0 rgba(80, 0, 180, 0.18)",
    },
} as const;

const HomeProject = ({ projects, loadId, loading = false }: { projects: TProject[], loadId: string, loading?: boolean }) => {
    return (
        <motion.section
            id={loadId}
            className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            {/* Animated background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <SectionHeader
                badge="Portfolio Showcase"
                titleWhite="My"
                titleGradient="Recent Works"
                description="Transforming ideas into unique web projects that inspire and engage both you and your customers"
                className="text-center mb-8 sm:mb-12 lg:mb-16 relative z-10"
                variants={headerVariants}
            />

            <motion.div
                className="relative z-10 grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto gap-6 sm:gap-8"
                variants={containerVariants}
            >
                {loading
                    ? [1, 2, 3, 4].map((i) => (
                        <ProductItem key={i} loading />
                    ))
                    : (projects && Array.isArray(projects))
                        ? projects
                            .slice()
                            .reverse()
                            .slice(0, 4)
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
                        ))
                        : null}
            </motion.div>

            <motion.div
                className="relative z-10 flex justify-center mt-8 sm:mt-10 lg:mt-12"
                initial="hidden"
                animate="visible"
                whileHover="hover"
            >
                <Link href="/all-product">
                    <motion.button
                        className="group relative w-60 px-5 py-3 text-base font-semibold text-center text-white rounded-xl shadow-lg shadow-purple-500/30 cursor-pointer overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 border border-purple-500/30"
                        whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 40px -10px rgba(147, 51, 234, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative flex items-center justify-center gap-2">
                            View All Projects
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </motion.button>
                </Link>
            </motion.div>
        </motion.section>
    );
};

export default HomeProject;