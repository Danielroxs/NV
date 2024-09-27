import React, { useState, useRef, useEffect } from "react";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const TransformationGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const transformations = [
    {
      beforeImage:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      afterImage:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
      patientName: "John Doe",
      description:
        "Lost 30 pounds in 3 months through a combination of diet and exercise.",
    },
    {
      beforeImage:
        "https://images.unsplash.com/photo-1518310952931-b1de897abd40",
      afterImage:
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
      patientName: "Jane Smith",
      description:
        "Gained 15 pounds of muscle mass in 6 months with strength training.",
    },
    {
      beforeImage:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      afterImage:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      patientName: "Alice Johnson",
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
    <div className="max-w-4xl justify-center lg:justify-start tex-center lg:text-start mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Transformaciones NV
      </h2>
      <div
        className="relative overflow-hidden rounded-lg shadow-lg"
        ref={containerRef}
      >
        <div className="relative w-full h-[400px]">
          <img
            src={currentTransformation.beforeImage}
            alt="Before"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div
            className="absolute top-0 right-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={currentTransformation.afterImage}
              alt="After"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          <div
            ref={sliderRef}
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `calc(${sliderPosition}% - 1px)` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
              <FaArrowRightArrowLeft className="text-gray-800 text-xl" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
          <button
            onClick={prevTransformation}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          >
            <MdOutlineSkipPrevious className="text-gray-800 text-xl" />
          </button>
          <button
            onClick={nextTransformation}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          >
            <MdOutlineSkipNext className="text-gray-800 text-xl" />
          </button>
        </div>
      </div>
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-2">
          {currentTransformation.patientName}
        </h3>
        <p className="text-gray-600">{currentTransformation.description}</p>
      </div>
    </div>
  );
};

export default TransformationGallery;
