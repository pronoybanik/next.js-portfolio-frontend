"use client";

import { useEffect, useState } from "react";
import HomeProject from "./HomeProject";

type Project = Parameters<typeof HomeProject>[0]["projects"][number];

let projectsRequest: Promise<Project[]> | null = null;

const Projects = ({ id }: { id: string }) => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let active = true;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      setHasError(true);
      return () => {
        active = false;
      };
    }

    projectsRequest ??= fetch(`${apiUrl}/api/project`, { cache: "no-store" })
      .then(async (response) => {
        const payload = await response.json();
        if (!response.ok || !Array.isArray(payload?.data)) {
          throw new Error("Invalid response format");
        }
        return payload.data as Project[];
      });

    projectsRequest
      .then((data) => {
        if (active) setProjects(data);
      })
      .catch((error) => {
        console.error("Failed to load projects:", error);
        if (active) setHasError(true);
      });

    return () => {
      active = false;
    };
  }, []);

  if (projects === null && !hasError) {
    return (
      <div className="py-24 px-4 text-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-[50vh]">
        <p className="text-gray-500">Loading projects...</p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="py-24 px-4 text-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-[50vh] flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-red-400">Failed to load projects</h2>
          <p className="text-gray-500">An unexpected error occurred while fetching projects. Try again later.</p>
        </div>
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="py-24 px-4 text-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-[50vh] flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">No projects found</h2>
          <p className="text-gray-500">There are currently no projects to display. Please check back later.</p>
        </div>
      </div>
    );
  }

  return <HomeProject projects={projects} loadId={id} loading={false} />;
};

export default Projects;
