const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Transforma tu vida con un enfoque integral
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Nutricion y Entrenamiento personalizado para ayudarte a alcanzar tus
            objetivos de salud de manera holística.
          </p>
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
