import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = styled(motion.a)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 1000;
  text-decoration: none;

  @media (max-width: 768px) {
    display: flex;
  }

  &:hover {
    background-color: #20b354;
  }
`;

const whatsappAnimation = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const WhatsappButton = () => {
  return (
    <FloatingButton
      href="https://wa.me/525561706548?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios.
"
      target="_blank"
      rel="noopener noreferrer"
      initial="hidden"
      animate="visible"
      variants={whatsappAnimation}
      transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
    >
      <FaWhatsapp size={40} />
    </FloatingButton>
  );
};

export default WhatsappButton;
