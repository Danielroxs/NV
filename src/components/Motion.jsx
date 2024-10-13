import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({
  children,
  fontSize = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl", // Ajuste de tamaño de fuente responsivo
  alignment = "text-center",
  animation = "fadeIn",
  bgStyle = "bg-gradient-to-r from-blue-500 to-purple-500",
}) => {
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideIn: {
      hidden: { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    popIn: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1 },
    },
  };

  return (
    <motion.div
      className={`relative ${bgStyle} p-2 md:p-6 lg:p-4 ${alignment} mb-2 overflow-hidden max-w-full`}
      initial="hidden"
      animate="visible"
      variants={animations[animation]}
      transition={{ duration: 0.5 }}
      tabIndex={0}
      aria-label="Section Title"
    >
      <h2
        className={`${fontSize} font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-purple-600 select-none whitespace-normal break-words overflow-wrap break-word hyphens-none`} // Evitar el corte de palabras
      >
        {children}
      </h2>
    </motion.div>
  );
};

const FadeInText = ({ text, tagName: Tag = "div" }) => {
  return (
    <div className="container mx-auto p-4">
      <SectionTitle
        fontSize="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" // Ajustar el tamaño de fuente para pantallas pequeñas
        alignment="text-center"
        animation="slideIn"
        bgStyle="bg-transparent"
      >
        <Tag>{text}</Tag>
      </SectionTitle>
    </div>
  );
};

export default FadeInText;
