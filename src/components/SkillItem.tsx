import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface SkillProps {
  skill: {
    name: string;
    img: string | StaticImageData;
    level: string;
    percentage: number;
  };
}

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "from-indigo-500 to-violet-600 shadow-indigo-500/50";
    case "Intermediate":
      return "from-sky-500 to-blue-600 shadow-sky-500/50";
    case "Basic":
      return "from-amber-500 to-orange-500 shadow-amber-500/50";
    default:
      return "from-gray-500 to-gray-600 shadow-gray-500/50";
  }
};

const SkillItem: React.FC<SkillProps> = ({ skill }) => {
  return (
    <div
      id={skill.name}
      className="group relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-1 w-full sm:w-auto overflow-hidden"
    >
      {/* Skill Level Badge - Shows on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-r ${getLevelColor(skill.level)} opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10`}>
        <div className="text-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 px-2">
          <span className="text-white text-3xl sm:text-4xl font-bold drop-shadow-lg">
            {skill.percentage}%
          </span>
          <p className="text-white/90 text-sm mt-1 font-medium">{skill.level}</p>
          <p className="text-white/80 text-xs">{skill.name}</p>
        </div>
      </div>
      
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
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} text-white`}>
            {skill.level}
          </span>
          <span className="text-xs text-slate-400">{skill.percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;