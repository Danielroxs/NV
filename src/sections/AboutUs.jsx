import React from "react";
import neri from "../images/neri.webp"; // Asegúrate de que la ruta sea correcta
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const AboutUs = () => {
  return (
    <>
      <div className="my-component text-center">
        Este texto se alineará al centro en pantallas pequeñas, a la izquierda
        en pantallas medianas y a la derecha en pantallas grandes.
      </div>

      <section className="bg-city-lights py-16">
        <div className="text-center text-4xl font-bold font-palanquin">
          <h2 className="text-gray-500 mb-8">Sobre Mi</h2>
        </div>

        <div
          id="#about-us"
          className="p-2 container flex flex-col md:flex-row justify-center items-center md:mb-6"
        >
          {/* Texto a la izquierda */}
          <div className="w-full md:w-1/3 lg:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-palanquin text-gray-900 mb-4">
              Hola! Soy Neri Villeda,
              <br />
              Soy Nutriólogo y Entrenador Personal.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              En nuestro consultorio, creemos que la salud es un equilibrio
              entre nutrición y ejercicio. Nuestro enfoque combina planes
              alimenticios personalizados con programas de entrenamiento
              diseñados para cada individuo. ¡Nos comprometemos a acompañarte en
              cada paso del camino!
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Mi filosofía de trabajo se basa en la colaboración y la empatía.
            </p>
            <div className="flex justify-center mt-6 md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/stories/nerii_villeda.fit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 icon-hover"
              >
                <InstagramIcon style={{ fontSize: 40, color: "#E1306C" }} />
              </a>
              <a
                href="https://www.facebook.com/gymmusclemachine"
                target="_blank"
                className="text-gray-900 hover:text-gray-500 icon-hover"
              >
                <FacebookIcon style={{ fontSize: 40, color: "#4267B2" }} />
              </a>
            </div>
          </div>

          {/* Imagen con borde degradado a la derecha */}
          <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center">
            <div className="relative rounded-full overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2">
              <img
                src={neri}
                alt="Neri Villeda"
                className="rounded-full h-64 w-64 object-cover"
              />
            </div>
          </div>

          {/* Widget de Instagram */}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
