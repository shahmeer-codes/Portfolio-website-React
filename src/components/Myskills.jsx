import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
    SiMysql,
    SiGit,
    SiGithub,
    SiPostman,
} from "react-icons/si";
import React from 'react';

const skills = [
  {
      name: "HTML5",
      level: "Expert",
      icon: <FaHtml5 className="text-6xl text-orange-500" />,
    },
    {
      name: "CSS3",
      level: "Expert",
      icon: <FaCss3Alt className="text-6xl text-blue-500" />,
    },
    {
      name: "JavaScript",
      level: "Advanced",
      icon: <SiJavascript className="text-6xl text-yellow-400" />,
    },
    {
      name: "React",
      level: "Intermediate",
      icon: <FaReact className="text-6xl text-cyan-400" />,
    },
    {
      name: "Redux Toolkit",
      level: "Intermediate",
      icon: <SiRedux className="text-6xl text-purple-500" />,
    },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      icon: <SiTailwindcss className="text-6xl text-sky-400" />,
    },
    {
      name: "Next.js",
      level: "Basic",
      icon: <SiNextdotjs className="text-6xl text-white" />,
    },
    {
      name: "TypeScript",
      level: "Basic",
      icon: <SiTypescript className="text-6xl text-blue-500" />,
    },
    {
      name: "Node.js",
      level: "Intermediate",
      icon: <FaNodeJs className="text-6xl text-green-500" />,
    },
    {
      name: "Express.js",
      level: "Intermediate",
      icon: <SiExpress className="text-6xl text-gray-300" />,
    },
    {
      name: "MongoDB",
      level: "Intermediate",
      icon: <SiMongodb className="text-6xl text-green-600" />,
    },
    {
      name: "Mysql",
      level: "Intermediate",
      icon: <SiMysql className="text-6xl text-green-600" />,
    },
     {
      name: "Git",
      level: "Intermediate",
      icon: <SiGit className="text-6xl text-green-600" />,
    },
     {
      name: "GitHub",
      level: "Intermediate",
      icon: <SiGithub className="text-6xl text-green-600" />,
    },
     {
      name: "Postman",
      level: "Intermediate",
      icon: <SiPostman className="text-6xl text-green-600" />,
    }
];

const Myskills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white py-24 px-6 md:px-16"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold">
          My <span className="text-green-400"> Technical Skills</span>
        </h2>

        <div className="w-28 h-1 bg-green-400 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-8">
          Passionate about crafting exceptional digital experiences through modern web technologies. My expertise spans frontend development, backend architecture, and full-stack application development, enabling me to transform ideas into scalable and impactful solutions.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/10"></div>

            {/* Icon */}
            <div className="relative flex justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>

            {/* Name */}
            <h3 className="relative text-2xl font-bold mb-2">
              {skill.name}
            </h3>

            {/* Level */}
            <p className="relative text-gray-400">
              {skill.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Myskills;