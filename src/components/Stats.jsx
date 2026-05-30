import { FaCode, FaProjectDiagram, FaLaptopCode, FaBriefcase } from "react-icons/fa";

const statsData = [
  {
    id: 1,
    value: "1+",
    label: "Years Experience as a self learner",
    icon: <FaCode />,
  },
  {
    id: 2,
    value: "6+",
    label: "Projects Completed",
    icon: <FaProjectDiagram />,
  },
  {
    id: 3,
    value: "5+",
    label: "Technologies Mastered",
    icon: <FaLaptopCode />,
  },
  {
    id: 4,
    value: "2+",
    label: "Industry Projects",
    icon: <FaBriefcase />,
  },
];

const Stats = () => {
  return (
    <section className="mt-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="relative group bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-center text-green-400 text-3xl mb-3">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-bold text-green-400 mb-2">
                {stat.value}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {stat.label}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;