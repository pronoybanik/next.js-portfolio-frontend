"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

interface TBlog {
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;
  createdAt: string;
}

const containerVariants = {
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 80, delay: 0.1 },
  },
};

const contentVariants = {
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

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (!blog) return <p className="text-center text-xl">Blog not found</p>;

  return (
    <motion.section
      className="mt-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg"
        variants={containerVariants}
      >
        {/* Image Section */}
        <motion.div
          className="relative w-full h-72 overflow-hidden rounded-lg"
          variants={imageVariants}
        >
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
          <span className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
            {blog.category}
          </span>
        </motion.div>

        {/* Meta Information */}
        <motion.div
          className="flex items-center text-gray-600 text-sm mt-4 space-x-6"
          variants={contentVariants}
        >
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A9 9 0 1118.879 6.196M12 9v4l3 3"
              />
            </svg>
            By {blog.author}
          </span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7h8M8 11h8m-8 4h8m2 4H6a2 2 0 01-2-2V6c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2z"
              />
            </svg>
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </motion.div>

        {/* Blog Title & Content */}
        <motion.h1
          className="text-3xl font-bold text-purple-700 mt-6"
          variants={contentVariants}
        >
          {blog.title}
        </motion.h1>
        <motion.p
          className="text-gray-700 mt-4 leading-relaxed"
          variants={contentVariants}
        >
          {blog.content}
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default BlogItem;
