import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    content:
      "This product has revolutionized our workflow. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer, CreativeCo",
    content:
      "The user interface is intuitive and beautifully designed. A joy to use!",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Developer, CodeMasters",
    content:
      "The API integration was seamless. It saved us weeks of development time.",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    resetInterval();
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    resetInterval();
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  const handleDragStart = (e) => {
    setDragStart(e.clientX);
  };

  const handleDragMove = (e) => {
    setDragEnd(e.clientX);
  };

  const handleDragEnd = () => {
    if (dragStart - dragEnd > 75) {
      handleNext();
    }
    if (dragStart - dragEnd < -75) {
      handlePrev();
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-xl">
      <div
        className="p-8 md:p-12"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8"
          >
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="text-white text-center md:text-left">
              <p className="text-lg md:text-xl font-medium italic mb-4">
                "{testimonials[currentIndex].content}"
              </p>
              <h3 className="text-xl md:text-2xl font-bold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm md:text-base">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 md:block hidden"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-2 rounded-full bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          {isPaused ? (
            <FaPlay className="w-6 h-6" />
          ) : (
            <FaPause className="w-6 h-6" />
          )}
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 md:block hidden"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
