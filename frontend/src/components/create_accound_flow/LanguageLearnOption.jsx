import { IconArrowLeft, IconArrowRight, IconMoon } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import LeftArrowAndTheme from "../LeftArrowAndTheme";
import { Button } from "@mantine/core";
import { useState } from "react";

const levels = [
  {
    id: "a1",
    name: "A1-Beginning",
    description: "Basic phrases and expressions",
  },
  {
    id: "a2",
    name: "A2-Elementary",
    description: "Simple communication on routine tasks",
  },
  {
    id: "b1",
    name: "B1-Intermediate",
    description: "Handle most everyday situations",
  },
  {
    id: "b2",
    name: "B2-Upper intermediate",
    description: "Express yourself on a wide range of topics",
  },
  {
    id: "c1",
    name: "C1-Advanced",
    description: "Complex situations and academic content",
  },
];

const LanguageLearnOption = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleContinue = () => {
    if (selectedLevel) {
      navigate("/learning-time", {
        state: {
          ...location.state,
          selectedLevel,
        },
      });
    }
  };
  return (
    <div className="w-full text-gray-700 min-h-screen flex flex-col items-center bg-white px-4 py-6 sm:px-8 md:px-12 lg:px-24">
      {/* Top Navigation */}
      <LeftArrowAndTheme />

      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Do you already know your level?
        </h1>
      </div>

      <div className="flex flex-col gap-4 mt-10 w-full max-w-md md:max-w-lg lg:max-w-xl">
        {levels.map((level) => (
          <div
            key={level.id}
            onClick={() => setSelectedLevel(level)}
            className={`flex justify-between items-center h-[70px] mx-3 rounded-xl md:h-[80px] lg:h-[90px] cursor-pointer transition-all duration-200
              ${
                selectedLevel?.id === level.id
                  ? "bg-blue-100 border-2 border-blue-500"
                  : "bg-blue-50 border border-transparent hover:border-blue-300"
              }`}>
            <div className="flex flex-col gap-1 px-6">
              <p className="font-bold text-base md:text-lg lg:text-xl">
                {level.name}
              </p>
              <p
                className={`text-sm text-gray-600 transition-opacity duration-200 ${
                  selectedLevel?.id === level.id ? "opacity-100" : "opacity-0"
                }`}>
                {level.description}
              </p>
            </div>
            <div className="px-6">
              <IconArrowRight
                size={28}
                stroke={1.5}
                className={`md:size-8 lg:size-9 transition-colors duration-200 ${
                  selectedLevel?.id === level.id
                    ? "text-blue-500"
                    : "text-gray-400"
                }`}
              />
            </div>
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
            disabled={!selectedLevel}
            className={`font-medium text-base sm:text-lg transition-all duration-200 ${
              selectedLevel
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

export default LanguageLearnOption;
