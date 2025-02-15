import React from "react";

const BlogItem = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>Blog Items - {id}</div>;
};

export default BlogItem;
