import {
  AboutUs,
  Hero,
  Services,
  Testimonials,
  Footer,
  Benefits,
  Maps,
  Programas,
} from "./sections";
import * as React from "react";
import Contact from "./components/Contact";
import Testimonial from "./sections/Testimonial";
import ImageProfile from "./components/ImageProfile";

const App = () => (
  <main className="relative">
    {/* Hero Section - Fuera del contenedor blanco */}
    <section>
      <Hero />
    </section>

    {/* Contenedor blanco que se superpone al Hero */}
    <section className="relative -mt-16 bg-gray-100 shadow-lg rounded-lg z-10 p-8 w-11/12 mx-auto">
      {/* Contenido de la landing page sobre el lienzo blanco */}

      <section className="mb-12">
        <AboutUs />
      </section>

      <section>
        <ImageProfile />
      </section>

      <section className="mb-12">
        <Services />
      </section>

      <section className="mb-12">
        <Benefits />
      </section>

      <section className="mb-12">
        <Testimonial />
      </section>

      <section className="mb-12">
        <Maps />
      </section>

      <section className="mb-12">
        <Contact />
      </section>

      <section className="mb-12">
        <Programas />
      </section>
    </section>

    <section>
      <Footer />
    </section>
  </main>
);

export default App;
