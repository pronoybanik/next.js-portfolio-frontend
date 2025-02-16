"use client";
import React, { useEffect, useState } from "react";
import BlogTable from "@/components/BlogTable";

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
}

const AllBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/blogs");
      if (!res.ok) throw new Error("Failed to fetch blogs");

      const data = await res.json();
      setBlogs(data.data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    }
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl text-center font-bold text-purple-600 mb-4">
        Manage Blogs
      </h2>

      <div className="mt-6 max-w-screen-lg mx-auto">
        <BlogTable data={blogs} onDelete={handleDelete} />
      </div>
    </section>
  );
};

export default AllBlogs;
