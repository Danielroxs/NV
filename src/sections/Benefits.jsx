import React from "react";
import { FaDumbbell, FaAppleAlt, FaBolt } from "react-icons/fa";
import benefits from "../assets/images/benefits.webp";
import FadeInText from "../components/Motion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CombinedBenefits = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  const sendMessage = (message) => {
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  const whatsappNumber = "+525561706548";

  return (
    <div className="container mx-auto px-4 py-16 lg:text-left text-center">
      <FadeInText
        text="Beneficios Combinados con Neri Villeda"
        tagName="h2"
        className="font-roboto text-3xl md:text-4xl font-bold text-gray-700 md:mb-6 mb-4 text-center"
      />
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Texto y beneficios */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <p className="text-base md:text-lg mb-6 text-gray-600">
            Experimenta el poder de combinar planes de nutrición personalizados
            con entrenamiento físico experto. Descubre cómo mejorar tu salud y
            mejorar tu vida diaria.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2 md:space-x-4">
              <FaDumbbell className="text-green-500 text-3xl" />
              <span className="text-gray-700 text-base md:text-lg">
                Mejora en el rendimiento físico y fuerza
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2 md:space-x-4">
              <FaAppleAlt className="text-red-500 text-3xl" />
              <span className="text-gray-700 text-base md:text-lg">
                Nutrición optimizada para una mejor salud
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2 md:space-x-4">
              <FaBolt className="text-yellow-500 text-3xl" />
              <span className="text-gray-700 text-base md:text-lg">
                Aumento de energía y vitalidad
              </span>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              aria-label="boton whatsapp"
              onClick={() =>
                sendMessage(
                  "Me gustaría obtener más información para empezar mi vida Fitness"
                )
              }
              className="mt-8 bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 text-sm md:text-base"
            >
              Comienza Tu Viaje
            </button>
          </div>
        </div>

        {/* Imagen */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <img
            loading="lazy"
            src={benefits}
            alt="Neri Villeda en acción"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CombinedBenefits;
