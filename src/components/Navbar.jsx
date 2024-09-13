import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold">Mi Página</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#hero" className="hover:text-blue-500">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500">
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-500">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
