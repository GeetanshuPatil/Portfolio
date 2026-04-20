import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Skills 
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:scale-105 hover:bg-white/20 transition duration-300 cursor-pointer"
          >
            <div className="text-4xl text-blue-400">
              {skill.icon}
            </div>

            <p className="text-sm font-semibold tracking-wide">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;