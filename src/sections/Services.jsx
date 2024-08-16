const Services = () => {
  return (
    <section className="text-white py-16 bg-gray-500">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-slate-600 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium mb-4">Nutrición</h3>
            <p className="text-gray-300 mb-4">
              Ofrecemos planes de nutrición personalizados para ayudarte a
              alcanzar tus objetivos de salud y bienestar.
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Consultas con el nutricionista</li>
              <li>Planes de alimentación personalizados</li>
              <li>Seguimiento y ajustes según progreso</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
