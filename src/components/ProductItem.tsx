import { TProject } from "@/app/types/projectType";
import Link from "next/link";
import React from "react";

const ProductItem = ({ projectData }: { projectData: TProject }) => {
  const image = projectData.image;

  return (
    <Link
      href={`/project/${projectData._id}`}
      className="block mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            {projectData.title}
          </h2>
          <p className="mt-4 text-gray-700">{projectData.content}</p>
        </div>
        <div>
          <img
            src={image}
            alt={projectData?.title || "Project Image"}
            width={500}
            height={300}
            className="rounded"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
