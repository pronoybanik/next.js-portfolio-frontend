"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";
import SecondaryButton from "@/shared/SecondaryButton";
import { motion } from "framer-motion";

// Define form data structure
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

const containerVariants = {
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

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80 },
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
      className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col md:flex-row w-full max-w-screen-lg space-y-12 md:space-y-0 md:space-x-12"
        variants={containerVariants}
      >
        {/* Form Section */}
        <motion.div
          className="bg-white w-full p-6 sm:p-8 rounded-2xl shadow-lg"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-2xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 text-center md:text-left">
            Let’s work together!
          </h2>
          <p className="text-gray-600 mb-6 text-center md:text-left text-sm sm:text-base">
            I design and code beautifully simple things, and I love what I do.
            Let’s make something amazing together!
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
                  className={`w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 ${
                    errors.firstName
                      ? "focus:ring-red-500"
                      : "focus:ring-purple-500"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
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
                  className={`w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 ${
                    errors.lastName
                      ? "focus:ring-red-500"
                      : "focus:ring-purple-500"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
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
                  className={`w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "focus:ring-red-500"
                      : "focus:ring-purple-500"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
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
                  className={`w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? "focus:ring-red-500"
                      : "focus:ring-purple-500"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
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
                className={`w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 ${
                  errors.category
                    ? "focus:ring-red-500"
                    : "focus:ring-purple-500"
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
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <textarea
                placeholder="Message"
                rows={4}
                {...register("message", { required: "Message is required" })}
                className={`w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "focus:ring-red-500"
                    : "focus:ring-purple-500"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <SecondaryButton type="submit">
              {isSubmitting ? "Sending..." : "Send Message"}
            </SecondaryButton>
          </form>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          className="flex flex-col items-center md:items-start space-y-6 w-full md:w-1/2"
          variants={itemVariants}
        >
          <ContactInfo icon={Phone} title="Phone" value="01609520719" />
          <ContactInfo
            icon={Mail}
            title="Email"
            value="pronoybanik81@gmail.com"
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
    className="flex items-center space-x-4 lg:mt-44 md:mt-44"
    whileHover={{ scale: 1.07, boxShadow: "0 4px 24px 0 rgba(80,0,180,0.10)" }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-900 text-white shadow-md">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
    </div>
    <div className="text-center md:text-left">
      <h4 className="text-white text-sm">{title}</h4>
      <p className="text-gray-200 font-medium">{value}</p>
    </div>
  </m.div>
);
