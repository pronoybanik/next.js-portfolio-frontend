"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
  },
  {
    id: 3,
    title: "Content Writing",
    description:
      "Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
  },
];

const Services = ({id} : {id: string}) => {
  const [selected, setSelected] = useState(1);

  return (
    <section id={id} className="bg-gray-100 py-16 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          My Quality Services
        </h2>
        <p className="text-gray-600 mt-2">
          We put your ideas into a unique web project that inspires you and your
          customers.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelected(service.id)}
            className={`flex items-center justify-between p-5 rounded-lg transition-all duration-300 cursor-pointer ${
              selected === service.id
                ? "bg-gradient-to-r from-purple-500 to-purple-900 text-white"
                : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
          >
            <div>
              <span
                className={`text-lg font-bold ${
                  selected === service.id ? "text-white" : "text-purple-600"
                }`}
              >
                0{service.id}
              </span>
              <h3
                className={`text-xl font-bold mt-1 ${
                  selected === service.id ? "text-white" : "text-purple-600"
                }`}
              >
                {service.title}
              </h3>
              {selected === service.id && (
                <p className="mt-2 text-sm">{service.description}</p>
              )}
            </div>
            <ArrowUpRight
              className={`w-6 h-6 transition-transform duration-300 ${
                selected === service.id
                  ? "text-white transform rotate-45"
                  : "text-purple-600 hover:text-purple-800"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
