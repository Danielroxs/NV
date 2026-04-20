import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";
import heroImage from "../assets/images/nerii.webp";

const Hero1 = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071226] text-white">
      {/* glow central */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2b4f9c]/30 blur-3xl sm:h-[800px] sm:w-[800px] xl:h-[950px] xl:w-[950px]" />
      </div>

      {/* navbar */}
      <header className="relative z-20">
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-4 py-7 sm:px-6 sm:py-8 lg:px-8 xl:px-12 2xl:px-16">
          <a
            href="#home"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            NV
          </a>

          <nav className="hidden items-center gap-8 xl:flex 2xl:gap-10">
            <a
              href="#home"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-white"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-white"
            >
              Product
            </a>
            <a
              href="#store"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-white"
            >
              Store
            </a>
            <a
              href="#about"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-white"
            >
              About us
            </a>
          </nav>
        </div>
      </header>

      {/* hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-108px)] w-full max-w-[1800px] items-center px-4 pb-8 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_1.25fr_1fr] xl:gap-10 2xl:gap-14">
          {/* texto izquierdo */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <div className="w-full max-w-[360px] sm:max-w-[420px] xl:max-w-[470px]">
              <p className="text-lg font-medium leading-10 text-white/88 sm:text-xl sm:leading-[2.4rem] xl:text-[1.5rem] xl:leading-[2.8rem]">
                Nutrición y entrenamiento personalizado diseñado para
                transformar tu cuerpo y tu mentalidad. Comienza hoy.
              </p>

              <a
                href="#about"
                className="mt-6 inline-flex items-center text-base font-bold text-white underline underline-offset-4 transition hover:text-white/80 sm:text-lg"
              >
                Leer más
              </a>
            </div>
          </div>

          {/* imagen central */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-full bg-[#f2ca14] sm:h-[380px] sm:w-[380px] md:h-[470px] md:w-[470px] lg:h-[560px] lg:w-[560px] xl:h-[650px] xl:w-[650px] 2xl:h-[720px] 2xl:w-[720px]">
              <img
                src={heroImage}
                alt="Neri Villeda"
                className="h-[127%] w-[127%] object-contain object-center drop-shadow-[0_20px_45px_rgba(0,0,0,0.35)] sm:h-[129%] sm:w-[129%] md:h-[131%] md:w-[131%] lg:h-[133%] lg:w-[133%] xl:h-[135%] xl:w-[135%]"
              />
            </div>
          </div>

          {/* nombre derecho */}
          <div className="order-3 flex justify-center lg:justify-start">
            <h1 className="text-center text-5xl font-extrabold leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-left lg:text-[5.2rem] xl:text-[6.2rem] 2xl:text-[7rem]">
              Neri
              <br />
              Villeda
            </h1>
          </div>
        </div>
      </div>

      {/* footer hero */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1800px] items-end justify-between px-4 pb-6 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/share/uG6KzuhtfF5o4jZD/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/75 transition hover:text-white"
          >
            <FaFacebookF className="h-4 w-4" />
          </a>

          <a
            href="https://www.instagram.com/nerii_villeda.fit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/75 transition hover:text-white"
          >
            <FaInstagram className="h-4 w-4" />
          </a>

          <a
            href="https://www.youtube.com/@NeriPrideMusicOficial/videos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-white/75 transition hover:text-white"
          >
            <FaYoutube className="h-4 w-4" />
          </a>
        </div>

        <a
          href="#about"
          aria-label="Ir a la siguiente sección"
          className="inline-flex items-center justify-center text-white/80 transition hover:text-white"
        >
          <FaChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero1;
