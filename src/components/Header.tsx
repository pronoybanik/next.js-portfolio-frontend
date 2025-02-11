import React from "react";
import Image from "next/image";
import image from "../images/1717947005422_magicstudio_a31w4iorxkt.png";
import facebook from "../images/icons/icons8-facebook-250.png";
import github from "../images/icons/icons8-github-500.png";
import linkedin from "../images/icons/icons8-linkedin-250.png";

const Header = ({id}: {id: string}) => {
  return (
    <section id={id} className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12">
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          I am Gerold
        </h2>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          Next-Level Web Developer.
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          I break down complex user experience problems to create
          integrity-focused solutions that connect billions of people.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 justify-center md:justify-start">
          <button className="px-6 py-2 text-lg font-medium rounded-lg border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition">
            Download CV
          </button>
          <div className="flex gap-4 ">
            <a
              href="#"
              className="group text-purple-600 hover:bg-purple-600 hover:text-white border-2 border-purple-600 rounded-full p-2 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
            >
              <Image
                src={facebook}
                width={20}
                height={20}
                alt="Facebook"
                className="group-hover:invert group-hover:brightness-0 group-hover:contrast-200 text-purple-600"
              />
            </a>

            <a
              href="#"
              className="group text-purple-600 hover:bg-purple-600 hover:text-white border-2 border-purple-600 rounded-full p-2 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
            >
              <Image
                src={github}
                width={20}
                height={20}
                alt="GitHub"
                className="group-hover:invert group-hover:brightness-0 group-hover:contrast-200 text-purple-600"
              />
            </a>

            <a
              href="#"
              className="group text-purple-600 hover:bg-purple-600 hover:text-white border-2 border-purple-600 rounded-full p-2 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
            >
              <Image
                src={linkedin}
                width={20}
                height={20}
                alt="LinkedIn"
                className="group-hover:invert group-hover:brightness-0 group-hover:contrast-200 text-purple-600"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition">
          <Image src={image} alt="Profile" layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
  );
};

export default Header;
