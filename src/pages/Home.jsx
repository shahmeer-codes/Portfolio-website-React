import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import profilePic from "../assets/pics/profile_pic/2c.webp";

const Home = () => {
  return (
    <section id="home">
      <div className="min-h-screen bg-black text-white flex flex-col-reverse md:flex-row justify-around items-center px-4 md:px-10 py-20 md:py-0 gap-10 md:gap-0">
        <div className="max-w-4xl text-center md:text-left flex flex-col items-center md:items-start">
          <p className="text-gray-400 text-xl mb-3">Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Shahmeer Arshad
          </h1>

          <div className="text-2xl md:text-4xl font-semibold mb-6">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                3000,
                "Full Stack JavaScript Developer",
                3000,
                "Web Developer",
                3000,
                "Next.js Basics",
                3000,
                "React & Redux ",
                3000,
                "Node.js & Express.js",
                3000,
                "Frontend Developer",
                3000,
                "REST API & Backend Developer",
                3000,
                "TypeScript & JavaScript Developer",
                3000,
                "Git & GitHub ",
                3000,
                "Mongodb & Mysql Developer",
                3000,
              ]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
              className="text-green-400"
            />
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            Passionate Full Stack Developer dedicated to building modern,
            scalable, and user-friendly web applications. I specialize in React,
            Node.js, Express, MongoDB, Redux Toolkit, and TypeScript. My focus
            is on creating clean, efficient, and high-performance digital
            solutions that provide exceptional user experiences and solve
            real-world problems.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a
              href="#contact"
              className="px-5 py-3 border flex gap-2 rounded-full items-center justify-center border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition"
            >
              Get in Touch
            </a>

            <a
              href="/resume/Shahmeer Arshad.pdf"
              download
              className="px-5 py-3 rounded-full bg-green-600 text-white hover:bg-green-500 transition"
            >
              Download Resume
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-6 mt-8 md:mt-5 md:ml-2">
            <a
              href="https://github.com/shahmeer-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/shahmeer-arshad-9b1a4b1b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="https://wa.me/923281929639"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 hover:scale-110 transition-all duration-300"
            >
              <BsWhatsapp size={30} />
            </a>
          </div>
        </div>
        <div>
          <img
            src={profilePic}
            alt="Your Name"
            width={400}
            height={400}
            className="w-64 h-64 md:w-100 md:h-100 object-cover rounded-full border-4 border-green-400 mb-8 md:mb-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;