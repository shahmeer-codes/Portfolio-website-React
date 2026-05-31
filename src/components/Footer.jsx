import { FaGithub, } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-12 grid md:grid-cols-3 gap-10">
        
        {/* BRAND */}
        <div>
          <h2 className="text-white text-2xl font-bold">
            Shahmeer Rana
          </h2>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            A passionate Full Stack Developer building modern,
            responsive, and scalable web applications with
            React, Node.js, Express.js, and MongoDB.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#home"
                className="hover:text-white transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-white transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-white transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-white transition"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Connect
          </h3>

          <div className="flex gap-5">
            {/* WhatsApp */}
            <a
              href="https://wa.me/923281929639"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110"
            >
              <BsWhatsapp size={26} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/shahmeer-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FaGithub size={26} />
            </a>

            {/* Email */}
            <a
              href="#contact"
              className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110"
            >
              <MdEmail size={26} />
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Let's build something amazing together.
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Shahmeer Rana. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;