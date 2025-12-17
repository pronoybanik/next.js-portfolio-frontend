"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Github, BookOpen, Mail, Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/pronoy.banik.7",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/pronoy-banik-1b5a3125a/",
      gradient: "from-blue-700 to-blue-500",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/pronoybanik",
      gradient: "from-gray-800 to-gray-600",
    },
    {
      name: "Medium",
      icon: BookOpen,
      url: "https://medium.com/@pronoybanik82",
      gradient: "from-green-600 to-green-400",
    },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Education", href: "/#education" },
    { name: "Experience", href: "/#experience" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          {/* Email Section */}
          <motion.div
            className="flex-1 md:flex md:items-center md:gap-12 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              className="group flex items-center gap-2 lg:text-2xl md:text-xl text-base font-bold my-4 md:my-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 hover:from-purple-300 hover:via-indigo-300 hover:to-blue-300 transition-all duration-300"
              href="mailto:Pronoybanik82@gmail.com"
            >
              <Mail className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              Pronoybanik82@gmail.com
            </a>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="flex gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group p-3 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10" />
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-indigo-400 transition-all duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Divider */}
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

          {/* Copyright Section */}
          <motion.div
            className="text-sm text-gray-400 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="flex items-center justify-center gap-1 flex-wrap">
              © {currentYear} All rights reserved. Made with{" "}
              <Heart className="w-4 h-4 text-red-500 inline animate-pulse" fill="currentColor" />{" "}
              by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold">
                Pronoy Banik
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
