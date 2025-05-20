"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import icon from "../images/Blue_Initial_P_Business_Logo-removebg-preview.png";
import Image from "next/image";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home", isLink: true },
    { href: "#services", label: "Service", isLink: false },
    { href: "#project", label: "Project", isLink: false },
    { href: "#skill", label: "Skill", isLink: false },
    { href: "#blog", label: "Blog", isLink: false },
    { href: "#contact", label: "Contact", isLink: true },
  ];

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

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-1">
              <Link href="/" className="flex items-center mt-2">
                <Image width={120} height={100} src={icon} alt="Logo" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-8 lg:gap-10 text-base lg:text-lg font-semibold">
                  {navLinks.map((item, index) => (
                    <li key={index}>
                      {item.isLink ? (
                        <Link
                          className="text-black font-semibold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-gradient-to-r before:from-purple-600 before:to-indigo-600 before:transition hover:before:scale-x-100 duration-300 font-[kadwa]"
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          className="text-black font-semibold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-gradient-to-r before:from-purple-600 before:to-indigo-600 before:transition hover:before:scale-x-100 duration-300 font-[kadwa]"
                          href={item.href}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Menu Toggle */}
              <div className="block md:hidden">
                <button
                  id="menu-button"
                  className="rounded-md bg-gray-100 p-2 text-gray-600 transition hover:text-gray-800 hover:bg-gray-200 focus:outline-none"
                  onClick={toggleMobileMenu}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  {mobileMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                      className="h-5 w-5"
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
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white border-t border-gray-200 animate-slideDown absolute w-full z-50"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((item, index) => (
                <div key={index} className="py-2">
                  {item.isLink ? (
                    <Link
                      href={item.href}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-purple-50 hover:text-purple-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-purple-50 hover:text-purple-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>  
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Animation style */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
