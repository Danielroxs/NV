import Maps from "../sections/Maps";
import ContactForm from "../components/Contact";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/path/to/your/hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-500 opacity-80"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-5xl font-bold">Material Kit PRO</h1>
          <p className="text-white mt-4 text-lg">
            Start Your Development With A Badass Bootstrap UI Kit inspired by
            Material Design.
          </p>
        </div>
      </section>

      {/* Contenedor superpuesto que contiene todas las secciones */}
      <section className="relative -mt-16 bg-white rounded-lg shadow-lg z-20 p-8 max-w-7xl mx-auto">
        {/* Sección 1: Introducción o contenido */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Welcome to Our Platform</h2>
          <p className="text-gray-700">
            This is an introductory section. You can describe your product or
            service here.
          </p>
        </div>

        {/* Sección 2: Contact Form & Map */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* El mapa ocupará 2/3 del ancho */}
          <div className="w-full md:w-2/3 flex justify-center items-center">
            <Maps />
          </div>

          {/* El formulario ocupará 1/3 del ancho */}
          <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-none">
            <ContactForm />
          </div>
        </div>

        {/* Sección 3: Otra sección de contenido */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-700">
            Here's where you can talk about your services or offerings. Include
            some details about what makes your product great.
          </p>
        </div>

        {/* Sección 4: Footer o cualquier otra sección */}
        <div className="text-center mt-8">
          <p className="text-gray-500">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
