import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    text: "This product has revolutionized our workflow. It's incredibly efficient and user-friendly.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer, CreativeCo",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    text: "The design capabilities are unmatched. It's been a game-changer for our creative process.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Developer, CodeCraft",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    text: "As a developer, I appreciate the robust features and smooth integration. Highly recommended!",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleDragStart = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging || !isMobile) return;
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    setCurrentX(clientX - startX);
  };

  const handleDragEnd = () => {
    if (!isMobile) return;
    setIsDragging(false);
    if (Math.abs(currentX) > 20) {
      if (currentX > 0) {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
      } else {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }
    }
    setCurrentX(0);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg shadow-lg">
      <div
        ref={sliderRef}
        className={`overflow-hidden ${isMobile ? "cursor-grab" : ""}`}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${
              currentIndex * 100
            }% + ${currentX}px))`,
            transition: isDragging ? "none" : "transform 500ms ease-in-out",
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 p-4 flex flex-col md:flex-row items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-8 shadow-md"
              />
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg md:text-xl font-medium mb-2">
                  "{testimonial.text}"
                </p>
                <p className="text-base md:text-lg font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!isMobile && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-blue-500" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-blue-500" />
          </button>
        </>
      )}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center mt-8">
        <button
          onClick={handlePlayPause}
          className="bg-white p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={
            isPlaying ? "Pause testimonial slider" : "Play testimonial slider"
          }
        >
          {isPlaying ? (
            <FaPause className="text-blue-500" />
          ) : (
            <FaPlay className="text-blue-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
