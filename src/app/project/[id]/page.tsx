import Image from 'next/image';

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  // const images = [
  //   '/images/project-1.jpg',
  //   '/images/project-2.jpg',
  //   '/images/project-3.jpg',
  // ];


  return (
    <div className="bg-gray-100 pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 py-6 text-center text-white text-xl font-bold">
        New Age
      </header>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg mt-6">
        <Image
          src="/images/hero-image.jpg"
          width={800}
          height={500}
          alt="Hero Project"
          className="rounded-lg"
        />
        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold">New Age</h2>
          <p className="text-gray-600">Category: Web Design</p>
          <p className="text-gray-600">Client: Abstract Studio</p>
          <p className="text-gray-600">Date: August 5, 2024</p>
          <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-800">
            Live Preview
          </button>
        </div>
      </div>

      {/* Image Carousel */}
      {/* <div className="relative max-w-5xl mx-auto mt-10 overflow-hidden">
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
          <ChevronLeft size={24} />
        </button>
        <Image src={images[current]} width={800} height={400} alt="Project Image" className="rounded-lg mx-auto" />
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
          <ChevronRight size={24} />
        </button>
      </div> */}

      {/* Project Description */}
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-xl font-bold mb-4">Project Description</h3>
        <p className="text-gray-600 leading-relaxed">
          This is an amazing project that combines cutting-edge technology with modern design principles. The goal was to create a seamless experience for users...
        </p>

        <h4 className="mt-6 text-lg font-semibold">The Story</h4>
        <p className="text-gray-600">
          The inspiration behind this project was to redefine how users interact with digital content. We focused on usability, aesthetics, and accessibility...
        </p>

        <h4 className="mt-6 text-lg font-semibold">Our Approach</h4>
        <p className="text-gray-600">
          Our approach involved user research, wireframing, prototyping, and multiple iterations to ensure the best user experience. The final product is a seamless...
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
