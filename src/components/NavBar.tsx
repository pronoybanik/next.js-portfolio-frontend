"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import icon from "../images/Blue_Initial_P_Business_Logo-removebg-preview.png";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home", isLink: true },
    { href: "/#education", label: "Education", isLink: true },
    { href: "/#experience", label: "Experience", isLink: true },
    { href: "/#services", label: "Services", isLink: true },
    { href: "/#projects", label: "Projects", isLink: true },
    { href: "/#skills", label: "Skills", isLink: true },
    { href: "/#blog", label: "Blog", isLink: true },
    { href: "/#contact", label: "Contact", isLink: true },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        mobileMenuOpen &&
        !target.closest("#mobile-menu") &&
        !target.closest("#menu-button")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Close on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Animation variants
  const containerVariants : Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants : Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  const mobileMenuVariants : Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        ease: "easeIn",
        duration: 0.2,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-gray-900/98 via-gray-900/95 to-gray-900/90 backdrop-blur-lg shadow-2xl shadow-purple-900/20"
          : "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900/95"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <header className="shadow-none">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center mt-2">
                <Image
                  width={140}
                  height={100}
                  src={icon}
                  alt="Logo"
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <motion.ul
                  className="flex items-center gap-6 lg:gap-8 text-base lg:text-lg font-semibold"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {navLinks.map((item, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      {item.isLink ? (
                        <Link
                          className="text-gray-200 font-medium relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:text-white"
                          href={item.href}
                        >
                          <motion.span 
                            className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          />
                          <span className="relative flex items-center">
                            {item.label}
                            <motion.span
                              className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 transition-all duration-500 group-hover:w-full rounded-full"
                              initial={{ width: 0 }}
                              whileHover={{ width: "100%" }}
                            />
                          </span>
                        </Link>
                      ) : (
                        <a
                          className="text-gray-200 font-medium relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:text-white"
                          href={item.href}
                        >
                          <motion.span 
                            className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          />
                          <span className="relative flex items-center">
                            {item.label}
                            <motion.span
                              className="absolute left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 transition-all duration-500 group-hover:w-full rounded-full"
                              initial={{ width: 0 }}
                              whileHover={{ width: "100%" }}
                            />
                          </span>
                        </a>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              {/* Mobile Menu Toggle */}
              <div className="block md:hidden">
                <motion.button
                  id="menu-button"
                  className="rounded-md p-2 text-gray-300 hover:text-white focus:outline-none"
                  onClick={toggleMobileMenu}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {mobileMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 z-40 bg-black/50 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />

              <motion.div
                id="mobile-menu"
                className="md:hidden bg-gray-800 absolute w-full z-50 shadow-xl"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="px-4 py-3 space-y-1">
                  {navLinks.map((item, index) => (
                    <motion.div
                      key={index}
                      className="py-1"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.isLink ? (
                        <Link
                          href={item.href}
                          className="block w-full text-left px-4 py-3 text-lg font-medium text-white rounded-lg hover:bg-gray-700/50 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="block w-full text-left px-4 py-3 text-lg font-medium text-white rounded-lg hover:bg-gray-700/50 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </motion.div>
  );
};

export default NavBar;
