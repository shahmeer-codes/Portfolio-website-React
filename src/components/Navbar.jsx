const Navbar = () => {
  return (
  
      <nav className="flex justify-between items-center h-16 bg-green-600 text-white px-8 shadow-sm font-mono">
      <div className="font-bold text-2xl cursor-pointer">
        Portfolio
      </div>

      <div className="hidden md:flex gap-6 text-lg">
        <a href="#about" className="hover:text-gray-200">
          About
        </a>
        <a href="#projects" className="hover:text-gray-200">
          Projects
        </a>
        <a href="#contact" className="hover:text-gray-200">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;