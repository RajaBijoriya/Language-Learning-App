import React from "react";
import HelloIllustration from "../../assets/Hello Illustraton.png";
import logo from "../../assets/logo.png";
import { Button } from "@mantine/core";
import { IconMoon } from "@tabler/icons-react";

const WelcomeScreen = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center bg-white px-4 py-6 sm:px-6 md:px-12">
      {/* Top Section (Dark mode toggle) */}
      <div className="w-full flex justify-end">
        <button className="p-2 hover:bg-gray-100 rounded-full transition">
          <IconMoon size={28} stroke={1.5} />
        </button>
      </div>

      {/* Logo */}
      <img
        src={logo}
        alt="App logo"
        className="w-28 sm:w-36 md:w-44 lg:w-48 object-contain"
      />

      {/* Illustration */}
      <div className="flex justify-center w-full">
        <img
          src={HelloIllustration}
          alt="Hello illustration"
          className="w-60 sm:w-72 md:w-96 lg:w-[28rem] object-contain"
        />
      </div>

      {/* Heading */}
      <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold text-center leading-tight mt-6">
        Learn a language in <br className="block sm:hidden" /> 3 minutes a day
      </h1>

      {/* Buttons and text */}
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] flex flex-col gap-6 mt-8 mb-4">
        <Button
          color="#007AFF"
          radius="md"
          size="lg"
          fullWidth
          className="py-3 text-base sm:text-lg font-medium hover:opacity-90 transition">
          Start Learning
        </Button>
        <p className="text-center text-base sm:text-lg">
          Already have an account?{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
