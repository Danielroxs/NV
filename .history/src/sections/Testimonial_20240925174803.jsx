import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

const TestimonialGallery = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      message:
        "¡Un servicio absolutamente fantástico! No podría estar más feliz con los resultados.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Jane Smith",
      message:
        "El equipo superó todas mis expectativas. ¡Realmente impresionada!",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Mike Johnson",
      message:
        "Calidad excepcional y atención al detalle. Recomiendo mucho sus servicios.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextIndex, setNextIndex] = useState(currentIndex); // Controlar el siguiente índice
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 6000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const handlePrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setNextIndex(
        currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
      );
      setTimeout(() => {
        setCurrentIndex(
          currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
        );
        setIsTransitioning(false);
      }, 500); // Tiempo de la animación
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setNextIndex((currentIndex + 1) % testimonials.length);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 500); // Tiempo de la animación
    }
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-center h-96 relative">
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-blue-500" />
          </button>

          {/* Slide actual */}
          <div
            className={`text-center p-8 transition-all duration-500 ease-in-out absolute w-full transform ${
              isTransitioning
                ? "opacity-0 -translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <img
              src={testimonials[currentIndex].image}
              alt={`${testimonials[currentIndex].name}'s profile`}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-xl font-semibold mb-2">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-gray-600 italic">
              "{testimonials[currentIndex].message}"
            </p>
          </div>

          {/* Siguiente slide (ya preparado pero oculto) */}
          <div
            className={`text-center p-8 transition-all duration-500 ease-in-out absolute w-full transform ${
              isTransitioning
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <img
              src={testimonials[nextIndex].image}
              alt={`${testimonials[nextIndex].name}'s profile`}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-xl font-semibold mb-2">
              {testimonials[nextIndex].name}
            </p>
            <p className="text-gray-600 italic">
              "{testimonials[nextIndex].message}"
            </p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-blue-500" />
          </button>
        </div>

        <button
          onClick={togglePlayPause}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={
            isPlaying
              ? "Pause testimonial carousel"
              : "Play testimonial carousel"
          }
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default TestimonialGallery;
