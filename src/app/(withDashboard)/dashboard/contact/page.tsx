"use client";
import React, { useEffect, useState } from "react";

interface TContact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  category: string;
  message: string;
  createdAt: string;
}

const Contact: React.FC = () => {
  const [contact, setContact] = useState<TContact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log(contact);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/contact");
        const data = await res.json();
        setContact(data);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">
        User Inquiries
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contact?.data?.map((item) => (
          <div key={item._id} className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">
              {item.firstName} {item.lastName}
            </h3>
            <p className="text-gray-600">
              <strong>Email:</strong> {item.email}
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> {item.phone}
            </p>
            <p className="text-gray-600">
              <strong>Category:</strong> {item.category}
            </p>
            <p className="text-gray-600">
              <strong>Message:</strong> {item.message}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Created at: {new Date(item.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
