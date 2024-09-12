import React from "react";
import neri from "../images/neri.webp";

const ImageProfile = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div className="p-1 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 rounded-full">
          <img
            src={neri}
            alt="profile"
            className="h-48 w-48 rounded-full border-4 border-white"
          />
        </div>
        <div className="absolute bottom-2 right-2 bg-green-400 h-6 w-6 border-2 border-white rounded-full"></div>
      </div>
    </div>
  );
};

export default ImageProfile;