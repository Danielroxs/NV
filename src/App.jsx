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
        <div className="min-h-screen w-full aurora-background">
          <Navbar />

          <main className="relative overflow-x-hidden">
            <section id="home" className="min-h-screen">
              <Hero1 />
            </section>

            <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24">
              <AboutUs />
            </section>

            <section className="py-8 sm:py-10 lg:py-12">
              <SocialMedia />
            </section>

            <section className="py-12 sm:py-16 md:py-20 lg:py-24">
              <BeforeAfterComponent />
            </section>

            <section
              id="benefits"
              className="section-shell py-12 sm:py-16 md:py-20 lg:py-24"
            >
              <Benefits />
            </section>

            <WhatsappButton />

            <section
              id="services"
              className="section-shell py-12 sm:py-16 md:py-20 lg:py-24"
            >
              <ProgramasCombinados />
            </section>

            <section
              id="products"
              className="section-shell py-12 sm:py-16 md:py-20 lg:py-24"
            >
              <Tienda />
            </section>

            <section className="section-shell py-12 sm:py-16 md:py-20 lg:py-24">
              <Testimonial />
            </section>

            <section className="section-shell py-12 sm:py-16 md:py-20 lg:py-24">
              <Maps />
            </section>

            <section
              id="contact"
              className="section-shell py-12 sm:py-16 md:py-20 lg:py-24"
            >
              <Contact />
            </section>

            <section>
              <Footer />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default App;
