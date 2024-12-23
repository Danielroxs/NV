import React, { useState, useRef, useEffect } from "react";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import B1 from "../assets/images/B1.webp";
import A1 from "../assets/images/A1.webp";
import B2 from "../assets/images/B2.webp";
import A2 from "../assets/images/A2.webp";
import A3 from "../assets/images/A3.webp";
import test3 from "../assets/images/test3.webp";
import B3 from "../assets/images/B3.webp";
import B4 from "../assets/images/B4.webp";
import A4 from "../assets/images/A4.webp";
import test1 from "../assets/images/test1.webp";
import B5 from "../assets/images/B5.webp";
import A5 from "../assets/images/A5.webp";
import B6 from "../assets/images/B6.webp";
import test5 from "../assets/images/test5.webp";
import B7 from "../assets/images/B7.webp";
import A7 from "../assets/images/A7.webp";
import test2 from "../assets/images/test2.webp";
import B8 from "../assets/images/B8.webp";
import A8 from "../assets/images/A8.webp";
import B9 from "../assets/images/B9.webp";
import A9 from "../assets/images/A9.webp";
import test4 from "../assets/images/test4.webp";
import FadeInText from "./Motion";

const TransformationGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const transformations = [
    {
      beforeImage: B1,
      afterImage: A1,
      patientName: "Neri Villeda",
      description:
        "Gane 13 kilos de masa muscular combinando una dieta balanceada y ejercicio constante. Me siento con más energía y en mejor forma que nunca.",
    },
    {
      beforeImage: B2,
      afterImage: A2,
      patientName: "Sandra V.",
      description:
        "Hice un cambio total en mi alimentación, dejando atrás los alimentos procesados y optando por comidas completas, frescas y llenas de nutrientes. ¡Me siento mucho mejor y con más vitalidad!",
    },
    {
      beforeImage: B3,
      afterImage: test3,
      patientName: "Dulce H.",
      description:
        "Aumenté masa muscular en piernas, definí mi cintura y mi calidad de vida mejoró. Ahora me siento más fuerte y con más energía.",
    },
    {
      beforeImage: B4,
      afterImage: test1,
      patientName: "Mary Mercado",
      description:
        "Aumenté masa muscular y ahora estoy en mi mejor versión física. Me siento más fuerte, saludable y segura de mí misma.",
    },
    {
      beforeImage: B5,
      afterImage: A5,
      patientName: "Antonio Villegas",
      description:
        "Unirme al team NV transformó mi vida. Encontré disciplina, motivación y un lugar para crecer física y mentalmente. ¡Orgullosamente NV!",
    },
    {
      beforeImage: B6,
      afterImage: test5,
      patientName: "Alfredo Villegas",
      description:
        "Hice un cambio total en mi estilo de vida. No solo mejoré mi alimentación con alimentos frescos, sino que también comencé a entrenar de manera constante. Mi energía aumentó y mi cuerpo se siente más fuerte y saludable.",
    },
    {
      beforeImage: B7,
      afterImage: test2,
      patientName: "Alejandro Zavala",
      description:
        "El entrenamiento físico fue esencial para mi transformación. Aumenté la intensidad de mis rutinas y cambié mi dieta, eliminando productos procesados. Ahora tengo más fuerza, resistencia y una salud envidiable.",
    },
    {
      beforeImage: B8,
      afterImage: A8,
      patientName: "Carlos Villa",
      description:
        "Combiné un entrenamiento físico regular con una alimentación más natural y nutritiva. Gracias a esto, mi cuerpo se volvió más tonificado, me siento más vital y he ganado mucha más energía para mis actividades diarias.",
    },
    {
      beforeImage: B9,
      afterImage: test4,
      patientName: "José p.",
      description:
        "Desde el primer día, Neri Villeda me recibió con amabilidad y me ayudó a superar mis límites. Después de un año y medio, gracias a él he transformado mi físico, mi mentalidad y mi actitud. ¡Orgullosamente atleta NV!",
    },
  ];

  const handleMouseDown = (e) => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newPosition =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, newPosition)));
    }
  };

  const handleTouchMove = (e) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newPosition =
        ((e.touches[0].clientX - containerRect.left) / containerRect.width) *
        100;
      setSliderPosition(Math.max(0, Math.min(100, newPosition)));
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchEnd = () => {
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  };

  const nextTransformation = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === transformations.length - 1 ? 0 : prevIndex + 1
    );
    setSliderPosition(50);
  };

  const prevTransformation = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? transformations.length - 1 : prevIndex - 1
    );
    setSliderPosition(50);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("mousedown", handleMouseDown);
      slider.addEventListener("touchstart", handleTouchStart);

      return () => {
        slider.removeEventListener("mousedown", handleMouseDown);
        slider.removeEventListener("touchstart", handleTouchStart);
      };
    }
  }, []);

  const currentTransformation = transformations[currentIndex];

  return (
    <div className="max-w-4xl text-center container mx-auto px-4">
      <FadeInText
        text="Transformaciones NV"
        tagName="h2"
        className="font-roboto text-4xl font-bold text-gray-700 md:mb-6 mb-4"
      />
      <div className="flex justify-center">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 xl:w-2/3"
          ref={containerRef}
        >
          <div className="relative w-full h-[400px] md:h-[600px]">
            {" "}
            {/* Aseguramos que el contenedor tenga una altura fija (h-96) */}
            <img
              src={currentTransformation.afterImage}
              alt="Before"
              className="w-full h-full object-cover" // Se asegura que la imagen cubra todo el contenedor
            />
            <div
              className="absolute top-0 right-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={currentTransformation.beforeImage}
                alt="After"
                className="absolute top-0 left-0 w-full h-full object-cover" // Asegura la misma escala para ambas imágenes
              />
            </div>
            <div
              ref={sliderRef}
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `calc(${sliderPosition}% - 1px)` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                <FaArrowRightArrowLeft className="text-gray-800 text-2xl" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
            <button
              aria-label="Anterior"
              onClick={prevTransformation}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <MdOutlineSkipPrevious className="text-gray-800 text-xl" />
            </button>
            <button
              aria-label="Siguiente"
              onClick={nextTransformation}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <MdOutlineSkipNext className="text-gray-800 text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-anti-flash-white rounded-lg shadow-md p-4 max-w-md mx-auto">
        <h3 className="text-2xl font-semibold mb-2">
          {currentTransformation.patientName}
        </h3>
        <p className="text-gray-600">{currentTransformation.description}</p>
      </div>
    </div>
  );
};

export default TransformationGallery;
