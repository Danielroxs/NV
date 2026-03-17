import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FadeInText from "./Motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Nombre es requerido";

    if (!formData.email.trim()) {
      tempErrors.email = "Email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Formato de email inválido";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Teléfono es requerido";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      tempErrors.phone = "Formato de teléfono inválido (10 dígitos requeridos)";
    }

    if (!formData.address.trim()) tempErrors.address = "Mensaje es requerido";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_3od2neb",
          "template_n2vh0ka",
          e.target,
          "y6Vd411mzDfYd_wjG",
        )
        .then(
          () => {
            toast.success("Mensaje enviado con éxito");
            setFormData({
              name: "",
              email: "",
              phone: "",
              address: "",
            });
            setErrors({});
          },
          () => {
            toast.error(
              "Hubo un error al enviar el mensaje. Intenta de nuevo.",
            );
          },
        );
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      {/* Encabezado afuera */}
      <div className="mb-8 sm:mb-10">
        <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-600 shadow-sm sm:text-sm">
          Contacto
        </span>

        <FadeInText
          text="Hablemos de tu siguiente paso"
          tagName="h2"
          className="mt-4 text-4xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-violet-500 bg-clip-text sm:text-5xl"
        />

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
          Déjanos tus datos y tu mensaje. Te responderemos para ayudarte a
          elegir el plan o servicio que mejor se adapte a ti.
        </p>
      </div>

      {/* Card principal */}
      <div className="overflow-hidden rounded-[30px] border border-white/60 bg-white shadow-[0_22px_60px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Imagen / bloque visual */}
          <div className="relative h-[240px] sm:h-[300px] lg:h-full">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt="Atención al cliente"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/75 via-orange-400/65 to-violet-600/75" />

            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
              <div className="max-w-md text-center text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-xs">
                  Asesoría personalizada
                </p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                  ¡Envíanos tu consulta!
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/90 sm:text-base">
                  Estamos listos para ayudarte a comenzar tu proceso con una
                  atención cercana y clara.
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="p-5 text-left sm:p-7 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Formulario de contacto
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Completa la información y nos pondremos en contacto contigo.
            </p>

            <form
              onSubmit={sendEmail}
              className="mt-6 space-y-4 sm:mt-8 sm:space-y-5"
            >
              <div>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                    className={`w-full rounded-2xl border bg-white py-3 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-blue-500 sm:text-base ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                    className={`w-full rounded-2xl border bg-white py-3 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-blue-500 sm:text-base ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Número de teléfono"
                    className={`w-full rounded-2xl border bg-white py-3 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-blue-500 sm:text-base ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Mensaje..."
                    rows="4"
                    className={`w-full rounded-2xl border bg-white py-3 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-blue-500 sm:text-base ${
                      errors.address ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.address && (
                  <p className="mt-2 text-sm text-red-600">{errors.address}</p>
                )}
              </div>

              <button
                aria-label="Enviar mensaje"
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[#2563eb] px-6 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-[#1d4ed8] sm:text-base"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default ContactForm;
