import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, TechCorp",
      content:
        "This product has revolutionized our workflow. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Marketing Director, InnovateCo",
      content:
        "The customer support is outstanding. They've exceeded our expectations.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "CTO, FutureTech",
      content:
        "The innovative features have given us a competitive edge in the market.",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prevTestimonial();
    } else if (e.key === "ArrowRight") {
      nextTestimonial();
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextTestimonial();
    }

    if (touchStart - touchEnd < -75) {
      prevTestimonial();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="font-roboto text-4xl font-bold text-gray-700 mb-10 text-center">
        Cientes Satisfechos
      </h1>
      <div
        ref={sliderRef}
        className="relative bg-white rounded-lg shadow-lg overflow-hidden"
        tabIndex="-1"
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label="Testimonial Slider"
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 p-8 flex flex-col items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 italic text-center mb-4">
                "{testimonial.content}"
              </p>
              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>

        <button
          onClick={prevTestimonial}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="text-gray-600" />
        </button>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 focus:outline-none ${
                index === currentIndex ? "bg-indigo-500" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
