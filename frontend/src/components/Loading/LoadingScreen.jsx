import React from "react";
import logo8080 from "../../assets/Logo 80_80.png";

const LoadingScreen = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-white">
      <div className="flex flex-col justify-center items-center space-y-4 px-4">
        {/* Logo */}
        <img
          src={logo8080}
          alt="Logo"
          className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28"
        />

        {/* Subtitle */}
        <p className="text-lg sm:text-sm  md:text-xl text-center tracking-wide">
          Your personal language <br/> learning tutor
        </p>

        {/* Animated Loading Bars */}
        <div className="flex space-x-2 mt-4">
          <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-blue-500 animate-bounce [animation-delay:-0.3s] rounded-full"></div>
          <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-blue-500 animate-bounce [animation-delay:-0.15s] rounded-full"></div>
          <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-blue-500 animate-bounce rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
