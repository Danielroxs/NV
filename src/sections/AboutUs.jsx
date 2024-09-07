import React, { Suspense, useEffect, useRef, useState } from "react";
import Card from "../components/NeriCard";
import neri from "../images/neri.webp"; // Asegúrate de que la ruta sea correcta
import CustomizedTimeline from "../components/TimeLine";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Spinner from "../components/Spinner";
const InstagramWidget = React.lazy(() =>
  import("../components/InstagramWidget")
);

const AboutUs = () => {
  const sectionRef = useRef(null); // Referencia a la sección
  const [isVisible, setIsVisible] = useState(false); // Estado para manejar la visibilidad

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Cambia el estado a visible si la sección está en vista
            observer.disconnect(); // Detiene la observación para evitar múltiples llamadas
          }
        });
      },
      {
        root: null, // Observa respecto al viewport
        rootMargin: "0px",
        threshold: 0.1, // El 10% de la sección debe estar visible para que se active
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Comienza a observar la referencia
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Limpia el observer cuando el componente se desmonte
      }
    };
  }, []);

  return (
    <section className="bg-gray-100 py-16 shadow-lg">
      <div className="text-center text-4xl font-bold font-palanquin">
        <h2>Sobre Nosotros</h2>
      </div>

      <div
        id="#about-us"
        className="p-2 flex flex-col bg-gray-100 md:flex-row justify-around items-center md:mb-6"
      >
        <div className="w-full text-start md:w-1/3 lg:w-1/3 mb-8 md:mb-0">
          <h2 className="text-4xl font-palanquin text-gray-900 mb-4">
            Hola! Soy Neri Villeda,
            <br />
            Soy Nutriólogo y Entrenador Personal.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            En nuestro consultorio, creemos que la salud es un equilibrio entre
            nutrición y ejercicio. Nuestro enfoque combina planes alimenticios
            personalizados con programas de entrenamiento diseñados para cada
            individuo. Trabajamos contigo para alcanzar tus metas, ya sea
            mejorar tu rendimiento, perder peso o simplemente sentirte mejor.
            ¡Nos comprometemos a acompañarte en cada paso del camino!
          </p>
          <p className="text-lg text-gray-600 mb-6">
            {" "}
            Mi filosofía de trabajo se basa en la colaboración y la empatía,
            asegurando que cada persona reciba un tratamiento único y
            personalizado.
          </p>
          <div className="flex justify-center mt-6 md:justify-start space-x-4">
            <a
              href="https://www.instagram.com/stories/nerii_villeda.fit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 icon-hover"
            >
              <InstagramIcon style={{ fontSize: 40, color: "#E1306C" }} />
            </a>
            <a
              href="https://www.facebook.com/gymmusclemachine"
              target="_blank"
              className="text-gray-900 hover:text-gray-500 icon-hover"
            >
              <FacebookIcon style={{ fontSize: 40, color: "#4267B2" }} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2">
          <Card
            imageSrc={neri}
            cedula={"#89504689"}
            className="rounded-full "
          />

          <div ref={sectionRef} className="mt-2 flex justify-center">
            {isVisible && (
              <Suspense fallback={<Spinner />}>
                <InstagramWidget />
              </Suspense>
            )}
          </div>
        </div>
      </div>

      {/* <div ref={sectionRef} className="flex justify-center">
        {isVisible && (
          <Suspense fallback={<Spinner />}>
            <InstagramWidget />
          </Suspense>
        )}
      </div> */}

      {/* <div id="#" className="">
        <div className="p-8 flex flex-col bg-gray-100 md:flex-row justify-around items-center md:mb-10">
          <div className="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0">
            <CustomizedTimeline />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default AboutUs;
