import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // Importa ScrollLink
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault(); // Evitar la recarga de la página
    window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazamiento suave hacia la parte superior
  };

  return (
    <footer className="bg-gray-5 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <a href="#" onClick={scrollToTop} className="mb-4 md:mb-0">
            <img
              src={Logo}
              alt="Company Logo"
              className="h-12 cursor-pointer"
            />
          </a>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
            <ScrollLink
              to="home" // Cambia el nombre por el de tu sección
              smooth={true}
              offset={-70} // Ajusta si es necesario
              duration={500}
              className="hover:text-gray-300 transition duration-300 cursor-pointer"
            >
              Inicio
            </ScrollLink>
            <ScrollLink
              to="about" // Cambia el nombre por el de tu sección
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-gray-300 transition duration-300 cursor-pointer"
            >
              Acerca
            </ScrollLink>
            <ScrollLink
              to="services" // Cambia el nombre por el de tu sección
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-gray-300 transition duration-300 cursor-pointer"
            >
              Servicios
            </ScrollLink>
            <ScrollLink
              to="products" // Cambia el nombre por el de tu sección
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-gray-300 transition duration-300 cursor-pointer"
            >
              Productos
            </ScrollLink>
            <ScrollLink
              to="contact" // Cambia el nombre por el de tu sección
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-gray-300 transition duration-300 cursor-pointer"
            >
              Contacto
            </ScrollLink>
          </nav>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.facebook.com/nerii.villeda.3"
            className="text-2xl hover:text-blue-500 transition duration-300 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/nerii_villeda.fit/"
            className="text-2xl hover:text-pink-500 transition duration-300 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@NeriPrideMusicOficial/videos"
            className="text-2xl hover:text-blue-400 transition duration-300 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
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
