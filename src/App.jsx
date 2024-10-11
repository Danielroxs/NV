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

          <main className="relative bg-city-lights ">
            <section id="home">
              <Hero1 />
            </section>

            <section id="about" className="pb-10 pt-4">
              <AboutUs />
            </section>

            <section className="py-10">
              <SocialMedia />
            </section>

            <section className="py-10">
              <BeforeAfterComponent />
            </section>

            <section id="benefits" className="py-10">
              <Benefits />
            </section>

            <WhatsappButton />

            <section id="services" className="py-10">
              <ProgramasCombinados />
            </section>

            <section id="products" className="py-10">
              <Tienda />
            </section>

            <section className="py-10">
              <Testimonial />
            </section>

            <section className="py-10">
              <Maps />
            </section>

            <section id="contact" className="py-10">
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
