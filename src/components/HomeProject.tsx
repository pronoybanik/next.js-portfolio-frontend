"use client";


import ProductItem from "@/components/ProductItem";
import Link from "next/link";
import { TProject } from "@/app/types/projectType";
import { motion } from "framer-motion";


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
            className="py-16 px-8 min-h-screen bg-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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
                className="grid lg:grid-cols-2 grid-cols-1 max-w-screen-2xl mx-auto gap-8"
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
                className="flex justify-center mt-8"

                initial="hidden"
                animate="visible"
                whileHover="hover"
            >
                <Link href="/all-product">
                    <motion.button
                        className="w-60 px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500"
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        View All
                    </motion.button>
                </Link>
            </motion.div>
        </motion.section>
    );
};

export default HomeProject;