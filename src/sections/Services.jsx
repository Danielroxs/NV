import { FaAppleAlt, FaDumbbell } from "react-icons/fa";
import nutrigym from "../images/nutrigym.webp";

const Services = () => {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage: `url(${nutrigym})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black bg-opacity-50 py-16 ">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <FaAppleAlt className="text-green-500 text-4xl mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Nutrición
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-3">
                <li>Consultas Nutricionales Personalizadas</li>
                <li>Planes de Alimentación Adaptados</li>
                <li>Seguimiento y Ajuste de Plan</li>
                <li>Educación en Hábitos Alimenticios</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <FaDumbbell className="text-blue-500 text-4xl mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Entrenamiento Personalizado
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-3">
                <li>Evaluación Física Completa</li>
                <li>Rutinas de Entrenamiento Personalizadas</li>
                <li>Entrenamiento para Diferentes Niveles</li>
                <li>Monitoreo de Progreso y Ajustes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
