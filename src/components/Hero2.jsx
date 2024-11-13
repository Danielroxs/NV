import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      setOffset(yOffset);

      if (yOffset === 0) {
        // Forzar ajuste inmediato al top al volver
        document.querySelector(".bg-cover").style.transform = "translateY(0px)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      role="banner"
      aria-label="Hero Section"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          transform: `translateY(${offset * 0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div
            className="animate-fade-in text-center sm:text-left"
            style={{
              opacity: Math.max(1 - offset / 500, 0),
              transform: `translateY(${offset * 0.2}px)`,
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight transition-all duration-300 ease-in-out hover:scale-105">
              Innovate. Create.
              <br />
              <span className="text-blue-400">Transform.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto sm:mx-0">
              Empowering your digital journey with cutting-edge solutions and
              unparalleled expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <button
                className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 inline-flex items-center justify-center group"
                aria-label="Get Started"
              >
                Get Started
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Learn More"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <div
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors duration-300"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
              role="button"
              aria-label="Scroll down"
              tabIndex={0}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
