import React, { useEffect, useState } from "react";
import { FaPlay, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import WhatsappButton from "../components/WaButtonNormal";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/50 to-blue-500/50"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
        <motion.h1
          className="text-5xl font-bold md:text-7xl text-white pb-4"
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
          className="mb-6 text-2xl text-center font-semibold md:text-xl"
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
          Alimentación Saludable y Ejercicio para una Mejor Versión de Ti
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
          <button
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-[#25d366] to-[#25d366] px-8 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-all duration-300 hover:from-[#20b354] hover:to-[#20b354]"
            aria-label="contactanos"
          >
            <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-2">
              <FaWhatsapp size={20} style={{ marginRight: "8px" }} />
            </span>
            <span className="text-sm font-semibold transition-transform group-hover:translate-x-[-1rem]">
              CONTACTANOS{" "}
            </span>
          </button>
        </motion.div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default HeroSection;
