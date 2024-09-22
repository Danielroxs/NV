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
import WhatsappButton from "./components/WhatsappButton";
import SocialMedia from "./components/SocialMedia";
import BeforeAfterComponent from "./components/AfterBefore";

const App = () => (
  <main className="relative bg-city-lights ">
    {/* Navbar fijo en la parte superior */}
    <Navbar />

    {/* Hero Section - Fuera del contenedor blanco */}
    <section>
      <Hero />
    </section>

    {/* Contenedor blanco que se superpone al Hero */}
    <section className="relative -mt-16 bg-city-lights shadow-lg rounded-lg z-10 p-8 w-full mx-auto">
      {/* Contenido de la landing page sobre el lienzo blanco */}

      <section>
        <AboutUs />
      </section>

      <section>
        <BeforeAfterComponent />
      </section>

      <section>
        <SocialMedia />
      </section>

      <WhatsappButton />

      <section>
        <Services />
      </section>

      <section>
        <Benefits />
      </section>

      <section>
        <MockupCards />
      </section>

      <section>
        <Programas />
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
    </section>

    <section>
      <Footer />
    </section>
  </main>
);

export default App;
