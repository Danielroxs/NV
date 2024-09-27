import React, { useState, useRef } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { MdFitnessCenter, MdRestaurant, MdPeople } from "react-icons/md";

const ProgramCard = ({
  name,
  description,
  benefits,
  icon: Icon,
  onClick,
  image,
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 relative h-full flex flex-col"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View details for ${name} program`}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <div className="flex items-center mb-4">
        <Icon className="text-4xl text-blue-500 mr-4" />
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <ul className="space-y-2 mb-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center">
            <FaCheck className="text-green-500 mr-2" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onClick}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 self-start mt-auto"
      >
        Detalles
      </button>
    </div>
  );
};

const ProgramModal = ({ program, onClose }) => {
  const modalRef = useRef(null); // Usamos una referencia para el contenido del modal

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{program.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <img
          src={program.image}
          alt={program.name}
          className="w-full h-64 object-cover mb-6 rounded"
        />
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Descripción</h3>
          <p className="text-gray-600">{program.description}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Beneficios</h3>
          <ul className="space-y-2">
            {program.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <FaCheck className="text-green-500 mr-2" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Información adicional</h3>
          <p className="text-gray-600">{program.additionalInfo}</p>
        </div>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

const CombinedProgramsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      name: "Plan de Nutrición Personalizada",
      description:
        "Guía de nutrición adaptada para alcanzar objetivos óptimos de salud y condición física.",
      benefits: [
        "Planes de comidas personalizados",
        "Optimización de macro y micronutrientes",
        "Adaptación a preferencias dietéticas",
      ],
      icon: MdRestaurant,
      additionalInfo:
        "Nuestros expertos en nutrición crean un plan que se adapta a tu estilo de vida, preferencias y objetivos de salud. Ajustamos tu plan a medida que avanzas para garantizar el éxito continuo.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Programa de Entrenamiento Individualizado",
      description:
        "Rutinas de ejercicio personalizadas para alcanzar tus metas de forma eficiente.",
      benefits: [
        "Rutinas de ejercicio personalizadas",
        "Seguimiento de progreso y ajustes",
        "Demostraciones en video de ejercicios",
      ],
      icon: MdFitnessCenter,
      additionalInfo:
        "Nuestros entrenadores certificados diseñan un programa ajustado a tu nivel de condición física, objetivos y equipo disponible. Proporcionamos apoyo continuo y modificaciones para mantenerte desafiado y motivado.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Coaching Integral de Bienestar",
      description:
        "Enfoque holístico que combina nutrición, ejercicio y coaching de estilo de vida.",
      benefits: [
        "Evaluación integral de salud",
        "Técnicas de manejo del estrés",
        "Estrategias para optimizar el sueño",
      ],
      icon: MdPeople,
      additionalInfo:
        "Nuestros coaches de bienestar toman un enfoque de 360 grados en tu salud, abordando la nutrición, el ejercicio, el estrés, el sueño y otros factores del estilo de vida. Te ayudamos a crear hábitos sostenibles para un bienestar a largo plazo.",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80",
    },
  ];

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros programas combinados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              {...program}
              onClick={() => handleProgramClick(program)}
            />
          ))}
        </div>
        {selectedProgram && (
          <ProgramModal program={selectedProgram} onClose={handleCloseModal} />
        )}
      </div>
    </section>
  );
};

export default CombinedProgramsSection;
