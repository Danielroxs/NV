import React from "react";
import { FaDumbbell, FaAppleAlt, FaBolt, FaWhatsapp } from "react-icons/fa";
import benefits from "../assets/images/benefits.webp";
import FadeInText from "../components/Motion";
import { motion } from "framer-motion";

const whatsappNumber = "+525561706548";

const benefitItems = [
  {
    icon: FaDumbbell,
    iconColor: "text-emerald-500",
    bgColor: "from-emerald-50 to-emerald-100",
    title: "Más fuerza y rendimiento",
    description: "Mejora en el rendimiento físico y fuerza.",
  },
  {
    icon: FaAppleAlt,
    iconColor: "text-rose-500",
    bgColor: "from-rose-50 to-rose-100",
    title: "Nutrición optimizada",
    description:
      "Alimentación enfocada en una mejor salud y resultados reales.",
  },
  {
    icon: FaBolt,
    iconColor: "text-amber-500",
    bgColor: "from-amber-50 to-amber-100",
    title: "Más energía y vitalidad",
    description: "Un enfoque integral para sentirte mejor cada día.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const CombinedBenefits = () => {
  const sendMessage = (message) => {
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      "",
    )}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {/* Encabezado fuera del componente blanco */}
      <div className="mb-8 sm:mb-10">
        <FadeInText
          text="Beneficios combinados con Neri Villeda"
          tagName="h2"
          className="mt-4 text-4xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 bg-clip-text sm:text-5xl"
        />

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
          Combina planes de nutrición personalizados con entrenamiento físico
          experto para mejorar tu salud, tu energía y tu rendimiento diario con
          una estrategia hecha para ti.
        </p>
      </div>

      {/* Componente blanco */}
      <div className="overflow-hidden rounded-[28px] border border-white/50 bg-anti-flash-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-6 lg:p-10">
        <span className="inline-flex rounded-full mb-4 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-600 shadow-sm sm:text-sm">
          Beneficios combinados
        </span>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {/* Imagen */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-md lg:max-w-[520px]">
              <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-pink-400/15 via-orange-300/15 to-violet-400/15 blur-2xl" />

              <div className="relative overflow-hidden rounded-[30px] bg-white shadow-xl">
                <img
                  loading="lazy"
                  src={benefits}
                  alt="Neri Villeda en acción"
                  className="h-[260px] w-full object-cover sm:h-[340px] md:h-[420px] lg:h-[460px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-left text-white backdrop-blur-[2px]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-xs">
                    Entrenamiento + nutrición
                  </p>
                  <p className="mt-1 text-sm font-semibold sm:text-base">
                    Un enfoque combinado para transformar tu salud y tu
                    rendimiento
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Beneficios */}
          <div className="order-2">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1"
            >
              {benefitItems.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl bg-white p-4 text-left shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div
                      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.bgColor}`}
                    >
                      <Icon className={`text-xl ${benefit.iconColor}`} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-gray-900 sm:text-base">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <button
                aria-label="Botón WhatsApp"
                onClick={() =>
                  sendMessage(
                    "Me gustaría obtener más información para empezar mi vida fitness.",
                  )
                }
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#2563eb] px-6 py-4 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] sm:w-auto sm:text-base"
              >
                <FaWhatsapp className="text-lg" />
                Comienza tu viaje
              </button>

              <a
                href="#services"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-4 text-sm font-semibold text-gray-800 transition duration-300 hover:bg-gray-50 sm:w-auto sm:text-base"
              >
                Ver servicios
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CombinedBenefits;
