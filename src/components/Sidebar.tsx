import Link from "next/link";
import { FaHome, FaProjectDiagram, FaBloggerB } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { TbLogs } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-4 rounded-xl">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaHome className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/create-project"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaProjectDiagram className="h-5 w-5" />
            <span>Create project</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/all-project"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <GrProjects className="h-5 w-5" />
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/create-blogs"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaBloggerB className="h-5 w-5" />
            <span>Create Blogs</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/contact"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <IoIosContact className="h-5 w-5" />
            <span>Contact</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/all-blogs"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <TbLogs className="h-5 w-5" />
            <span>Blogs</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
