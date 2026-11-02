"use client";

import { useRef, useState } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown } from "lucide-react";
import SectionHeader from "@/shared/SectionHeader";
import { defaultPortfolioSettings, ExperienceItem, PortfolioSettings } from "@/types/portfolio";

const paletteClasses = [
  { gradient: "from-orange-500 to-red-500", dotColor: "bg-orange-500", ringColor: "bg-orange-400", badgeColor: "bg-orange-500/10 text-orange-300 border-orange-500/20", iconBg: "bg-orange-500/10 text-orange-400" },
  { gradient: "from-green-500 to-emerald-500", dotColor: "bg-green-500", ringColor: "bg-green-400", badgeColor: "bg-green-500/10 text-green-300 border-green-500/20", iconBg: "bg-green-500/10 text-green-400" },
  { gradient: "from-purple-500 to-indigo-500", dotColor: "bg-purple-500", ringColor: "bg-purple-400", badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20", iconBg: "bg-purple-500/10 text-purple-400" },
  { gradient: "from-blue-500 to-cyan-500", dotColor: "bg-blue-500", ringColor: "bg-blue-400", badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20", iconBg: "bg-blue-500/10 text-blue-400" },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

function ExperienceCard({
  exp,
  index,
}: {
  exp: ExperienceItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;
  const [open, setOpen] = useState(false);
  const style = paletteClasses[index % paletteClasses.length];
  const gradient = exp.gradient || style.gradient;
  const dotColor = style.dotColor;
  const ringColor = style.ringColor;
  const badgeColor = style.badgeColor;
  const iconBg = style.iconBg;

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: isLeft ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay: 0.1,
      },
    },
  };

  return (
    <div ref={ref} className={`relative flex items-start mb-14 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 items-center justify-center">
        <span className={`absolute w-5 h-5 rounded-full ${ringColor} opacity-60 animate-ping`} />
        <span className={`relative w-3 h-3 rounded-full ${dotColor} z-10`} />
      </div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`w-full md:w-[calc(50%-36px)] ${isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"}`}
      >
        <div className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl shadow-black/20 p-5 hover:border-gray-500/50 hover:shadow-purple-900/20 transition-all duration-300 ${isLeft ? "md:mr-6" : "md:ml-6"}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 rounded-2xl pointer-events-none`} />

          <div className="flex items-start gap-3 mb-3">
            <div className={`p-2 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white group-hover:text-purple-200 transition-colors duration-300 leading-tight">{exp.title}</h3>
              <p className={`text-sm font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{exp.company}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border ${badgeColor}`}>
              <Calendar className="w-3 h-3" />
              {exp.duration}
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border ${badgeColor}`}>
              {exp.type}
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border ${badgeColor}`}>
              <MapPin className="w-3 h-3" />
              {exp.location}
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border ${badgeColor}`}>
              {exp.period}
            </span>
          </div>

          <div className="space-y-3">
            {(open ? exp.responsibilities : exp.responsibilities.slice(0, 3)).map((item, idx) => (
              <div key={`${exp.title}-${idx}`} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-xs leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-purple-300 transition-colors mb-3 mt-4"
          >
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            {open ? "Hide" : "Show"} responsibilities
          </button>

          <div className="pt-3 border-t border-gray-700/50">
            <p className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase mb-2">Skills & Technologies</p>
            <div className="flex flex-wrap gap-1.5">
              {exp.skills.map((skill, idx) => (
                <span key={`${exp.title}-skill-${idx}`} className="px-2.5 py-0.5 text-xs font-medium bg-gray-700/60 text-gray-300 rounded-md border border-gray-600/40 hover:border-purple-500/30 transition-colors duration-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const Experience = ({ id, data, variant }: { id: string; data?: ExperienceItem[]; variant?: PortfolioSettings["sectionStyles"]["experience"] }) => {
  const sourceExperience = data?.length ? data : defaultPortfolioSettings.experience;
  const experienceData = sourceExperience
    .map((exp, index) => ({ exp, index }))
    .sort((a, b) => {
      const aOrder = Number.isFinite(a.exp.order) ? a.exp.order! : a.index;
      const bOrder = Number.isFinite(b.exp.order) ? b.exp.order! : b.index;
      return aOrder - bOrder || a.index - b.index;
    })
    .map(({ exp }) => exp);
  const currentVariant = variant ?? defaultPortfolioSettings.sectionStyles.experience;

  const renderExperience = () => {
    if (currentVariant === "cards") {
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {experienceData.map((exp, index) => {
            const gradient = exp.gradient || paletteClasses[index % paletteClasses.length].gradient;
            return (
              <motion.div key={`${exp.company}-${exp.title}`} className="rounded-2xl border border-gray-700 bg-gray-900/60 p-6" whileHover={{ y: -4 }}>
                <div className={`inline-flex rounded-lg bg-gradient-to-r ${gradient} px-3 py-1 text-xs font-semibold text-white`}>{exp.type}</div>
                <h3 className="mt-4 text-xl font-bold text-white">{exp.title}</h3>
                <p className="mt-1 text-purple-300">{exp.company}</p>
                <p className="mt-3 text-sm text-gray-300">{exp.duration}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {exp.responsibilities.slice(0, 3).map((item, idx) => (
                    <li key={`${exp.title}-mini-${idx}`} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-purple-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      );
    }

    if (currentVariant === "stacked") {
      return (
        <div className="space-y-6">
          {experienceData.map((exp, index) => {
            const gradient = exp.gradient || paletteClasses[index % paletteClasses.length].gradient;
            return (
              <motion.div key={`${exp.company}-${exp.title}`} className="rounded-2xl border border-gray-700 bg-gray-900/70 p-6" whileHover={{ x: 4 }}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-purple-300">{exp.company}</p>
                  </div>
                  <span className={`rounded-full bg-gradient-to-r ${gradient} px-3 py-1 text-xs font-semibold text-white`}>{exp.duration}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-300">
                  {exp.skills.map((skill, idx) => (
                    <span key={`${exp.title}-stack-${idx}`} className="rounded-full border border-gray-700 px-2 py-1">{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      );
    }

    if (currentVariant === "grid") {
      return (
        <div className="grid gap-6 md:grid-cols-3">
          {experienceData.map((exp, index) => {
            const gradient = exp.gradient || paletteClasses[index % paletteClasses.length].gradient;
            return (
              <motion.div key={`${exp.company}-${exp.title}`} className="rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-5" whileHover={{ y: -5 }}>
                <div className={`mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r ${gradient}`} />
                <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                <p className="mt-1 text-purple-300">{exp.company}</p>
                <p className="mt-3 text-sm text-gray-400">{exp.duration}</p>
                <p className="mt-4 text-sm text-gray-300">{exp.responsibilities[0]}</p>
              </motion.div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="relative">
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-700/60 to-transparent md:block" />
        {experienceData.map((exp, index) => (
          <ExperienceCard key={`${exp.company}-${exp.title}`} exp={exp} index={index} />
        ))}
      </div>
    );
  };

  return (
    <motion.section
      id={id}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 px-4 py-24 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-24 left-10 h-96 w-96 rounded-full bg-indigo-500/8 blur-3xl animate-pulse" style={{ animationDelay: "1.2s" }} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeader
          badge="Professional Journey"
          titleWhite="Work"
          titleGradient="Experience"
          description="Building innovative solutions and contributing to impactful projects"
          className="mb-20 text-center"
          variants={headerVariants}
        />
        {renderExperience()}
      </div>
    </motion.section>
  );
};

export default Experience;
