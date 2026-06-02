import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDownload,
  FaPaperPlane,
  FaArrowRight,
  FaArrowDown,
  FaCode,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import profilePic from "../assets/pics/profile_pic/2c.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { DiMongodb } from "react-icons/di";

const Home = () => {
  const arrowref = useRef();

  useGSAP(() => {
    if (arrowref.current) {
      gsap.fromTo(
        arrowref.current,
        { y: 0 },
        {
          y: 20,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 1,
        },
      );
    }

    const circles = document.querySelectorAll(".floating-circle");
    circles.forEach((circle, index) => {
      gsap.to(circle, {
        y: -15,
        duration: 2 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });

    const techIcons = document.querySelectorAll(".tech-icon");
    techIcons.forEach((icon, index) => {
      gsap.to(icon, {
        y: -8,
        duration: 2.5 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.4,
      });
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="floating-circle absolute top-[10%] md:top-[15%] left-[5%] md:left-[10%] w-40 md:w-72 h-40 md:h-72 bg-green-500/5 rounded-full blur-2xl" />
        <div className="floating-circle absolute top-[25%] md:top-[30%] right-[5%] md:right-[15%] w-56 md:w-96 h-56 md:h-96 bg-green-400/3 rounded-full blur-3xl" />
        <div className="floating-circle absolute bottom-[15%] md:bottom-[20%] left-[10%] md:left-[20%] w-52 md:w-80 h-52 md:h-80 bg-emerald-500/5 rounded-full blur-2xl" />
        <div className="floating-circle absolute top-[55%] md:top-[60%] right-[10%] md:right-[30%] w-44 md:w-64 h-44 md:h-64 bg-green-600/4 rounded-full blur-2xl" />
        <div className="floating-circle absolute top-[35%] md:top-[40%] left-[40%] md:left-[50%] w-36 md:w-56 h-36 md:h-56 bg-teal-500/5 rounded-full blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col-reverse md:flex-row justify-around items-center px-4 md:px-10 py-16 md:py-20 gap-10 md:gap-0">
        {/* Text Section */}
        <div className="max-w-4xl text-center md:text-left flex flex-col items-center md:items-start">
          <p className="text-gray-400 text-base md:text-xl mb-2 md:mb-3">
            Hello, I'm
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-3 md:mb-4">
            Shahmeer Arshad
          </h1>

          <div className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 md:mb-6">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                3000,
                "Full Stack JavaScript Developer",
                3000,
                "Web Developer",
                3000,
                "Next.js Developer",
                3000,
                "React & Redux Developer",
                3000,
                "Node.js & Express.js",
                3000,
                "Frontend Developer",
                3000,
                "REST API Developer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-green-400"
            />
          </div>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            Passionate Full Stack Developer dedicated to building modern,
            scalable, and user-friendly web applications. I specialize in React,
            Node.js, Express, MongoDB, Redux Toolkit, and TypeScript. My focus
            is on creating clean, efficient, and high-performance digital
            solutions that provide exceptional user experiences and solve
            real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mt-6 md:mt-8">
            <a
              href="#contact"
              className="group px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-green-600 text-white flex items-center gap-2 shadow-lg shadow-green-500/20 hover:bg-green-500 hover:scale-105 transition-all duration-300"
            >
              <FaPaperPlane className="group-hover:rotate-12 transition-transform duration-300" />
              Get in Touch
            </a>

            <a
              href="#projects"
              className="group px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-gray-600 text-gray-300 flex items-center gap-2 hover:border-green-500 hover:text-green-500 hover:scale-105 transition-all duration-300"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-5 md:gap-6 mt-6 md:mt-8">
            <a
              href="https://github.com/shahmeer-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:border-green-400/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]"
            >
              <FaGithub
                size={24}
                className="text-gray-300 transition-all duration-300 group-hover:text-white"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/shahmeer-arshad/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
            >
              <FaLinkedin
                size={24}
                className="text-gray-300 transition-all duration-300 group-hover:text-blue-400"
              />
            </a>

            <a
              href="https://wa.me/923281929639"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:border-green-500/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]"
            >
              <FaWhatsapp
                size={24}
                className="text-gray-300 transition-all duration-300 group-hover:text-green-400"
              />
            </a>

            <a
              href="/resume/Shahmeer Arshad.pdf"
              download
              className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
            >
              <FaDownload
                size={24}
                className="text-gray-300 transition-all duration-300 group-hover:text-emerald-400 group-hover:animate-bounce"
              />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative scale-90 sm:scale-100">
          <div className="absolute -inset-4 md:-inset-6 border border-green-400/10 rounded-full" />
          <div className="absolute -inset-8 md:-inset-12 border border-green-400/5 rounded-full" />

          {/* Tech Icons (slightly reduced on mobile) */}
          <div className="tech-icon absolute top-2 md:top-6 -right-3 md:-right-6 z-20 w-9 h-9 md:w-12 md:h-12 bg-gray-900 border border-green-400/30 rounded-full flex items-center justify-center">
            <FaNodeJs size={18} className="text-green-500" />
          </div>

          <div className="tech-icon absolute bottom-3 md:bottom-6 -right-3 md:-right-5 z-20 w-10 h-10 md:w-14 md:h-14 bg-gray-900 border border-green-400/30 rounded-full flex items-center justify-center">
            <FaCode size={22} className="text-green-400" />
          </div>

          <div className="tech-icon absolute -bottom-14 md:-bottom-20 left-1/2 -translate-x-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-gray-900 border border-green-400/30 rounded-full flex items-center justify-center">
            <FaNodeJs size={22} className="text-green-500" />
          </div>

          <div className="tech-icon absolute bottom-3 md:bottom-6 -left-3 md:-left-6 z-20 w-9 h-9 md:w-12 md:h-12 bg-gray-900 border border-green-400/30 rounded-full flex items-center justify-center">
            <DiMongodb size={20} className="text-green-500" />
          </div>

          <div className="tech-icon absolute top-2 md:top-6 -left-3 md:-left-6 z-20 w-9 h-9 md:w-12 md:h-12 bg-gray-900 border border-green-400/30 rounded-full flex items-center justify-center">
            <FaReact size={18} className="text-cyan-400" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-full blur-xl" />

          <img
            src={profilePic}
            alt="profile"
            className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-green-400 shadow-[0_0_50px_rgba(34,197,94,0.3)] z-10"
          />
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#about"
          ref={arrowref}
          className="h-12 w-12 md:h-14 md:w-14 flex justify-center items-center rounded-full border border-green-400/40 bg-white/5 backdrop-blur-md shadow-lg"
        >
          <FaArrowDown size={18} />
        </a>
      </div>
    </section>
  );
};

export default Home;
