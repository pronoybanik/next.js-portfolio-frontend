"use client";

import PrimaryButton from "@/shared/PrimaryButton";
import verifyToken from "@/utils/verifyToken";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  role?: string;
}

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  let tokenInfo: CustomJwtPayload | null = null;

  if (token) {
    tokenInfo = verifyToken(token) as CustomJwtPayload;
  }

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setMobileMenuOpen(false);
    window.location.href = "/login";
  };

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

  if (tokenInfo?.role === "admin") {
    navLinks.push({ href: "/dashboard", label: "Dashboard", isLink: true });
  }

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center">
              <Link
                className="block text-sm md:text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight"
                href="/"
              >
                Pronoybanik82@gmail.com
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-8 lg:gap-10 text-base lg:text-lg font-semibold">
                  {navLinks.map((item, index) => (
                    <li key={index}>
                      {item.isLink ? (
                        <Link
                          className="text-black font-semibold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-gradient-to-r before:from-purple-600 before:to-indigo-600 before:transition hover:before:scale-x-100 duration-300"
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          className="text-black font-semibold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-gradient-to-r before:from-purple-600 before:to-indigo-600 before:transition hover:before:scale-x-100 duration-300"
                          href={item.href}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Desktop Logout Button (only if logged in) */}
              {isLoggedIn && (
                <div className="hidden sm:flex sm:gap-4">
                  <PrimaryButton handler={handleLogout}>Logout</PrimaryButton>
                </div>
              )}

              {/* Mobile Menu Toggle Button */}
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
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
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

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white border-t border-gray-200 animate-slideDown"
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

              {isLoggedIn && (
                <div className="pt-4 pb-2 border-t border-gray-200 mt-2">
                  <button
                    onClick={handleLogout}
                    className="w-full text-center px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md hover:from-purple-700 hover:to-indigo-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

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
