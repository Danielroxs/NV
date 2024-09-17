import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import mock1 from "../images/mock1.jpg";
import mock2 from "../images/mock2.jpg";
import mock3 from "../images/mock3.jpg";
import mock6 from "../images/mock6.jpg";

// Card styles
const Card = styled(motion.div)`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  margin: 20px;
  padding: 20px;
  max-width: 300px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  h3 {
    margin: 20px 0 10px;
    font-size: 1.2em;
    color: #333;
  }

  p {
    color: #777;
    font-size: 1em;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 40px;
`;

// Data for mockups (you can customize these with your own images and descriptions)
const mockups = [
  {
    id: 1,
    image: mock6,
    title: "Camiseta Logo Classic",
    description: "Camiseta blanca con el logo clásico del negocio.",
  },
  {
    id: 2,
    image: mock2,
    title: "Camiseta Edición Especial",
    description: "Camiseta negra con el logo en versión especial.",
  },
  {
    id: 3,
    image: mock3,
    title: "Camiseta Logo Minimalista",
    description: "Camiseta gris con logo minimalista.",
  },
];

// Component for rendering cards
const MockupCards = () => {
  return (
    <Container>
      {mockups.map((mockup) => (
        <Card
          key={mockup.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={mockup.image} alt={mockup.title} />
          <h3>{mockup.title}</h3>
          <p>{mockup.description}</p>
        </Card>
      ))}
    </Container>
  );
};

export default MockupCards;
