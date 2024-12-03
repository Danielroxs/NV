import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaTimes } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import neriProfile from "../assets/images/neriProfile.webp";

const ProfileCard = () => {
  const [showDetails, setShowDetails] = useState(false);

  const person = {
    name: "Neri Villeda",
    title: "Nutricionista y Entrenador Personal",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    education: [
      {
        degree: "Licenciado en Nutrición",
        institution: "UIN Universidad Insurgentes",
        year: "2018",
      },
      {
        degree: "Profesional del Fitness",
        institution: "Sport City University",
        year: "2018",
      },
    ],
    certifications: [
      {
        certificate1:
          " Suplementacion y Complementacion aplicada en el Deporte y Culturismo",
        certificate3: " Dieta Cetogenica aplicada en el Deporte y Culturismo",
        certificate2: " Farmacología Deportiva",
        certificate4: " Terapia Posciclo",
        certificate5: " Especialización en Fuerza",
      },
    ],
    experience: [
      {
        position: "Entrenador Personal",
        company: "Muscle Machine GYM",
        duration: "2016 - Actualidad",
      },
    ],
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const closeModal = () => {
    setShowDetails(false);
  };

  return (
    <div className="w-64 h-64 lg:w-80 lg:h-80 relative cursor-pointer">
      <div
        className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 p-1 shadow-lg transition-transform duration-300 transform hover:scale-105"
        onClick={toggleDetails}
      >
        <div className="w-full h-full rounded-full bg-white">
          <img
            className="object-cover w-full h-full rounded-full"
            src={neriProfile}
            alt="Neri fotografia"
          />
          {/* Texto de "Ver más..." que aparece en hover */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <span className="text-white text-lg font-semibold">
              Ver Educación
            </span>
          </div>
        </div>
      </div>

      {/* Contenido Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeModal} // Cierra el modal si se hace clic en el fondo oscuro
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()} // Evita que el clic en el modal lo cierre
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold">{person.name}</h2>
                  <button
                    onClick={toggleDetails}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-lg mt-2">{person.title}</p>
                <div className="mt-6 space-y-4">
                  <section>
                    <h3 className="text-xl font-semibold flex items-center">
                      <FaGraduationCap className="mr-2" />
                      Educación
                    </h3>
                    <div className="mt-3 space-y-3">
                      {person.education.map((edu, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-indigo-500 pl-4 py-2"
                        >
                          <p className="text-base font-medium text-gray-900">
                            {edu.degree}
                          </p>
                          <p className="text-sm text-gray-600">
                            {edu.institution}, {edu.year}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold flex items-center">
                      <FaBriefcase className="mr-2" />
                      Experiencia Profesional
                    </h3>
                    <div className="mt-3 space-y-3">
                      {person.experience.map((exp, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-indigo-500 pl-4 py-2"
                        >
                          <p className="text-base font-medium text-gray-900">
                            {exp.position}
                          </p>
                          <p className="text-sm text-gray-600">{exp.company}</p>
                          <p className="text-xs text-gray-500">
                            {exp.duration}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold flex items-center">
                      <PiCertificateFill className="mr-2" />
                      Certificaciones
                    </h3>
                    <div className="mt-3 space-y-3">
                      {person.certifications.map((exp, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-indigo-500 pl-4 py-2"
                        >
                          <p className="text-base font-medium text-gray-900">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-600">
                            •{exp.certificate1}
                          </p>
                          <p className="text-sm text-gray-600">
                            •{exp.certificate2}
                          </p>
                          <p className="text-sm text-gray-600">
                            •{exp.certificate3}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileCard;
