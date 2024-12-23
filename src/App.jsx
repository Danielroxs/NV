import { Footer, Maps, ProgramasCombinados, Benefits } from "./sections";
import * as React from "react";
import Contact from "./components/Contact";
import Testimonial from "./sections/Testimonial";
import Navbar from "./components/Navbar";
import Tienda from "./components/Tienda";
import WhatsappButton from "./components/WhatsappButton";
import SocialMedia from "./components/SocialMedia";
import BeforeAfterComponent from "./components/AfterBefore";
import Hero1 from "./components/Hero1";
import AboutUs from "./sections/AboutUs";
import { useState } from "react";
import Curtain from "./sections/Curtain";

const App = () => {
  const [isCurtainOpen, setIsCurtainOpen] = useState(true);

  return (
    <>
      <Curtain
        isCurtainOpen={isCurtainOpen}
        setIsCurtainOpen={setIsCurtainOpen}
      />
      {!isCurtainOpen && (
        <>
          <Navbar />

          <main className="relative bg-city-lights">
            <section id="home" className="h-screen">
              <Hero1 />
            </section>

            <section
              id="about"
              className="py-12 sm:py-16 md:py-20 lg:py-24 max-w-screen-xl mx-auto"
            >
              <AboutUs />
            </section>

            <section className="py-8 sm:py-10 lg:py-12">
              <SocialMedia />
            </section>

            <section className="py-12 sm:py-16 md:py-20 lg:py-24 max-w-screen-xl mx-auto">
              <BeforeAfterComponent />
            </section>

            <section
              id="benefits"
              className="py-12 sm:py-16 md:py-20 lg:py-24 max-w-screen-xl mx-auto"
            >
              <Benefits />
            </section>

            <WhatsappButton />

            <section
              id="services"
              className="py-12 sm:py-16 md:py-20 lg:py-24 max-w-screen-xl mx-auto"
            >
              <ProgramasCombinados />
            </section>

            <section
              id="products"
              className="py-12 sm:py-16 md:py-20 lg:py-24 max-w-screen-xl mx-auto"
            >
              <Tienda />
            </section>

            <section className="py-12 sm:py-16 md:py-20 lg:py-24 max-w-screen-xl mx-auto">
              <Testimonial />
            </section>

            <section className="py-12 sm:py-16 md:py-20 lg:py-24 max-w-screen-xl mx-auto">
              <Maps />
            </section>

            <section
              id="contact"
              className="py-12 sm:py-16 md:py-20 lg:py-24 max-w-screen-xl mx-auto"
            >
              <Contact />
            </section>

            <section>
              <Footer />
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default App;
