import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="bg-slate-500 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((test, id) => (
            <div key={id} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src={test.image}
                alt={test.title}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{test.name}</h3>
              <p className="text-gray-600 italic">{test.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
