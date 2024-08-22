import React from "react";
import Card from "../components/NeriCard";
import neri from "../images/neri.png"; // Asegúrate de que la ruta sea correcta
import CustomizedTimeline from "../components/TimeLine";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center text-2xl font-extrabold font-palanquin ">
        <h1>NUTRICION Y ENTRENAMIENTO</h1>
      </div>
      <div id="#about-us" className="">
        <div className="p-8 flex flex-col bg-gray-100 md:flex-row justify-around items-center md:mb-10">
          <div className="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0">
            <CustomizedTimeline />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2">
            <Card
              imageSrc={neri}
              cedula={"#89504689"}
              className="rounded-full "
            />
          </div>
        </div>

        <div className="w-full max-w-2xl text-center md:text-left p-6 shadow-lg">
          <h1 className="text-4xl font-bold font-palanquin text-gray-900 mb-4">
            Hola! Soy Neri Villeda,
            <br />
            Soy Nutriólogo y Entrenador Personal.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Estoy especializado en nutrición deportiva y entrenamiento
            personalizado en Muscle Machine. Me apasiona ayudar a las personas a
            alcanzar sus objetivos de salud y bienestar a través de un enfoque
            integral.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            {" "}
            Mi filosofía de trabajo se basa en la colaboración y la empatía,
            asegurando que cada persona reciba un tratamiento único y
            personalizado.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-900 hover:text-gray-500">
              Instagram
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-500">
              Facebook
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-500">
              Mail
            </a>
          </div>
        </div>

        {/* <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="p-6 md:flex md:items-center ">
              <img
                className="w-full md:w-1/2 h-80 object-cover rounded-full shadow-md"
                src={neri}
                alt="Neri Villeda"
              />
              <div className="md:ml-8 mt-6 md:mt-0">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  ¿Quién es Neri Villeda?
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Soy Neri Villeda, un profesional en nutrición y entrenamiento
                  físico con años de experiencia en ayudar a mis clientes a
                  alcanzar sus objetivos de salud y bienestar. Mi enfoque se
                  basa en un programa integral que combina asesoría nutricional
                  y entrenamiento personalizado.
                </p>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Servicios Ofrecidos
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Consultas Nutricionales Personalizadas</li>
                  <li>Planes de Comida Adaptados a tus Necesidades</li>
                  <li>Entrenamiento Físico Personalizado</li>
                  <li>Evaluaciones de Progreso y Ajustes de Plan</li>
                </ul>
                <p className="text-gray-600 mt-6">
                  Mi misión es ofrecer un enfoque holístico para ayudarte a
                  transformar tu vida, mejorando tu salud, energía y rendimiento
                  físico. Estoy aquí para guiarte en cada paso del camino hacia
                  tus metas.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
