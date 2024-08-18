import { Box, Heading, Text } from "@chakra-ui/react";
import hero1 from "../images/hero1.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className=" bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="relative container z-10 max-w-7xl mx-auto py-2 px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left ">
          <Heading
            as="h1"
            className="text-5xl font-extrabold text-white leading-tight md:text-6xl mb-4 drop-shadow-md"
          >
            Transforma tu vida con un enfoque integral
          </Heading>
          <Text className="text-sm md:text-xl mb-6 text-gray-100">
            Nutricion y Entrenamiento personalizado para ayudarte a alcanzar tus
            objetivos de salud de manera holística
          </Text>
          <Button>Agenda una cita</Button>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:b-0">
          <img
            src={hero1}
            alt="Nutrición y Entrenamiento"
            className="max-w-full h-auto rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
