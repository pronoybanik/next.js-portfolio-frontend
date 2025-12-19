"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import SectionHeader from "@/shared/SectionHeader";

interface MediumBlog {
  title: string;
  description: string;
  url: string;
  image: string;
  category: string;
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

// Medium blog articles data
const mediumBlogs: MediumBlog[] = [
  {
    title: "The Software Life Cycle: It's Like Raising a Plant, Not Building a Car",
    description: "Explore the organic nature of software development and why treating it like growing a plant rather than building a machine leads to better results and sustainable growth.",
    url: "https://medium.com/@pronoybanik82/the-software-life-cycle-its-like-raising-a-plant-not-building-a-car-3fb358bb7e3c",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop",
    category: "Software Development"
  },
  {
    title: "Neural Networks Explained Without the Math",
    description: "Demystifying neural networks with intuitive explanations and practical examples, making AI accessible to everyone without complex mathematical formulas.",
    url: "https://medium.com/@pronoybanik82/neural-networks-explained-without-the-math-9bac4dc82ec3",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    category: "Artificial Intelligence"
  },
  {
    title: "Data Science Isn't Just About Numbers. It's Your Ticket to Tomorrow.",
    description: "Discover how data science is transforming industries and creating opportunities for the future. It's not just about crunching numbers—it's about unlocking possibilities.",
    url: "https://medium.com/@pronoybanik82/data-science-isnt-just-about-numbers-it-s-your-ticket-to-tomorrow-cd93f2073c24",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: "Data Science"
  }
];

const Blog = ({ id }: { id: string }) => {
  return (
    <motion.section
      id={id}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge="Latest Articles"
          titleWhite="My"
          titleGradient="Blog Posts"
          description="Insights, tutorials and thoughts on software development, AI, and technology"
          className="text-center mb-16"
          variants={headerVariants}
        />

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {mediumBlogs.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              custom={index}
              whileHover="hover"
              className="group block h-full"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 shadow-xl shadow-purple-900/10 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative">
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-purple-500/90 to-indigo-500/90 backdrop-blur-sm text-xs font-semibold text-white rounded-full shadow-lg">
                        {blog.category}
                      </span>
                    </div>

                    {/* External Link Icon */}
                    <div className="absolute top-4 right-4 p-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700/50 group-hover:bg-purple-500/50 transition-all duration-300">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4" />
                        <span>Medium</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                      {blog.title}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {blog.description}
                    </p>

                    <div className="flex items-center text-purple-400 font-semibold text-sm group-hover:text-purple-300 transition-colors duration-300">
                      Read on Medium
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* View All Articles Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://medium.com/@pronoybanik82"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 border border-purple-500/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <BookOpen className="w-5 h-5" />
            View All Articles on Medium
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blog;
