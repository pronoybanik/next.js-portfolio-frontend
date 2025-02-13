"use client";
import { useForm } from "react-hook-form";

// Define form data type
interface BookFormData {
  title: string;
  category: string;
  description: string;
  frontEndGigLink: string;
  backEndGitLink: string;
  liveLink: string;
  inStock: boolean;
  image: FileList;
}

const CreateProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormData>();

  const onSubmit = async (data: BookFormData) => {
    const imageValue = data.image[0];
    if (!imageValue) {
      alert("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imageValue);
    formData.append("upload_preset", "Book-sell-shop");
    formData.append("cloud_name", "dvcbclqid");

    try {
      // Upload image to Cloudinary
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dvcbclqid/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        alert("Image upload failed");
        return;
      }

      const imgData = await response.json();
      const bookImageUrl = imgData.secure_url;

      // Prepare your project data
      const projectData = {
        title: data.title,
        content: data.description,
        image: bookImageUrl,
        frontEndGitLink: data.frontEndGigLink,
        backEndGitLink: data.backEndGitLink,
        liveLink: data.liveLink,
        category: data.category,
      };

      console.log("Formatted Project Data:", projectData);

      // Send `projectData` to your API or backend server
      // await fetch('/api/projects', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(projectData),
      // });
    } catch (err) {
      console.error("Upload Error:", err);
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl lg:my-4 my-2">
      <div className="text-center text-lg font-semibold py-2">
        <p className="text-2xl uppercase text-black inline-block border-b-2 border-[#e95b5b]">
          Create Projects
        </p>
      </div>
      <div className="mx-auto max-w-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Add a New Project</p>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 uppercase">
              Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="block w-full py-3 text-gray-700 uppercase bg-white border rounded-lg pl-4 focus:border-[#e95b5b] focus:ring-[#b84d69] focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 uppercase">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="block w-full py-3 text-gray-700 uppercase bg-white border rounded-lg pl-4 focus:border-[#e95b5b] focus:ring-[#b84d69] focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 uppercase">
              Category
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className="block w-full py-3 text-gray-700 uppercase bg-white border rounded-lg pl-4 focus:border-[#e95b5b] focus:ring-[#b84d69] focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option value="">Select a category</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Business">Business</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 uppercase">
              Image
            </label>
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
              className="block w-full py-3 text-gray-700 uppercase bg-white border rounded-lg pl-4 focus:border-[#e95b5b] focus:ring-[#b84d69] focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.image && (
              <p className="text-red-500 text-xs mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* frontEndGigLink */}
          <div>
            <label className="block text-sm font-medium text-gray-700 uppercase">
              FrontEnd GigLink
            </label>
            <input
              type="text"
              {...register("frontEndGigLink", {
                required: "Title is required",
              })}
              className="block w-full py-3 text-gray-700 uppercase bg-white border rounded-lg pl-4 focus:border-[#e95b5b] focus:ring-[#b84d69] focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.frontEndGigLink && (
              <p className="text-red-500 text-xs mt-1">
                {errors.frontEndGigLink.message}
              </p>
            )}
          </div>
          {/* backEndGitLink */}
          <div>
            <label className="block text-sm font-medium text-gray-700 uppercase">
              backEnd GitLink
            </label>
            <input
              type="text"
              {...register("backEndGitLink", {
                required: "Title is required",
              })}
              className="block w-full py-3 text-gray-700 uppercase bg-white border rounded-lg pl-4 focus:border-[#e95b5b] focus:ring-[#b84d69] focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.backEndGitLink && (
              <p className="text-red-500 text-xs mt-1">
                {errors.backEndGitLink.message}
              </p>
            )}
          </div>
          {/* backEndGitLink */}
          <div>
            <label className="block text-sm font-medium text-gray-700 uppercase">
              live Link
            </label>
            <input
              type="text"
              {...register("liveLink", {
                required: "Title is required",
              })}
              className="block w-full py-3 text-gray-700 uppercase bg-white border rounded-lg pl-4 focus:border-[#e95b5b] focus:ring-[#b84d69] focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.liveLink && (
              <p className="text-red-500 text-xs mt-1">
                {errors.liveLink.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-[#e95b5b] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#b84d69] focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
