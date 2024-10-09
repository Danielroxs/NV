import React, { useEffect } from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import ProfileCard from "../components/ProfileCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FadeInText from "../components/Motion";

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
          delay: index * 0.2, // adding staggered effect using index
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
    <div className="min-h-screen lg:text-left text-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <FadeInText
              text="Conoce a Neri Villeda"
              tagName="h2"
              className="font-roboto text-4xl font-bold text-gray-700 md:mb-6 mb-4"
            />
            <p className="md:text-2xl text-xl text-gray-700 mb-6">
              Neri Villeda es una apasionado nutricionista y entrenador personal
              dedicado a ayudar a las personas a alcanzar sus objetivos de salud
              y forma física. Gracias a su basta experiencia, Neri combina
              conocimientos científicos con estrategias prácticas para crear
              planes de nutrición y rutinas de entrenamiento personalizados.
            </p>
            <p className="md:text-2xl text-xl text-gray-700 mb-6 font-lora">
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
          <div className="lg:w-1/2">
            <ProfileCard />
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Nuestros servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index} // passing index for staggered animation
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
