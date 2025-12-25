"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Define form data structure
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 14,
      staggerChildren: 0.18,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80 },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, delay: 0.1 },
  },
};

const ContactForm = ({ id }: { id: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result?.success) {
        alert(result.message || "Thank you for your message");
        reset();
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <motion.section
      id={id}
      className="relative flex flex-col items-center justify-center px-4 pb-32 py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <SectionHeader
        badge="Get In Touch"
        titleWhite="Let's"
        titleGradient="Connect"
        description="Have a project in mind or just want to say hi? I'm always open to discussing new ideas, collaborations, or freelance opportunities."
        className="text-center mb-16 relative z-10"
        variants={headerVariants}
      />

      <motion.div
        className="relative z-10 flex flex-col md:flex-row w-full max-w-screen-lg space-y-12 md:space-y-0 md:space-x-12"
        variants={containerVariants}
      >
        {/* Form Section */}
        <motion.div
          className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm w-full p-6 sm:p-8 rounded-2xl border border-gray-700/50 shadow-2xl shadow-purple-900/20"
          variants={itemVariants}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-2xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-center md:text-left">
              Let&apos;s work together!
            </h2>
            <p className="text-gray-400 mb-6 text-center md:text-left text-sm sm:text-base">
              I design and code beautifully simple things, and I love what I do.
              Let&apos;s make something amazing together!
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="First name"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className={`w-full bg-gray-900/50 border text-gray-200 placeholder-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.firstName
                        ? "border-red-500/50 focus:ring-red-500/50"
                        : "border-gray-700/50 focus:ring-purple-500/50 focus:border-purple-500/50"
                      }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className={`w-full bg-gray-900/50 border text-gray-200 placeholder-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.lastName
                        ? "border-red-500/50 focus:ring-red-500/50"
                        : "border-gray-700/50 focus:ring-purple-500/50 focus:border-purple-500/50"
                      }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    {...register("email", {
                      required: "Enter a valid email address",
                    })}
                    className={`w-full bg-gray-900/50 border text-gray-200 placeholder-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.email
                        ? "border-red-500/50 focus:ring-red-500/50"
                        : "border-gray-700/50 focus:ring-purple-500/50 focus:border-purple-500/50"
                      }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    {...register("phone", {
                      required: "Enter a valid 10-digit phone number",
                    })}
                    className={`w-full bg-gray-900/50 border text-gray-200 placeholder-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.phone
                        ? "border-red-500/50 focus:ring-red-500/50"
                        : "border-gray-700/50 focus:ring-purple-500/50 focus:border-purple-500/50"
                      }`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <select
                  {...register("category", {
                    required: "Please select a category",
                  })}
                  className={`w-full bg-gray-900/50 border text-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.category
                      ? "border-red-500/50 focus:ring-red-500/50"
                      : "border-gray-700/50 focus:ring-purple-500/50 focus:border-purple-500/50"
                    }`}
                >
                  <option value="">Select a category</option>
                  <option value="Technology">Portfolio Website</option>
                  <option value="Health">E-commerce Website</option>
                  <option value="Lifestyle">Learning/Tutoring Platform</option>
                  <option value="Business">Job Board Website</option>
                  <option value="Business">Blogging Platform</option>
                  <option value="Business">
                    SaaS Dashboard (Analytics/CRM/HRM/etc.)
                  </option>
                  <option value="Business">Real Estate Listing Website</option>
                  <option value="Business">Forum/Community Website</option>
                  <option value="Business">Event Management Website</option>
                  <option value="Business">Travel Booking Website</option>
                </select>
                {errors.category && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <textarea
                  placeholder="Message"
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  className={`w-full bg-gray-900/50 border text-gray-200 placeholder-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${errors.message
                      ? "border-red-500/50 focus:ring-red-500/50"
                      : "border-gray-700/50 focus:ring-purple-500/50 focus:border-purple-500/50"
                    }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>


              <motion.button
                className="group relative w-full px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base font-semibold text-center text-white rounded-xl shadow-lg shadow-purple-500/30 cursor-pointer overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 border border-purple-500/30"
                whileHover={{ scale: 1.02, y: -2, boxShadow: "0 20px 40px -10px rgba(147, 51, 234, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          className="flex flex-col items-center md:items-start space-y-6 w-full md:w-1/2"
          variants={itemVariants}
        >
          <ContactInfo icon={Phone} title="Phone" value="+8801609520719" />
          <ContactInfo
            icon={Mail}
            title="Email"
            value="pronoybanik82@gmail.com"
          />
          <ContactInfo
            icon={MapPin}
            title="Address"
            value="Dhaka, Bangladesh"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;

// Contact Info Component
import { motion as m } from "framer-motion";
import SectionHeader from "@/shared/SectionHeader";
interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  value: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon: Icon,
  title,
  value,
}) => (
  <m.div
    className="flex items-center space-x-4 lg:mt-44 md:mt-44 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-lg shadow-purple-900/10 w-full"
    whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 40px 0 rgba(147, 51, 234, 0.3)" }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/30">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
    </div>
    <div className="text-center md:text-left flex-1">
      <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">{title}</h4>
      <p className="text-white font-semibold text-sm sm:text-base">{value}</p>
    </div>
  </m.div>
);
