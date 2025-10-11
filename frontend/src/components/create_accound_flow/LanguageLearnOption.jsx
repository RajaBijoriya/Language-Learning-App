import { IconArrowLeft, IconArrowRight, IconMoon } from "@tabler/icons-react";

import LeftArrowAndTheme from "../LeftArrowAndTheme";
import { Button } from "@mantine/core";

const LanguageLearnOption = () => {
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
        {/* English */}
        <div className="flex justify-around items-center bg-blue-50 h-[70px] border border-blue-500 mx-3 rounded-xl md:h-[80px] lg:h-[90px]">
          <div className="flex gap-2 items-center">
            <p className="font-bold text-base md:text-lg lg:text-xl">A1-Beginning </p>
          </div>
          <IconArrowRight
            size={28}
            stroke={1.5}
            className="md:size-8 lg:size-9"
          />
        </div>
        <div className="flex justify-around items-center bg-blue-50 h-[70px] border border-blue-500 mx-3 rounded-xl md:h-[80px] lg:h-[90px]">
          <div className="flex gap-2 items-center">
            <p className="font-bold text-base md:text-lg lg:text-xl">A2-Elementary </p>
          </div>
          <IconArrowRight
            size={28}
            stroke={1.5}
            className="md:size-8 lg:size-9"
          />
        </div>
        <div className="flex justify-around items-center bg-blue-50 h-[70px] border border-blue-500 mx-3 rounded-xl md:h-[80px] lg:h-[90px]">
          <div className="flex gap-2 items-center">
            <p className="font-bold text-base md:text-lg lg:text-xl">B1-Intermediate </p>
          </div>
          <IconArrowRight
            size={28}
            stroke={1.5}
            className="md:size-8 lg:size-9"
          />
        </div>
        <div className="flex justify-around items-center bg-blue-50 h-[70px] border border-blue-500 mx-3 rounded-xl md:h-[80px] lg:h-[90px]">
          <div className="flex gap-2 items-center">
            <p className="font-bold text-base md:text-lg lg:text-xl">B2-Upper intermediate </p>
          </div>
          <IconArrowRight
            size={28}
            stroke={1.5}
            className="md:size-8 lg:size-9"
          />
        </div>
        <div className="flex justify-around items-center bg-blue-50 h-[70px] border border-blue-500 mx-3 rounded-xl md:h-[80px] lg:h-[90px]">
          <div className="flex gap-2 items-center">
            <p className="font-bold text-base md:text-lg lg:text-xl">C1-Advanced </p>
          </div>
          <IconArrowRight
            size={28}
            stroke={1.5}
            className="md:size-8 lg:size-9"
          />
        </div>
        
        
            <div className="w-full sm:w-[80%] md:w-[60%] mt-50">
                    <Button
                      color="#007AFF"
                      radius="md"
                      size="lg"
                      fullWidth
                      className="font-medium text-base sm:text-lg hover:opacity-90 transition">
                      Continue
                    </Button>
                  </div>
        
       
      </div>
    </div>
  );
};

export default LanguageLearnOption;
