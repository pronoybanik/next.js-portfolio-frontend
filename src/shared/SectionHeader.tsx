"use client";

import { motion, Variants } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  titleWhite: string;
  titleGradient: string;
  description: string;
  className?: string;
  variants?: Variants;
}

const defaultHeaderVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.1,
    },
  },
};

const SectionHeader = ({
  badge,
  titleWhite,
  titleGradient,
  description,
  className = "text-center mb-8 sm:mb-12 lg:mb-16",
  variants = defaultHeaderVariants,
}: SectionHeaderProps) => {
  return (
    <motion.div className={className} variants={variants}>
      <div className="inline-block mb-4">
        <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
          {badge}
        </span>
      </div>
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
        <span className="text-white">{titleWhite} </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
          {titleGradient}
        </span>
      </h2>
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-12 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
        <div className="w-8 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"></div>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
      </div>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
