import { FaGraduationCap, FaBriefcase,FaLightbulb,FaRocket ,} from "react-icons/fa";
import Stats from "../components/Stats";
import Myskills from "../components/Myskills";
import Myprojects_cards from "../components/Myprojects_cards";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-8 md:px-20 py-20"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8 text-green-600">Who Am I?</h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I'm{" "}
            <span className="text-white font-semibold">Shahmeer Arshad</span>, a
            passionate{" "}
            <span className="text-green-400">Full Stack Developer</span> focused
            on building modern, scalable, and user-friendly web applications. I
            enjoy transforming ideas into high-performance digital experiences
            using cutting-edge technologies.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            My expertise includes{" "}
            <span className="font-semibold text-white">
              React, Next.js, Node.js, Express.js, MongoDB, Redux Toolkit,
              Tailwind CSS, and TypeScript
            </span>
            . I build responsive frontends, powerful backend APIs, and complete
            MERN stack applications that solve real-world problems.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            As a developer, I constantly explore new technologies, improve my
            skills, and work on meaningful projects. My goal is to create
            impactful software solutions while growing as a professional
            software engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-500 transition-all duration-300">
            <FaGraduationCap className="text-4xl text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <p className="text-gray-400">
              BS Software Engineering
              <br />
              University Student
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition-all duration-300">
            <FaBriefcase className="text-4xl text-green-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <p className="text-gray-400">
              Building MERN Stack Projects
              <br />& Modern Web Applications
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-500 transition-all duration-300">
            <FaLightbulb className="text-4xl text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Passion</h3>
            <p className="text-gray-400">
              Creating clean, efficient,
              <br />
              and user-focused solutions
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition-all duration-300">
            <FaRocket className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Goals</h3>
            <p className="text-gray-400">
              Becoming a top-tier
              <br />
              Full Stack Engineer
            </p>
          </div>
        </div>
      </div>

      <Stats />
      <Myskills />
      <Myprojects_cards />
    </section>
  );
};

export default About;
