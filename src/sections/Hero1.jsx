import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-dark text-white text-center d-flex align-items-center vh-100">
      <div className="container">
        {/* Animación del texto principal: Viene desde la izquierda */}
        <motion.h1
          className="display-4 text-start"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 3 }}
        >
          Nutrición y Entrenamiento Personalizado
        </motion.h1>

        {/* Animación del subtítulo: Viene desde la derecha */}
        <motion.p
          className="lead text-start"
          initial={{ x: "40vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            delay: 0.4,
            duration: 3,
          }}
        >
          Transforma tu vida hoy mismo con nuestros planes adaptados a ti.
        </motion.p>

        {/* Animación del botón: Aparece desde abajo */}
        <motion.div
          className="text-start"
          initial={{ y: "20px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            delay: 1.4,
            duration: 2.5,
          }}
        >
          <a href="#services" className="btn btn-primary btn-lg">
            Agenda tu cita
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
