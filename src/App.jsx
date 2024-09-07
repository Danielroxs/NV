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
import { Card } from "@chakra-ui/react";
import Contact from "./components/Contact";
import Testimonial from "./sections/Testimonial";

const App = () => (
  <main className="relative">
    <section className="">
      <Hero />
    </section>

    <section className="">
      <AboutUs />
    </section>

    <section>
      <Services />
    </section>

    <section className="">
      <Benefits />
    </section>

    <section>
      <Testimonial />
    </section>

    {/* <section className="">
      <Testimonials />
    </section> */}

    <section className="padding-x ">
      <Maps />
    </section>

    <section className="padding-x ">
      <Programas />
    </section>

    <section className="padding-x ">
      <Contact />
    </section>

    <section className="">
      <Footer />
    </section>
  </main>
);

export default App;
