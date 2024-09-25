import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      } rounded-full px-6 py-3`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Logo
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 px-3 py-2 rounded-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 p-2 rounded-full"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-64 bg-white shadow-lg transition-all duration-300 mt-4 rounded-2xl ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 px-3 py-2 rounded-full"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
