/* import Button from "../components/Button";

const Maps = () => {
  const openInGoogleMaps = () => {
    window.open("https://www.google.com/maps?q=GYM+MUSCLE+MACHINE", "_blank");
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-white text-2xl md:text-4xl font-medium mb-2">
          Maps
        </h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.578089026633!2d-99.22346511400052!3d19.60256818809573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d4a5296bf3b%3A0xaabcfe6a8f16d9a3!2sGYM%20MUSCLE%20MACHINE!5e0!3m2!1ses!2smx!4v1723833160116!5m2!1ses!2smx"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <Button
          onClick={openInGoogleMaps}
          className="bg-[#34A853] hover:bg-[#2c8c45] text-white mt-4"
        >
          Abrir en Google Maps
        </Button>
      </div>
    </section>
  );
};

export default Maps;



 */

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Maps = () => {
  const openInGoogleMaps = () => {
    window.open("https://www.google.com/maps?q=GYM+MUSCLE+MACHINE", "_blank");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center justify-center">
        <FaMapMarkerAlt className="mr-2 text-red-500" />
        Google Maps
      </h2>
      <div className="relative h-96 mb-4">
        <iframe
          title="google-maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.578089026633!2d-99.22346511400052!3d19.60256818809573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d4a5296bf3b%3A0xaabcfe6a8f16d9a3!2sGYM%20MUSCLE%20MACHINE!5e0!3m2!1ses!2smx!4v1723833160116!5m2!1ses!2smx"
          className="w-full h-full rounded-lg border-2 border-gray-200"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <button
        className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-center mx-auto"
        onClick={openInGoogleMaps}
      >
        <FaMapMarkerAlt className="mr-2" />
        Abrir en Google Maps
      </button>
    </div>
  );
};

export default Maps;
