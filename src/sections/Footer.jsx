import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <img src={Logo} alt="Company Logo" className="h-12" />
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Inicio
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Acerca
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Servicios
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Productos
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Contacto
            </a>
          </nav>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="text-2xl hover:text-blue-500 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-blue-400 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="text-center text-sm">
          <p>© 2024 Muscle Machine - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
