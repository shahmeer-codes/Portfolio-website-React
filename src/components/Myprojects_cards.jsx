import { FaGithub, FaExternalLinkAlt, FaClock } from "react-icons/fa";

import aiCodeReviewer from "../assets/pics/Projects_pics/ai-code-reviewer.jpg";
import bookVault from "../assets/pics/Projects_pics/book-vault.webp";
import miniGameHub from "../assets/pics/Projects_pics/mini-game-hub.webp";
import employeeManagement from "../assets/pics/Projects_pics/employ_management.webp";
import underDev from "../assets/pics/Projects_pics/underdevlopment.webp";
import blogverse from "../assets/pics/Projects_pics/Blogverse.webp";
import todoTs from "../assets/pics/Projects_pics/typescript-todo.webp";
import gallery from "../assets/pics/Projects_pics/gallary-pro.webp";
import ecommerce from "../assets/pics/Projects_pics/ecommerce-store.webp";
import React from 'react';

const projects = [
  {
    id: 9,
    title: "AI Code Reviewer",
    description:
      "An AI-powered code review platform that analyzes source code, detects potential issues, suggests improvements, and helps developers write cleaner, more maintainable code using Google's Gemini AI.",
    imageUrl: aiCodeReviewer,
    techstack: [
      "React",
      "Node.js",
      "Express.js",
      "Gemini API",
      "Tailwind CSS",
    ],
    github: "https://github.com/shahmeer-codes/AI-Code-reviwer",
    status: "github",
  },

  {
    id: 1,
    title: "Book Store Management System",
    description:
      "A full-stack multi-vendor bookstore platform where users can create stores, manage inventory, sell books, maintain wishlists, and interact with customers through a modern dashboard.",
    imageUrl: bookVault,
    techstack: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
    github: "https://github.com/shahmeer-codes/book-store-website-nextjs",
    status: "github",
  },

  {
    id: 5,
    title: "MERN Blog Platform",
    description:
      "A full-stack blogging platform with authentication, article publishing, comment management, user profiles, and an administrative dashboard powered by the MERN stack.",
    imageUrl: blogverse,
    techstack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT Authentication",
    ],
    github:
      "https://github.com/shahmeer-codes/blog-Website-mern-project",
    status: "github",
  },

  {
    id: 3,
    title: "Employee Management System",
    description:
      "A workforce management solution featuring task assignment, employee tracking, performance monitoring, analytics dashboards, and Redux Toolkit state management.",
    imageUrl: employeeManagement,
    techstack: ["React", "Redux Toolkit", "Tailwind CSS"],
    github:
      "https://github.com/shahmeer-codes/Employ-management-system-react",
    status: "github",
  },

  {
    id: 4,
    title: "NextAuth Authentication System",
    description:
      "A secure authentication system featuring OAuth providers, JWT sessions, route protection, and role-based access control built with Next.js and NextAuth.",
    imageUrl: underDev,
    techstack: [
      "Next.js",
      "TypeScript",
      "NextAuth.js",
      "JWT",
      "OAuth",
      "Tailwind CSS",
    ],
    github: "https://github.com/shahmeer-codes/next-auth-system",
    status: "development",
  },

  {
    id: 8,
    title: "E-Commerce Store",
    description:
      "A modern e-commerce application with product browsing, shopping cart management, Redux Toolkit state handling, and persistent local storage support.",
    imageUrl: ecommerce,
    techstack: ["React", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/shahmeer-codes/Ecommerce-store-React",
    status: "github",
  },

  {
    id: 7,
    title: "Gallery Application",
    description:
      "A responsive image gallery featuring API integration, advanced search, debounce optimization, favorites management, and seamless user interaction.",
    imageUrl: gallery,
    techstack: ["React", "API", "Tailwind CSS"],
    github:
      "https://github.com/shahmeer-codes/Gallery-application-react",
    status: "github",
  },

  {
    id: 6,
    title: "TypeScript To-Do List",
    description:
      "A TypeScript-powered task management application featuring task creation, editing, filtering, completion tracking, statistics, and responsive user experience.",
    imageUrl: todoTs,
    techstack: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/shahmeer-codes/Typescript-To-do-list",
    status: "github",
  },

  {
    id: 2,
    title: "Mini Game Hub",
    description:
      "An interactive gaming platform featuring Tic Tac Toe and Rock Paper Scissors with responsive design, smooth gameplay, and modern React architecture.",
    imageUrl: miniGameHub,
    techstack: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/shahmeer-codes/Mini-game-hub",
    status: "github",
  },
];

  const topProjects = [
  projects.find((p) => p.title.includes("AI Code Reviewer")),
  projects.find((p) => p.title.includes("Book Store")),
  projects.find((p) => p.title.includes("MERN Blog Platform")),
  projects.find((p) => p.title.includes("Employee")),
  projects.find((p) => p.title.includes("NextAuth")),
];

  const otherProjects = projects.filter((p) => !topProjects.includes(p));

  const renderButtons = (project) => {
    if (project.status === "live") {
      return (
        <div className="flex gap-3 mt-auto">
          <a
            href={project.live}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl"
          >
            <FaExternalLinkAlt />
            Live
          </a>

          <a
            href={project.github}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      );
    }

    if (project.status === "github") {
      return (
        <a
          href={project.github}
          target="_blank"
          className="mt-auto flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl"
        >
          <FaGithub />
          View Code
        </a>
      );
    }

    return (
      <div className="mt-auto flex items-center justify-center gap-2 bg-gray-500 text-white py-3 rounded-xl">
        <FaClock />
        Under Development
      </div>
    );
  };

  const Card = React.memo(({ project }) => (
    <div className="bg-white text-black rounded-3xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
      <img
        src={project.imageUrl}
        alt={project.title}
        loading="lazy"
        width={400}
        height={250}
        className="w-full h-64 object-cover rounded-2xl mb-6 bg-gray-200"
      />

      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

      <p className="text-gray-600 mb-5 line-clamp-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techstack.map((tech, i) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {renderButtons(project)}
    </div>
  ));
  
  const Myprojects_cards = () => {
  return (
    <section id="projects">
      <div className="text-center text-white max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold">Featured Projects</h1>

        <p className="mt-4 text-gray-600 text-lg">
          Showcasing selected work that reflects my skills and passion.
        </p>

        <p className="mt-2 text-gray-500 text-3xl font-bold uppercase">
          Highlighted Work
        </p>
      </div>

      <div className="my-12 px-4 md:px-10 py-6 md:py-12 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {topProjects.map((p) => (
            <Card key={p.id} project={p} />
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white text-center">
          Other Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {otherProjects.map((p) => (
            <Card key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Myprojects_cards;
