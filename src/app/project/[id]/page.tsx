"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { TProject } from "@/app/types/projectType";
import Link from "next/link";
import { motion } from "framer-motion";
import LoadingPage from "@/app/loading";

const heroVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 18 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, delay: 0.15 },
  },
} as const;

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, delay: 0.25 },
  },
} as const;

const ProjectDetails = () => {
  const params = useParams();
  const [project, setProject] = useState<TProject | null>(null);
  const [loading, setLoading] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const image = container.querySelector("img");

    if (!image) return;

    const distanceToScroll = image.clientHeight - container.clientHeight;
    let scrollStep = 0;
    const scrollInterval = 5;

    intervalRef.current = setInterval(() => {
      if (scrollStep >= distanceToScroll) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        return;
      }
      scrollStep += scrollInterval;
      container.scrollTo(0, scrollStep);
    }, 15);
  };

  const resetScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    containerRef.current?.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!params?.id) return;

    const fetchProject = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/project/${params.id}`
        );
        const data = await res.json();
        setProject(data?.data || null);
      } catch (error) {
        console.error("Error fetching project details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params?.id]);

  if (loading) {
    return (
      <LoadingPage />
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
            <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Project not found</h2>
          <p className="text-gray-400">The project you&pros;re looking for doesn&p;t exist</p>
          <Link href="/" className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 font-semibold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Banner */}
      <motion.div
        className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1320916/pexels-photo-1320916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-purple-950/30 to-gray-900"></div>
        </div>
        <div className="relative z-10 text-center px-4 space-y-4">
          <div className="inline-block mb-3">
            <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm">
              Project Details
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
            {project.title}
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm">
            <Link
              href="/"
              className="text-gray-400 hover:text-purple-400 flex items-center gap-1 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <span className="text-gray-600">•</span>
            <span className="text-gray-300">{project.title}</span>
          </div>
        </div>
      </motion.div>

      {/* Project Content */}
      <motion.div
        className="relative container mx-auto px-4 py-12 z-10"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-900/20 overflow-hidden border border-gray-700/50">
          {/* Project Title */}
          <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm py-6 px-6 border-b border-gray-700/50">
            <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 uppercase tracking-wider">
              {project.title}
            </h2>
          </div>

          {/* Project Image and Quick Info */}
          <div className="md:flex">
            <motion.div
              className="md:w-2/3 p-6"
              initial="hidden"
              animate="visible"
              variants={contentVariants}
            >
              <div
                ref={containerRef}
                onMouseEnter={scrollToBottom}
                onMouseLeave={resetScroll}
                className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-lg border border-gray-700/50 group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                <Image
                  src={project.image || "/fallback-image.jpg"}
                  layout="fill"
                  objectFit="cover"
                  alt={project.title || "Project Image"}
                  className="transition-transform group-hover:scale-105 duration-700"
                />
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/3 p-6 flex flex-col justify-between"
              initial="hidden"
              animate="visible"
              variants={contentVariants}
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                  About This Project
                </h3>
                <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-lg p-3 mb-4 border border-purple-500/20">
                  <p className="text-gray-400 text-sm">
                    Category
                  </p>
                  <p className="text-purple-300 font-medium">{project.category}</p>
                </div>
                <div className="border-t border-gray-700/50 my-4 pt-4">
                  <h4 className="text-gray-300 font-medium mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    Project Links
                  </h4>
                  <div className="space-y-2">
                    {project.frontEndGitLink && (
                      <a
                        href={project.frontEndGitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 bg-gray-800/30 hover:bg-purple-500/10 px-3 py-2 rounded-lg transition-all duration-300 border border-gray-700/30 hover:border-purple-500/30 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 group-hover:scale-110 transition-transform"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">Frontend Code</span>
                      </a>
                    )}
                    {project.backEndGitLink && (
                      <a
                        href={project.backEndGitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 bg-gray-800/30 hover:bg-indigo-500/10 px-3 py-2 rounded-lg transition-all duration-300 border border-gray-700/30 hover:border-indigo-500/30 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 group-hover:scale-110 transition-transform"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100-2h-1a1 1 0 100 2h1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">Backend Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {project.liveLink && (
                <div className="mt-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 group-hover:scale-110 transition-transform"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Live Preview
                  </a>
                </div>
              )}
            </motion.div>
          </div>

          {/* Project Description */}
          <motion.div
            className="p-6 border-t border-gray-700/50"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
              Project Description
            </h3>
            <div className="prose max-w-none">
              <p className="leading-relaxed text-gray-400">{project.content}</p>
            </div>
          </motion.div>
        </div>

        {/* Back to Projects */}
        <motion.div
          className="mt-8 text-center"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <Link
            href="/all-product"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 bg-gray-800/50 hover:bg-gray-800/80 px-6 py-3 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:-translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to All Projects
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
