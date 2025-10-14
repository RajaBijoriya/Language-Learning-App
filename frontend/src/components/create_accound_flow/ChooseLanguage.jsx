import { IconArrowLeft, IconArrowRight, IconMoon } from "@tabler/icons-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/Flags/Flag.png";
import img1 from "../../assets/Flags/Flag (1).png";
import img2 from "../../assets/Flags/Flag (2).png";
import img3 from "../../assets/Flags/Flag (3).png";
import img4 from "../../assets/Flags/Flag (4).png";
import LeftArrowAndTheme from "../LeftArrowAndTheme";

const languages = [
  {
    id: 1,
    name: "English",
    flag: img,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-500",
  },
  {
    id: 2,
    name: "Spain",
    flag: img1,
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
  },
  {
    id: 3,
    name: "French",
    flag: img2,
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
  },
  {
    id: 4,
    name: "Belgian",
    flag: img3,
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
  },
  {
    id: 5,
    name: "Turkish",
    flag: img4,
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
  },
];

const ChooseLanguage = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white px-4 py-6 sm:px-8 md:px-12 lg:px-24">
      {/* Top Navigation */}
      <LeftArrowAndTheme />

      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Choose the language you want to learn
        </h1>
      </div>

      <div className="flex flex-col gap-4 mt-10 w-full max-w-md md:max-w-lg lg:max-w-xl">
        {languages.map((language) => (
          <div
            key={language.id}
            onClick={() => {
              setSelectedLanguage(language.id);
              navigate("/about-user", {
                state: { selectedLanguage: language.name },
              });
            }}
            className={`flex justify-around items-center ${
              language.bgColor
            } h-[70px] mx-3 rounded-xl md:h-[80px] lg:h-[90px] border ${
              selectedLanguage === language.id
                ? language.borderColor
                : "border-transparent"
            } cursor-pointer hover:border-2 hover:${
              language.borderColor
            } transition-all duration-200`}>
            <div className="flex gap-2 items-center">
              <img
                src={language.flag}
                alt={`${language.name} flag`}
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <p className="font-bold text-base md:text-lg lg:text-xl">
                {language.name}
              </p>
            </div>
            <IconArrowRight
              size={28}
              stroke={1.5}
              className="md:size-8 lg:size-9"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseLanguage;
