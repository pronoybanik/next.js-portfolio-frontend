import ProjectSection from "@/components/ProjectSection";
import { getAllProject } from "@/services/project";


const ProjectPage = async () => {
  const response = await getAllProject();

  try {
    if (response instanceof Error) throw response;
    const data = response?.data || [];

    if (!Array.isArray(data) || data.length === 0) {
      return (
        <div className="py-24 px-4 text-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-[80vh] flex items-center justify-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">No projects found</h2>
            <p className="text-gray-500">There are currently no projects to display. Please check back later.</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <ProjectSection project={data} />
      </div>
    );
  } catch (error) {
    console.error("Failed to load projects:", error);
    return (
      <div className="py-24 px-4 text-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-[80vh] flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-red-400">Failed to load projects</h2>
          <p className="text-gray-500">An unexpected error occurred while fetching projects. Try again later.</p>
        </div>
      </div>
    );
  }
};

export default ProjectPage;
