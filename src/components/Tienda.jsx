import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import FadeInText from "../components/Motion";

const whatsappNumber = "+525561706548";

const shirts = [
  {
    id: 1,
    name: "Camiseta Negra Minimal",
    price: "$19.99",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Gris oscuro"],
    description:
      "Una camiseta versátil y cómoda con un estilo limpio y moderno. Ideal para el día a día o para complementar un look deportivo.",
    availability: true,
  },
  {
    id: 2,
    name: "Camiseta Blanca Essential",
    price: "$20.99",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanco", "Beige"],
    description:
      "Diseño fresco y ligero para un estilo casual. Una pieza básica que combina con todo y se adapta a cualquier temporada.",
    availability: true,
  },
  {
    id: 3,
    name: "Camiseta Oversize NV",
    price: "$24.99",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=80",
    sizes: ["M", "L", "XL"],
    colors: ["Negro", "Blanco", "Azul"],
    description:
      "Corte relajado y urbano con una caída cómoda. Perfecta para quienes buscan un look más moderno y con personalidad.",
    availability: true,
  },
  {
    id: 4,
    name: "Camiseta Rayada",
    price: "$21.99",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=80",
    sizes: ["S", "M", "L"],
    colors: ["Blanco y Azul"],
    description:
      "Una camiseta rayada de inspiración náutica. Perfecta para un día casual o un viaje a la playa.",
    availability: true,
  },
];

const ShirtModal = ({
  shirt,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  error,
  onClose,
  onWhatsApp,
}) => {
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end justify-center bg-white/60 p-0 sm:items-center sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[92vh] w-full overflow-hidden rounded-t-[28px] bg-white shadow-2xl sm:max-w-3xl sm:rounded-[32px]"
        >
          <div className="max-h-[92vh] overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-7">
              <div className="pr-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  T-Shirt NV
                </p>
                <h3 className="mt-1 text-xl font-bold text-gray-900 sm:text-3xl">
                  {shirt.name}
                </h3>
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
              <div className="overflow-hidden rounded-[24px] bg-[#f4f6fa]">
                <img
                  src={shirt.image}
                  alt={shirt.name}
                  className="h-[260px] w-full object-contain p-4 sm:h-[360px] sm:p-6 md:h-[420px]"
                />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 sm:text-xl">
                      Descripción
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                      {shirt.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 sm:text-xl">
                      Talla
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {shirt.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                            selectedSize === size
                              ? "bg-blue-600 text-white shadow-md"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 sm:text-xl">
                      Color
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {shirt.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                            selectedColor === color
                              ? "bg-blue-600 text-white shadow-md"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] bg-gray-50 p-5 ring-1 ring-gray-100">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Precio
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900">
                    {shirt.price}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                    Selecciona talla y color para enviar tu pedido por WhatsApp.
                  </p>

                  {error ? (
                    <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                      {error}
                    </p>
                  ) : null}

                  <div className="mt-6 flex flex-col gap-3">
                    <button
                      onClick={onWhatsApp}
                      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#22c55e] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#16a34a] sm:text-base"
                    >
                      <FaWhatsapp className="text-lg" />
                      Pedir por WhatsApp
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

const ShirtGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedShirt, setSelectedShirt] = useState(null);
  const [error, setError] = useState("");
  const [autoPlay, setAutoPlay] = useState(true);

  const currentShirt = shirts[currentIndex];

  const whatsappMessage = useMemo(() => {
    if (!selectedShirt) return "";
    return `Hola, estoy interesado en la T-Shirt ${selectedShirt.name} (Talla: ${selectedSize}, Color: ${selectedColor}), Precio: ${selectedShirt.price}.`;
  }, [selectedShirt, selectedSize, selectedColor]);

  useEffect(() => {
    if (!autoPlay || showModal) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === shirts.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [autoPlay, showModal]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === shirts.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? shirts.length - 1 : prev - 1));
  };

  const handleShirtClick = (shirt) => {
    setSelectedShirt(shirt);
    setSelectedSize("");
    setSelectedColor("");
    setError("");
    setShowModal(true);
    setAutoPlay(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedShirt(null);
    setSelectedSize("");
    setSelectedColor("");
    setError("");
    setAutoPlay(true);
  };

  const handleWhatsAppClick = () => {
    if (!selectedSize || !selectedColor) {
      setError("Selecciona talla y color antes de continuar.");
      return;
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      "",
    )}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="mx-auto w-full max-w-[1600px] px-3 py-10 text-center sm:px-4 sm:py-12 md:px-6 lg:px-8 lg:py-16 xl:px-10">
      <div className="mb-8 sm:mb-10">
        <FadeInText
          text="T-Shirt NV"
          tagName="h2"
          className="text-4xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 bg-clip-text sm:text-5xl"
        />
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
          Descubre la colección NV y elige la playera que mejor combine con tu
          estilo.
        </p>
      </div>

      <div className="overflow-hidden rounded-[30px] border border-white/60 bg-white p-3 shadow-[0_22px_60px_rgba(0,0,0,0.08)] sm:p-4 lg:p-5 xl:p-6">
        <div className="relative overflow-hidden rounded-[28px] bg-white">
          <AnimatePresence mode="wait">
            <motion.button
              key={currentShirt.id}
              onClick={() => handleShirtClick(currentShirt)}
              className="relative block w-full overflow-hidden rounded-[28px] text-left"
              initial={{ opacity: 0.72, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.72, scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex h-[320px] w-full items-center justify-center bg-[#f4f6fa] px-4 pt-4 sm:h-[420px] sm:px-6 md:h-[520px] lg:h-[620px] xl:h-[680px]">
                <img
                  src={currentShirt.image}
                  alt={currentShirt.name}
                  className="h-full w-full object-contain object-center"
                />
              </div>

              <div className="absolute inset-0 hidden bg-gradient-to-t from-black/35 via-black/5 to-transparent sm:block" />

              <div className="absolute bottom-5 left-5 right-5 hidden rounded-2xl border border-white/15 bg-black/25 px-5 py-4 text-white backdrop-blur-[2px] sm:block lg:left-6 lg:right-6 lg:px-6">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                      Colección NV
                    </p>
                    <h3 className="mt-1 text-3xl font-bold">
                      {currentShirt.name}
                    </h3>
                    <p className="mt-1 text-base text-white/90">
                      {currentShirt.price}
                    </p>
                  </div>

                  <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                    Toca para ver detalles
                  </span>
                </div>
              </div>
            </motion.button>
          </AnimatePresence>

          <button
            onClick={handlePrevious}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-3 text-gray-700 shadow-md transition hover:bg-white sm:inline-flex"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={handleNext}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-3 text-gray-700 shadow-md transition hover:bg-white sm:inline-flex"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="block px-2 pb-1 pt-4 sm:hidden">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
            Colección NV
          </p>

          <div className="mt-2 min-h-[84px] px-2">
            <h3 className="text-center text-2xl font-bold leading-tight text-gray-900">
              {currentShirt.name}
            </h3>
          </div>

          <div className="mt-1 min-h-[36px]">
            <p className="text-center text-lg font-semibold text-gray-700">
              {currentShirt.price}
            </p>
          </div>

          <button
            onClick={() => handleShirtClick(currentShirt)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#1d4ed8]"
          >
            Ver detalles
          </button>

          <div className="mt-5 flex items-center justify-center gap-2">
            {shirts.map((shirt, index) => (
              <button
                key={shirt.id}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ver ${shirt.name}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-blue-500"
                    : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="mt-3 text-center text-xs font-medium text-gray-400">
            {currentIndex + 1} / {shirts.length}
          </p>
        </div>

        <div className="mt-4 hidden grid-cols-4 gap-3 sm:grid sm:mt-5 lg:gap-4 xl:gap-5">
          {shirts.map((shirt, index) => (
            <button
              key={shirt.id}
              onClick={() => setCurrentIndex(index)}
              className={`overflow-hidden rounded-2xl border transition ${
                currentIndex === index
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-white/60 hover:border-gray-300"
              }`}
              aria-label={`Ver ${shirt.name}`}
            >
              <div className="h-[96px] bg-[#f4f6fa] lg:h-[104px] xl:h-[112px]">
                <img
                  src={shirt.image}
                  alt={shirt.name}
                  className="h-full w-full object-contain p-2"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showModal && selectedShirt && (
          <ShirtModal
            shirt={selectedShirt}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            error={error}
            onClose={handleCloseModal}
            onWhatsApp={handleWhatsAppClick}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ShirtGallery;
