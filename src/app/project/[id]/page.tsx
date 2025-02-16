"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation"; 
import { TProject } from "@/app/types/projectType";

const ProjectDetails = () => {
  const params = useParams(); 
  const [project, setProject] = useState<TProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return; // Ensure `id` exists before fetching

    const fetchProject = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/project/${params.id}`);
        const data = await res.json();
        setProject(data?.data || null);
      } catch (error) {
        console.error("Error fetching project details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params?.id]);

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (!project) return <p className="text-center text-xl">Project not found</p>;

  return (
    <div className="bg-gray-100 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 py-6 text-center text-white text-xl font-bold">
        {project.title}
      </header>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg mt-6">
        <Image
          src={project.image || "/fallback-image.jpg"}
          width={1000}
          height={500}
          alt={project.title || "Project Image"}
          className="rounded-lg"
        />
        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="text-gray-600">Category: {project.category}</p>
          <div className="flex justify-center gap-4 mt-4">
            {project.frontEndGitLink && (
              <a href={project.frontEndGitLink} target="_blank" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800">
                Frontend Code
              </a>
            )}
            {project.backEndGitLink && (
              <a href={project.backEndGitLink} target="_blank" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-800">
                Backend Code
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800">
                Live Preview
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-600 leading-relaxed">{project.content}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
