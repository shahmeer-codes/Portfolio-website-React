import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Scroll spy
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 150; // Offset for navbar
          
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    
    // Trigger once on mount to set initial active state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `cursor-pointer transition ${
      active === id ? "text-yellow-300 font-bold" : "text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-green-600 text-white px-6 md:px-10 h-16 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">Portfolio</div>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <a href="#home" className={linkClass("home")}>
          Home
        </a>
        <a href="#about" className={linkClass("about")}>
          About
        </a>
        <a href="#skills" className={linkClass("skills")}>
          Skills
        </a>
        <a href="#projects" className={linkClass("projects")}>
          Projects
        </a>
        <a href="#contact" className={linkClass("contact")}>
          Contact
        </a>
      </div>

      {/* Mobile Button */}
      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-green-700 flex flex-col items-center py-4 gap-4 md:hidden">
          <a onClick={() => setOpen(false)} href="#home">
            Home
          </a>
          <a onClick={() => setOpen(false)} href="#projects">
            Projects
          </a>
          <a onClick={() => setOpen(false)} href="#skills">
            Skills
          </a>
          <a onClick={() => setOpen(false)} href="#about">
            About
          </a>
          <a onClick={() => setOpen(false)} href="#contact">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
