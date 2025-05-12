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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16,
    },
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
      className="py-16 px-4 md:px-8 lg:px-16 min-h-screen bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="text-center my-20" variants={itemVariants}>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight">
          Recent Blogs
        </h2>
        <p className="text-black mt-8 text-xl font-medium max-w-2xl mx-auto">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto"
        variants={containerVariants}
      >
        {blogs.map((blog) => (
          <motion.div key={blog._id} variants={itemVariants}>
            <Link
              href={`/blog/${blog._id}`}
              className="group block border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  fill
                  src={blog.image || "/fallback-image.jpg"}
                  alt={blog.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-700 mt-2 text-sm">
                  {blog.content.substring(0, 100)}...
                </p>
                <span className="mt-4 inline-block text-sm text-indigo-500 font-medium">
                  Read more →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Blog;
