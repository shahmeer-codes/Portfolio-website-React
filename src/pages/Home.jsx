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
    // Arrow bounce animation
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

    // Floating background circles
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

    // Tech icons floating around image - orbit style
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
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />

        {/* Grid overlay */}
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

        {/* Floating background circles */}
        <div className="floating-circle absolute top-[15%] left-[10%] w-72 h-72 bg-green-500/5 rounded-full blur-2xl" />
        <div className="floating-circle absolute top-[30%] right-[15%] w-96 h-96 bg-green-400/3 rounded-full blur-3xl" />
        <div className="floating-circle absolute bottom-[20%] left-[20%] w-80 h-80 bg-emerald-500/5 rounded-full blur-2xl" />
        <div className="floating-circle absolute top-[60%] right-[30%] w-64 h-64 bg-green-600/4 rounded-full blur-2xl" />
        <div className="floating-circle absolute top-[40%] left-[50%] w-56 h-56 bg-teal-500/5 rounded-full blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col-reverse md:flex-row justify-around items-center px-4 md:px-10 py-20 gap-10 md:gap-0">
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
              className="group px-6 py-3 rounded-full bg-green-600 text-white flex items-center gap-2 shadow-lg shadow-green-500/20 hover:bg-green-500 hover:scale-105 transition-all duration-300"
            >
              <FaPaperPlane className="group-hover:rotate-12 transition-transform duration-300" />
              Get in Touch
            </a>

            <a
              href="#projects"
              className="group px-6 py-3 rounded-full border border-gray-600 text-gray-300 flex items-center gap-2 hover:border-green-500 hover:text-green-500 hover:scale-105 transition-all duration-300"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-6 mt-8">
            <a
              href="https://github.com/shahmeer-codes"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/shahmeer-arshad/"
              className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="https://wa.me/923281929639"
              className="text-gray-400 hover:text-green-500 hover:scale-110 transition-all duration-300"
            >
              <FaWhatsapp size={30} />
            </a>

            <a
              href="/resume/Shahmeer Arshad.pdf"
              download
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaDownload size={30} />
            </a>
          </div>
        </div>

        {/* Image with arranged tech icons around it */}
        <div className="relative">
          {/* Decorative ring behind image */}
          <div className="absolute -inset-6 border border-green-400/10 rounded-full" />
          <div className="absolute -inset-12 border border-green-400/5 rounded-full" />

          {/* Tech icons arranged in a circle around the image */}
         

          {/* Top Right */}
          <div className="tech-icon absolute top-6 -right-6 z-20 w-12 h-12 bg-gray-900 border border-green-400/30 rounded-full flex items-center justify-center shadow-lg shadow-green-500/10">
            <FaNodeJs size={22} className="text-green-500" />
          </div>

          {/* Bottom Right */}
          <div className="tech-icon absolute bottom-6 -right-5 z-20 w-14 h-14 bg-gray-900 border border-green-400/30 rounded-full flex items-center justify-center shadow-lg shadow-green-500/10">
            <FaCode size={30} className="text-green-400" />
          </div>

          {/* Bottom */}
          <div className="tech-icon absolute -bottom-20 left-1/2 -translate-x-1/2 z-20 w-14 h-14 bg-gray-900 border border-green-400/30 rounded-full flex items-center justify-center shadow-lg shadow-green-500/10">
            <FaNodeJs size={28} className="text-green-500" />
          </div>

          {/* Bottom Left */}
          <div className="tech-icon absolute bottom-6 -left-6 z-20 w-12 h-12 bg-gray-900 border border-green-400/30 rounded-full flex items-center justify-center shadow-lg shadow-green-500/10">
          <DiMongodb size={28} className="text-green-500" />
          </div>

         

          {/* Top Left */}
          <div className="tech-icon absolute top-6 -left-6 z-20 w-12 h-12 bg-gray-900 border border-green-400/30 rounded-full flex items-center justify-center shadow-lg shadow-green-500/10">
            <FaReact size={22} className="text-cyan-400" />
          </div>

          {/* Green glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-full blur-xl" />

          <img
            src={profilePic}
            alt="profile"
            className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-green-400 shadow-[0_0_50px_rgba(34,197,94,0.3)] z-10"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          ref={arrowref}
          className="h-14 w-14 flex justify-center items-center rounded-full border border-green-400/40 bg-white/5 backdrop-blur-md shadow-lg"
        >
          <FaArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Home;
