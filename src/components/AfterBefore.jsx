import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TransformationGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transformations = [
    {
      id: 1,
      name: "Carlos Pérez",
      beforeImage:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
      afterImage:
        "https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd",
      description:
        "Carlos quería perder 20 kilos y mejorar su resistencia física. Con un plan nutricional personalizado y sesiones de entrenamiento intenso, logró su objetivo en 5 meses, reduciendo su porcentaje de grasa corporal y aumentando su energía.",
    },
    {
      id: 2,
      name: "Laura García",
      beforeImage:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2",
      afterImage:
        "https://images.unsplash.com/photo-1579758629938-03607ccdbaba",
      description:
        "Laura buscaba tonificar su cuerpo y ganar fuerza. A través de nuestro programa de entrenamiento y alimentación, logró un aumento significativo en su masa muscular y mejoró su postura y movilidad en 6 meses.",
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      beforeImage:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883",
      afterImage:
        "https://images.unsplash.com/photo-1610969524483-1a3954632a9e",
      description:
        "Ana quería bajar 10 kilos y adoptar un estilo de vida más saludable. Con una dieta equilibrada y entrenamiento cardiovascular, logró alcanzar su meta en solo 4 meses, sintiéndose más fuerte y llena de energía.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? transformations.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === transformations.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Transformaciones NV
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="flex items-center justify-center mb-4">
            <img
              src={transformations[currentIndex].beforeImage}
              alt={`${transformations[currentIndex].name} before`}
              className="w-1/2 h-64 object-cover rounded-l-lg"
            />
            <img
              src={transformations[currentIndex].afterImage}
              alt={`${transformations[currentIndex].name} after`}
              className="w-1/2 h-64 object-cover rounded-r-lg"
            />
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
            aria-label="Previous transformation"
          >
            <FaArrowLeft className="text-gray-800" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
            aria-label="Next transformation"
          >
            <FaArrowRight className="text-gray-800" />
          </button>
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold mb-2">
            {transformations[currentIndex].name}
          </h2>
          <p className="text-gray-600">
            {transformations[currentIndex].description}
          </p>
        </div>
        <div className="flex justify-center mt-4">
          {transformations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-label={`Go to transformation ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransformationGallery;
