"use client";

import { motion, Variants } from "framer-motion";
import SectionHeader from "@/shared/SectionHeader";
import { defaultPortfolioSettings, EducationItem, PortfolioSettings } from "@/types/portfolio";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
  hover: { y: -5, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)" },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const Education = ({ id, data, variant }: { id: string; data?: EducationItem[]; variant?: PortfolioSettings["sectionStyles"]["education"] }) => {
  const educationData = data?.length ? data : defaultPortfolioSettings.education;
  const currentVariant = variant ?? defaultPortfolioSettings.sectionStyles.education;

  const renderEducation = () => {
    if (currentVariant === "cards") {
      return (
        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div key={`${edu.degree}-${index}`} className="rounded-2xl border border-gray-700 bg-gray-900/60 p-6" variants={cardVariants} whileHover="hover">
              <div className="mb-4 inline-flex rounded-xl border border-purple-500/30 bg-purple-500/10 p-3 text-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="mt-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold">{edu.institute}</p>
              <p className="mt-3 text-sm text-purple-300">{edu.duration}</p>
              <p className="mt-4 text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      );
    }

    if (currentVariant === "stacked") {
      return (
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div key={`${edu.degree}-${index}`} className="flex gap-4 rounded-2xl border border-gray-700 bg-gray-900/60 p-6" variants={cardVariants} whileHover="hover">
              <div className="mt-1 h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
              <div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-purple-300">{edu.institute}</p>
                <p className="mt-2 text-sm text-gray-400">{edu.duration}</p>
                <p className="mt-4 text-gray-300">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }

    if (currentVariant === "grid") {
      return (
        <div className="grid md:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <motion.div key={`${edu.degree}-${index}`} className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-gray-900 to-gray-800 p-5" variants={cardVariants} whileHover="hover">
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300">{edu.duration}</p>
              <h3 className="mt-4 text-xl font-bold text-white">{edu.degree}</h3>
              <p className="mt-2 text-purple-300">{edu.institute}</p>
              <p className="mt-4 text-sm text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 gap-8 relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
        {educationData.map((edu, index) => (
          <motion.div key={`${edu.degree}-${index}`} className={`relative ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}`} variants={cardVariants} whileHover="hover">
            <div className={`hidden md:block absolute top-6 ${index % 2 === 0 ? "right-0 translate-x-2" : "left-0 -translate-x-2"}`}>
              <div className="relative">
                <div className="h-4 w-4 animate-pulse rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
                <div className="absolute inset-0 h-4 w-4 animate-ping rounded-full bg-purple-500/30" />
              </div>
            </div>
            <div className="relative flex h-full flex-col rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 shadow-xl shadow-purple-900/10">
              <div className="flex items-start space-x-4">
                <div className="rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 p-3 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="mt-1 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text font-semibold text-transparent">{edu.institute}</p>
                  <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-semibold text-purple-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {edu.duration}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <motion.section id={id} className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-4 py-20 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" style={{ animationDelay: "1s" }} />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader badge="Academic Journey" titleWhite="My" titleGradient="Education" description="A continuous journey of learning and growth in computer science and engineering" className="mb-16 text-center" variants={headerVariants} />
        {renderEducation()}
      </div>
    </motion.section>
  );
};

export default Education;
