import React, { useState, useRef, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { MdFitnessCenter, MdRestaurant, MdPeople } from "react-icons/md";
import FadeInText from "../components/Motion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Componente para listar beneficios
const BenefitsList = ({ benefits }) => (
  <ul className="space-y-2">
    {benefits.map((benefit, index) => (
      <li key={index} className="flex items-center">
        <FaCheck className="text-green-500 mr-2" />
        <span>{benefit}</span>
      </li>
    ))}
  </ul>
);

const ProgramCard = ({ name, icon: Icon, onClick, image, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-anti-flash-white rounded-tr-[4.5rem] rounded-bl-[3.5rem] shadow-md p-[1.5rem] relative h-full flex flex-col"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View details for ${name} program`}
    >
      <img
        loading="lazy"
        src={image}
        alt={name}
        className="w-full h-48 object-cover mb-4 rounded-tr-[3.5rem] rounded-bl-[3.5rem]"
      />
      <div className="flex items-center mb-4">
        <Icon className="text-4xl text-blue-500 mr-4" />
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <button
        onClick={onClick}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 md:self-start self-end mt-auto"
      >
        Detalles
      </button>
    </motion.div>
  );
};

const ProgramModal = ({ program, onClose }) => {
  const modalRef = useRef(null);

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
          loading="lazy"
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
          <BenefitsList benefits={program.benefits} />
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Información adicional</h3>
          <p className="text-gray-600">{program.additionalInfo}</p>
        </div>
        <div className="flex justify-center md:hidden">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

const ProgramasCombinados = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      name: "Plan Online Básico",
      description:
        "Inicia tu camino hacia el bienestar con un plan simple y efectivo.",
      benefits: [
        "Acceso ilimitado a nuestra biblioteca de ejercicios",
        "Rutinas iniciales diseñadas por expertos",
        "Asesoría inicial en fitness y/ó nutrición",
      ],
      icon: MdFitnessCenter,
      additionalInfo:
        "Ideal para quienes desean mantenerse activos a distancia con una solución accesible y flexible.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Plan Online Personalizado",
      description: "Tu rutina, tus reglas. Diseñado exclusivamente para ti.",
      benefits: [
        "Rutinas de entrenamiento adaptadas a tus objetivos",
        "Plan de nutrición diseñado para tu estilo de vida",
        "Seguimiento mensual para garantizar tu progreso",
      ],
      icon: MdFitnessCenter,
      additionalInfo:
        "Perfecto para quienes buscan resultados específicos con apoyo continuo de nuestros expertos.",
      image:
        "https://images.unsplash.com/photo-1649789261044-0c6a9fb528ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Plan Online Premium",
      description:
        "Obtén resultados excepcionales con atención 100% personalizada.",
      benefits: [
        "Sesiones privadas con un coach certificado",
        "Modificaciones y ajustes en tiempo real",
        "Acceso exclusivo a contenidos avanzados y prioridad en consultas",
      ],
      icon: MdFitnessCenter,
      additionalInfo:
        "Nuestro plan más avanzado para quienes buscan maximizar su potencial con supervisión constante.",
      image:
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Plan Presencial",
      description:
        "Lleva tu entrenamiento al siguiente nivel con un enfoque presencial.",
      benefits: [
        "Entrena en nuestro gimnasio profesional Muscle Machine",
        "Supervisión directa de un entrenador certificado",
        "Elige entre modalidades de 2, 3 o más sesiones por semana",
      ],
      icon: MdPeople,
      additionalInfo:
        "El plan ideal para quienes prefieren la interacción en persona y un ambiente profesional para maximizar su rendimiento.",
      image:
        "https://images.unsplash.com/photo-1519859660545-3dea8ddf683c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Nueva imagen para plan presencial
    },
  ];

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
  };

  return (
    <section>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInText
          text="Planes y Servicios"
          tagName="h2"
          className="font-roboto text-4xl font-bold text-gray-700 md:mb-6 mb-4 text-center"
        />
        <p className="text-center text-gray-600 mb-12">
          Elige el plan que mejor se adapte a tus necesidades, ya sea online o
          presencial.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              {...program}
              onClick={() => handleProgramClick(program)}
              index={index}
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

export default ProgramasCombinados;
