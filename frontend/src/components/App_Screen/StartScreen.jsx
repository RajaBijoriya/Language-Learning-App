import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import startIllu from "../../assets/startimage.png";
import logo from "../../assets/logo.png";
import { Button } from "@mantine/core";
import { IconMoon } from "@tabler/icons-react";

const StartScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
        className="w-28 sm:w-36 md:w-44 lg:w-48 object-contain mb-0"
      />

      {/* Illustration */}
      <div className="flex justify-center w-full mt-0">
        <img
          src={startIllu}
          alt="Hello illustration"
          className="sm:w-82 md:w-112 lg:w-[28rem] object-contain"
        />
      </div>

      {/* Heading */}
      <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold text-center leading-tight mt-6">
        Welcome to your <br className="block sm:hidden" />
        first lessons!
        <br className="" />
        <span className="text-sm md:text-xl xl: xl:text-xl text-gray-500">
          Lets's start studying!
        </span>
      </h1>

      {/* Buttons and text */}
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] flex flex-col gap-6 mt-8 mb-4">
        <Button
          onClick={() => navigate("/welcome")}
          color="#007AFF"
          radius="md"
          size="lg"
          fullWidth
          className="py-3 text-base sm:text-lg font-medium hover:opacity-90 transition">
          Let's start studying!
        </Button>
      </div>
    </div>
  );
};

export default StartScreen;
