import React, { useState, useEffect, useRef } from "react";
import { FaDumbbell, FaAppleAlt } from "react-icons/fa";
import LogoHero from "../assets/images/LogoHero.png";

const DynamicHero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const heroRef = useRef(null);
  const ticking = useRef(false);

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
          : fullText.substring(0, text.length + 1)
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

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const offset = heroRef.current.offsetTop;
          const windowHeight = window.innerHeight;
          const heroHeight = heroRef.current.offsetHeight;

          if (
            scrollY >= offset - windowHeight &&
            scrollY <= offset + heroHeight
          ) {
            const parallaxValue = (scrollY - offset) * 0.5;
            setBackgroundPosition(`center ${parallaxValue}px`);
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const whatsappNumber = "+525561706548";

  const sendMessage = (message) => {
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Logotipo centrado en la parte superior */}
      <div className="absolute lg:hidden top-12 left-1/2 transform -translate-x-1/2 z-20">
        <img
          src={LogoHero}
          alt="Logotipo"
          className="w-16 h-16 md:w-32 md:h-32 object-contain"
        />
      </div>

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: backgroundPosition,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Nutrición y Entrenamiento Personalizado
        </h1>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6">
          <span className="mr-2">{text}</span>
          <span className="animate-blink">|</span>
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Desarrolla un estilo de vida equilibrado con planes adaptados a tus
          necesidades.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() =>
              sendMessage(
                "Me gustaría solicitar informes acerca de sus planes de entrenamiento personal"
              )
            }
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full flex items-center justify-center transition duration-300 w-full sm:w-auto max-w-xs"
          >
            <FaDumbbell className="mr-2" /> Comienza a Entrenar
          </button>

          <button
            onClick={() =>
              sendMessage(
                "Me gustaría obtener más información sobre los planes de nutrición"
              )
            }
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full flex items-center justify-center transition duration-300 w-full sm:w-auto max-w-xs"
          >
            <FaAppleAlt className="mr-2" /> Planes de Nutrición
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <p className="text-white text-center">
          ¡Sé parte de nuestra comunidad de apasionados por la salud y el
          fitness hoy mismo!
        </p>
      </div>
    </div>
  );
};

export default DynamicHero;
