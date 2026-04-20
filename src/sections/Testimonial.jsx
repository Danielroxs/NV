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
      role: "Ing. Química",
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
      name: "José P.",
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

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="mx-auto w-full max-w-[1500px] px-3 py-10 text-center sm:px-4 sm:py-12 md:px-6 lg:px-8 lg:py-16 xl:px-10">
      <div className="mb-8 sm:mb-10">
        <FadeInText
          text="Testimonios"
          tagName="h2"
          className="text-4xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 bg-clip-text sm:text-5xl"
        />
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
          Historias reales de personas que han transformado su salud, su
          rendimiento y su confianza con el acompañamiento de Neri Villeda.
        </p>
      </div>

      <div className="mx-auto w-full max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[30px] border border-white/50 bg-anti-flash-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0"
                role="article"
                aria-label={`Testimonio de ${testimonial.name}`}
              >
                <div className="flex flex-col items-center px-5 py-8 text-center sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-14">
                  <div className="relative mb-6 h-24 w-24 sm:h-28 sm:w-28 md:mb-8 md:h-36 md:w-36 lg:h-40 lg:w-40">
                    <div className="absolute inset-0 rotate-6 rounded-full bg-blue-100" />
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="relative h-full w-full rounded-full border-4 border-white object-cover shadow-xl sm:border-6"
                      onError={(e) => {
                        e.target.src = test1;
                      }}
                    />
                  </div>

                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      {testimonial.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-blue-600 sm:text-base">
                      {testimonial.role}
                    </p>
                  </div>

                  <div className="relative mx-auto w-full max-w-3xl">
                    <FaQuoteLeft className="absolute -top-3 left-1 hidden text-3xl text-blue-100 sm:block md:-top-6 md:-left-4 md:text-5xl" />
                    <p className="text-base italic leading-8 text-gray-600 sm:px-6 sm:text-lg sm:leading-8 md:px-10 md:text-xl md:leading-9">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goToPrevious}
            aria-label="Testimonio anterior"
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-3 text-gray-700 shadow-md transition hover:bg-white sm:inline-flex"
          >
            <span className="text-lg">‹</span>
          </button>

          <button
            onClick={goToNext}
            aria-label="Siguiente testimonio"
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-3 text-gray-700 shadow-md transition hover:bg-white sm:inline-flex"
          >
            <span className="text-lg">›</span>
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 sm:mt-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              aria-label={`Ver testimonio de ${testimonial.name}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-blue-500"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
