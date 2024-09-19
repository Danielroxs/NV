import React, { useState } from "react";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Button from "../components/Button";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3od2neb",
        "template_n2vh0ka",
        e.target,
        "y6Vd411mzDfYd_wjG"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Mensaje enviado con éxito!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Hubo un error al enviar el mensaje, intenta de nuevo.");
        }
      );
  };

  return (
    <section className="">
      <div className="max-w-md mx-auto bg-white p-4 m-6 shadow-lg rounded-lg">
        <h2 className="text-2xl mb-6 text-center">Contacto</h2>
        <form onSubmit={sendEmail}>
          <div className="grid grid-cols-1 gap-6">
            <div className="input-wrapper flex items-center ">
              <FaUser className="mr-3 text-gray-600" />
              <input
                type="text"
                name="name" // Esto debe coincidir con {{name}} en la plantilla
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span className="underline"></span>
            </div>

            <div className="input-wrapper flex items-center">
              <FaPhoneAlt className="mr-3 text-gray-600" />
              <input
                type="tel"
                name="phone" // Esto debe coincidir con {{phone}} en la plantilla
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefono"
                required
              />
              <span className="underline"></span>
            </div>

            <div className="input-wrapper flex items-center">
              <FaEnvelope className="mr-3 text-gray-600" />
              <input
                type="email"
                name="email" // Esto debe coincidir con {{email}} en la plantilla
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="underline"></span>
            </div>

            <textarea
              name="message" // Esto debe coincidir con {{message}} en la plantilla
              placeholder="Tú mensaje..."
              value={formData.message}
              onChange={handleChange}
              className="appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none resize-none"
              required
            />
          </div>

          <Button type="submit" className="w-full mt-6">
            Enviar
          </Button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ContactForm;
