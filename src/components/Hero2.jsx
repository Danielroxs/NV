import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.4,
        }}
        role="img"
        aria-label="Dynamic mountain landscape with aurora borealis"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70" />

      <div className="relative h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            <TypeAnimation
              sequence={[
                "Discover Your Next Adventure",
                2000,
                "Create Unforgettable Memories",
                2000,
                "Explore The Unknown",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center mb-8 max-w-3xl mx-auto text-blue-200">
            Embark on a journey of discovery and innovation. Let us guide you
            through an extraordinary experience that will transform your
            perspective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-lg shadow-purple-500/30"
              onFocus={(e) => e.target.classList.add("ring-2")}
              onBlur={(e) => e.target.classList.remove("ring-2")}
            >
              Get Started
            </button>
            <button
              className="group px-8 py-3 bg-transparent border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:border-purple-500 text-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-lg shadow-purple-500/20"
              onFocus={(e) => e.target.classList.add("ring-2")}
              onBlur={(e) => e.target.classList.remove("ring-2")}
            >
              Learn More
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />
    </div>
  );
};

export default HeroSection;
