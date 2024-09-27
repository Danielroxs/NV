import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
        institution: "Universidad de XYZ",
        year: "2018",
      },
    ],
    experience: [
      {
        position: "Entrenador Personal",
        company: "Consultorio NV",
        duration: "2019 - Presente",
      },
    ],
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="w-64 h-64 lg:w-80 lg:h-80 relative cursor-pointer">
      <div
        className="w-full h-full rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg transition-transform duration-300 transform hover:scale-105"
        onClick={toggleDetails}
      >
        <img
          className="object-cover w-full h-full"
          src={person.image}
          alt={person.name}
        />
      </div>

      {/* Contenido Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl"
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
                    <h3 className="text-xl font-semibold">
                      <FaGraduationCap className="inline mr-2" />
                      Educación
                    </h3>
                    <p className="mt-2">{person.education[0].degree}</p>
                    <p>
                      {person.education[0].institution},{" "}
                      {person.education[0].year}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold">
                      <FaBriefcase className="inline mr-2" />
                      Experiencia Profesional
                    </h3>
                    <p className="mt-2">{person.experience[0].position}</p>
                    <p>
                      {person.experience[0].company},{" "}
                      {person.experience[0].duration}
                    </p>
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
