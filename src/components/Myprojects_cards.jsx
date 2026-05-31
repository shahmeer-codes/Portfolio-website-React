import { FaGithub, FaExternalLinkAlt, FaClock } from "react-icons/fa";

const Myprojects_cards = () => {
  const projects = [
    {
      id: 1,
      title: "Book Store Management System",
      description:
        "A full-stack bookstore platform where users can create stores, manage inventory, sell books, and interact with customers.",
      imageUrl: "/src/assets/pics/Projects_pics/book-vault.png",
      techstack: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
      github: "https://github.com/shahmeer-codes/book-store-website-nextjs",
      status: "github",
    },
    {
      id: 2,
      title: "Mini Game Hub",
      description:
        "A modern mini game hub built with React and Tailwind CSS featuring Tic Tac Toe and Rock Paper Scissors.",
      imageUrl: "/src/assets/pics/Projects_pics/mini-game-hub.png",
      techstack: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/shahmeer-codes/Mini-game-hub",
      status: "github",
    },
    {
      id: 3,
      title: "Employee Management System",
      description:
        "Task assignment, employee tracking, Redux Toolkit, analytics dashboard with Local Storage support.",
      imageUrl: "/src/assets/pics/Projects_pics/employ_management .png",
      techstack: ["React", "Redux Toolkit", "Tailwind CSS"],
      github:
        "https://github.com/shahmeer-codes/Employ-management-system-react",
      status: "github",
    },
    {
      id: 4,
      title: "NextAuth Authentication System",
      description:
        "A secure authentication system built with Next.js and NextAuth.js featuring user registration, login, OAuth integration, protected routes, session management, and JWT authentication.",
      imageUrl: "/src/assets/pics/Projects_pics/underdevlopment.png",
      techstack: [
        "Next.js",
        "TypeScript",
        "NextAuth.js",
        "JWT",
        "OAuth",
        "Tailwind CSS",
      ],
      projectLink: "https://github.com/shahmeer-codes/next-auth-system",
      status: "development",
    },
    {
      id: 5,
      title: "MERN Blog Platform",
      description:
        "A full-stack blogging platform where users can publish articles, comment, rate posts, and interact with content. Includes authentication, an admin dashboard, and complete blog management.",
      imageUrl: "/src/assets/pics/Projects_pics/Blogverse.png",
      techstack: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JWT Authentication",
      ],
      github: "https://github.com/shahmeer-codes/blog-Website-mern-project",
      status: "github",
    },
    {
      id: 6,
      title: "TypeScript To-Do List",
      description:
        "Task management app with filtering, editing, statistics and TypeScript support.",
      imageUrl: "/src/assets/pics/Projects_pics/typescript-todo.png",
      techstack: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/shahmeer-codes/Typescript-To-do-list",
      status: "github",
    },
    {
      id: 7,
      title: "Gallery Application",
      description:
        "Image gallery with search, debounce, favorites, and API integration.",
      imageUrl: "/public/pics/Projects_pics/gallary-pro.png",
      techstack: ["React", "API", "Tailwind CSS"],
      github: "https://github.com/shahmeer-codes/Gallery-application-react",
      status: "github",
    },
    {
      id: 8,
      title: "E-Commerce Store",
      description:
        "Shopping cart system with Redux Toolkit and local storage persistence.",
      imageUrl: "/src/assets/pics/Projects_pics/Ecomerece store.png",
      techstack: ["React", "Redux Toolkit", "Tailwind CSS"],
      github: "https://github.com/shahmeer-codes/Ecommerce-store-React",
      status: "github",
    },
  ];

  // TOP PROJECTS (choose manually)
  const topProjects = [
    projects.find((p) => p.title.includes("Book Store")),
    projects.find((p) => p.title.includes("MERN Blog Platform")),
    projects.find((p) => p.title.includes("Mini Game Hub")),
    projects.find((p) => p.title.includes("Employee")),
    projects.find((p) => p.title.includes("NextAuth Authentication System")),
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

  const Card = ({ project }) => (
    <div className="bg-white text-black rounded-3xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-64 object-cover rounded-2xl  mb-6"
      />

      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

      <p className="text-gray-600 mb-5 line-clamp-4">{project.description}</p>

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
  );

  return (
    <section id="projects">
      <div className="text-center text-white max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Featured Projects</h1>

        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Showcasing selected work that reflects my skills, problem-solving
          ability, and passion for building modern web applications.
        </p>

        <p className="mt-2  text-gray-500 text-3xl font-bold uppercase tracking-widest">
          Highlighted Work
        </p>
      </div>
      <div className="my-12 p-10 space-y-16">
        {/* TOP PROJECTS */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {topProjects.map((p) => (
              <Card key={p.id} project={p} />
            ))}
          </div>
        </div>

        {/* OTHER PROJECTS */}
        <div>
          <h2 className="text-3xl font-bold text-white flex justify-center items-center mb-6">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherProjects.map((p) => (
              <Card key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myprojects_cards;
