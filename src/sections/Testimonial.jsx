/* import React from "react";
import { testimonials } from "../constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-4xl ">
        <h2 className="text-4xl font-bold text-center text-gray-500 mb-12">
          Clientes Satisfechos
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-6">
                <img
                  src={testimonial.image}
                  alt={`Antes y despues de: ${testimonial.name}`}
                  className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-2"
                />
                <div className="md:ml-6 md:text-left text-center ">
                  <h3 className="text-2xl font-semibold  text-gray-800 mb-2">
                    {testimonial.name}
                  </h3>
                  <p className=" mb-2">{testimonial.quote}</p>

                  <div className="flex md:mt-2 justify-center text-yellow-500">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
 */

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Fulanito",
    text: "¡Los planes personalizados de Neri transformaron por completo mi salud! Nunca me he sentido más fuerte ni con más energía. ¡Lo recomiendo mucho!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 2,
    name: "Sutanito",
    text: "Gracias a Neri, logré mis objetivos de fitness más rápido de lo que pensé. La combinación de nutrición y entrenamiento fue un cambio total.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 3,
    name: "Menganito",
    text: "Estoy muy agradecida por el apoyo de Neri. Su enfoque holístico me ayudó a mejorar mi bienestar y alcanzar mis metas personales.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

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
    <div className="relative w-full max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-8 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 text-center">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <FaChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <FaChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
