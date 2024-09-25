import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nb3x8fHx8fDE2ODQ3NjA5MDc&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Logo"
            className="h-10 w-auto mr-2"
          />
          <span className="text-2xl font-bold text-gray-800">Brand</span>
        </div>

        <div className=" md:flex items-center space-x-6 z-60">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-300"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        <button
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-2">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="block py-2 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-300"
                onClick={toggleMenu}
              >
                {link.name}
              </ScrollLink>
            ))}
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default FloatingNavbar;
