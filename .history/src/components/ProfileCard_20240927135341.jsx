import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProfileCard = () => {
  const [showDetails, setShowDetails] = useState(false);

  const person = {
    name: "Jane Doe",
    title: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "Stanford University",
        year: "2018",
      },
      {
        degree: "Bachelor of Science in Software Engineering",
        institution: "MIT",
        year: "2016",
      },
    ],
    experience: [
      {
        position: "Senior Software Engineer",
        company: "Tech Giants Inc.",
        duration: "2019 - Present",
      },
      {
        position: "Software Developer",
        company: "Innovative Startups Ltd.",
        duration: "2016 - 2019",
      },
    ],
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="w-64 h-64 lg:w-80 lg:h-80 relative cursor-pointer">
      <div
        className="w-full max-w-xs sm:w-64 sm:h-64 relative cursor-pointer"
        onClick={toggleDetails}
      >
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg transition-transform duration-300 transform hover:scale-105">
          <img
            className="object-cover w-full h-full"
            src={person.image}
            alt={person.name}
          />
        </div>
        <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md">
          <button
            className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
            aria-label="View full profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl"
            >
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {person.name}
                  </h2>
                  <button
                    onClick={toggleDetails}
                    className="mt-2 sm:mt-0 text-gray-400 hover:text-gray-500 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-label="Close profile details"
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>
                <p className="mt-2 text-lg sm:text-xl text-gray-500">
                  {person.title}
                </p>

                <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
                  <section aria-labelledby="education-title">
                    <h3
                      id="education-title"
                      className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center"
                    >
                      <FaGraduationCap className="mr-2" /> Education
                    </h3>
                    <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                      {person.education.map((edu, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-indigo-500 pl-4 py-2"
                        >
                          <p className="text-base sm:text-lg font-medium text-gray-900">
                            {edu.degree}
                          </p>
                          <p className="text-sm sm:text-base text-gray-600">
                            {edu.institution}, {edu.year}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section aria-labelledby="experience-title">
                    <h3
                      id="experience-title"
                      className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center"
                    >
                      <FaBriefcase className="mr-2" /> Work Experience
                    </h3>
                    <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                      {person.experience.map((exp, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-indigo-500 pl-4 py-2"
                        >
                          <p className="text-base sm:text-lg font-medium text-gray-900">
                            {exp.position}
                          </p>
                          <p className="text-sm sm:text-base text-gray-600">
                            {exp.company}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            {exp.duration}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileCard;
