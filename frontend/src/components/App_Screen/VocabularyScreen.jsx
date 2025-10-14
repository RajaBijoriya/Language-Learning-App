import { IconAlertTriangle, IconBookmark, IconChartBarPopular, IconChevronCompactDown, IconChevronDown, IconCircleDashedCheck, IconCircleDashedX, IconSearch, IconStairsUp } from '@tabler/icons-react';
import React from 'react'
import pre1 from "../../assets/Preview1.png";
import pre2 from "../../assets/Preview2.png";
import pre3 from "../../assets/Preview3.png";
import { Button } from '@mantine/core';
import premium_card from '../../assets/Premium Card.png'
const VocabularyScreen = () => {
  return (
    <div className="flex flex-col w-full py-1 px-3">
      <div className="w-full mt-8  ">
        {/* Top Navigation */}
        <div className="w-full flex items-center justify-between px-1 py-2">
          {/* Left Arrow */}
          <h1 className="text-2xl lg:text-3xl text-gray-500">Vocabulary</h1>

          {/* Theme Icon */}
          <button
            aria-label="Toggle dark mode"
            className="p-2 hover:bg-gray-100 rounded-full transition">
            <IconSearch size={28} stroke={1.5} />
          </button>
        </div>
      </div>

      <div className="flex w-full lg:mt-15 justify-around items-center gap-5">
        <div className="flex lg:w-[300px] lg:h-[180px] lg:text-2xl w-[120px] h-[120px] bg-orange-700 rounded-2xl">
          <div className="flex flex-col m-auto text-white justify-center items-center">
            <div className="">
              <IconCircleDashedX size={34} />
            </div>
            <h1>Mistakes</h1>
            <h1>6</h1>
          </div>
        </div>
        <div className="flex lg:w-[300px] lg:h-[180px] lg:text-2xl w-[120px] h-[120px] bg-blue-600 rounded-2xl">
          <div className="flex flex-col m-auto text-white justify-center items-center">
            <div className="">
              <IconAlertTriangle size={34} />
            </div>
            <h1>Average</h1>
            <h1>8</h1>
          </div>
        </div>
        <div className="flex lg:w-[300px] lg:h-[180px] lg:text-2xl w-[120px] h-[120px] bg-green-600 rounded-2xl">
          <div className="flex flex-col m-auto text-white justify-center items-center">
            <div className="">
              <IconCircleDashedCheck size={34} />
            </div>
            <h1>Success</h1>
            <h1>15</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:w-full mt-8 ">
        <div className="flex   sm:flex-row justify-between items-center bg-blue-50 rounded-2xl w-full max-w-3xl shadow-sm p-4 sm:p-6 gap-4 sm:gap-6">
          {/* Left Section: Image + Text */}

          <div className="flex gap-3 justify-center sm:justify-end">
            <div className="border-2 border-blue-500 rounded-xl p-1 sm:p-2 hover:bg-blue-100 transition">
              <IconBookmark size={28} className=" cursor-pointer" />
            </div>
            <div className="flex justify-center items-center gap-3 sm:gap-4">
              <h1 className="text-xl sm:text-xl md:text-2xl text-gray-600 font-semibold text-center sm:text-left leading-snug">
                Your saved vocabulary
              </h1>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-blue-500">0</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full mt-8">
        <h1 className="text-2xl flex lg:mt-15 lg:text-3xl lg:justify-center lg:items-center text-gray-700 font-medium">
          Popular Vocabulary
        </h1>
        <div className="flex flex-col lg:justify-center  lg:items-center">
          <div className="flex  flex-col gap-4 justify-center mt-8 px-4">
            <div className="flex lg:w-[1000px] sm:flex-row justify-between items-center bg-blue-50 rounded-2xl w-full max-w-3xl shadow-sm p-4 sm:p-6 gap-4 sm:gap-6">
              {/* Left Section: Image + Text */}
              <div className="flex justify-center items-center gap-3 sm:gap-4">
                <div className="border-blue-500 border-4 rounded-full flex justify-center items-center p-1">
                  <img
                    src={pre1}
                    alt=""
                    className="rounded-full w-14 sm:w-16 md:w-20 object-cover"
                  />
                </div>
                <h1 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold text-center sm:text-left leading-snug">
                  Everything you need to <br />
                  know while on vacation
                </h1>
              </div>

              <div className="flex flex-col justify-center sm:justify-end">
                <IconChartBarPopular size={28} className=" cursor-pointer" />
                <IconChevronDown size={28} className=" cursor-pointer" />
              </div>
            </div>
            <div className="flex  sm:flex-row justify-between items-center bg-blue-50 rounded-2xl w-full max-w-3xl shadow-sm p-4 sm:p-6 gap-4 sm:gap-6">
              {/* Left Section: Image + Text */}
              <div className="flex justify-center items-center gap-3 sm:gap-4">
                <div className="border-blue-500 border-4 rounded-full flex justify-center items-center p-1">
                  <img
                    src={pre2}
                    alt=""
                    className="rounded-full w-14 sm:w-16 md:w-20 object-cover"
                  />
                </div>
                <h1 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold text-center sm:text-left leading-snug">
                  Travel and speak 150 <br />
                  words for you
                </h1>
              </div>

              <div className="flex flex-col justify-center sm:justify-end">
                <IconChartBarPopular size={28} className=" cursor-pointer" />
                <IconChevronDown size={28} className=" cursor-pointer" />
              </div>
            </div>
            <div className="flex  sm:flex-row justify-between items-center bg-blue-50 rounded-2xl w-full max-w-3xl shadow-sm p-4 sm:p-6 gap-4 sm:gap-6">
              {/* Left Section: Image + Text */}
              <div className="flex justify-center items-center gap-3 sm:gap-4">
                <div className="border-blue-500 border-4 rounded-full flex justify-center items-center p-1">
                  <img
                    src={pre3}
                    alt=""
                    className="rounded-full w-14 sm:w-16 md:w-20 object-cover"
                  />
                </div>
                <h1 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold text-center sm:text-left leading-snug">
                  300 words you need <br /> to know to move
                </h1>
              </div>

              <div className="flex flex-col justify-center sm:justify-end">
                <IconChartBarPopular size={28} className=" cursor-pointer" />
                <IconChevronDown size={28} className=" cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full flex flex-col gap-6 mt-8 mb-4 
                sm:w-[80%] md:w-[60%] lg:w-[40%] 
                mx-auto justify-center items-center">
        <Button
          onClick={() => navigate("/welcome")}
          color="#007AFF"
          radius="md"
          size="lg"
          variant='light'
          fullWidth
          className="py-3 text-base sm:text-lg md:text-xl font-medium hover:opacity-90 transition">
          Repeat
        </Button>
      </div>

      <div className="mt-10 flex justify-center mr-7">
        <img className="w-92 md:w-200 xl:w-250" src={premium_card} alt="" />
      </div>

      <div
        className="w-full flex flex-col gap-6 mt-8 mb-4 
                sm:w-[80%] md:w-[60%] lg:w-[40%] 
                mx-auto justify-center items-center">
        <Button
          onClick={() => navigate("/welcome")}
          color="#007AFF"
          radius="md"
          size="lg"
          fullWidth
          className="py-3 text-base sm:text-lg md:text-xl font-medium hover:opacity-90 transition">
          Repeat
        </Button>
      </div>
    </div>
  );
}

export default VocabularyScreen;