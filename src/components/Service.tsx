"use client";
import { useState } from "react";
import { ArrowUpRight, Code, Palette, PenTool, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
    icon: <Code className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
    icon: <Palette className="w-6 h-6" />,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 3,
    title: "Content Writing",
    description: "Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.",
    icon: <PenTool className="w-6 h-6" />,
    color: "bg-green-100 text-green-600"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
    icon: <BarChart2 className="w-6 h-6" />,
    color: "bg-orange-100 text-orange-600"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
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

const headerVariants = {
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
      className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-400 mb-4">
            My <span className="text-indigo-600">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We transform your ideas into exceptional digital experiences that inspire both you and your customers.
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => setSelected(selected === service.id ? null : service.id)}
              className={`bg-white rounded-xl shadow-sm p-6 cursor-pointer transition-all duration-300 ${
                selected === service.id ? "ring-2 ring-indigo-500" : ""
              }`}
              layout
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${service.color}`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                    <motion.div
                      animate={selected === service.id ? { rotate: 45 } : { rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowUpRight className={`w-5 h-5 ${
                        selected === service.id ? "text-indigo-600" : "text-gray-400"
                      }`} />
                    </motion.div>
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
                    <p className="text-gray-600 mt-3 pt-2 border-t border-gray-100">
                      {service.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;