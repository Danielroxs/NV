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
    // Detectar cuando se hace scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Detectar tamaño de la pantalla para mobile
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Ejecutar una vez para detectar el tamaño inicial

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

  const menuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3, // Reducir la duración para que la animación sea más rápida
        ease: "easeInOut",
      },
      display: "block",
    },
    closed: {
      y: "100%", // Cambio de -100% a 100% para que el menú se deslice desde abajo hacia arriba
      opacity: 0,
      transition: {
        duration: 0.3, // Asegúrate de que el cierre sea también rápido
        ease: "easeInOut",
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isMobile
          ? "bg-transparent"
          : isScrolled
          ? "bg-[#aea3b0]"
          : "bg-transparent"
      } `} // Aumentamos el z-index por si hay otros elementos superpuestos
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className={`flex-shrink-0 ${isMobile ? "hidden" : "block"}`}>
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </div>
          </div>
          {/* Mostrar links solo si se ha hecho scroll y no estamos en mobile */}
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
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:text-gray-700 text-anti-flash-white hover:bg-gray-100 transition-all duration-300 cursor-pointer`}
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
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-anti-flash-white shadow-lg rounded-xl text-center hover:bg-soft-gray-blue">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              aria-label={link.label}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
