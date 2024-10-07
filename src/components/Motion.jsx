import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInText = ({ text, tagName: Tag = "div", className }) => {
  const controls = useAnimation(); // Controlador de animación de Framer Motion
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se activa solo la primera vez que el elemento entra en el viewport
    threshold: 0.5, // El elemento debe estar al menos al 50% visible antes de activar la animación
  });

  // React Hook para iniciar la animación cuando el elemento está en el viewport
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      ref={ref} // Asignar el ref del observer al componente
      initial="hidden"
      animate={controls} // Usar el controlador de animación
      variants={textVariants}
      className={className}
    >
      <Tag>{text}</Tag>
    </motion.div>
  );
};

export default FadeInText;
