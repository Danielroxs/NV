import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";
import Logo from "../assets/images/Logo.webp";
import HeroImage from "../assets/images/nerii.webp";

const MinimalistHero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "PRODUCT", href: "#products" },
    { label: "STORE", href: "#store" },
    { label: "ABOUT US", href: "#about" },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/share/uG6KzuhtfF5o4jZD/?mibextid=LQQJ4d",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/nerii_villeda.fit/",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@NeriPrideMusicOficial/videos",
    },
  ];

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-between overflow-hidden p-6 font-sans md:p-8">
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider text-anti-flash-white"
        >
          <img src={Logo} alt="NV" className="h-10 w-auto" />
        </motion.div>

        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-widest text-anti-flash-white/70 transition-colors hover:text-anti-flash-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-anti-flash-white"></span>
          <span className="block h-0.5 w-6 bg-anti-flash-white"></span>
          <span className="block h-0.5 w-5 bg-anti-flash-white"></span>
        </motion.button>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3 gap-6">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-anti-flash-white/80 md:mx-0">
            Nutrición y entrenamiento personalizado diseñado para transformar tu
            cuerpo y tu mentalidad. Comienza hoy.
          </p>
          <a
            href="#about"
            className="mt-4 sm:block hidden inline-block text-sm font-medium text-anti-flash-white underline decoration-from-font hover:text-anti-flash-white/80 transition-colors"
          >
            Leer más
          </a>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-[340px] md:h-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="relative md:absolute z-0 h-[320px] w-[320px] rounded-full bg-yellow-400/95 md:h-[420px] md:w-[420px] lg:h-[520px] lg:w-[520px] overflow-hidden flex items-center justify-center"
          >
            <motion.img
              src={HeroImage}
              alt="Neri Villeda"
              className="h-full w-full object-cover"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found";
              }}
            />
          </motion.div>
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="text-5xl font-extrabold text-anti-flash-white text-center sm:text-left md:text-7xl lg:text-8xl leading-tight">
            Neri
            <br />
            Villeda
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-anti-flash-white/60 transition-colors hover:text-anti-flash-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={scrollToAbout}
          className="text-sm font-medium text-anti-flash-white/80 hover:text-anti-flash-white transition-colors"
          aria-label="Scroll to About section"
        >
          <FaChevronDown size={24} className="animate-bounce" />
        </motion.button>
      </footer>
    </div>
  );
};

export default MinimalistHero;
