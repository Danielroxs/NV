import { beneficios } from "../constants";

const Benefits = () => {
  return (
    <section className="bg-gray-100 text-slate-700 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Beneficios combinados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {beneficios.map((ben, id) => (
            <div key={id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={ben.Image}
                alt="beneficio"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{ben.title}</h3>
              <p className="text-gray-600">{ben.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
