import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface SkillProps {
  skill: {
    name: string;
    img: string | StaticImageData;
    level: string;
  };
}

const SkillItem: React.FC<SkillProps> = ({ skill }) => {
  return (
    <div
      id={skill.name}
      className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-1 w-full sm:w-auto"
    >
      <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-700 shadow-md group-hover:shadow-indigo-500/50 transition-all duration-300">
        <Image
          src={skill.img}
          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          alt={skill.name}
          width={32}
          height={32}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-white font-semibold text-sm sm:text-base md:text-lg group-hover:text-indigo-300 transition-colors duration-300">
          {skill.name}
        </h2>
        <span className="text-xs text-slate-400 group-hover:text-slate-300">
          {skill.level}
        </span>
      </div>
    </div>
  );
};

export default SkillItem;