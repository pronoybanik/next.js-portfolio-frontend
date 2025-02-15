import React from "react";

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return <div>project Details:-{id}</div>;
};

export default ProjectDetails;
