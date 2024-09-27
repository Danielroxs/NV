import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FeatureRichSeparator = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full my-8 relative"
      role="separator"
      aria-orientation="horizontal"
      tabIndex="0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
        <div
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg transition-all duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        >
          <FaChevronDown
            className={`text-gray-600 transition-transform duration-300 ${
              isHovered ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div className="w-full h-4 bg-gradient-to-b from-gray-100 to-transparent opacity-50 mt-1 rounded-full"></div>
      <div
        className={`w-full h-16 bg-pattern bg-repeat-x bg-contain transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E')",
        }}
      ></div>
    </div>
  );
};

export default FeatureRichSeparator;
