import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 120;

          if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `relative px-3 py-2 font-medium transition-all duration-300 ${
      active === id
        ? "text-green-400"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <>
      <nav
        className="
          fixed top-4 left-1/2 -translate-x-1/2
          w-[95%] max-w-7xl h-16
          z-50
          bg-black/50 backdrop-blur-md
          border border-white/10
          rounded-2xl
          shadow-lg
          px-6 md:px-8
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <a href="#home" className="text-xl md:text-2xl font-bold">
          <span className="text-white">Shahmeer</span>
          <span className="text-green-500">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={linkClass(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {active === item && (
                <span
                  className="
                    absolute left-1/2 -translate-x-1/2
                    bottom-0 h-[2px] w-6
                    bg-green-500 rounded-full
                  "
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="
            hidden md:flex
            items-center
            px-5 py-2
            rounded-full
            bg-green-600
            text-white
            font-medium
            hover:bg-green-500
            hover:scale-105
            transition-all duration-300
          "
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            fixed top-24 left-4 right-4
            z-40
            bg-black/90
            backdrop-blur-lg
            border border-white/10
            rounded-2xl
            p-6
            flex flex-col gap-5
            md:hidden
            shadow-xl
          "
        >
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`text-lg transition ${
                active === item
                  ? "text-green-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
              mt-2
              text-center
              bg-green-600
              text-white
              py-3
              rounded-full
              hover:bg-green-500
              transition
            "
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;