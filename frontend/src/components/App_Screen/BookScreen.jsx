import React from 'react'
import LevelBox from './combobox/LevelBox'
import { IconBell, IconBookmark, IconFileStarFilled, IconFlame, IconStar } from '@tabler/icons-react';
import { Progress } from '@mantine/core';
import image1 from "../../assets/Image.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import image5 from "../../assets/image5.png"
import image6 from "../../assets/image6.png"
import premium_card from '../../assets/Premium Card.png'
const BookScreen = () => {
  return (
    <div className="flex-col w-full mr-3 ml-3">
      <div className="">
        <div className="flex-col mt-12">
          <div className="flex gap-15">
            <LevelBox />
            <div className="flex">
              <ul className="flex gap-3">
                <li className="flex gap-2">
                  <IconFlame size={30} />
                  <span className="text-2xl">0</span>
                </li>
                <li className="flex gap-2">
                  <IconStar size={30} />
                  <span className="text-2xl">0/20</span>
                </li>
                <li>
                  <IconBell size={30} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-col mt-5">
          <div className="flex gap-56">
            <LevelBox size={30} />
            <div className="flex ">
              <IconFileStarFilled size={30} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mr-8">
        <Progress value={10} color="blue" size="xl" />
      </div>
      <div className="mt-10 flex justify-center mr-7">
        <img className="w-92 md:w-120 xl:w-150" src={premium_card} alt="" />
      </div>

      <div className="flex-col justify-center items-center w-full mt-8 ">
        <div className="flex justify-around items-center">
          <h1 className="text-2xl font-semibold text-gray-700">Chapter - 1</h1>
          <h1 className="w-8 h-1 bg-gray-700 rounded-2xl"></h1>
          <h1 className="text-2xl font-semibold text-blue-400">Traveling</h1>
        </div>

        <div className="flex justify-between mr-8 ml-8 items-center mt-2">
          <h1 className="text-lg text-gray-600">Lessons completed</h1>
          <h1 className="text-lg text-blue-500">0/5</h1>
        </div>

        <div className="flex justify-center mt-8 px-4">
          <div className="flex  sm:flex-row justify-between items-center bg-blue-50 rounded-2xl w-full max-w-3xl shadow-sm p-4 sm:p-6 gap-4 sm:gap-6">
            {/* Left Section: Image + Text */}
            <div className="flex justify-center items-center gap-3 sm:gap-4">
              <div className="border-blue-500 border-4 rounded-full flex justify-center items-center p-1">
                <img
                  src={image1}
                  alt=""
                  className="rounded-full w-14 sm:w-16 md:w-20 object-cover"
                />
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold text-center sm:text-left leading-snug">
                We're going on <br /> vacation
              </h1>
            </div>

            {/* Right Section: Bookmark Icon */}
            <div className="flex justify-center sm:justify-end">
              <div className="border-2 border-blue-500 rounded-xl p-1 sm:p-2 hover:bg-blue-100 transition">
                <IconBookmark size={28} className=" cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 px-4">
          <div className="flex  sm:flex-row justify-between items-center bg-blue-50 rounded-2xl w-full max-w-3xl shadow-sm p-4 sm:p-6 gap-4 sm:gap-6">
            {/* Left Section: Image + Text */}
            <div className="flex justify-center items-center gap-3 sm:gap-4">
              <div className="border-blue-500 border-4 rounded-full flex justify-center items-center p-1">
                <img
                  src={image2}
                  alt=""
                  className="rounded-full w-14 sm:w-16 md:w-20 object-cover"
                />
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold text-center sm:text-left leading-snug">
                Description of <br />
                travel experiences
              </h1>
            </div>

            {/* Right Section: Bookmark Icon */}
            <div className="flex justify-center sm:justify-end">
              <div className="border-2 border-blue-500 rounded-xl p-1 sm:p-2 hover:bg-blue-100 transition">
                <IconBookmark size={28} className=" cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 px-4">
          <div className="flex  sm:flex-row justify-between items-center bg-blue-50 rounded-2xl w-full max-w-3xl shadow-sm p-4 sm:p-6 gap-4 sm:gap-6">
            {/* Left Section: Image + Text */}
            <div className="flex justify-center items-center gap-3 sm:gap-4">
              <div className="border-blue-500 border-4 rounded-full flex justify-center items-center p-1">
                <img
                  src={image3}
                  alt=""
                  className="rounded-full w-14 sm:w-16 md:w-20 object-cover"
                />
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold text-center sm:text-left leading-snug">
                Discussing types <br /> of vacation
              </h1>
            </div>

            {/* Right Section: Bookmark Icon */}
            <div className="flex justify-center sm:justify-end">
              <div className="border-2 border-blue-500 rounded-xl p-1 sm:p-2 hover:bg-blue-100 transition">
                <IconBookmark size={28} className=" cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 px-4">
          <div className="flex  sm:flex-row justify-between items-center bg-blue-50 rounded-2xl w-full max-w-3xl shadow-sm p-4 sm:p-6 gap-4 sm:gap-6">
            {/* Left Section: Image + Text */}
            <div className="flex justify-center items-center gap-3 sm:gap-4">
              <div className="border-blue-500 border-4 rounded-full flex justify-center items-center p-1">
                <img
                  src={image4}
                  alt=""
                  className="rounded-full w-14 sm:w-16 md:w-20 object-cover"
                />
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold text-center sm:text-left leading-snug">
                Trip planning
              </h1>
            </div>

            {/* Right Section: Bookmark Icon */}
            <div className="flex justify-center sm:justify-end">
              <div className="border-2 border-blue-500 rounded-xl p-1 sm:p-2 hover:bg-blue-100 transition">
                <IconBookmark size={28} className=" cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 px-4">
          <div className="flex  sm:flex-row justify-between items-center bg-blue-50 rounded-2xl w-full max-w-3xl shadow-sm p-4 sm:p-6 gap-4 sm:gap-6">
            {/* Left Section: Image + Text */}
            <div className="flex justify-center items-center gap-3 sm:gap-4">
              <div className="border-blue-500 border-4 rounded-full flex justify-center items-center p-1">
                <img
                  src={image5}
                  alt=""
                  className="rounded-full w-14 sm:w-16 md:w-20 object-cover"
                />
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold text-center sm:text-left leading-snug">
                Developing <br />speaking and <br />writing skills
              </h1>
            </div>

            {/* Right Section: Bookmark Icon */}
            <div className="flex justify-center sm:justify-end">
              <div className="border-2 border-blue-500 rounded-xl p-1 sm:p-2 hover:bg-blue-100 transition">
                <IconBookmark size={28} className=" cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 px-4">
          <div className="flex  sm:flex-row justify-between items-center bg-blue-50 rounded-2xl w-full max-w-3xl shadow-sm p-4 sm:p-6 gap-4 sm:gap-6">
            {/* Left Section: Image + Text */}
            <div className="flex justify-center items-center gap-3 sm:gap-4">
              <div className="border-blue-500 border-4 rounded-full flex justify-center items-center p-1">
                <img
                  src={image6}
                  alt=""
                  className="rounded-full w-14 sm:w-16 md:w-20 object-cover"
                />
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold text-center sm:text-left leading-snug">
               Test Work
              </h1>
            </div>

            {/* Right Section: Bookmark Icon */}
            <div className="flex justify-center sm:justify-end">
              <div className="border-2 border-blue-500 rounded-xl p-1 sm:p-2 hover:bg-blue-100 transition">
                <IconBookmark size={28} className=" cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookScreen