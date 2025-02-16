"use client";
import { TProject } from "@/app/types/projectType";
import ProjectTable from "@/components/ProjectTable";
import React, { useEffect, useState } from "react";

const AllProjects: React.FC = () => {
  const [projects, setProjects] = useState<TProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/project");
        if (!res.ok) throw new Error("Failed to fetch projects");

        const data = await res.json();
        setProjects(data?.data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleEdit = (project: TProject) => {
    console.log("Editing project:", project);
  };

  const handleDelete = (projectId: string) => {
    console.log("Deleting project with ID:", projectId);
  };

  return (
    <section>
      <div className="text-center my-10">
        <h2 className="text-4xl my-4 md:my-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-tight uppercase">
          Projects
        </h2>
      </div>

      <div className="max-w-screen-lg mx-auto">
        <ProjectTable
          data={projects}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </section>
  );
};

export default AllProjects;
