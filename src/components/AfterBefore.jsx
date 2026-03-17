import React, { useEffect, useRef, useState } from "react";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
import FadeInText from "./Motion";

import B1 from "../assets/images/B1.webp";
import A1 from "../assets/images/A1.webp";
import B2 from "../assets/images/B2.webp";
import A2 from "../assets/images/A2.webp";
import test3 from "../assets/images/test3.webp";
import B3 from "../assets/images/B3.webp";
import B4 from "../assets/images/B4.webp";
import test1 from "../assets/images/test1.webp";
import B5 from "../assets/images/B5.webp";
import A5 from "../assets/images/A5.webp";
import B6 from "../assets/images/B6.webp";
import test5 from "../assets/images/test5.webp";
import B7 from "../assets/images/B7.webp";
import test2 from "../assets/images/test2.webp";
import B8 from "../assets/images/B8.webp";
import A8 from "../assets/images/A8.webp";
import B9 from "../assets/images/B9.webp";
import test4 from "../assets/images/test4.webp";

const transformations = [
  {
    beforeImage: B1,
    afterImage: A1,
    name: "Neri Villeda",
    result: "+13 kg de masa muscular",
    description:
      "Gané 13 kilos de masa muscular combinando una dieta balanceada y ejercicio constante. Me siento con más energía y en mejor forma que nunca.",
  },
  {
    beforeImage: B2,
    afterImage: A2,
    name: "Sandra V.",
    result: "Mejor composición corporal",
    description:
      "Hice un cambio total en mi alimentación, dejando atrás los alimentos procesados y optando por comidas completas, frescas y llenas de nutrientes.",
  },
  {
    beforeImage: B3,
    afterImage: test3,
    name: "Dulce H.",
    result: "Más fuerza y definición",
    description:
      "Aumenté masa muscular en piernas, definí mi cintura y mi calidad de vida mejoró. Ahora me siento más fuerte y con más energía.",
  },
  {
    beforeImage: B4,
    afterImage: test1,
    name: "Mary Mercado",
    result: "Aumento de masa muscular",
    description:
      "Aumenté masa muscular y ahora estoy en mi mejor versión física. Me siento más fuerte, saludable y segura de mí misma.",
  },
  {
    beforeImage: B5,
    afterImage: A5,
    name: "Antonio Villegas",
    result: "Cambio físico y mental",
    description:
      "Unirme al team NV transformó mi vida. Encontré disciplina, motivación y un lugar para crecer física y mentalmente.",
  },
  {
    beforeImage: B6,
    afterImage: test5,
    name: "Alfredo Villegas",
    result: "Más energía y fuerza",
    description:
      "Hice un cambio total en mi estilo de vida. No solo mejoré mi alimentación, sino que también comencé a entrenar de manera constante.",
  },
  {
    beforeImage: B7,
    afterImage: test2,
    name: "Alejandro Zavala",
    result: "Más fuerza y resistencia",
    description:
      "El entrenamiento físico fue esencial para mi transformación. Aumenté la intensidad de mis rutinas y cambié mi dieta.",
  },
  {
    beforeImage: B8,
    afterImage: A8,
    name: "Carlos Villa",
    result: "Mayor tonificación",
    description:
      "Combiné entrenamiento físico regular con una alimentación más natural y nutritiva. Gracias a esto, me siento más vital y con más energía.",
  },
  {
    beforeImage: B9,
    afterImage: test4,
    name: "José P.",
    result: "Transformación completa",
    description:
      "Después de un año y medio, gracias a Neri transformé mi físico, mi mentalidad y mi actitud. ¡Orgullosamente atleta NV!",
  },
];

const TransformationGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const cardRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  const currentTransformation = transformations[currentIndex];

  const clearHideTimeout = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const setRipplePoint = (event) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect || !cardRef.current) return;

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    cardRef.current.style.setProperty("--ripple-x", `${x}%`);
    cardRef.current.style.setProperty("--ripple-y", `${y}%`);
  };

  const reveal = (event) => {
    clearHideTimeout();
    if (event) setRipplePoint(event);
    setIsRevealed(true);
  };

  const hide = (delay = 900) => {
    clearHideTimeout();
    hideTimeoutRef.current = setTimeout(() => {
      setIsRevealed(false);
    }, delay);
  };

  const nextTransformation = () => {
    clearHideTimeout();
    setIsRevealed(false);
    setCurrentIndex((prev) =>
      prev === transformations.length - 1 ? 0 : prev + 1,
    );
  };

  const prevTransformation = () => {
    clearHideTimeout();
    setIsRevealed(false);
    setCurrentIndex((prev) =>
      prev === 0 ? transformations.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    return () => clearHideTimeout();
  }, []);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 text-center select-none sm:px-6 lg:px-8">
      <FadeInText
        text="Transformaciones NV"
        tagName="h2"
        className="mb-3 bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl"
      />

      <p className="mx-auto mb-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
        Resultados reales construidos con constancia, estrategia y
        acompañamiento personalizado.
      </p>

      <p className="mx-auto mb-8 text-xs font-medium uppercase tracking-[0.25em] text-gray-400 sm:text-sm">
        Toca la imagen para descubrir el después
      </p>

      <div className="mx-auto max-w-5xl">
        <div
          ref={cardRef}
          onContextMenu={(e) => e.preventDefault()}
          className="relative overflow-hidden rounded-[30px] border border-white/60 bg-white shadow-[0_22px_60px_rgba(0,0,0,0.12)] select-none touch-manipulation"
          style={{
            "--ripple-x": "50%",
            "--ripple-y": "55%",
            WebkitUserSelect: "none",
            userSelect: "none",
            WebkitTouchCallout: "none",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <div
            className="relative h-[520px] w-full bg-[#eef2f6] sm:h-[620px] md:h-[720px] lg:h-[820px]"
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse") reveal(e);
            }}
            onPointerMove={(e) => {
              if (e.pointerType === "mouse") setRipplePoint(e);
            }}
            onPointerDown={(e) => {
              if (e.target.closest("[data-nav-button='true']")) return;
              reveal(e);
            }}
            onPointerUp={() => hide(1200)}
            onPointerLeave={() => hide(3500)}
            onPointerCancel={() => hide(500)}
          >
            {/* ANTES */}
            <img
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              src={currentTransformation.beforeImage}
              alt={`Antes de ${currentTransformation.name}`}
              className="absolute inset-0 h-full w-full object-contain object-center transition-all duration-700 ease-out"
              style={{
                opacity: isRevealed ? 0.55 : 1,
                transform: isRevealed ? "scale(0.99)" : "scale(1)",
              }}
            />

            {/* DESPUÉS */}
            <img
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              src={currentTransformation.afterImage}
              alt={`Después de ${currentTransformation.name}`}
              className="absolute inset-0 h-full w-full object-contain object-center transition-all duration-700 ease-out"
              style={{
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "scale(1)" : "scale(1.015)",
              }}
            />

            {/* Ripple visual ligero */}
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-700"
              style={{
                opacity: isRevealed ? 1 : 0,
                background: `
                  radial-gradient(
                    circle 120px at var(--ripple-x) var(--ripple-y),
                    rgba(255,255,255,0.28) 0%,
                    rgba(255,255,255,0.12) 35%,
                    rgba(255,255,255,0) 70%
                  )
                `,
              }}
            />

            {/* Overlay oscuro simple */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

            {/* Labels */}
            <div
              className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 sm:left-4 sm:top-4 sm:text-xs ${
                isRevealed
                  ? "bg-white/15 text-white/70"
                  : "bg-white text-gray-900 shadow-md"
              }`}
            >
              Antes
            </div>

            <div
              className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 sm:right-4 sm:top-4 sm:text-xs ${
                isRevealed
                  ? "bg-white text-gray-900 shadow-md shadow-white/30"
                  : "bg-white/15 text-white/70"
              }`}
            >
              Después
            </div>

            {/* Texto dentro */}
            <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center p-4 sm:p-6">
              <div className="w-full max-w-[92%] px-4 py-4 text-center text-white sm:max-w-[80%] sm:px-6 sm:py-6 lg:max-w-[68%]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70 sm:text-xs">
                  Caso de éxito
                </p>

                <h3 className="mt-2 text-2xl font-extrabold leading-tight sm:text-4xl">
                  {currentTransformation.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-orange-200 sm:text-lg">
                  {currentTransformation.result}
                </p>

                <p
                  className="mt-3 text-xs leading-6 text-white/90 sm:hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {currentTransformation.description}
                </p>

                <p className="mx-auto mt-4 hidden max-w-2xl text-sm leading-7 text-white/90 sm:block md:text-base">
                  {currentTransformation.description}
                </p>
              </div>
            </div>

            {/* Contador */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/35 px-4 py-1 text-xs font-medium text-white/90 sm:text-sm">
              {currentIndex + 1} / {transformations.length}
            </div>

            {/* Navegación */}
            <button
              data-nav-button="true"
              aria-label="Anterior"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                prevTransformation();
              }}
              className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition duration-300 hover:scale-105 hover:bg-white sm:bottom-auto sm:left-5 sm:top-1/2 sm:-translate-y-1/2"
            >
              <MdOutlineSkipPrevious className="text-2xl" />
            </button>

            <button
              data-nav-button="true"
              aria-label="Siguiente"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                nextTransformation();
              }}
              className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition duration-300 hover:scale-105 hover:bg-white sm:bottom-auto sm:right-5 sm:top-1/2 sm:-translate-y-1/2"
            >
              <MdOutlineSkipNext className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationGallery;
