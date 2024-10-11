import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/images/Logo.webp";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Detect initial size

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { to: "home", label: "Inicio" },
    { to: "about", label: "Acerca" },
    { to: "services", label: "Servicios" },
    { to: "products", label: "Productos" },
    { to: "contact", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isMobile
          ? "bg-transparent"
          : isScrolled
          ? "bg-[#aea3b0]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Animación del logo con delay */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }} // Delay de 1 segundo para la animación
              >
                <img className="h-8 w-auto" src={Logo} alt="Logo" />
              </motion.div>
            )}
          </div>
          {!isMobile && isScrolled && (
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-700 text-anti-flash-white hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                  aria-label={link.label}
                >
                  {link.label}
                </ScrollLink>
              ))}
            </div>
          )}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? "text-gray-700" : "text-white"
              } hover:bg-gray-100 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Abrir menu"
            >
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
