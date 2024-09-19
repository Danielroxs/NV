import Button from "../components/Button";
import { motion } from "framer-motion";
import bg from "../images/bg.webp";
import { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsappButton from "../components/WaButtonNormal";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const message = "Me gustarian mas informes acerca de sus servicios";
  const contact = "¡Comienza ahora! ";

  return (
    <section
      className="relative bg-cover bg-center min-h-[80vh] flex items-center justify-center z-[1]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Capa oscura sobre la imagen de fondo */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div
        className="relative z-10 max-w-7xl mx-auto py-2 px-6 text-center"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      >
        <motion.h1
          className="text-4xl font-extrabold font-palanquin text-white pb-4"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 10,
            duration: 1.5,
          }}
        >
          Nutrición y Entrenamiento Personalizado
        </motion.h1>

        <motion.p
          className="text-sm md:text-xl mb-6 text-gray-100 pb-4"
          initial={{ x: "40vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 10,
            delay: 0.2,
            duration: 1.5,
          }}
        >
          "Desafía tus límites y transforma tu cuerpo con un enfoque único.
          Logra resultados reales y sostenibles, ¡tu mejor versión te espera!"
        </motion.p>

        <motion.div
          className="flex justify-center items-center"
          initial={{ y: "30px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 15,
            delay: 0.8,
            duration: 1.5,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <WhatsappButton message={message} contact={contact} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
