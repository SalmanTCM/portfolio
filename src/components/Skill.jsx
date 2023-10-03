import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Skill = () => {
  return (
    <div className=" flex flex-warp bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className=""
        >
          <div className="bg-white p-2 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
            {skill.icon}
          </div>
          <span className="mt-2">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

const skills = [
  { name: "React", icon: <FaLinkedin className="text-4xl text-blue-500" /> },
  { name: "Next.js", icon: <FaLinkedin className="text-4xl text-gray-500" /> },
  { name: "Bootstrap", icon: <FaLinkedin className="text-4xl text-purple-500" /> },
  { name: "Tailwind CSS", icon: <FaLinkedin className="text-4xl text-cyan-500" /> },
  { name: "Python", icon: <FaLinkedin className="text-4xl text-yellow-500" /> },
  { name: "Django", icon: <FaLinkedin className="text-4xl text-green-500" /> },
  { name: "PHP", icon: <FaLinkedin className="text-4xl text-indigo-500" /> },
  { name: "Laravel", icon: <FaLinkedin className="text-4xl text-red-500" /> },
  { name: "Docker", icon: <FaLinkedin className="text-4xl text-blue-600" /> },
  { name: "Selenium", icon: <FaLinkedin className="text-4xl text-green-600" /> },
  { name: "UI Path", icon: <FaLinkedin className="text-4xl text-yellow-600" /> },
  { name: "MySQL", icon: <FaLinkedin className="text-4xl text-blue-500" /> },
  { name: "GraphQL", icon: <FaLinkedin className="text-4xl text-pink-500" /> },
];

export default Skill;
