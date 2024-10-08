import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import T1 from "../assets/images/T1.webp";
import T2 from "../assets/images/T2.webp";
import T3 from "../assets/images/T3.webp";
import FadeInText from "./Motion";

const Tienda = () => {
  const tShirts = [
    {
      id: 1,
      name: "Camiseta Blanca Clásica",
      image: T1,
      description:
        "Una camiseta blanca atemporal que nunca pasa de moda. Perfecta para cualquier ocasión casual.",
    },
    {
      id: 2,
      name: "Camiseta Negra Vintage",
      image: T2,
      description:
        "Una camiseta negra clásica con un toque vintage. Ideal para llevar en capas o usar sola.",
    },
    {
      id: 3,
      name: "Camiseta con Estampado Gráfico",
      image: T3,
      description:
        "Exprésate con esta camiseta de estampado gráfico llamativo. Destácate entre la multitud.",
    },
    {
      id: 4,
      name: "Camiseta Rayada",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description:
        "Una camiseta rayada de inspiración náutica. Perfecta para un día casual o un viaje a la playa.",
    },
  ];

  const [selectedTShirt, setSelectedTShirt] = useState(null);

  const sendMessage = (message) => {
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  const whatsappNumber = "+525561706548";

  const handleTShirtClick = (id) => {
    setSelectedTShirt(selectedTShirt === id ? null : id);
  };

  return (
    <div className="text-center lg:text-start container mx-auto px-6 py-12 max-w-7xl">
      <FadeInText
        text="T-Shirt NV"
        tagName="h2"
        className="font-roboto text-4xl font-bold text-gray-700 md:mb-6 mb-4 text-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {tShirts.map((tShirt) => (
          <div
            key={tShirt.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 relative cursor-pointer"
            onClick={() => handleTShirtClick(tShirt.id)}
          >
            <img
              loading="lazy"
              src={tShirt.image}
              alt={tShirt.name}
              className="w-full h-80 object-cover transition-opacity duration-300 ease-in-out"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {tShirt.name}
              </h2>
            </div>
            <div
              className={`absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
                selectedTShirt === tShirt.id
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <p className="text-white text-center px-4 py-2">
                {tShirt.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <button
          onClick={() =>
            sendMessage("Me gustaría adquirir mi Camiseta Team NV")
          }
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
          aria-label="Contactanos en Whatsapp"
        >
          <FaWhatsapp className="mr-3 text-2xl" />
          Quiero la mia!
        </button>
      </div>
    </div>
  );
};

export default Tienda;
