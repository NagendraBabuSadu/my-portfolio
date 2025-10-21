import React from "react";

interface skillItem {
  name: string;
  level: string;
}

const skills: skillItem[] = [
  { name: ".NET Core", level: "w-[90%]" },
  { name: "React JS", level: "w-[85%]" },
  { name: "EF Core", level: "w-[80%]" },
  { name: "SQL", level: "w-[80%]" }
];
const SkillBar: React.FC = () => {
  return (
    <div className="w-full max-lg mx-auto p-5">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center mb-4">
          <div className="text-white text-lg font-semibold w-32">
            {skill.name}
          </div>

          <div className="group bg-gray-700 h-4 rounded-full w-full overflow-hidden relative" style={{cursor: "pointer"}}>
            <div
              className={`h-full 
                group-hover:w-0 bg-gradient-to-r from-purple-500 to-orange-400 rounded-full transition-all duration-700 ease-in-out  ${skill.level}`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBar;
