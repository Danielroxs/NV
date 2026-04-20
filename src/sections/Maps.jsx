import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import FadeInText from "../components/Motion";

const Maps = () => {
  const openInGoogleMaps = () => {
    window.open("https://www.google.com/maps?q=GYM+MUSCLE+MACHINE", "_blank");
  };

  return (
    <section className="mx-auto w-full max-w-[1500px] px-3 py-10 text-center sm:px-4 sm:py-12 md:px-6 lg:px-8 lg:py-16 xl:px-10">
      <div className="mb-8 sm:mb-10">
        <FadeInText
          text="Visítanos"
          tagName="h2"
          className="text-4xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 bg-clip-text sm:text-5xl"
        />

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
          Encuéntranos en Google Maps y ven a conocer el espacio donde
          entrenamos y trabajamos para transformar tu salud y tu rendimiento.
        </p>
      </div>

      <div className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-[30px] border border-white/50 bg-anti-flash-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-5 lg:p-6 xl:p-8">
        <div className="mb-5 flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-red-500" />
          <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Google Maps
          </h3>
        </div>

        <div className="relative mb-5 h-[320px] overflow-hidden rounded-[24px] border border-gray-200 sm:h-[400px] md:h-[480px] lg:h-[560px]">
          <iframe
            title="google-maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.578089026633!2d-99.22346511400052!3d19.60256818809573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d4a5296bf3b%3A0xaabcfe6a8f16d9a3!2sGYM%20MUSCLE%20MACHINE!5e0!3m2!1ses!2smx!4v1723833160116!5m2!1ses!2smx"
            className="h-full w-full"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>

        <button
          aria-label="Abrir en Google Maps"
          className="mx-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] sm:text-base"
          onClick={openInGoogleMaps}
        >
          <FaMapMarkerAlt />
          Abrir en Google Maps
        </button>
      </div>
    </section>
  );
};

export default Maps;
