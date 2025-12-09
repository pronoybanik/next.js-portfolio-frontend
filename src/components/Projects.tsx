

import { getAllProject } from "@/services/project";
import HomeProject from "./HomeProject";



const Projects = async ({ id }: { id: string }) => {

  const response = await getAllProject();

  try {
    if (response instanceof Error) throw response;
    const data = response?.data;

    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid response format");
    }

    if (data.length === 0) {
      return (
        <div className="py-24 px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">No projects found</h2>
          <p className="text-gray-500">There are currently no projects to display. Please check back later.</p>
        </div>
      );
    }

    return (
      <HomeProject projects={data} loadId={id} loading={false} />
    );
  } catch (error) {
    console.error("Failed to load projects:", error);
    return (
      <div className="py-24 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Failed to load projects</h2>
        <p className="text-gray-500">An unexpected error occurred while fetching projects. Try again later.</p>
      </div>
    );
  }
};

export default Projects;
