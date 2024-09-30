import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const SocialMediaSection = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/nerii_villeda.fit/",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/share/uG6KzuhtfF5o4jZD/?mibextid=LQQJ4d",
    },
    {
      name: "Youtube",
      icon: FaYoutube,
      url: "https://www.youtube.com/@NeriPrideMusicOficial/videos",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-red-500 to-blue-500 py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-roboto text-3xl font-bold text-white mb-8 text-center">
          Conoce a Neri villeda
        </h2>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={`Visit Neri Villeda's ${link.name} profile`}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white p-4 rounded-full transform transition duration-300 group-hover:scale-110">
                <link.icon className="w-8 h-8 text-gray-800 group-hover:text-blue-700 transition duration-300" />
              </div>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 mb-2">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
