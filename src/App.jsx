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

const App = () => (
  <main className="relative">
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>

    <section className="padding">
      <Benefits />
    </section>

    <section className="padding">
      <Testimonials />
    </section>

    <section className="padding-x py-10">
      <Maps />
    </section>

    <section className="padding-x py-10">
      <Services />
    </section>

    <section className="padding-x py-10">
      <Programas />
    </section>

    <section className="padding">
      <Footer />
    </section>
  </main>
);

export default App;
