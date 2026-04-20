import React, { useEffect, useMemo, useState } from "react";
import { FaCheck, FaTimes, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { MdFitnessCenter, MdPeople } from "react-icons/md";
import FadeInText from "../components/Motion";
import { motion, AnimatePresence } from "framer-motion";

const whatsappNumber = "+525561706548";

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
    category: "Online",
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
    category: "Online",
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
    category: "Online Premium",
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
    category: "Presencial",
    additionalInfo:
      "El plan ideal para quienes prefieren la interacción en persona y un ambiente profesional para maximizar su rendimiento.",
    image:
      "https://images.unsplash.com/photo-1519859660545-3dea8ddf683c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const cardContainer = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const BenefitsList = ({ benefits }) => (
  <ul className="space-y-3">
    {benefits.map((benefit, index) => (
      <li
        key={index}
        className="flex items-start gap-3 text-sm text-gray-700 sm:text-base"
      >
        <FaCheck className="mt-1 shrink-0 text-emerald-500" />
        <span>{benefit}</span>
      </li>
    ))}
  </ul>
);

const ProgramCard = ({ program, index, onClick }) => {
  const Icon = program.icon;

  return (
    <motion.article
      variants={cardItem}
      className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-white/50 bg-anti-flash-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.12)]"
    >
      <div className="relative overflow-hidden">
        <img
          loading="lazy"
          src={program.image}
          alt={program.name}
          className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[240px] xl:h-[250px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            {program.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 xl:p-7">
        <div className="mb-4 flex items-start gap-4">
          <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-violet-100">
            <Icon className="text-2xl text-blue-600" />
          </div>

          <div className="min-w-0">
            <h3 className="text-xl font-bold leading-snug text-gray-900 xl:text-[1.35rem]">
              {program.name}
            </h3>
          </div>
        </div>

        <p className="mb-5 text-sm leading-7 text-gray-600 sm:text-base xl:text-[1.02rem]">
          {program.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            {String(index + 1).padStart(2, "0")}
          </span>

          <button
            onClick={onClick}
            className="inline-flex items-center gap-2 rounded-2xl bg-[#2563eb] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-[#1d4ed8]"
            aria-label={`Ver detalles de ${program.name}`}
          >
            Detalles
            <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const ProgramModal = ({ program, onClose }) => {
  const whatsappMessage = useMemo(
    () => `Hola, me interesa obtener más información sobre el ${program.name}.`,
    [program.name],
  );

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const sendMessage = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      "",
    )}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[92vh] w-full overflow-hidden rounded-t-[28px] bg-white shadow-2xl sm:max-w-3xl sm:rounded-[32px]"
        >
          <div className="overflow-y-auto max-h-[92vh]">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-7">
              <div className="pr-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Plan disponible
                </p>
                <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-3xl">
                  {program.name}
                </h2>
              </div>

              <button
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-gray-800"
                aria-label="Cerrar modal"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-5 sm:p-7">
              <div className="overflow-hidden rounded-[24px]">
                <img
                  loading="lazy"
                  src={program.image}
                  alt={program.name}
                  className="h-[220px] w-full object-cover sm:h-[320px] md:h-[380px]"
                />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      Descripción
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                      {program.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      Beneficios
                    </h3>
                    <div className="mt-3">
                      <BenefitsList benefits={program.benefits} />
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] bg-gray-50 p-5 ring-1 ring-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    Información adicional
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                    {program.additionalInfo}
                  </p>

                  <div className="mt-6 flex flex-col gap-3">
                    <button
                      onClick={sendMessage}
                      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#22c55e] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#16a34a] sm:text-base"
                    >
                      <FaWhatsapp className="text-lg" />
                      Me interesa este plan
                    </button>

                    <button
                      onClick={onClose}
                      className="inline-flex w-full items-center justify-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 sm:text-base"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProgramasCombinados = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="mx-auto w-full max-w-[1600px] px-3 py-10 text-center sm:px-4 sm:py-12 md:px-6 lg:px-8 lg:py-16 xl:px-10">
      <div className="mb-8 sm:mb-10">
        <FadeInText
          text="Planes y servicios"
          tagName="h2"
          className="text-4xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 bg-clip-text sm:text-5xl"
        />
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
          Elige el plan que mejor se adapte a tus necesidades, ya sea online o
          presencial.
        </p>
      </div>

      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4 xl:gap-7"
      >
        {programs.map((program, index) => (
          <ProgramCard
            key={program.name}
            program={program}
            index={index}
            onClick={() => setSelectedProgram(program)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProgram && (
          <ProgramModal
            program={selectedProgram}
            onClose={() => setSelectedProgram(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProgramasCombinados;
