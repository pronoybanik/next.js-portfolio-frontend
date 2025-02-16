import Image from "next/image";
import React from "react";

const BlogItem = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <Image
          src="/image.png"
          alt="Office Team"
          layout="fill"
          objectFit="cover"
        />
        <span className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
          PORTFOLIO
        </span>
      </div>

      {/* Meta Information */}
      <div className="flex items-center text-gray-600 text-sm mt-4 space-x-4">
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-purple-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A9 9 0 1118.879 6.196M12 9v4l3 3"
            />
          </svg>
          By Admin
        </span>
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-purple-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7h8M8 11h8m-8 4h8m2 4H6a2 2 0 01-2-2V6c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2z"
            />
          </svg>
          Dec 01, 2022
        </span>
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-purple-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m3-4h4m-4 0a2 2 0 114 0m-4 0a2 2 0 10-4 0m4 0h4"
            />
          </svg>
          Comment (4)
        </span>
      </div>

      {/* Blog Title & Content */}
      <h1 className="text-2xl font-bold text-purple-700 mt-4">
        Digital Marketo To Their New Office.
      </h1>
      <p className="text-gray-700 mt-2">
        Welcome to our blog, where we celebrate our achievement as an AWS SaaS
        Competency Partner and share insights on how we accomplished this
        significant milestone.
      </p>
      <p className="text-gray-700 mt-2">
        As businesses unlock growth opportunities in the digital age, harnessing
        the power of cloud computing has become essential. Amazon Web Services
        (AWS) offers the AWS SaaS Competency Partner program, recognizing
        companies with exceptional expertise in delivering Software-as-a-Service
        solutions on the AWS platform.
      </p>
      <p className="text-gray-700 mt-2">
        In this blog, we will delve into the strategies, best practices, and key
        factors that accelerated our business growth and earned us the
        prestigious AWS SaaS Competency Partner status.
      </p>
    </div>
  );
};

export default BlogItem;
