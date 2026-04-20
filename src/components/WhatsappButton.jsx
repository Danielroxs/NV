import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <motion.a
      href="https://wa.me/525561706548?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.45, delay: 1.2, ease: "easeOut" }}
      whileHover={{ y: -2, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-4 right-4 z-[1000] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition hover:bg-[#20b354] sm:bottom-5 sm:right-5 sm:h-14 sm:w-14 lg:bottom-6 lg:right-6 lg:h-13 lg:w-13"
    >
      <FaWhatsapp className="text-[1.8rem] transition group-hover:scale-110" />

      <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 rounded-full bg-[#071226] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 lg:inline-flex">
        WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsappButton;
