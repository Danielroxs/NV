import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import banner from "../assets/images/banner.webp";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nerii_villeda.fit/",
    icon: FaInstagram,
    color: "text-pink-600",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/uG6KzuhtfF5o4jZD/?mibextid=LQQJ4d",
    icon: FaFacebook,
    color: "text-blue-600",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@NeriPrideMusicOficial/videos",
    icon: FaYoutube,
    color: "text-red-600",
  },
];

const SocialMediaSection = () => {
  return (
    <section className="w-full px-3 py-10 sm:px-4 md:px-6 lg:px-8 xl:px-10">
      <div
        className="relative mx-auto w-full max-w-[1500px] overflow-hidden rounded-3xl shadow-xl"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* brillo decorativo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50" />

        {/* contenido */}
        <div className="relative z-10 flex min-h-[240px] flex-col items-center justify-center px-6 py-12 text-center sm:min-h-[280px] sm:px-10 lg:min-h-[300px] lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-white/80"
          >
            Sígueme en redes
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-3xl font-extrabold text-white sm:text-4xl"
          >
            Conoce más de mi trabajo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-2xl text-sm leading-7 text-white/90 sm:text-base"
          >
            Tips, contenido de entrenamiento, nutrición y motivación para
            ayudarte a mejorar tu salud y rendimiento.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ir a ${social.name}`}
                  initial={{ opacity: 0, y: 18, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: 0.25 + index * 0.1 }}
                  className="group flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon
                    className={`h-6 w-6 ${social.color} transition duration-300 group-hover:scale-110`}
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
