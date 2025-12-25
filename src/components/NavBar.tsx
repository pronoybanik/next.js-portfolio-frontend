"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#education", label: "Education" },
    { href: "/#experience", label: "Experience" },
    { href: "/#services", label: "Services" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f0f1e]/95 backdrop-blur-lg shadow-lg"
            : "bg-[#0f0f1e]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">
                Pronoy<span className="text-indigo-500">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    item.label === "Home"
                      ? "text-indigo-500"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/#contact"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                Let&apos;s Talk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[998] lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#0f0f1e] z-[999] transform transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <Link href="/" onClick={closeSidebar}>
            <span className="text-2xl font-bold text-white">
              Pronoy<span className="text-indigo-500">.</span>
            </span>
          </Link>
          <button
            onClick={closeSidebar}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 px-4 py-6">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={closeSidebar}
              className={`block px-4 py-3 mb-1 text-base rounded-lg transition-colors ${
                item.label === "Home"
                  ? "text-indigo-500 font-semibold bg-indigo-500/10"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <Link
            href="/#contact"
            onClick={closeSidebar}
            className="block w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-center rounded-lg font-medium transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
