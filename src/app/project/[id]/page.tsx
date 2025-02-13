import React from "react";

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  console.log(id);

  return <div>project Details</div>;
};

export default ProjectDetails;
