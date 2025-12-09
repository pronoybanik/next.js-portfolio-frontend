"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { getBlogs } from "@/services/blogs";

export interface TBlog {
  title: string;
  content: string;
  author: string;
  _id: string;
  image: string;
  category: string;
  createdAt: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -5,
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Blog = ({ id }: { id: string }) => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getBlogs();
      setBlogs(response?.data || []);
    };

    fetchProjects();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <motion.section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-400 mb-4">
            Latest <span className="text-indigo-600">Articles</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Insights, tutorials and thoughts on web development and design.
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {blogs && Array.isArray(blogs) && blogs.length > 0 ? blogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              variants={itemVariants}
              custom={index}
              whileHover="hover"
              className="group"
            >
              <Link
                href={`/blog/${blog._id}`}
                className="block h-full rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-indigo-600 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{formatDate(blog.createdAt)} min read</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.content}
                  </p>

                  <div className="flex items-center text-indigo-600 font-medium">
                    Read article
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )) : null}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blog;
