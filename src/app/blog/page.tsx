import Image from "next/image";
import React from "react";

const blogs = [
  {
    category: "Business",
    date: "Oct 01, 2022",
    title: "The Role Of Technology In Modern...",
    img: "https://images.pexels.com/photos/30140435/pexels-photo-30140435/free-photo-of-moody-forest-in-heavy-fog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Update with actual image path
  },
  {
    category: "Development",
    date: "Nov 01, 2022",
    title: "The Role Of Technology In Modern...",
    img: "/path-to-image-2.jpg", // Update with actual image path
  },
  {
    category: "Portfolio",
    date: "Dec 01, 2022",
    title: "Digital Marketo To Their New Off...",
    img: "/path-to-image-3.jpg", // Update with actual image path
  },
];

const Blog = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-16 px-8  min-h-screen">
      <div className="text-center my-20">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          Recent Blogs
        </h2>
        <p className="text-black mt-8 text-xl  font-medium text-center">
          We put your ideas and thus your wishes in the form of a unique web
          <br /> project that inspires you and you customers.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative h-48">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-2 left-2 bg-purple-600 text-white text-sm px-3 py-1 rounded-lg">
                {blog.category}
              </span>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 flex items-center space-x-2">
                <span>{blog.date}</span>
                <span className="text-purple-600">•</span>
                <span>Comment</span>
              </p>
              <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
