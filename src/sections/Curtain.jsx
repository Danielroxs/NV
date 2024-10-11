import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/Logo.webp";

const Curtain = ({ isCurtainOpen, setIsCurtainOpen }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCurtainOpen(false);
    }, 2100); // Abre la cortina después de 2 segundos
    return () => clearTimeout(timer);
  }, [setIsCurtainOpen]);

  return (
    <AnimatePresence>
      {isCurtainOpen && (
        <motion.div
          className="fixed inset-0 bg-black flex justify-center items-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ y: "-100vh", transition: { duration: 0.8 } }}
        >
          <motion.img
            src={Logo}
            alt="Logo"
            initial={{ opacity: 0, scale: 1.5 }} // Inicia con un tamaño más grande
            animate={{
              opacity: 1,
              scale: 1.2, // Ajusta al tamaño deseado más grande
              transition: { delay: 0.8, duration: 0.8 }, // El logo aparece después de 1 segundo con duración de 0.8s
            }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="w-32 h-32" // Ajusta el tamaño según sea necesario
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Curtain;
