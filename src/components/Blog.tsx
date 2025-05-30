"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface TBlog {
  title: string;
  content: string;
  author: string;
  _id: string;
  image: string;
  category: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16,
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 8px 32px 0 rgba(80, 0, 180, 0.12)",
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, delay: 0.1 },
  },
};

const Blog = ({ loadId }: { loadId: string }) => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
        const data = await res.json();
        setBlogs(data?.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center text-xl">Loading...</p>;

  return (
    <motion.section
      id={loadId}
      className="px-4 min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="text-center my-20" variants={headerVariants}>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight">
          Recent Blogs
        </h2>
        <p className=" text-white mt-8 text-xl font-medium max-w-2xl mx-auto">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto"
        variants={containerVariants}
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog._id}
            variants={itemVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <Link
              href={`/blog/${blog._id}`}
              key={blog._id}
              className="group block border h-[100%] border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer bg-white hover:border-indigo-200 transform hover:-translate-y-1"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                width={600}
                height={600}
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-indigo-600 rounded-full">
                    {blog.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 bg-white">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span>{blog.author}</span>
                  {/* <span>•</span>
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span> */}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.content.substring(0, 120)}...
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-sm text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
                    Read more
                    <svg
                      className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Blog;
