import { Footer, Maps, Programas, Benefits } from "./sections";
import * as React from "react";
import Contact from "./components/Contact";
import Testimonial from "./sections/Testimonial";
import Navbar from "./components/Navbar";
import Tienda from "./components/Tienda";
import WhatsappButton from "./components/WhatsappButton";
import SocialMedia from "./components/SocialMedia";
import BeforeAfterComponent from "./components/AfterBefore";
import Hero1 from "./components/Hero1";
import AboutUs from "./components/AboutUs";

const App = () => (
  <main className="relative bg-city-lights ">
    {/* Navbar fijo en la parte superior */}
    <Navbar />

    {/* Hero Section - Fuera del contenedor blanco */}
    {/* <section>
      <Hero />
    </section> */}

    <section id="home">
      <Hero1 />
    </section>

    {/* Contenedor blanco que se superpone al Hero */}
    {/* <section className="relative -mt-16 bg-city-lights shadow-lg rounded-lg z-10 p-8 w-full mx-auto"> */}
    {/* Contenido de la landing page sobre el lienzo blanco */}

    <section id="about" className="py-16">
      <AboutUs />
    </section>

    <section className="py-16">
      <SocialMedia />
    </section>

    <section className="py-16">
      <BeforeAfterComponent />
    </section>

    <section id="benefits" className="py-16">
      <Benefits />
    </section>

    <WhatsappButton />

    <section id="services" className="py-16">
      <Programas />
    </section>

    <section id="products" className="py-16">
      <Tienda />
    </section>

    <section className="py-16">
      <Testimonial />
    </section>

    <section className="py-16">
      <Maps />
    </section>

    <section id="contact" className="py-16">
      <Contact />
    </section>
    {/* </section> */}

    <section>
      <Footer />
    </section>
  </main>
);

export default App;
