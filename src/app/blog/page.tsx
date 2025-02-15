import Image from "next/image";
import React from "react";

const Blog = async ({ id }: { id: string }) => {
  const res = await fetch("http://localhost:5000/api/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();

  return (
    <section id={id} className=" py-16 px-8  min-h-screen">
      <div className="text-center my-20">
        <h2 className="text-4xl sm:text-5xl md:text-7xl my-4 md:my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight">
          Recent Blogs
        </h2>
        <p className="text-black mt-8 text-xl  font-medium text-center">
          We put your ideas and thus your wishes in the form of a unique web
          <br /> project that inspires you and you customers.
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {blogs.data.map((blog) => (
            <div
              key={blog?.id}
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
      </div>
    </section>
  );
};

export default Blog;
