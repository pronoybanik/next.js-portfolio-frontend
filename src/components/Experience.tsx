"use client";

import { useRef, useState } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown } from "lucide-react";
import SectionHeader from "@/shared/SectionHeader";

const experienceData = [
  {
    title: "Backend Developer",
    company: "Taqua Tech",
    type: "Remote",
    location: "Remote",
    duration: "Jan 2026 – Present",
    period: "Ongoing",
    responsibilities: [
      "Developed scalable backend architecture and RESTful APIs.",
      "Implemented JWT authentication and role-based authorization.",
      "Designed and managed MongoDB/SQL databases.",
      "Optimized queries and improved performance.",
      "Ensured data security and validation.",
      "Handled business logic and complex workflows.",
      "Integrated external APIs and payment systems.",
      "Implemented error handling, logging, and monitoring.",
      "Collaborated with frontend for API integration.",
      "Wrote clean, maintainable, and reusable code.",
      "Tested APIs using Postman for reliability.",
      "Deployed and managed services on VPS/cloud.",
      "Set up CI/CD pipelines for automation."
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "SQL", "JWT", "REST API", "CI/CD", "Postman", "Docker", "VPS"],
    gradient: "from-orange-500 to-red-500",
    dotColor: "bg-orange-500",
    ringColor: "bg-orange-400",
    badgeColor: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    iconBg: "bg-orange-500/10 text-orange-400",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    type: "Freelance",
    location: "Remote",
    duration: "2022 – Present",
    period: "Ongoing",
    responsibilities: [
      "Building custom web applications and websites for clients across various industries.",
      "Providing end-to-end development services from requirement analysis to deployment and maintenance.",
      "Specializing in modern web technologies including React, Next.js, and full-stack MERN development.",
    ],
    skills: ["React.js", "Next.js", "Node.js", "MongoDB", "Full Stack"],
    gradient: "from-green-500 to-emerald-500",
    dotColor: "bg-green-500",
    ringColor: "bg-green-400",
    badgeColor: "bg-green-500/10 text-green-300 border-green-500/20",
    iconBg: "bg-green-500/10 text-green-400",
  },
  {
    title: "Frontend Developer & Tester",
    company: "Normalize",
    type: "Part-time",
    location: "Remote",
    duration: "Sep 2025 – Nov 2025",
    period: "3 months",
    responsibilities: [
      "Working as a Frontend Developer and Tester, contributing to UI development and performance optimisation.",
      "Developing responsive, high-quality user interfaces using React.js, Remix, and Shopify tools.",
      "Participating in testing workflows, identifying UI/UX issues, and ensuring pixel-perfect implementation.",
    ],
    skills: ["React.js", "Remix", "Shopify"],
    gradient: "from-purple-500 to-indigo-500",
    dotColor: "bg-purple-500",
    ringColor: "bg-purple-400",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    iconBg: "bg-purple-500/10 text-purple-400",
  },
  {
    title: "Frontend Development & Management Intern",
    company: "xCodexa",
    type: "Internship",
    location: "Remote",
    duration: "Sep 2022 – Feb 2023",
    period: "6 months",
    responsibilities: [
      "Contributed to building and maintaining responsive web applications using React.js and TypeScript.",
      "Collaborated with the design and development team to enhance UI/UX and improve overall usability.",
      "Worked extensively with GitHub, handling pull requests, code reviews, and feature branch management.",
    ],
    skills: ["React.js", "Redux", "Tailwind CSS", "Material-UI", "TypeScript"],
    gradient: "from-blue-500 to-cyan-500",
    dotColor: "bg-blue-500",
    ringColor: "bg-blue-400",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

/* ── Individual card with its own scroll trigger ── */
function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experienceData)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;
  const [open, setOpen] = useState(false);

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
    <div
      ref={ref}
      className={`relative flex items-start mb-14 ${isLeft ? "flex-row" : "flex-row-reverse"
        }`}
    >
      {/* ── Timeline dot ── */}
      <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 items-center justify-center">
        <span
          className={`absolute w-5 h-5 rounded-full ${exp.ringColor} opacity-60 animate-ping`}
        />
        <span className={`relative w-3 h-3 rounded-full ${exp.dotColor} z-10`} />
      </div>

      {/* ── Card (takes ~45% width on each side, pushed away from center line) ── */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`w-full md:w-[calc(50%-36px)] ${isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
          }`}
      >
        <div
          className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm
            rounded-2xl border border-gray-700/50 shadow-xl shadow-black/20 p-5
            hover:border-gray-500/50 hover:shadow-purple-900/20 transition-all duration-300
            ${isLeft ? "md:mr-6" : "md:ml-6"}`}
        >
          {/* Subtle gradient glow on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0
              group-hover:opacity-[0.06] transition-opacity duration-300 rounded-2xl pointer-events-none`}
          />

          {/* ── Card header ── */}
          <div className="flex items-start gap-3 mb-3">
            <div
              className={`p-2 rounded-xl ${exp.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}
            >
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white group-hover:text-purple-200 transition-colors duration-300 leading-tight">
                {exp.title}
              </h3>
              <p
                className={`text-sm font-medium bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}
              >
                {exp.company}
              </p>
            </div>
          </div>

          {/* ── Meta tags ── */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border ${exp.badgeColor}`}
            >
              <Calendar className="w-3 h-3" />
              {exp.duration}
            </span>
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border ${exp.badgeColor}`}
            >
              {exp.type}
            </span>
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border ${exp.badgeColor}`}
            >
              <MapPin className="w-3 h-3" />
              {exp.location}
            </span>
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border ${exp.badgeColor}`}
            >
              {exp.period}
            </span>
          </div>

          {/* ── Responsibilities (collapsible) ── */}
          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-1.5 mb-3">
              {exp.responsibilities.map((r, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-xs leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Toggle responsibilities */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-purple-300 transition-colors mb-3"
          >
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
            {open ? "Hide" : "Show"} responsibilities
          </button>

          {/* ── Skills ── */}
          <div className="pt-3 border-t border-gray-700/50">
            <p className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase mb-2">
              Skills & Technologies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 text-xs font-medium bg-gray-700/60 text-gray-300 rounded-md
                    border border-gray-600/40 hover:border-purple-500/30 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ── Connector line to timeline (desktop) ── */}
          <div
            className={`hidden md:block absolute top-6 w-6 h-px bg-gray-600/50
              ${isLeft ? "-right-6" : "-left-6"}`}
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ── Section ── */
const Experience = ({ id }: { id: string }) => {
  return (
    <motion.section
      id={id}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-24 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-24 left-10 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.2s" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader
          badge="Professional Journey"
          titleWhite="Work"
          titleGradient="Experience"
          description="Building innovative solutions and contributing to impactful projects"
          className="text-center mb-20"
          variants={headerVariants}
        />

        {/* ── Timeline container ── */}
        <div className="relative">
          {/* Center vertical line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2
              bg-gradient-to-b from-transparent via-gray-700/60 to-transparent"
          />

          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;