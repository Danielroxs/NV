import Logo from "../assets/images/Logo.webp";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Curtain = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1 }); // Hace que el fondo aparezca
      await controls.start({ scale: 1, transition: { duration: 0.8 } }); // Hace que el logo aparezca con fade in
      await controls.start({
        y: "-100vh",
        transition: { delay: 1, duration: 0.8 },
      }); // Desplaza la cortina y el logo hacia arriba
    };

    sequence();
  }, [controls]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <motion.img
        src={Logo}
        alt="Logo"
        initial={{ scale: 0 }}
        animate={controls}
        className="w-32 h-32" // Ajusta el tamaño según tus necesidades
      />
    </motion.div>
  );
};

export default Curtain;
