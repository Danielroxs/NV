import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import neri from "../assets/images/neri.webp";
import ProfileCard from "../components/ProfileCard";

const AboutUs = () => {
  const ServiceCard = ({ title, description, icon }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen lg:text-left text-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Conoce a Neri Villeda
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Neri Villeda es una apasionado nutricionista y entrenador personal
              dedicado a ayudar a las personas a alcanzar sus objetivos de salud
              y forma física. Gracias a su basta experiencia, Neri combina
              conocimientos científicos con estrategias prácticas para crear
              planes de nutrición y rutinas de entrenamiento personalizados.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              En nuestro consultorio, creemos que la salud es un equilibrio
              entre nutrición y ejercicio. Nuestro enfoque combina planes
              alimenticios personalizados con programas de entrenamiento
              diseñados para cada individuo. ¡Nos comprometemos a acompañarte en
              cada paso del camino!
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://www.facebook.com/share/uG6KzuhtfF5o4jZD/?mibextid=LQQJ4d"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/nerii_villeda.fit/"
                className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                target="_blank"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@NeriPrideMusicOficial/videos"
                className="text-red-600 hover:text-red-800 transition-colors duration-300"
                target="_blank"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-64 h-64 mx-auto lg:w-80 lg:h-80">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-pulse"></div>
              <img
                src={neri}
                alt="Neri Villeda"
                className="absolute inset-2 w-60 h-60 lg:w-76 lg:h-76 object-cover rounded-full"
                /> */}
              <ProfileCard />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Nuestros servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Planes de nutrición personalizados"
              description="Planes de comidas personalizados diseñados para satisfacer sus objetivos de salud y preferencias dietéticas específicos."
              icon={"🥗"}
            />
            <ServiceCard
              title="Formación individual"
              description="Sesiones de entrenamiento individualizadas centradas en su nivel de forma física y sus objetivos"
              icon={"💪"}
            />
            <ServiceCard
              title="Talleres de bienestar"
              description="Seminarios educativos sobre diversos temas de salud para que adquiera conocimientos."
              icon={"📚"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
