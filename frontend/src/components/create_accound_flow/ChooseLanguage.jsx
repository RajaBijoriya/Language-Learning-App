import { IconArrowLeft, IconArrowRight, IconMoon } from "@tabler/icons-react";
import React from "react";
import img from "../../assets/Flags/Flag.png";
import img1 from "../../assets/Flags/Flag (1).png";
import img2 from "../../assets/Flags/Flag (2).png";
import img3 from "../../assets/Flags/Flag (3).png";
import img4 from "../../assets/Flags/Flag (4).png";

const ChooseLanguage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white px-4 py-6 sm:px-8 md:px-12 lg:px-24">
      {/* Top Navigation */}
      <div className="w-full flex items-center justify-between mb-8">
        <button
          aria-label="Go back"
          className="p-2 hover:bg-gray-100 rounded-full transition">
          <IconArrowLeft size={28} stroke={1.5} />
        </button>
        <button
          aria-label="Toggle dark mode"
          className="p-2 hover:bg-gray-100 rounded-full transition">
          <IconMoon size={28} stroke={1.5} />
        </button>
      </div>

      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Choose the language you want to learn
        </h1>
      </div>

      <div className="flex flex-col gap-4 mt-10 w-full max-w-md md:max-w-lg lg:max-w-xl">
        {/* English */}
        <div className="flex justify-around items-center bg-blue-50 h-[70px] border border-blue-500 mx-3 rounded-xl md:h-[80px] lg:h-[90px]">
          <div className="flex gap-2 items-center">
            <img src={img} alt="" className="w-8 h-8 md:w-10 md:h-10" />
            <p className="font-bold text-base md:text-lg lg:text-xl">English</p>
          </div>
          <IconArrowRight
            size={28}
            stroke={1.5}
            className="md:size-8 lg:size-9"
          />
        </div>

        {/* Spain */}
        <div className="flex justify-around items-center bg-red-50 h-[70px] mx-3 rounded-xl md:h-[80px] lg:h-[90px]">
          <div className="flex gap-2 items-center">
            <img src={img1} alt="" className="w-8 h-8 md:w-10 md:h-10" />
            <p className="font-bold text-base md:text-lg lg:text-xl">Spain</p>
          </div>
          <IconArrowRight
            size={28}
            stroke={1.5}
            className="md:size-8 lg:size-9"
          />
        </div>

        {/* French */}
        <div className="flex justify-around items-center bg-red-50 h-[70px] mx-3 rounded-xl md:h-[80px] lg:h-[90px]">
          <div className="flex gap-2 items-center">
            <img src={img2} alt="" className="w-8 h-8 md:w-10 md:h-10" />
            <p className="font-bold text-base md:text-lg lg:text-xl">French</p>
          </div>
          <IconArrowRight
            size={28}
            stroke={1.5}
            className="md:size-8 lg:size-9"
          />
        </div>

        {/* Belgian */}
        <div className="flex justify-around items-center bg-red-50 h-[70px] mx-3 rounded-xl md:h-[80px] lg:h-[90px]">
          <div className="flex gap-2 items-center">
            <img src={img3} alt="" className="w-8 h-8 md:w-10 md:h-10" />
            <p className="font-bold text-base md:text-lg lg:text-xl">Belgian</p>
          </div>
          <IconArrowRight
            size={28}
            stroke={1.5}
            className="md:size-8 lg:size-9"
          />
        </div>

        {/* Turkish */}
        <div className="flex justify-around items-center bg-red-50 h-[70px] mx-3 rounded-xl md:h-[80px] lg:h-[90px]">
          <div className="flex gap-2 items-center">
            <img src={img4} alt="" className="w-8 h-8 md:w-10 md:h-10" />
            <p className="font-bold text-base md:text-lg lg:text-xl">Turkish</p>
          </div>
          <IconArrowRight
            size={28}
            stroke={1.5}
            className="md:size-8 lg:size-9"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseLanguage;
