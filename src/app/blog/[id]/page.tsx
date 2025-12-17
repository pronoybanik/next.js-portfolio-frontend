"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, Variants } from "framer-motion";
import LoadingPage from "@/app/loading";

interface TBlog {
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;
  createdAt: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 16,
      staggerChildren: 0.15,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 80, delay: 0.1 },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, delay: 0.18 },
  },
};

const BlogItem = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<TBlog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`
        );
        const data = await res.json();
        setBlog(data.data || null);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <LoadingPage />;
  if (!blog) return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
          <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-2xl font-bold text-white">Blog not found</p>
        <p className="text-gray-400">The article you're looking for doesn't exist</p>
      </div>
    </div>
  );

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-16 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        className="relative max-w-4xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-900/20 overflow-hidden border border-gray-700/50 z-10"
        variants={containerVariants}
      >
        {/* Image Section */}
        <motion.div
          className="relative w-full h-72 md:h-96 overflow-hidden group"
          variants={imageVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg z-20">
            {blog.category}
          </span>
        </motion.div>

        <div className="p-6 md:p-8">
          {/* Meta Information */}
          <motion.div
            className="flex items-center text-gray-400 text-sm gap-6 flex-wrap"
            variants={contentVariants}
          >
            <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-lg border border-gray-700/50">
              <svg
                className="w-4 h-4 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {blog.author}
            </span>
            <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-lg border border-gray-700/50">
              <svg
                className="w-4 h-4 text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </motion.div>

          {/* Blog Title & Content */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 mt-6 leading-tight"
            variants={contentVariants}
          >
            {blog.title}
          </motion.h1>
          <motion.div
            className="mt-6 prose prose-invert prose-purple max-w-none"
            variants={contentVariants}
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              {blog.content}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default BlogItem;
