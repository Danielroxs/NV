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
    let tempErrors = {};
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
    if (!formData.address.trim()) tempErrors.address = "Dirección es requerida";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_3od2neb", // tu servicio
          "template_n2vh0ka", // tu plantilla
          e.target,
          "y6Vd411mzDfYd_wjG" // tu ID de usuario
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Mensaje enviado con éxito!");
            setFormData({
              name: "",
              email: "",
              phone: "",
              address: "",
            });
          },
          (error) => {
            console.log(error.text);
            toast.error(
              "Hubo un error al enviar el mensaje, intenta de nuevo."
            );
          }
        );
    }
  };

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-6xl w-full flex flex-col lg:flex-row">
        <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            alt="Customer Service"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-75"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FadeInText
              text="¡Envíanos tu consulta!"
              tagName="h2"
              className="text-3xl lg:text-4xl font-bold text-white text-center px-4 drop-shadow-lg"
            />
          </div>
        </div>
        <div className="lg:w-1/2 p-6 lg:p-8">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
            Formulario de Contacto
          </h3>
          <form onSubmit={sendEmail} className="space-y-4 lg:space-y-6">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre completo"
                className={`w-full pl-10 pr-3 py-2 text-sm lg:text-base border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                required
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                className={`w-full pl-10 pr-3 py-2 text-sm lg:text-base border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div className="relative">
              <FaPhone className="absolute top-3 left-3 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Número de teléfono"
                className={`w-full pl-10 pr-3 py-2 text-sm lg:text-base border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                required
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
            <div className="relative">
              <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Mensaje..."
                rows="3"
                className={`w-full pl-10 pr-3 py-2 text-sm lg:text-base border ${
                  errors.address ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                required
              ></textarea>
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address}</p>
              )}
            </div>
            <button
              aria-label="Enviar Mensaje"
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 lg:py-3 rounded-md hover:from-purple-700 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-sm lg:text-base"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
