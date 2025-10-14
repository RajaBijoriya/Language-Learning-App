import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo_level from "../../assets/Level Illustration.png";
import { Button, Divider } from "@mantine/core";
import LeftArrowAndTheme from "../LeftArrowAndTheme";

const LanguageLevel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedLanguage = location.state?.selectedLanguage || "the language";
  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-700 px-4 py-6 sm:px-8 md:px-12 lg:px-24">
      {/* Top Navigation */}
      <LeftArrowAndTheme />

      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-center mt-6 sm:mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          Determine your {selectedLanguage} level
        </h1>

        {/* Illustration */}
        <img
          src={logo_level}
          alt="Learning Illustration"
          className="sm:w-48 md:w-78 lg:w-112 object-contain mt-8 mb-6"
        />
      </div>

      {/* Action Buttons */}
      <div className="w-full flex flex-col items-center gap-4 mt-4 sm:mt-6">
        {/* Choose Level Button */}
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
          <Button
            onClick={() =>
              navigate("/learning-options", {
                state: {
                  ...location.state,
                  levelDeterminationMethod: "self-assessment",
                },
              })
            }
            color="#007AFF"
            radius="md"
            size="lg"
            fullWidth
            className="font-medium text-base sm:text-lg hover:opacity-90 transition">
            Choose your level
          </Button>
        </div>

        {/* Divider */}
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
          <Divider my="sm" size="sm" label="or" labelPosition="center" />
        </div>

        {/* Screening Test Button */}
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
          <Button
            onClick={() =>
              navigate("/learning-options", {
                state: {
                  ...location.state,
                  levelDeterminationMethod: "screening-test",
                },
              })
            }
            variant="light"
            color="#007AFF"
            radius="md"
            size="lg"
            fullWidth
            className="flex items-center justify-center gap-2 text-base sm:text-lg hover:bg-gray-100 transition">
            <span className="text-gray-700">Take a screening test</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LanguageLevel;
