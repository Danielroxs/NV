import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import T1 from "../assets/images/T1.webp";
import T2 from "../assets/images/T2.webp";
import T3 from "../assets/images/T3.webp";
import FadeInText from "./Motion";

const ShirtGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedShirt, setSelectedShirt] = useState(null);
  const [error, setError] = useState("");
  const [autoPlay, setAutoPlay] = useState(true);

  const shirts = [
    {
      id: 1,
      name: "Camiseta Blanca Clásica",
      price: "$19.99", // Se añade un precio estimado
      image: T1, // Reemplazar con el valor de la constante T1
      sizes: ["S", "M", "L", "XL"], // Tamaños genéricos
      colors: ["Blanco"], // Color basado en la descripción
      description:
        "Una camiseta blanca atemporal que nunca pasa de moda. Perfecta para cualquier ocasión casual.",
      availability: true, // Se asume que está disponible
    },
    {
      id: 2,
      name: "Camiseta Negra Vintage",
      price: "$22.99", // Precio estimado
      image: T2, // Reemplazar con la constante T2
      sizes: ["S", "M", "L"],
      colors: ["Negro"], // Basado en la descripción
      description:
        "Una camiseta negra clásica con un toque vintage. Ideal para llevar en capas o usar sola.",
      availability: true,
    },
    {
      id: 3,
      name: "Camiseta con Estampado Gráfico",
      price: "$24.99",
      image: T3, // Reemplazar con la constante T3
      sizes: ["M", "L", "XL"],
      colors: ["Multicolor"], // No específico, se puede usar este término
      description:
        "Exprésate con esta camiseta de estampado gráfico llamativo. Destácate entre la multitud.",
      availability: true,
    },
    {
      id: 4,
      name: "Camiseta Rayada",
      price: "$21.99",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      sizes: ["S", "M", "L"],
      colors: ["Blanco y Azul"],
      description:
        "Una camiseta rayada de inspiración náutica. Perfecta para un día casual o un viaje a la playa.",
      availability: true,
    },
  ];

  useEffect(() => {
    let interval;
    if (autoPlay && !showModal) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, showModal]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === shirts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shirts.length - 1 : prevIndex - 1
    );
  };

  const handleShirtClick = (shirt) => {
    setSelectedShirt(shirt);
    setShowModal(true);
    setSelectedSize("");
    setSelectedColor("");
    setError("");
    setAutoPlay(false);
  };

  const handleWhatsAppClick = () => {
    if (!selectedSize || !selectedColor) {
      setError("Please select both size and color before proceeding");
      return;
    }
    const message = `Hola, Estoy interesado en la T-Shirt ${selectedShirt.name} (Size: ${selectedSize}, Color: ${selectedColor}), Precio: ${selectedShirt.price}`;
    const whatsappUrl = `https://wa.me/+525561706548?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setAutoPlay(true);
  };

  return (
    <div
      className="container mx-auto px-6 py-12 max-w-7xl"
      style={{ minHeight: "auto" }}
    >
      <FadeInText
        text="T-Shirt NV"
        tagName="h2"
        className="font-roboto text-4xl font-bold text-gray-700 md:mb-6 mb-4 text-center"
      />
      <div className="relative md:h-[600px] h-[400px] md:max-w-screen-lg sm:max-w-screen-sm lg:max-w-screen-lg mx-auto overflow-hidden bg-anti-flash-white rounded-3xl shadow-xl flex items-center justify-center">
        <div className="relative md:h-[650px] h-[400px] w-full overflow-hidden bg-anti-flash-white rounded-3xl shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center ">
            <button
              onClick={handlePrevious}
              className="absolute left-4 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white focus:outline-none"
              aria-label="Previous shirt"
            >
              <MdKeyboardArrowLeft className="w-6 h-6" />
            </button>

            <motion.img
              key={shirts[currentIndex].id}
              src={shirts[currentIndex].image}
              alt={shirts[currentIndex].name}
              className="w-full h-full object-cover rounded-3xl"
              onClick={() => handleShirtClick(shirts[currentIndex])}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            />

            <button
              onClick={handleNext}
              className="absolute right-4 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white focus:outline-none"
              aria-label="Next shirt"
            >
              <MdKeyboardArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showModal && selectedShirt && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="absolute top-0 right-0 pt-4 pr-4">
                      <button
                        onClick={handleCloseModal}
                        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        <IoMdClose className="h-6 w-6" />
                      </button>
                    </div>

                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        {selectedShirt.name}
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {selectedShirt.description}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-gray-900">
                          {selectedShirt.price}
                        </p>
                        <div className="mt-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Select Size:
                          </label>
                          <div className="mt-2 flex gap-2">
                            {selectedShirt.sizes.map((size) => (
                              <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-4 py-2 rounded-md ${
                                  selectedSize === size
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-800"
                                } hover:bg-blue-500 hover:text-white transition-colors`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Select Color:
                            </label>
                            <div className="mt-2 flex gap-2">
                              {selectedShirt.colors.map((color) => (
                                <button
                                  key={color}
                                  onClick={() => setSelectedColor(color)}
                                  className={`px-4 py-2 rounded-md ${
                                    selectedColor === color
                                      ? "bg-blue-600 text-white"
                                      : "bg-gray-200 text-gray-800"
                                  } hover:bg-blue-500 hover:text-white transition-colors`}
                                >
                                  {color}
                                </button>
                              ))}
                            </div>
                          </div>
                          {error && (
                            <p className="mt-2 text-sm text-red-600">{error}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      <FaWhatsapp className="mr-2 h-5 w-5" />
                      Contact on WhatsApp
                    </button>
                    <button
                      onClick={handleCloseModal}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ShirtGallery;
