"use client";

import React from "react";

const educationData = [
  {
    degree: "Diploma in Computer Engineering",
    institute: "Institute of computer science and  technology (ICST)",
    duration: "2018 - 2022 : Completed",
    description:
      "Focused on fundamentals of programming, electronics, and computer hardware. Developed several practical projects including a mini ATM system and IoT-based sensor projects.",
  },
  {
    degree: "BSc in Computer Science",
    institute: "Southeast University (SEU)",
    duration: "2023 Running",
    description:
      "In-depth study of software engineering, data structures, algorithms, and web development. Built full-stack projects using MERN stack and deployed them on cloud platforms.",
  },
];

const Education = ({ id }: { id: string }) => {
  return (
    <section id={id} className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center my-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl my-4 md:my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight">
            Education
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-700">
                {edu.degree}
              </h3>
              <p className="text-gray-600 mt-1 font-medium">{edu.institute}</p>
              <p className="text-sm text-gray-500 mb-3">{edu.duration}</p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
