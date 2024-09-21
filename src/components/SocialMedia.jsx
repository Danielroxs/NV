import React, { Suspense, useState, useEffect, useRef } from "react";
import Spinner from "../components/Spinner";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const InstagramWidget = React.lazy(() =>
  import("../components/InstagramWidget")
);

const SocialMedia = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-palanquin">
          Síguenos en Redes Sociales
        </h2>
      </div>
      <div className="flex justify-center space-x-6 flex-wrap">
        <a
          href="https://www.instagram.com/stories/nerii_villeda.fit/"
          target="_blank"
          rel="noopener noreferrer"
          className="m-4"
        >
          <InstagramIcon
            className="text-pink-600"
            style={{ fontSize: 40, color: "#E1306C" }}
          />
        </a>
        <a
          href="https://www.facebook.com/gymmusclemachine"
          target="_blank"
          rel="noopener noreferrer"
          className="m-4"
        >
          <FacebookIcon
            className="text-blue-600"
            style={{ fontSize: 40, color: "#4267B2" }}
          />
        </a>
      </div>
      <div ref={sectionRef} className="mt-8 overflow-hidden">
        {isVisible && (
          <Suspense fallback={<Spinner />}>
            <div className="w-full max-w-xs mx-auto md:max-w-md">
              <InstagramWidget />
            </div>
          </Suspense>
        )}
      </div>
    </section>
  );
};

export default SocialMedia;
