import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaDumbbell, FaAppleAlt } from "react-icons/fa";
import Logo from "../assets/images/Logo.webp";
import gym from "../assets/images/gym.webp";

const CombinedHero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const aboutRef = useRef(null);

  const textArray = [
    "Transforma tu cuerpo",
    "Nutre tu vida",
    "Alcanza tus metas",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 35 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, textArray]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const whatsappNumber = "+525561706548";

  const sendMessage = (message) => {
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      "",
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${gym})`,
        }}
      >
        <div className="absolute inset-0 bg-black/35"></div>
        {/* Logo */}
        <div className="absolute top-10 left-1/2 z-20 mt-6 -translate-x-1/2 transform md:mb-8">
          <img
            src={Logo}
            alt="Logotipo"
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center text-white sm:px-6">
          <h1 className="mb-4 text-3xl font-bold leading-tight md:mb-8 md:text-5xl lg:text-6xl">
            Nutrición y Entrenamiento Personalizado
          </h1>
          <h2 className="mb-6 text-2xl font-semibold md:text-3xl lg:text-4xl">
            <span className="mr-2">{text}</span>
            <span className="animate-blink">|</span>
          </h2>

          <div className="flex w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <button
              aria-label="Boton Whatsapp"
              onClick={() =>
                sendMessage(
                  "Me gustaría solicitar informes acerca de sus planes de entrenamiento personal",
                )
              }
              className="flex w-full items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 font-bold text-white shadow-md transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-lg sm:w-auto sm:min-w-[240px]"
            >
              <FaDumbbell className="mr-2" /> Comienza a Entrenar
            </button>

            <button
              aria-label="Boton Whatsapp"
              onClick={() =>
                sendMessage(
                  "Me gustaría obtener más información sobre los planes de nutrición",
                )
              }
              className="flex w-full items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 font-bold text-white shadow-md transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:shadow-lg sm:w-auto sm:min-w-[240px]"
            >
              <FaAppleAlt className="mr-2" /> Planes de Nutrición
            </button>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <button
          onClick={scrollToAbout}
          aria-label="Scroll to About section"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white transition-colors duration-300 hover:text-blue-400 animate-bounce"
        >
          <FaChevronDown size={40} />
        </button>
      </div>
    </div>
  );
};

export default CombinedHero;
