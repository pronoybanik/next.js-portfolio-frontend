"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { TProject } from "@/app/types/projectType";
import PrimaryButton from "@/shared/PrimaryButton";
import Link from "next/link";

const ProjectDetails = () => {
  const params = useParams();
  const [project, setProject] = useState<TProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return; // Ensure `id` exists before fetching

    const fetchProject = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/project/${params.id}`
        );
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-700">Project not found</h2>
        <Link href="/" className="mt-4 text-purple-600 hover:text-purple-800">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/1320916/pexels-photo-1320916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Deloitte</h1>
          <div className="flex items-center justify-center">
            <Link 
              href="/" 
              className="text-gray-200 hover:text-white flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-200">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Project Title */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-4 px-6">
            <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
              {project.title}
            </h2>
          </div>
          
          {/* Project Image and Quick Info */}
          <div className="md:flex">
            <div className="md:w-2/3 p-6">
              <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow">
                <Image
                  src={project.image || "/fallback-image.jpg"}
                  layout="fill"
                  objectFit="cover"
                  alt={project.title || "Project Image"}
                  className="transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>
            <div className="md:w-1/3 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  About This Project
                </h3>
                <p className="text-gray-600 mb-4">
                  Category: <span className="font-medium">{project.category}</span>
                </p>
                <div className="border-t border-gray-200 my-4 pt-4">
                  <h4 className="text-gray-700 font-medium mb-2">Project Links</h4>
                  <div className="space-y-3">
                    {project.frontEndGitLink && (
                      <a 
                        href={project.frontEndGitLink} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center text-gray-700 hover:text-purple-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Frontend Code
                      </a>
                    )}
                    {project.backEndGitLink && (
                      <a 
                        href={project.backEndGitLink} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center text-gray-700 hover:text-purple-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100-2h-1a1 1 0 100 2h1z" clipRule="evenodd" />
                        </svg>
                        Backend Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {project.liveLink && (
                <div className="mt-4">
                  <PrimaryButton>
                    <a 
                      href={project.liveLink} 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="w-full flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Live Preview
                    </a>
                  </PrimaryButton>
                </div>
              )}
            </div>
          </div>
          
          {/* Project Description */}
          <div className="p-6 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Project Description</h3>
            <div className="prose max-w-none text-gray-600">
              <p className="leading-relaxed">{project.content}</p>
            </div>
          </div>
        </div>
        
        {/* Back to Projects */}
        <div className="mt-6 text-center">
          <Link 
            href="/all-product" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;