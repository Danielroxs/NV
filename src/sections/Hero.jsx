import { Box, Heading, Text } from "@chakra-ui/react";
import hero1 from "../images/hero1.png";
import Button from "../components/Button";
import { motion } from "framer-motion";
import hero2 from "../images/hero2.webp";
import { useEffect, useState } from "react";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center min-h-[80vh]"
      style={{
        backgroundImage: `url(${hero2})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Capa oscura sobre la imagen de fondo */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div
        className="relative container z-10 max-w-7xl mx-auto py-2 px-6 flex flex-col-reverse md:flex-row items-center"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            className="display-4 text-start text-4xl font-extrabold font-palanquin text-white"
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
            className="lead text-start text-sm md:text-xl mb-6 text-gray-100"
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
            Transforma tu vida hoy mismo con nuestros planes adaptados a ti.
          </motion.p>

          <motion.div
            className="text-start"
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
            <Button>Agenda una cita</Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, stiffness: 30, delay: 1 }}
          className="w-full md:w-1/2 mb-6 md:mb-0"
        >
          <img
            src={hero1}
            alt="Nutrición y Entrenamiento"
            className="max-w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
