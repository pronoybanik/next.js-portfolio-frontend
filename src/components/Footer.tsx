import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2a1454] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-4">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
            <span className="text-4xl font-bold text-purple-900">G</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mb-4">
          <ul className="flex space-x-6 text-sm text-white">
            <li>
              <a href="#" className="hover:text-purple-300">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-purple-300">
                Services
              </a>
            </li>
            <li>
              <a href="#works" className="hover:text-purple-300">
                works
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright Section */}
        <div className="text-sm text-gray-300 text-center">
          © 2024 All rights reserved by{" "}
          <a href="#" className="hover:text-purple-400">
            ThemeJunction
          </a>
        </div>
      </div>

     
    </footer>
  );
}
