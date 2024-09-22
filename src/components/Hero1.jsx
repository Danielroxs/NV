import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
        <h1 className="mb-4 text-5xl font-bold text-green-400 md:text-7xl">
          Neri Villeda
        </h1>
        <p className="mb-8 text-2xl font-semibold md:text-3xl">
          Transform Your Body, Elevate Your Health
        </p>
        <button
          className="group relative inline-flex items-center overflow-hidden rounded-full bg-green-500 px-8 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          aria-label="Book a Consultation"
        >
          <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
            <FaPlay />
          </span>
          <span className="text-sm font-semibold transition-transform group-hover:translate-x-[-1rem]">
            Book a Consultation
          </span>
        </button>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default HeroSection;
