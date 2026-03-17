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
      "Suplementación y complementación aplicada en el deporte y culturismo",
      "Dieta cetogénica aplicada en el deporte y culturismo",
      "Farmacología deportiva",
      "Terapia posciclo",
      "Especialización en fuerza",
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
    setShowDetails((prev) => !prev);
  };

  const closeModal = () => {
    setShowDetails(false);
  };

  return (
    <>
      {/* Card principal de imagen */}
      <button
        type="button"
        onClick={toggleDetails}
        className="group relative block h-full w-full overflow-hidden rounded-[26px] bg-white text-left shadow-[0_18px_40px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.14)]"
        aria-label="Ver educación y experiencia de Neri Villeda"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-[26px]">
          <img
            src={neriProfile}
            alt="Fotografía de Neri Villeda"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <div className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-white backdrop-blur-[2px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-xs">
                Perfil profesional
              </p>
              <p className="mt-1 text-sm font-semibold sm:text-base">
                Ver educación y experiencia
              </p>
            </div>
          </div>
        </div>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="max-h-[92vh] w-full overflow-hidden rounded-t-[28px] bg-white shadow-2xl sm:max-w-4xl sm:rounded-[32px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-h-[92vh] overflow-y-auto">
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-7">
                  <div className="pr-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                      Perfil profesional
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-3xl">
                      {person.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-blue-600 sm:text-base">
                      {person.title}
                    </p>
                  </div>

                  <button
                    onClick={closeModal}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-gray-800"
                    aria-label="Cerrar modal"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">
                    {/* Imagen */}
                    <div>
                      <div className="overflow-hidden rounded-[24px] bg-[#f4f6fa] shadow-sm">
                        <img
                          src={neriProfile}
                          alt="Neri Villeda"
                          className="h-[260px] w-full object-cover sm:h-[320px] lg:h-full"
                        />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="space-y-6">
                      <section>
                        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 sm:text-xl">
                          <FaGraduationCap className="text-blue-600" />
                          Educación
                        </h3>

                        <div className="mt-4 space-y-3">
                          {person.education.map((edu, index) => (
                            <div
                              key={index}
                              className="rounded-2xl bg-gray-50 px-4 py-4 ring-1 ring-gray-100"
                            >
                              <p className="text-base font-semibold text-gray-900">
                                {edu.degree}
                              </p>
                              <p className="mt-1 text-sm text-gray-600 sm:text-base">
                                {edu.institution}
                              </p>
                              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-gray-400">
                                {edu.year}
                              </p>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section>
                        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 sm:text-xl">
                          <FaBriefcase className="text-blue-600" />
                          Experiencia profesional
                        </h3>

                        <div className="mt-4 space-y-3">
                          {person.experience.map((exp, index) => (
                            <div
                              key={index}
                              className="rounded-2xl bg-gray-50 px-4 py-4 ring-1 ring-gray-100"
                            >
                              <p className="text-base font-semibold text-gray-900">
                                {exp.position}
                              </p>
                              <p className="mt-1 text-sm text-gray-600 sm:text-base">
                                {exp.company}
                              </p>
                              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-gray-400">
                                {exp.duration}
                              </p>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section>
                        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 sm:text-xl">
                          <PiCertificateFill className="text-blue-600" />
                          Certificaciones
                        </h3>

                        <div className="mt-4 rounded-2xl bg-gray-50 px-4 py-4 ring-1 ring-gray-100">
                          <ul className="space-y-2 text-sm leading-7 text-gray-700 sm:text-base">
                            {person.certifications.map((certificate, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-1 text-green-600">✓</span>
                                <span>{certificate}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileCard;
