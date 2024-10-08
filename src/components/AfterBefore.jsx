import React, { useState, useRef, useEffect } from "react";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import B1 from "../assets/images/B1.webp";
import A1 from "../assets/images/A1.webp";
import B2 from "../assets/images/B2.webp";
import A2 from "../assets/images/A2.webp";
import A3 from "../assets/images/A3.webp";
import B3 from "../assets/images/B3.webp";
import B4 from "../assets/images/B4.webp";
import A4 from "../assets/images/A4.webp";
import B5 from "../assets/images/B5.webp";
import A5 from "../assets/images/A5.webp";
import B6 from "../assets/images/B6.webp";
import A6 from "../assets/images/A6.webp";
import B7 from "../assets/images/B7.webp";
import A7 from "../assets/images/A7.webp";
import B8 from "../assets/images/B8.webp";
import A8 from "../assets/images/A8.webp";
import B9 from "../assets/images/B9.webp";
import A9 from "../assets/images/A9.webp";
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
      patientName: "John Doe",
      description:
        "Lost 30 pounds in 3 months through a combination of diet and exercise.",
    },
    {
      beforeImage: B2,
      afterImage: A2,
      patientName: "Jane Smith",
      description:
        "Gained 15 pounds of muscle mass in 6 months with strength training.",
    },
    {
      beforeImage: B3,
      afterImage: A3,
      patientName: "Alice Johnson",
      description:
        "Transformed her diet from processed foods to whole, nutrient-rich meals.",
    },
    {
      beforeImage: B4,
      afterImage: A4,
      patientName: "Mary Mercado",
      description:
        "Transformed her diet from processed foods to whole, nutrient-rich meals.",
    },
    {
      beforeImage: B5,
      afterImage: A5,
      patientName: "Antonio Villegas",
      description:
        "Transformed her diet from processed foods to whole, nutrient-rich meals.",
    },
    {
      beforeImage: B6,
      afterImage: A6,
      patientName: "Alfredo villegas",
      description:
        "Transformed her diet from processed foods to whole, nutrient-rich meals.",
    },
    {
      beforeImage: B7,
      afterImage: A7,
      patientName: "Alejandro Zavala",
      description:
        "Transformed her diet from processed foods to whole, nutrient-rich meals.",
    },
    {
      beforeImage: B8,
      afterImage: A8,
      patientName: "Carlos Villa",
      description:
        "Transformed her diet from processed foods to whole, nutrient-rich meals.",
    },
    {
      beforeImage: B9,
      afterImage: A9,
      patientName: "Ernesto Villa",
      description:
        "Transformed her diet from processed foods to whole, nutrient-rich meals.",
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
    <div className="max-w-4xl text-center mx-auto p-4">
      <FadeInText
        text="Transformaciones NV"
        tagName="h2"
        className="font-roboto text-4xl font-bold text-gray-700 md:mb-6 mb-4"
      />
      <div className="flex justify-center">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg w-full md:w-1/2 lg:w-6/12"
          ref={containerRef}
        >
          <div className="relative w-full h-full">
            <img
              src={currentTransformation.afterImage}
              alt="Before"
              className=" w-full h-full object-cover"
            />
            <div
              className="absolute top-0 right-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={currentTransformation.beforeImage}
                alt="After"
                className="absolute top-0 left-0 w-full h-full object-cover"
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
      <div className="mt-6 bg-white rounded-lg shadow-md p-4 max-w-md mx-auto">
        <h3 className="text-2xl font-semibold mb-2">
          {currentTransformation.patientName}
        </h3>
        <p className="text-gray-600">{currentTransformation.description}</p>
      </div>
    </div>
  );
};

export default TransformationGallery;
