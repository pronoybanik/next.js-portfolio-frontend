"use client";
import { useState } from "react";
import { ArrowUpRight, Code, Palette, PenTool, Smartphone, Globe, Layers } from "lucide-react";
import { motion, Variants } from "framer-motion";
import SectionHeader from "@/shared/SectionHeader";

const services = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Building scalable, high-performance web applications using modern technologies like MERN stack. From frontend to backend, I create complete solutions with seamless user experiences and robust architectures.",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Mobile App React Native",
    description: "Developing cross-platform mobile applications with React Native. Create stunning iOS and Android apps from a single codebase, ensuring native performance and beautiful UI/UX for mobile users.",
    icon: <Smartphone className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "React Maintainable Website",
    description: "Crafting clean, maintainable React applications with best practices. Using component-based architecture, TypeScript, and modern state management to build scalable websites that are easy to update and extend.",
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing interfaces that enhance user engagement. Creating user-centered designs with modern aesthetics, ensuring seamless navigation and optimal user experience.",
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Creating compelling technical documentation, blog posts, and web content. Writing clear, engaging content that communicates complex technical concepts to diverse audiences effectively.",
    icon: <PenTool className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 6,
    title: "Web Development",
    description: "Building responsive, modern websites that look great on any device. Implementing adaptive layouts, optimized performance, and ensuring cross-browser compatibility for seamless user experiences.",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-orange-500 to-amber-500"
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants : Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
  }
};

const headerVariants : Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const Services = ({ id }: { id: string }) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <motion.section
      id={id}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge="What I Offer"
          titleWhite="My"
          titleGradient="Services"
          description="Transforming ideas into exceptional digital experiences that inspire and engage your audience"
          className="text-center mb-16"
          variants={headerVariants}
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => setSelected(selected === service.id ? null : service.id)}
              className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border p-6 cursor-pointer transition-all duration-300 group overflow-hidden ${
                selected === service.id ? "border-purple-500/50 shadow-xl shadow-purple-500/20" : "border-gray-700/50 hover:border-gray-600/50"
              }`}
              layout
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <motion.div
                        animate={selected === service.id ? { rotate: 45 } : { rotate: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowUpRight className={`w-5 h-5 transition-colors duration-300 ${
                          selected === service.id ? "text-purple-400" : "text-gray-500 group-hover:text-gray-400"
                        }`} />
                      </motion.div>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: selected === service.id ? "auto" : 0,
                    opacity: selected === service.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 text-sm mt-3 pt-3 border-t border-gray-700/50 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;