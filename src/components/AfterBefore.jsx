import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BeforeAfterComponent = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const handleMove = (clientX) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging]);

  const clientData = {
    name: "John Doe",
    beforeDescription: "Before starting the nutrition and training program",
    afterDescription: "After 6 months of dedication and hard work",
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div
        className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg shadow-lg"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          alt="Before transformation"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
            alt="After transformation"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
            <FaChevronLeft className="text-gray-600" />
            <FaChevronRight className="text-gray-600" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col md:flex-row justify-between text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-800">
            {clientData.name} - Before
          </h3>
          <p className="text-sm text-gray-600">
            {clientData.beforeDescription}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {clientData.name} - After
          </h3>
          <p className="text-sm text-gray-600">{clientData.afterDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterComponent;
