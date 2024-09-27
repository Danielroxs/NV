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
import AboutUs from "./sections/AboutUs";

const App = () => (
  <>
    <Navbar />

    <main className="relative bg-city-lights ">
      <section id="home">
        <Hero1 />
      </section>

      <section id="about" className="py-16">
        <AboutUs />
      </section>

      <div className="custom-shape-divider-top-1727460625">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

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

      <section>
        <Footer />
      </section>
    </main>
  </>
);

export default App;
