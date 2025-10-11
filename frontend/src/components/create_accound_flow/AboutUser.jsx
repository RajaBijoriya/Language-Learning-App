import { IconArrowRight, IconBook, IconFlag } from "@tabler/icons-react";
import LeftArrowAndTheme from "../LeftArrowAndTheme";

const AboutUser = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white px-4 py-6 sm:px-8 md:px-12 lg:px-24">
      {/* Top Navigation */}
      <LeftArrowAndTheme />

      {/* Header Text */}
      <div className="flex flex-col justify-start mt-4 sm:mt-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Welcome User!
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 text-gray-800">
          Tell us a little about yourself
        </h2>
      </div>

      {/* Options Section */}
      <div className="flex flex-col gap-4 mt-8 sm:mt-10 w-full max-w-md sm:max-w-lg md:max-w-xl">
        {/* Option 1 */}
        <div className="flex justify-between items-center bg-red-50 h-[65px] sm:h-[75px] md:h-[85px] rounded-xl px-5 sm:px-6 cursor-pointer hover:bg-red-100 transition">
          <div className="flex items-center gap-3 sm:gap-4">
            <IconFlag size={26} className="sm:size-7 md:size-8 text-red-600" />
            <p className="font-semibold text-sm sm:text-base md:text-lg">
              I don't know English
            </p>
          </div>
          <IconArrowRight size={22} className="sm:size-6 text-gray-600" />
        </div>

        {/* Option 2 */}
        <div className="flex justify-between items-center bg-red-50 h-[65px] sm:h-[75px] md:h-[85px] rounded-xl px-5 sm:px-6 cursor-pointer hover:bg-red-100 transition">
          <div className="flex items-center gap-3 sm:gap-4">
            <IconBook size={26} className="sm:size-7 md:size-8 text-red-600" />
            <p className="font-semibold text-sm sm:text-base md:text-lg">
              I have already studied English
            </p>
          </div>
          <IconArrowRight size={22} className="sm:size-6 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default AboutUser;
