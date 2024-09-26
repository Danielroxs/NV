import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

const TestimonialGallery = () => {
  const testimonials = [
    // ... tus datos de testimonios ...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  // ... resto del código (manejo de estado, eventos, etc.) ...

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <div
          className={`flex items-center justify-center h-96 transition duration-500 ease-in-out transform ${
            currentIndex === 0
              ? "translate-x-0"
              : currentIndex === testimonials.length - 1
              ? `translate-x-${testimonials.length * 100}%`
              : `translate-x-${-(currentIndex + 1) * 100}%`
          }`}
        >
          {/* Contenido de los testimonios */}
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute top-0 left-0 w-full h-full opacity-0 transition duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : ""
              }`}
            >
              {/* Contenido del testimonio individual */}
            </div>
          ))}

          {/* Botones de navegación */}
        </div>
        {/* Botón de play/pause */}
      </div>
    </div>
  );
};

export default TestimonialGallery;
