import React, { useEffect } from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import ProfileCard from "../components/ProfileCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ title, description, icon, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.6,
        delay: index * 0.08,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="group h-full rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 sm:text-left"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-violet-100 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
        {icon}
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
        {title}
      </h3>

      <p className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
        {description}
      </p>
    </motion.div>
  );
};

const AboutUs = () => {
  const services = [
    {
      title: "Planes de nutrición personalizados",
      description:
        "Estrategias de alimentación adaptadas a tus objetivos, hábitos y estilo de vida.",
      icon: "🥗",
    },
    {
      title: "Entrenamiento individual",
      description:
        "Rutinas diseñadas según tu nivel, condición física y metas de rendimiento.",
      icon: "💪",
    },
    {
      title: "Educación y bienestar",
      description:
        "Acompañamiento para que entiendas tu proceso y construyas hábitos sostenibles.",
      icon: "📚",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 xl:px-12 2xl:px-16">
      <div className="overflow-hidden rounded-2xl border border-white/50 bg-anti-flash-white p-5 shadow-lg sm:rounded-3xl sm:p-6 lg:p-8 xl:p-10 2xl:p-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Imagen */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md xl:max-w-lg 2xl:max-w-xl">
              <div className="absolute inset-0 scale-105 rounded-full bg-gradient-to-r from-pink-400 via-orange-300 to-violet-500 opacity-25 blur-2xl"></div>
              <ProfileCard />
            </div>
          </div>

          {/* Texto */}
          <div className="order-2 min-w-0 text-center lg:text-left">
            <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
              Sobre mí
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl">
              Neri Villeda
            </h2>

            <div className="mt-2">
              <p className="text-sm font-medium leading-6 text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-violet-600 bg-clip-text md:hidden">
                Nutrición y entrenamiento
              </p>

              <p className="hidden text-base font-medium leading-6 text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-violet-600 bg-clip-text md:block lg:text-lg xl:text-xl">
                Nutrición y entrenamiento personalizado
              </p>
            </div>

            {/* Texto corto solo en mobile */}
            <div className="md:hidden">
              <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-gray-700">
                Soy Neri Villeda, especialista en nutrición y entrenamiento
                personalizado. Te ayudo a mejorar tu salud y tu rendimiento con
                un enfoque práctico y adaptado a ti.
              </p>

              <ul className="mx-auto mt-5 max-w-xs space-y-3 text-left text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-green-600">✓</span>
                  <span>Plan personalizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-green-600">✓</span>
                  <span>Seguimiento cercano</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-green-600">✓</span>
                  <span>Nutrición + ejercicio</span>
                </li>
              </ul>
            </div>

            {/* Texto completo solo en tablet/desktop */}
            <div className="hidden md:block">
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-700 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg xl:max-w-2xl">
                Soy Neri Villeda, especialista en nutrición y entrenamiento
                personalizado. Te ayudo a mejorar tu salud, tu composición
                corporal y tu rendimiento físico con un enfoque práctico,
                realista y adaptado a tu estilo de vida.
              </p>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg xl:max-w-2xl">
                Cada proceso se diseña de forma individual para que avances con
                estructura, acompañamiento y resultados sostenibles.
              </p>

              <ul className="mx-auto mt-6 max-w-xl space-y-3 text-left text-sm text-gray-700 sm:text-base lg:mx-0 xl:max-w-2xl">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-green-600">✓</span>
                  <span>Plan 100% personalizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-green-600">✓</span>
                  <span>Seguimiento cercano y enfoque realista</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-green-600">✓</span>
                  <span>Nutrición y ejercicio en un mismo proceso</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
              >
                Agenda tu valoración
              </a>

              <a
                href="#services"
                className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 sm:w-auto"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
              <a
                href="https://www.facebook.com/share/uG6KzuhtfF5o4jZD/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-white p-3 text-blue-600 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/nerii_villeda.fit/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white p-3 text-pink-600 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.youtube.com/@NeriPrideMusicOficial/videos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="rounded-full bg-white p-3 text-red-600 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="services"
        className="mt-8 overflow-hidden rounded-2xl border border-white/50 bg-anti-flash-white p-5 shadow-lg sm:mt-10 sm:rounded-3xl sm:p-6 lg:mt-12 lg:p-8 xl:p-10"
      >
        {/* Servicios */}
        <div>
          <div className="mb-8 text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 sm:text-sm">
              Servicios
            </span>

            <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Acompañamiento pensado para ti
            </h3>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:mx-0">
              Un enfoque integral para ayudarte a verte mejor, sentirte mejor y
              rendir mejor.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
