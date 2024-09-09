import Button from "../components/Button";

const Maps = () => {
  const openInGoogleMaps = () => {
    window.open("https://www.google.com/maps?q=GYM+MUSCLE+MACHINE", "_blank");
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-white text-2xl md:text-4xl font-medium mb-2">
          Maps
        </h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.578089026633!2d-99.22346511400052!3d19.60256818809573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d4a5296bf3b%3A0xaabcfe6a8f16d9a3!2sGYM%20MUSCLE%20MACHINE!5e0!3m2!1ses!2smx!4v1723833160116!5m2!1ses!2smx"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <Button onClick={openInGoogleMaps} className="mt-2">
          Abrir en Google Maps
        </Button>
      </div>
    </section>
  );
};

export default Maps;
