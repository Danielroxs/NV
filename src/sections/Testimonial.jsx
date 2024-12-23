import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import test1 from "../assets/images/test1.webp";
import test2 from "../assets/images/test2.webp";
import test3 from "../assets/images/test3.webp";
import test4 from "../assets/images/test4.webp";
import test5 from "../assets/images/test5.webp";
import FadeInText from "../components/Motion";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mary Mercado",
      role: "Ing. Quimica",
      content:
        "Formar parte del team NV cambió mi vida por completo. Aprendí a ser paciente y persistente, a ignorar críticas y mantener mis objetivos. Gracias al apoyo recibido, ahora tengo la seguridad de que puedo cumplir mis sueños y ser la mejor versión de mí misma.",
      avatar: test1,
    },
    {
      id: 2,
      name: "Alejandro Zavala",
      role: "Atleta en Lima Lama",
      content:
        "Unirme al team ha sido una experiencia transformadora. Me siento en mejor forma física, lo que me ayudó enormemente durante mi etapa como peleador. Además, he notado cambios positivos tanto en mi salud como en mi bienestar general. ¡Gracias por todo el apoyo!",
      avatar: test2,
    },
    {
      id: 3,
      name: "Dulce H.",
      role: "Atleta NV",
      content:
        "Gracias a Neri, he mejorado mucho mi rendimiento deportivo. Su guía en nutrición y sus rutinas personalizadas no solo me han ayudado a superar mis límites físicos, sino también a alcanzar metas que antes creía imposibles.",
      avatar: test3,
    },
    {
      id: 4,
      name: "José p.",
      role: "Atleta NV",
      content:
        "Desde el primer día, Neri Villeda me recibió con amabilidad y me ayudó a superar mis límites. Siempre me motivó a dar lo mejor de mí y vio en mí un potencial inmenso. Después de un año y medio, gracias a él he transformado mi físico, mi mentalidad y mi actitud. ¡Orgullosamente atleta NV!",
      avatar: test4,
    },
    {
      id: 5,
      name: "Alfredo V.",
      role: "Marketing",
      content:
        "Ser parte del team NV en Muscle Machine cambió mi vida. Encontré disciplina, motivación y un lugar donde mejorar física y mentalmente. Gracias al gym, construí una versión de mí que nunca imaginé. ¡Orgullosamente atleta NV!",
      avatar: test5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <FadeInText text="Testimonios" tagName="h2" />
      <div className="container md:max-w-screen-lg sm:max-w-screen-sm lg:max-w-screen-lg mx-auto px-4">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl bg-anti-flash-white shadow-xl">
          <div
            className="transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                  role="article"
                  aria-label={`Testimonial by ${testimonial.name}`}
                >
                  <div className="md:p-12 lg:p-14 p-10 flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-8">
                      <div className="absolute inset-0 bg-blue-100 rounded-full transform rotate-6"></div>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="relative w-full h-full rounded-full object-cover border-6 border-white shadow-xl"
                        onError={(e) => {
                          e.target.src = test1;
                        }}
                      />
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="relative max-w-2xl mx-auto">
                      <FaQuoteLeft className="text-5xl text-blue-100 absolute -top-8 -left-8" />
                      <p className="text-xl text-gray-600 leading-relaxed italic pl-8">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCarousel;
