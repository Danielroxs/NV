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
import Navbar from "./components/Navbar";
import MockupCards from "./components/MockupCard";

const App = () => (
  <main className="relative bg-city-lights ">
    {/* Navbar fijo en la parte superior */}
    <Navbar />

    {/* Hero Section - Fuera del contenedor blanco */}
    <section>
      <Hero />
    </section>

    {/* Contenedor blanco que se superpone al Hero */}
    <section className="relative -mt-16 bg-anti-flash-white shadow-lg rounded-lg z-10 p-8 w-11/12 mx-auto">
      {/* Contenido de la landing page sobre el lienzo blanco */}

      <section>
        <AboutUs />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <MockupCards />
      </section>

      <section>
        <Benefits />
      </section>

      <section>
        <Testimonial />
      </section>

      <section>
        <Maps />
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <Programas />
      </section>
    </section>

    <section>
      <Footer />
    </section>
  </main>
);

export default App;
