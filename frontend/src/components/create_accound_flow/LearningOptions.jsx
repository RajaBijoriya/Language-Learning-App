import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  IconArrowRight,
  IconBook,
  IconUser,
  IconDeviceLaptop,
  IconBrain,
} from "@tabler/icons-react";
import { Button } from "@mantine/core";
import LeftArrowAndTheme from "../LeftArrowAndTheme";

const learningOptions = [
  {
    id: "self-study",
    name: "Self Study",
    description: "Learn at your own pace with interactive lessons",
    icon: IconBook,
  },
  {
    id: "tutor",
    name: "Learn with a Tutor",
    description: "Get personalized guidance from expert teachers",
    icon: IconUser,
  },
  {
    id: "online-class",
    name: "Online Classes",
    description: "Join group classes with other learners",
    icon: IconDeviceLaptop,
  },
  {
    id: "ai-assisted",
    name: "AI-Assisted Learning",
    description: "Get instant feedback and personalized recommendations",
    icon: IconBrain,
  },
];

const LearningOptions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleContinue = () => {
    if (selectedOption) {
      navigate("/learning-time", {
        state: {
          ...location.state,
          learningOption: selectedOption,
        },
      });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white px-4 py-6 sm:px-8 md:px-12 lg:px-24">
      {/* Top Navigation */}
      <LeftArrowAndTheme />

      <div className="text-center mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          How would you like to learn?
        </h1>
        <p className="text-gray-600 mt-2">
          Choose your preferred learning method
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-md md:max-w-lg lg:max-w-xl">
        {learningOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelectedOption(option)}
            className={`flex justify-between items-center p-6 rounded-xl cursor-pointer transition-all duration-200
              ${
                selectedOption?.id === option.id
                  ? "bg-blue-100 border-2 border-blue-500"
                  : "bg-gray-50 border border-transparent hover:border-blue-300"
              }`}>
            <div className="flex items-center gap-4">
              <option.icon
                size={32}
                className={`transition-colors duration-200 ${
                  selectedOption?.id === option.id
                    ? "text-blue-500"
                    : "text-gray-400"
                }`}
              />
              <div>
                <p className="font-bold text-base md:text-lg">{option.name}</p>
                <p className="text-sm text-gray-600 mt-1">
                  {option.description}
                </p>
              </div>
            </div>
            <IconArrowRight
              size={24}
              className={`transition-colors duration-200 ${
                selectedOption?.id === option.id
                  ? "text-blue-500"
                  : "text-gray-400"
              }`}
            />
          </div>
        ))}

        {/* Continue Button */}
        <div className="w-full sm:w-[80%] md:w-[60%] mt-8 mx-auto">
          <Button
            onClick={handleContinue}
            color="#007AFF"
            radius="md"
            size="lg"
            fullWidth
            disabled={!selectedOption}
            className={`font-medium text-base sm:text-lg transition-all duration-200 ${
              selectedOption
                ? "hover:bg-blue-600 transform hover:scale-102"
                : "opacity-50 cursor-not-allowed"
            }`}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LearningOptions;
