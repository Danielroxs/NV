import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Tienda = () => {
  const tShirts = [
    {
      id: 1,
      name: "Camiseta Blanca Clásica",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description:
        "Una camiseta blanca atemporal que nunca pasa de moda. Perfecta para cualquier ocasión casual.",
    },
    {
      id: 2,
      name: "Camiseta Negra Vintage",
      image:
        "https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description:
        "Una camiseta negra clásica con un toque vintage. Ideal para llevar en capas o usar sola.",
    },
    {
      id: 3,
      name: "Camiseta con Estampado Gráfico",
      image:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
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

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/525538975005", "_blank");
  };

  const handleTShirtClick = (id) => {
    setSelectedTShirt(selectedTShirt === id ? null : id);
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      <h1 className="text-4xl font-bold text-center mb-10">T-Shirt NV</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {tShirts.map((tShirt) => (
          <div
            key={tShirt.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 relative cursor-pointer"
            onClick={() => handleTShirtClick(tShirt.id)}
          >
            <img
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
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
          aria-label="Contact Us on WhatsApp"
        >
          <FaWhatsapp className="mr-3 text-2xl" />
          Quiero la mia!
        </button>
      </div>
    </div>
  );
};

export default Tienda;
