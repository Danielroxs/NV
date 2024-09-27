import React from "react";
import { FaDumbbell, FaAppleAlt, FaBolt } from "react-icons/fa";

const CombinedBenefits = () => {
  const sendMessage = (message) => {
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  const whatsappNumber = "+525538075005";

  return (
    <div className="container mx-auto px-4 py-16 lg:text-left text-center">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Beneficios Combinados con Neri Villeda
          </h2>
          <p className="text-lg mb-6 text-gray-600">
            Experimenta el poder de combinar planes de nutrición personalizados
            con entrenamiento físico experto. El enfoque holístico de Neri
            Villeda conduce a resultados transformadores.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaDumbbell className="text-green-500 text-2xl mr-4" />
              <span className="text-gray-700">
                Mejora en el rendimiento físico y la fuerza
              </span>
            </div>
            <div className="flex items-center">
              <FaAppleAlt className="text-red-500 text-2xl mr-4" />
              <span className="text-gray-700">
                Nutrición optimizada para una mejor salud
              </span>
            </div>
            <div className="flex items-center">
              <FaBolt className="text-yellow-500 text-2xl mr-4" />
              <span className="text-gray-700">
                Aumento de energía y vitalidad
              </span>
            </div>
          </div>
          <button
            onClick={() =>
              sendMessage(
                "Me gustaría obtener más información para empezar mi vida Fitness"
              )
            }
            className="mt-8 bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Comienza Tu Viaje
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Neri Villeda en acción"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CombinedBenefits;
