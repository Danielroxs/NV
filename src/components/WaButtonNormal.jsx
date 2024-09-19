import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const ButtonContainer = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25d366;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #20b354;
  }
`;

const WhatsappButton = ({ message, contact }) => {
  const whatsappUrl = `https://wa.me/525538075005?text=${encodeURIComponent(
    message
  )}`;

  return (
    <ButtonContainer
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={20} style={{ marginRight: "8px" }} />
      {contact}
    </ButtonContainer>
  );
};

export default WhatsappButton;
