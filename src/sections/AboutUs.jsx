import React, { useEffect } from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import ProfileCard from "../components/ProfileCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const ServiceCard = ({ title, description, icon, index }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    const variants = {
      hidden: { y: 50, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: index * 0.2,
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </motion.div>
    );
  };

  const services = [
    {
      title: "Planes de nutrición personalizados",
      description:
        "Planes de comidas personalizados diseñados para satisfacer sus objetivos de salud y preferencias dietéticas específicos.",
      icon: "🥗",
    },
    {
      title: "Formación individual",
      description:
        "Sesiones de entrenamiento individualizadas centradas en su nivel de forma física y sus objetivos",
      icon: "💪",
    },
    {
      title: "Talleres de bienestar",
      description:
        "Seminarios educativos sobre diversos temas de salud para que adquiera conocimientos.",
      icon: "📚",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Bloque que contiene el texto a la izquierda y la imagen a la derecha */}
        <div className="flex flex-col lg:flex-row items-center justify-between md:text-start text-center">
          {/* Componente de la tarjeta de perfil (ProfileCard) que estará antes en dispositivos móviles */}

          <div className="lg:w-1/2 w-full lg:pr-12 mb-8 lg:mb-0 order-1 lg:hidden sm:text-center">
            <h2 className="font-roboto text-4xl font-bold text-gray-700 md:mb-6">
              Conoce a Neri Villeda
            </h2>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center items-center order-2 lg:order-3 mb-2">
            <ProfileCard />
          </div>

          <div className="lg:w-1/2 w-full lg:pr-12 mb-8 lg:mb-0 order-3 lg:order-2 md:text-start text-center">
            <p className="md:text-2xl text-xl text-gray-700 mb-6">
              <em className="md:italic md:text-gray-800 md:font-bold md:text-3xl">
                Neri Villeda
              </em>{" "}
              es nutricionista y entrenador personal especializado en optimizar
              la salud y el rendimiento físico. Con una sólida experiencia,
              combina ciencia y práctica para diseñar planes de nutrición y
              rutinas de ejercicio personalizadas.
            </p>
            <p className="md:text-2xl text-xl text-gray-700 mb-6">
              En nuestro consultorio, promovemos un enfoque integral de salud,
              combinando nutrición y ejercicio adaptado a las necesidades de
              cada persona. ¡Te acompañamos en cada etapa de tu transformación!
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://www.facebook.com/share/uG6KzuhtfF5o4jZD/?mibextid=LQQJ4d"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/nerii_villeda.fit/"
                className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@NeriPrideMusicOficial/videos"
                className="text-red-600 hover:text-red-800 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Sección de nuestros servicios */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 md:text-start text-center">
            Nuestros servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:text-start text-center">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
