import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SocialMediaSection = () => {
  const iconVariants = (i) => ({
    hidden: { rotateY: 0 },
    visible: {
      rotateY: [0, 720, 720], // Completes three full rotations
      transition: {
        rotateY: {
          delay: i * 0.3,
          type: "tween",
          duration: 2.5,
          ease: "easeOut",
        },
      },
    },
  });

  // Create a custom hook to initialize animation controls and inView detection
  const useSetupAnimation = (index) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return { controls, ref };
  };

  // Setup animations for each social link
  const instagramAnimation = useSetupAnimation(0);
  const facebookAnimation = useSetupAnimation(1);
  const youtubeAnimation = useSetupAnimation(2);

  return (
    <section className="bg-gradient-to-r from-pink-500 via-orange-400 to-purple-600 py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-roboto text-3xl font-bold text-white mb-8 text-center">
          Conoce a Neri Villeda
        </h2>
        <div className="flex justify-center space-x-6">
          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/nerii_villeda.fit/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Visit Neri Villeda's Instagram profile"
            ref={instagramAnimation.ref}
            initial="hidden"
            animate={instagramAnimation.controls}
            variants={iconVariants(0)}
            style={{ perspective: "1000px" }}
          >
            <div className="relative bg-white p-4 rounded-full">
              <FaInstagram className="w-8 h-8 text-[#E1306C] group-hover:text-[#FD1D1D] transition-colors duration-300" />
            </div>
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/share/uG6KzuhtfF5o4jZD/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Visit Neri Villeda's Facebook profile"
            ref={facebookAnimation.ref}
            initial="hidden"
            animate={facebookAnimation.controls}
            variants={iconVariants(1)}
            style={{ perspective: "1000px" }}
          >
            <div className="relative bg-white p-4 rounded-full">
              <FaFacebook className="w-8 h-8 text-[#1877F2] group-hover:text-[#3b5998] transition-colors duration-300" />
            </div>
          </motion.a>

          {/* YouTube */}
          <motion.a
            href="https://www.youtube.com/@NeriPrideMusicOficial/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Visit Neri Villeda's YouTube profile"
            ref={youtubeAnimation.ref}
            initial="hidden"
            animate={youtubeAnimation.controls}
            variants={iconVariants(2)}
            style={{ perspective: "1000px" }}
          >
            <div className="relative bg-white p-4 rounded-full">
              <FaYoutube className="w-8 h-8 text-[#FF0000] group-hover:text-[#cc0000] transition-colors duration-300" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
