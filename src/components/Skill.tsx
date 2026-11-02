"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Users } from "lucide-react";
import SectionHeader from "@/shared/SectionHeader";

import { defaultPortfolioSettings, PortfolioSettings } from "@/types/portfolio";
import Image from "next/image";

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

const Skill = ({
  id,
  data,
  softSkills,
  variant,
}: {
  id: string;
  data?: typeof defaultPortfolioSettings.skills;
  softSkills?: string[];
  variant?: PortfolioSettings["sectionStyles"]["skills"];
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const portfolioSkills = data ?? defaultPortfolioSettings.skills;

  const currentVariant =
    variant ?? defaultPortfolioSettings.sectionStyles.skills;
  const displayedSoftSkills = softSkills?.length
    ? softSkills
    : defaultPortfolioSettings.softSkills;

  const displaySkills = selectedCategory
    ? portfolioSkills.filter((cat) => cat.category === selectedCategory)
    : portfolioSkills;

  const renderCategoryGrid = () => (
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
            <div
              className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6`}
            >
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              {category.category}
            </h3>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-30 ml-2 sm:ml-4"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
            variants={containerVariants}
          >
            {category.skills.map((skill, i) => (
              <motion.div
                key={`${category.category}-${skill.name}-${i}`}
                variants={itemVariants}
                className="w-full"
              >
                <div className="group relative flex h-[90px] items-center gap-3 overflow-hidden rounded-xl border border-slate-700 bg-[#121c2d] px-4 py-3 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-400 hover:shadow-indigo-500/10">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 transition group-hover:opacity-100" />
                  {skill.imageUrl?.trim() ? (
                    <Image
                      src={skill.imageUrl}
                      alt=""
                      width={56}
                      height={56}
                      className="relative h-14 w-14 shrink-0 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 text-lg font-bold text-orange-400">
                      {skill.name.trim().charAt(0).toUpperCase() || "?"}
                    </div>
                  )}
                  <div className="relative min-w-0">
                    <span className="block truncate text-[15px] font-bold text-white">
                      {skill.name}
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="rounded-full bg-indigo-500 px-2 py-0.5 text-[10px] font-medium text-white">
                        {skill.level}
                      </span>
                      <span className="text-xs text-slate-400">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );

  const renderBarLayout = () => (
    <div className="relative z-10 mx-auto max-w-5xl space-y-4 px-4">
      {displaySkills
        .flatMap((category) => category.skills)
        .map((skill, index) => (
          <div key={`${skill.name}-${index}`}>
            <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </div>
        ))}
    </div>
  );

  const renderCompactLayout = () => (
    <div className="relative z-10 mx-auto max-w-5xl px-4">
      <div className="flex flex-wrap gap-2">
        {displaySkills
          .flatMap((category) => category.skills)
          .map((skill, index) => (
            <span
              key={`${skill.name}-${index}`}
              className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-200"
            >
              {skill.name}
            </span>
          ))}
      </div>
    </div>
  );

  return (
    <motion.section
      id={id}
      className="relative sm:py-12 md:py-16 px-3 sm:px-4 md:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute top-10 sm:top-20 left-2 sm:left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 sm:bottom-20 right-2 sm:right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <SectionHeader
        badge="Technical Expertise"
        titleWhite="My"
        titleGradient="Skills"
        description="Comprehensive expertise across modern web technologies and development tools"
        className="text-center mb-8 sm:mb-12 md:mb-16 relative z-10"
        variants={headerVariants}
      />

      <motion.div className="text-center relative z-10 mb-8 sm:mb-10 md:mb-12">
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
          {portfolioSkills.map((cat) => (
            <motion.button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                selectedCategory === cat.category
                  ? `bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg`
                  : "bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50 hover:border-gray-600/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-4 h-4 sm:w-5 sm:h-5 [&>svg]:w-full [&>svg]:h-full">
                <Code2 className="w-full h-full" />
              </span>
              <span className="hidden xs:inline sm:inline">{cat.category}</span>
              <span className="inline xs:hidden sm:hidden">
                {cat.category.split(" ")[0]}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {currentVariant === "bar" && renderBarLayout()}
      {currentVariant === "compact" && renderCompactLayout()}
      {currentVariant !== "bar" &&
        currentVariant !== "compact" &&
        renderCategoryGrid()}

      <motion.div
        className="max-w-7xl mx-auto relative z-10 mt-8 sm:mt-10 md:mt-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 p-4 sm:p-6 md:p-8"
        variants={itemVariants}
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            Soft Skills
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {displayedSoftSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-lg sm:rounded-xl text-center"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(249, 115, 22, 0.5)",
              }}
            >
              <span className="text-orange-300 font-semibold text-xs sm:text-sm md:text-base">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skill;
