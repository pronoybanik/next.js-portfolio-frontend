import React from "react";

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
}

interface BlogTableProps {
  data: Blog[];
  onDelete: (id: string) => void;
}

const BlogTable: React.FC<BlogTableProps> = ({ data, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-purple-600 text-white text-center">
          <tr>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Content</th>
            <th className="px-6 py-3">Author</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((blog) => (
              <tr key={blog.id} className="border-b hover:bg-gray-100 text-center">
                <td className="px-6 py-4">{blog.title}</td>
                <td className="px-6 py-4">{blog.content}</td>
                <td className="px-6 py-4">{blog.author}</td>
                <td className="px-6 py-4">
                  <button onClick={() => onDelete(blog.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4">No blogs found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;
