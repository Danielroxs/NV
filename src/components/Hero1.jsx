import React, { useState, useEffect } from "react";
import { FaDumbbell, FaAppleAlt } from "react-icons/fa";

const DynamicHero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

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

      setTypingSpeed(isDeleting ? 30 : 150);

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

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Nutrición y Entrenamiento Personalizado
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          <span className="mr-2">{text}</span>
          <span className="animate-blink">|</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          Desarrolla un estilo de vida equilibrado con planes adaptados a tus
          necesidades.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center transition duration-300 w-full sm:w-auto">
            <FaDumbbell className="mr-2" /> Comienza a Entrenar
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center transition duration-300 w-full sm:w-auto">
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
