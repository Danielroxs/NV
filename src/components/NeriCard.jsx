import React from "react";
import { motion } from "framer-motion";

const Card = ({ imageSrc, cedula, className }) => {
  return (
    <motion.div
      className="
      max-w-xs 
      sm:max-w-sm 
      md:max-w-md 
      lg:max-w-lg 
      xl:max-w-xl 
      mx-auto 
      border 
      rounded-xl 
      shadow-lg 
      overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Imagen a la izquierda */}

      <div className="flex flex-col md:flex-row items-center ">
        <div className="flex-shrink-0 mt-4 md:mb-4 md:ml-4 xl:ml-10 w-32 h-32 md:w-48 md:h-48 ">
          <img
            src={imageSrc}
            alt="Profile"
            className={`w-full h-full object-cover  ${className}`}
          />
        </div>

        {/* Contenido a la derecha */}
        <div className="p-4 mx-auto my-auto text-center">
          <h2 className="text-lg font-semibold mb-2">Cédula Profesional</h2>
          <p className="text-gray-700">{cedula}</p>
        </div>
      </div>
    </motion.div>
  );
};

<motion.h2
  className="text-lg font-semibold mb-2"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2 }}
></motion.h2>;

export default Card;
