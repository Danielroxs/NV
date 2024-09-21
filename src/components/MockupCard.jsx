import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import mock1 from "../images/mock1.jpg";
import mock2 from "../images/mock2.jpg";
import mock3 from "../images/mock3.jpg";
import mock6 from "../images/mock6.jpg";
import WhatsappButton from "./WaButtonNormal";

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

// Actualiza el contenedor principal para incluir el fondo SVG
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 40px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjE0NDAiIGhlaWdodD0iNTYwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB2aWV3Qm94PSIwIDAgMTQ0MCA1NjAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMTUuMjgiIHkxPSItMzkuMjkiIHgyPSI4NC43MiIgeTI9IjEzOS4yOSIgaWQ9IlN2Z2pzTGluZWFyR3JhZGllbnQxMDAzIj48c3RvcCBzdG9wLWNvbG9yPSIjMGUyYTQ3IiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDA0NTllIiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBtYXNrPSJ1cmwoI1N2Z2pzTWFzazEwMDIpIiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1NjAiIGZpbGw9InVybCgjU3ZnanNMaW5lYXJHcmFkaWVudDEwMDMpIi8+PHBhdGggZD0iTTE0NDAgMEw3MzYuNzkgMEwxNDQwIDE4MC40MXoiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpIi8+PHBhdGggZD0iTTczNi43OSAwTDE0NDAgMTgwLjQxTDE0NDAgMjMwLjI5TDY4OS4zNyAweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAuMDc1KSIvPjxwYXRoIGQ9Ik02ODkuMzcgMEwxNDQwIDIzMC4yOUwxNDQwIDM3Ni40OUw1MjguNjUgMHoiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1KSIvPjxwYXRoIGQ9Ik01MjguNjUgMEwxNDQwIDM3Ni40OUwxNDQwIDQwMS40OUwzMjcuODQ5OTk5OTk3IDB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIC4wMjUpIi8+PHBhdGggZD0iTTAgNTYwTDM3NS42NCA1NjBMMCwgMzMyLjEyeiIgZmlsbD0icmdiYSgwLCAwLCAwLCAuMSkiLz48cGF0aCBkPSJNMCAzMzIuMTJMMzc1LjY0IDU2MEw4MDEuMSA1NjBMMCwgMTcyLjkiIHN0eWxlPSJmaWxsOnJnYmEoMCwgMCwgMCwgLjA3NSkiLz48cGF0aCBkPSJNIDAgMTcyLjk5OTk5OTk5TCA4MDEuMSA1NjBMIDg4Mi42MyA1NjBMMCwgMTUzLjkxeiIgZmlsbD0icmdiYSgwLCAwLCAwLCAuMDUpIi8+PHBhdGggZD0iTSAwIDE1My45MSBMIDg4Mi42MyA1NjBMIDEwMjMuMyA1NjBMMCwgMTUxLjg2OTk5OTk4IHoiIGZpbGw9InJnYmEoMCwgMCwgMCwgLjAyNSkiLz48L2c+PC9zdmc+");
  background-size: cover;
`;

// Button container styles
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// Data for mockups
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
  const message = "¡Quiero comprar una camiseta!";
  const contact = "¡Quiero la mia!";

  return (
    <>
      <div className="text-center text-4xl font-bold font-palanquin">
        <h2 className="text-gray-500 mb-8">Tienda NV</h2>
      </div>
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
      <ButtonContainer>
        <WhatsappButton message={message} contact={contact} />
      </ButtonContainer>
    </>
  );
};

export default MockupCards;
