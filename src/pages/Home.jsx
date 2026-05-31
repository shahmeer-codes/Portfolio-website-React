import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home">
      <div className="min-h-screen bg-black text-white flex justify-around items-center px-4 md:px-10">
        <div className="max-w-4xl">
          <p className="text-gray-400 text-xl mb-3">Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Shahmeer Arshad
          </h1>

          <div className="text-2xl md:text-4xl font-semibold mb-6">
            <span className="text-gray-300">I'm a </span>
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Full Stack JavaScript Developer",
                2000,
                "Next.js Developer",
                2000,
                "React & Redux Developer",
                2000,
                "Node.js & Express.js Developer",
                2000,
                "Frontend Developer",
                2000,
                "REST API & Backend Developer",
                2000,
                "TypeScript & JavaScript Developer",
                2000,
                "Git & GitHub User",
                2000,
                "Mongodb & Mysql Developer",
                2000,
              ]}
              wrapper="span"
              speed={10}
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
          <div className="flex gap-4">
            <a
              href="https://github.com/shahmeer-codes"
              className="px-5 py-3 border flex gap-2 items-center justify-center border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="/resume/Shahmeer Arshad.pdf"
              download
              className="px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div>
          <img
            src="/public/pics/profile_pic/2.png"
            alt="Your Name"
            className="w-100 h-100 object-cover rounded-full border-4 border-green-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
