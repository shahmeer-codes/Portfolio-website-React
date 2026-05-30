import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-around items-center px-8 md:px-20">
      <div className="max-w-4xl">
        <p className="text-gray-400 text-xl mb-3">Hello, I'm</p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">Shahmeer Arshad</h1>

        <div className="text-2xl md:text-4xl font-semibold mb-6">
          <span className="text-gray-300">I'm a </span>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "Frontend Engineer",
              2000,
              "Backend Developer",
              2000,
              "React Specialist",
              2000,
              "Node.js Developer",
              2000,
              "Problem Solver",
              2000,
              "Tech Enthusiast",
              2000,
              "Building Modern Web Experiences",
              2000,
              "Creating Scalable Applications",
              2000,
              "Turning Ideas Into Reality",
              2000,
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
          Node.js, Express, MongoDB, Redux Toolkit, and TypeScript. My focus is
          on creating clean, efficient, and high-performance digital solutions
          that provide exceptional user experiences and solve real-world
          problems.
        </p>
      </div>
      <div>
        <img
          src="/src/pics/2.png"
          alt="Your Name"
          className="w-100 h-100 object-cover rounded-full border-4 border-green-400"
        />
      </div>
    </div>
  );
};

export default Home;
