"use client";
import React, { useState } from "react";

interface FormProps {
  onBlogAdded: () => void; // Refresh data after adding
}

const BlogForm: React.FC<FormProps> = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    image: null as File | null,
  });

  const [uploading, setUploading] = useState(false);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, image: file }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please upload an image.");
      return;
    }

    setUploading(true);

    try {
      // Upload image to Cloudinary
      const imageFormData = new FormData();
      imageFormData.append("file", formData.image);
      imageFormData.append("upload_preset", "Book-sell-shop");
      imageFormData.append("cloud_name", "dvcbclqid");

      const imageResponse = await fetch(
        "https://api.cloudinary.com/v1_1/dvcbclqid/image/upload",
        {
          method: "POST",
          body: imageFormData,
        }
      );

      if (!imageResponse.ok) {
        throw new Error("Image upload failed");
      }

      const imgData = await imageResponse.json();
      const imageUrl = imgData.secure_url;

      const data = {
        title: formData.title,
        content: formData.content,
        author: formData.author,
        category: formData.category,
        image: imageUrl,
      };

      // Send form data to backend
      const res = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log(res);

      if (!res.ok) {
        throw new Error("Failed to create blog");
      }

      setFormData({
        title: "",
        content: "",
        author: "",
        category: "",
        image: null,
      });
      alert("Blog added successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Create New Blog
        </h2>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="text"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Blog Content"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        {/* Category Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 uppercase mb-1">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Business">Business</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 uppercase mb-1">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          className="w-full mb-3 p-2 border rounded mt-2"
          required
        />

        <button
          type="submit"
          className="w-full px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
