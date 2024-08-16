import { ejemplos } from "../constants";
import ImageComparison from "react-image-comparison";

const GaleriaAntesDespues = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Transformaciones Antes y Después
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ejemplos.map((ejemplo, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{ejemplo.title}</h3>
              <ImageComparison
                image1={ejemplo.before}
                image2={ejemplo.after}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriaAntesDespues;
