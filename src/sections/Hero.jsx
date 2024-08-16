import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="relative container z-10 max-w-7xl mx-auto py-2 px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Heading
            as="h1"
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Transforma tu vida con un enfoque integral
          </Heading>
          <Text className="text-sm md:text-xl mb-6 text-gray-100">
            Nutricion y Entrenamiento personalizado para ayudarte a alcanzar tus
            objetivos de salud de manera holística
          </Text>
          <a
            href="#contact"
            className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Agenda una consulta
          </a>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:b-0">
          <img
            src="hero1.png"
            alt="Nutrición y Entrenamiento"
            className="w-full h-auto rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
