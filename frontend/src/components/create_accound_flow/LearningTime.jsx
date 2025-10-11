import React, { useRef, useState, useEffect } from "react";
import { Button } from "@mantine/core";
import LeftArrowAndTheme from "../LeftArrowAndTheme";

const LearningTime = () => {
  const timeOptions = [5, 10, 15, 20, 25, 30, 45, 60];
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  // Detect center element while scrolling
  useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
      const children = Array.from(container.children);
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const childCenter =
          child.offsetLeft + child.offsetWidth / 2 - container.scrollLeft;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-white text-gray-700 px-3 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-6">
      {/* Top Navigation */}
      <LeftArrowAndTheme />

      {/* Heading */}
      <div className="mt-6 text-center px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          How long do you want to exercise per day?
        </h1>
        <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600">
          For your level, it’s recommended to practice 10 minutes a day.
        </p>
      </div>

      {/* Scrollable Time Options */}
      <div
        ref={scrollRef}
        className="mt-10 flex gap-4 w-full overflow-x-auto scroll-smooth scrollbar-hide px-2 sm:px-4 py-4 snap-x snap-mandatory justify-start"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}>
        <style>
          {`
            ::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {timeOptions.map((time, index) => (
          <div
            key={index}
            className={`flex-shrink-0 snap-center rounded-2xl shadow-sm transition-all duration-300 cursor-pointer flex flex-col justify-center items-center ${
              activeIndex === index
                ? "bg-blue-50 scale-110 text-blue-700"
                : "bg-red-50 scale-90 text-gray-500"
            }`}
            style={{
              minWidth: activeIndex === index ? "140px" : "100px",
              height: activeIndex === index ? "110px" : "80px",
            }}>
            <p
              className={`font-bold transition-all ${
                activeIndex === index
                  ? "text-3xl sm:text-4xl lg:text-5xl"
                  : "text-xl sm:text-2xl lg:text-3xl"
              }`}>
              {time}
            </p>
            <p
              className={`${
                activeIndex === index ? "text-gray-700" : "text-gray-400"
              } text-xs sm:text-sm md:text-base`}>
              min/day
            </p>
          </div>
        ))}
      </div>

      {/* Continue Button - Fixed at Bottom */}
      <div className="fixed bottom-4 sm:bottom-6 left-0 right-0 flex justify-center px-4 sm:px-8 md:px-12">
        <Button
          color="#007AFF"
          radius="md"
          size="lg"
          fullWidth
          className="font-medium text-base sm:text-lg md:text-xl hover:opacity-90 transition max-w-sm sm:max-w-md md:max-w-lg">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default LearningTime;
