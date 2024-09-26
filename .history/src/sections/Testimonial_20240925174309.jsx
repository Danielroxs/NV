import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

const TestimonialGallery = () => {
  const testimonials = [
    // ... your testimonials data
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

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
          {/* Testimonial content */}
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute top-0 left-0 w-full h-full opacity-0 transition duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : ""
              }`}
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-xl font-semibold mb-2">{testimonial.name}</p>
              <p className="text-gray-600 italic">{testimonial.message}</p>
            </div>
          ))}

          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-blue-500" />
          </button>
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
