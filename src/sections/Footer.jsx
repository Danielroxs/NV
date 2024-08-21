import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-4 px-4 ">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Contacto</h3>
          <p className="text-gray-400">Teléfono: +52 55 88 00 77 66</p>
          <p className="text-gray-400">Email: contacto@tuempresa.com</p>
          <p className="text-gray-400">Dirección: Calle Ejemplo, 123, Ciudad</p>
        </div>

        <div className="mb-6 mt-4 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Enlaces rapidos</h3>
          <ul>
            <li href="about" className="text-gray-400 hover:text-white">
              Sobre nosotros
            </li>
            <li href="services" className="text-gray-400 hover:text-white">
              Servicios
            </li>
            <li href="programas" className="text-gray-400 hover:text-white">
              Programas
            </li>
            <li href="contact" className="text-gray-400 hover:text-white">
              Contacto
            </li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Siguenos</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
              target="_blank"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22,12c0-5.5-4.5-10-10-10S2,6.5,2,12c0,4.9,3.5,9,8.1,9.8v-6.9h-2.4V12h2.4v-2c0-2.3,1.4-3.5,3.4-3.5c1,0,2,0.1,2.3,0.1v2.6h-1.3c-1.3,0-1.6,0.6-1.6,1.5v1.9h2.9l-0.4,2.9h-2.5V22C18.5,21,22,16.9,22,12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
              target="_blank"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22.46,6c-0.77,0.35-1.58,0.58-2.43,0.68c0.88-0.52,1.55-1.34,1.87-2.31c-0.83,0.49-1.75,0.85-2.72,1.05C18.14,4.61,17.04,4,15.81,4c-2.37,0-4.29,1.92-4.29,4.29c0,0.34,0.04,0.67,0.1,0.99C7.76,9.09,4.1,7.38,1.67,4.52c-0.37,0.63-0.59,1.36-0.59,2.14c0,1.48,0.75,2.79,1.91,3.56c-0.7-0.02-1.36-0.22-1.93-0.53c0,0.02,0,0.04,0,0.06c0,2.07,1.47,3.79,3.41,4.18c-0.36,0.1-0.75,0.15-1.14,0.15c-0.28,0-0.56-0.03-0.83-0.08c0.56,1.74,2.2,3.01,4.14,3.05c-1.52,1.19-3.44,1.89-5.53,1.89c-0.36,0-0.71-0.02-1.06-0.06c1.97,1.26,4.32,2,6.84,2c8.2,0,12.68-6.79,12.68-12.68c0-0.19,0-0.39-0.01-0.58C21.19,7.58,21.9,6.83,22.46,6z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
              target="_blank"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.2c3.1 0 3.5 0 4.7.1 1.1.1 1.8.2 2.3.4.5.2.8.5 1.2 1 .3.5.7.7 1.2 1.2.2.5.3 1.2.4 2.3.1 1.2.1 1.6.1 4.7s0 3.5-.1 4.7c-.1 1.1-.2 1.8-.4 2.3-.3.5-.7.7-1.2 1.2-.5.3-1.2.6-2.3.7-1.2.1-1.6.1-4.7.1-3.1 0-3.5 0-4.7-.1-1.1-.1-1.8-.2-2.3-.4-.5-.2-.8-.5-1.2-1-.3-.5-.7-.7-1.2-1-.2-.5-.3-1.2-.4-2.3-.1-1.2-.1-1.6-.1-4.7s0-3.5.1-4.7c.1-1.1.2-1.8.4-2.3.3-.5.7-.7 1.2-1 .5-.3 1.2-.6 2.3-.7 1.2-.1 1.6-.1 4.7-.1zm0-2.2c-3.1 0-3.5 0-4.7.1-1.1.1-1.8.3-2.5.6-.7.3-1.3.7-1.9 1.3-.6.6-1 1.3-1.3 1.9-.3.7-.5 1.4-.6 2.5-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.2.3 1.8.6 2.5.3.7.7 1.3 1.3 1.9.6.6 1.2 1 1.9 1.3.7.3 1.4.5 2.5.6 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.2-.1 1.8-.3 2.5-.6.7-.3 1.3-.7 1.9-1.3.6-.6 1-1.3 1.3-1.9.3-.7.5-1.4.6-2.5.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.2-.3-1.8-.6-2.5-.3-.7-.7-1.3-1.3-1.9-.6-.6-1.2-1-1.9-1.3-.7-.3-1.4-.5-2.5-.6-1.2-.1-1.6-.1-4.7-.1zm0 6.3c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9-1.3-2.9-2.9-2.9zm0 4.7c-1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9 1.9.9 1.9 1.9-.9 1.9-1.9 1.9zm3.5-6.8c.4 0 .7-.1 1-.3.3-.2.5-.5.7-.7.2-.3.3-.6.3-1s-.1-.7-.3-1c-.2-.3-.5-.5-.7-.7-.3-.2-.7-.3-1-.3-.4 0-.7.1-1 .3-.3.2-.5.5-.7.7-.2.3-.3.6-.3 1s.1.7.3 1c.2.3.5.5.7.7.3.2.6.3 1 .3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-600 pt-2">
        <p>Tu empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
