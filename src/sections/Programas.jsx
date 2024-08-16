import { programas } from "../constants";

const Programas = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 ">
          Nuestros Programas Combinados
        </h2>
        <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-10">
          {programas.map((pro, id) => (
            <div key={id} className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{pro.name}</h3>
              <p className="text-gray-400 mb-4">{pro.description}</p>
              <p className="text-xl font-semibold mb-4">{pro.price}</p>
              <ul className="list-disc list-inside text-gray-400 mb-6">
                {pro.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="bg-blue-500 justify-content:center text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
              >
                Inscribete Ahora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programas;
