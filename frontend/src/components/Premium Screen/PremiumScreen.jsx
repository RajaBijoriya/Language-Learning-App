import React from "react";
import googleplay from "../../assets/Rate Card.png";

const PremiumScreen = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center mt-10 px-4 sm:px-8">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          More than 100,000 people have purchased{" "}
          <span className="text-blue-500">Premium</span>
        </h1>
        <p className="text-gray-500 text-base sm:text-lg mt-3">
          14 days money back guarantee
        </p>
      </div>

      {/* Pricing Cards Section */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 w-full">
        {/* 12 Month Plan */}
        <div className="bg-blue-100 rounded-xl p-4 flex flex-col justify-between items-center w-[120px] sm:w-[150px] md:w-[180px] h-[140px] sm:h-[160px] shadow-sm">
          <h1 className="font-bold text-base sm:text-lg">12 months</h1>
          <h1 className="text-blue-500 text-sm sm:text-base">
            <span className="line-through">144$</span>{" "}
            <span className="font-bold">72$</span>
          </h1>
          <p className="text-sm sm:text-base font-semibold">6$ per month</p>
          <div className="bg-blue-500 mt-2 w-[90px] sm:w-[110px] h-[30px] sm:h-[32px] text-white rounded-xl flex justify-center items-center text-sm sm:text-base">
            <h1>Save 50%</h1>
          </div>
        </div>

        {/* 6 Month Plan */}
        <div className="bg-red-100 rounded-xl p-4 flex flex-col justify-between items-center w-[120px] sm:w-[150px] md:w-[180px] h-[140px] sm:h-[160px] shadow-sm">
          <h1 className="font-bold text-base sm:text-lg">6 months</h1>
          <h1 className="text-blue-500 text-sm sm:text-base">
            <span className="line-through">72$</span>{" "}
            <span className="font-bold">64$</span>
          </h1>
          <p className="text-sm sm:text-base font-semibold">10$ per month</p>
          <div className="bg-blue-500 mt-2 w-[90px] sm:w-[110px] h-[30px] sm:h-[32px] text-white rounded-xl flex justify-center items-center text-sm sm:text-base">
            <h1>Save 20%</h1>
          </div>
        </div>

        {/* 1 Month Plan */}
        <div className="bg-red-100 rounded-xl p-4 flex flex-col justify-between items-center w-[120px] sm:w-[150px] md:w-[180px] h-[140px] sm:h-[160px] shadow-sm">
          <h1 className="font-bold text-base sm:text-lg">1 month</h1>
          <h1 className="text-blue-500 text-sm sm:text-base font-bold">12$</h1>
          <p className="text-sm sm:text-base font-semibold">12$ per month</p>
          <div className="bg-blue-500 mt-2 w-[90px] sm:w-[110px] h-[30px] sm:h-[32px] text-white rounded-xl flex justify-center items-center text-sm sm:text-base">
            <h1>Try Now</h1>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-center mt-10">
        <img
          src={googleplay}
          alt="Google Play"
          className="w-48 sm:w-56 md:w-64"
        />
      </div>
    </div>
  );
};

export default PremiumScreen;
