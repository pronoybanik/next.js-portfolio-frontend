/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

export const getAllProject = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/project`, {
      cache: "no-cache",
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};